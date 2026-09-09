# Google Sheets Form Setup

The website stores form submissions through the Google Sheets API using a
service account. Credentials are read only on the server from environment
variables and are never exposed to the browser.

## Google Cloud Setup

1. Open Google Cloud Console and create or select a project.
2. Enable `Google Sheets API` for the project.
3. Create a service account from `IAM & Admin > Service Accounts`.
4. Create a JSON key for that service account.
5. Copy the service account email. It looks like:
   `name@project-id.iam.gserviceaccount.com`.

## Spreadsheet Setup

1. Create a Google Sheet.
2. Share the sheet with the service-account email as `Editor`.
3. Create these tabs:
   - `Contact`
   - `Free Website`
   - `BDE Partner`
   - `Freelancer`
   - `Technical Support Partner`

The app appends rows to the matching tab. Add these headers in row 1.

## Required Headers

`Contact`:

```text
timestamp, firstName, lastName, email, primaryContact, isWhatsAppAvailable, whatsappContact, service, budget, industry, message
```

`Free Website`:

```text
timestamp, fullName, email, phone, businessName, websiteType, goals, addons, industry, customIndustry, terms
```

`BDE Partner`:

```text
timestamp, fullName, email, phone, location, skills, serviceToPromote, whyJoin, expectedCommission, portfolioUrl, resume, termsAccepted
```

`Freelancer`:

```text
timestamp, fullName, email, phone, location, profile, otherProfile, skills, githubUrl, portfolioUrl, resume, yearsOfExperience, rate, availability, coverLetter, preferredCommunication, certifications, languages, willingToSignNda, workEligibility, termsAccepted
```

`Technical Support Partner`:

```text
timestamp, fullName, email, phone, location, profile, otherProfile, skills, linkedinUrl, certifications, resume, yearsOfExperience, rate, availability, coverLetter, languages, willingToSignNda, termsAccepted
```

## Environment Variables

Create `.env.local` for local development:

```env
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=your_google_sheet_id
GOOGLE_SHEETS_TAB_NAME=Contact
```

Use the `private_key` value from the JSON key. Keep escaped `\n` characters in
the value; the app converts them before authenticating with Google.

Set the same variables in your deployment environment. Do not prefix any of
these names with `NEXT_PUBLIC_`.

## Notes

The public API route only appends validated form submissions. Spreadsheet reads
exist as a server-only helper for future admin/server features and are not
exposed through a public endpoint.

Resume/file fields store file metadata in the sheet, not the file contents.
Uploading actual files would require separate storage such as Google Drive.
