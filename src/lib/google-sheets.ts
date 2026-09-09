import 'server-only';

import { google } from 'googleapis';

const sheetsScopes = ['https://www.googleapis.com/auth/spreadsheets'];

function requiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getSheetsConfig() {
  const clientEmail = requiredEnv('GOOGLE_SHEETS_CLIENT_EMAIL');
  const privateKey = requiredEnv('GOOGLE_SHEETS_PRIVATE_KEY').replace(/\\n/g, '\n');
  const spreadsheetId = requiredEnv('GOOGLE_SHEETS_SPREADSHEET_ID');
  const defaultTabName = requiredEnv('GOOGLE_SHEETS_TAB_NAME');

  return {
    clientEmail,
    privateKey,
    spreadsheetId,
    defaultTabName,
  };
}

function getSheetsClient() {
  const { clientEmail, privateKey } = getSheetsConfig();

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: sheetsScopes,
  });

  return google.sheets({ version: 'v4', auth });
}

export async function readSheetRows(range?: string) {
  const { spreadsheetId, defaultTabName } = getSheetsConfig();
  const sheets = getSheetsClient();
  const sheetRange = range || `${quoteSheetName(defaultTabName)}!A:Z`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: sheetRange,
  });

  return response.data.values || [];
}

export async function appendSheetRow(values: unknown[], tabName?: string) {
  const { spreadsheetId, defaultTabName } = getSheetsConfig();
  const sheets = getSheetsClient();
  const sheetName = tabName || defaultTabName;

  await ensureSheetTab(sheets, spreadsheetId, sheetName);

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${quoteSheetName(sheetName)}!A1`,
    valueInputOption: 'RAW',
    requestBody: {
      values: [values.map(formatCellValue)],
    },
  });
}

export async function appendSheetRows(rows: unknown[][], tabName?: string) {
  const { spreadsheetId, defaultTabName } = getSheetsConfig();
  const sheets = getSheetsClient();
  const sheetName = tabName || defaultTabName;

  await ensureSheetTab(sheets, spreadsheetId, sheetName);

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${quoteSheetName(sheetName)}!A1`,
    valueInputOption: 'RAW',
    requestBody: {
      values: rows.map((row) => row.map(formatCellValue)),
    },
  });
}

async function ensureSheetTab(
  sheets: ReturnType<typeof getSheetsClient>,
  spreadsheetId: string,
  tabName: string
) {
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: 'sheets.properties.title',
  });

  const tabExists = spreadsheet.data.sheets?.some(
    (sheet) => sheet.properties?.title === tabName
  );

  if (tabExists) {
    return;
  }

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          addSheet: {
            properties: {
              title: tabName,
            },
          },
        },
      ],
    },
  });
}

function quoteSheetName(tabName: string) {
  return `'${tabName.replace(/'/g, "''")}'`;
}

function formatCellValue(value: unknown): string {
  if (value === null || value === undefined) {
    return '';
  }

  if (Array.isArray(value)) {
    return value.map(formatCellValue).join(', ');
  }

  if (typeof value === 'object') {
    return JSON.stringify(value);
  }

  return String(value);
}
