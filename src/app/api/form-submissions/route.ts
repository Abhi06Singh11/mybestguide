import { NextResponse } from 'next/server';
import { z } from 'zod';
import { appendSheetRow } from '@/lib/google-sheets';

const stringField = z.string().trim().max(500);
const longTextField = z.string().trim().max(5000);
const fileField = z
  .union([
    z.literal(''),
    z.object({
      name: z.string().max(255),
      type: z.string().max(100).optional(),
      size: z.number().nonnegative().optional(),
    }),
  ])
  .optional();

const formConfigs = {
  Contact: {
    tabName: 'Contact',
    schema: z.object({
      firstName: stringField.min(2),
      lastName: stringField.min(2),
      email: z.string().trim().email().max(320),
      primaryContact: stringField.min(10),
      isWhatsAppAvailable: z.boolean(),
      whatsappContact: stringField.optional(),
      service: stringField.min(1),
      budget: stringField.min(1),
      industry: stringField.min(1),
      message: longTextField.optional(),
    }),
    headers: [
      'timestamp',
      'firstName',
      'lastName',
      'email',
      'primaryContact',
      'isWhatsAppAvailable',
      'whatsappContact',
      'service',
      'budget',
      'industry',
      'message',
    ],
  },
  'Free Website': {
    tabName: 'Free Website',
    schema: z.object({
      fullName: stringField.min(2),
      email: z.string().trim().email().max(320),
      phone: stringField.min(10),
      businessName: stringField.min(2),
      websiteType: z.enum(['Basic Website', 'E-Commerce']),
      goals: longTextField.optional(),
      addons: z.array(stringField).optional(),
      industry: stringField.min(1),
      customIndustry: stringField.optional(),
      terms: z.boolean(),
    }),
    headers: [
      'timestamp',
      'fullName',
      'email',
      'phone',
      'businessName',
      'websiteType',
      'goals',
      'addons',
      'industry',
      'customIndustry',
      'terms',
    ],
  },
  'BDE Partner': {
    tabName: 'BDE Partner',
    schema: z.object({
      fullName: stringField.min(2),
      email: z.string().trim().email().max(320),
      phone: stringField.min(10),
      location: stringField.min(1),
      skills: longTextField.min(1),
      serviceToPromote: stringField.min(1),
      whyJoin: longTextField.min(1),
      expectedCommission: stringField.min(1),
      portfolioUrl: stringField.min(1),
      resume: fileField,
      termsAccepted: z.boolean(),
    }),
    headers: [
      'timestamp',
      'fullName',
      'email',
      'phone',
      'location',
      'skills',
      'serviceToPromote',
      'whyJoin',
      'expectedCommission',
      'portfolioUrl',
      'resume',
      'termsAccepted',
    ],
  },
  Freelancer: {
    tabName: 'Freelancer',
    schema: z.object({
      fullName: stringField.min(2),
      email: z.string().trim().email().max(320),
      phone: stringField.optional(),
      location: stringField.optional(),
      profile: stringField.min(1),
      otherProfile: stringField.optional(),
      skills: stringField.min(1),
      githubUrl: stringField.min(1),
      portfolioUrl: stringField.optional(),
      resume: fileField,
      yearsOfExperience: stringField.optional(),
      rate: stringField.optional(),
      availability: stringField.optional(),
      coverLetter: longTextField.optional(),
      preferredCommunication: stringField.optional(),
      certifications: stringField.optional(),
      languages: stringField.optional(),
      willingToSignNda: stringField.optional(),
      workEligibility: stringField.optional(),
      termsAccepted: z.boolean(),
    }),
    headers: [
      'timestamp',
      'fullName',
      'email',
      'phone',
      'location',
      'profile',
      'otherProfile',
      'skills',
      'githubUrl',
      'portfolioUrl',
      'resume',
      'yearsOfExperience',
      'rate',
      'availability',
      'coverLetter',
      'preferredCommunication',
      'certifications',
      'languages',
      'willingToSignNda',
      'workEligibility',
      'termsAccepted',
    ],
  },
  'Technical Support Partner': {
    tabName: 'Technical Support Partner',
    schema: z.object({
      fullName: stringField.min(2),
      email: z.string().trim().email().max(320),
      phone: stringField.optional(),
      location: stringField.min(1),
      profile: stringField.min(1),
      otherProfile: stringField.optional(),
      skills: longTextField.min(1),
      linkedinUrl: stringField.optional(),
      certifications: stringField.optional(),
      resume: fileField,
      yearsOfExperience: stringField.min(1),
      rate: stringField.optional(),
      availability: stringField.min(1),
      coverLetter: longTextField.optional(),
      languages: stringField.optional(),
      willingToSignNda: stringField.min(1),
      termsAccepted: z.boolean(),
    }),
    headers: [
      'timestamp',
      'fullName',
      'email',
      'phone',
      'location',
      'profile',
      'otherProfile',
      'skills',
      'linkedinUrl',
      'certifications',
      'resume',
      'yearsOfExperience',
      'rate',
      'availability',
      'coverLetter',
      'languages',
      'willingToSignNda',
      'termsAccepted',
    ],
  },
} as const;

const submissionSchema = z.object({
  formName: z.enum([
    'Contact',
    'Free Website',
    'BDE Partner',
    'Freelancer',
    'Technical Support Partner',
  ]),
  values: z.record(z.unknown()),
});

const requestLog = new Map<string, number[]>();
const maxRequestsPerMinute = 10;

export async function POST(request: Request) {
  const rateLimitResponse = rateLimit(request);

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const parsedSubmission = submissionSchema.safeParse(body);

  if (!parsedSubmission.success) {
    return NextResponse.json({ error: 'Invalid form submission.' }, { status: 400 });
  }

  const config = formConfigs[parsedSubmission.data.formName];
  const parsedValues = config.schema.safeParse(parsedSubmission.data.values);

  if (!parsedValues.success) {
    return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 });
  }

  try {
    const rowValues = parsedValues.data as Record<string, unknown>;

    await appendSheetRow(
      config.headers.map((header) =>
        header === 'timestamp' ? new Date().toISOString() : rowValues[header]
      ),
      config.tabName
    );
  } catch (error) {
    console.error('Google Sheets append failed:', getSafeErrorDetails(error));

    return NextResponse.json(
      { error: 'Unable to store form submission.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function rateLimit(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown';
  const now = Date.now();
  const windowStart = now - 60_000;
  const recentRequests = (requestLog.get(ip) || []).filter((time) => time > windowStart);

  if (recentRequests.length >= maxRequestsPerMinute) {
    return NextResponse.json({ error: 'Too many submissions. Please try again shortly.' }, { status: 429 });
  }

  requestLog.set(ip, [...recentRequests, now]);
  return null;
}

function getSafeErrorDetails(error: unknown) {
  if (!(error instanceof Error)) {
    return { message: 'Unknown error' };
  }

  const googleError = error as Error & {
    code?: number | string;
    status?: number | string;
  };

  return {
    code: googleError.code || googleError.status || 'unknown',
    message: googleError.message,
  };
}
