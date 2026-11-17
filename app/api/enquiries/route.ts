import { NextRequest, NextResponse } from 'next/server';
import { enquiryFormSchema } from '@/lib/validations';
import type { EnquiryRecord } from '@/types/property';

const enquiryLog: EnquiryRecord[] = [];

export async function GET() {
  return NextResponse.json({
    count: enquiryLog.length,
    enquiries: enquiryLog.slice(-20),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = enquiryFormSchema.safeParse(body);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      return NextResponse.json(
        {
          success: false,
          error: firstIssue?.message || 'Invalid enquiry submission.',
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const referenceCode = `AE-${new Date().getFullYear()}-${String(
      1040 + enquiryLog.length + 1
    )}`;

    const record: EnquiryRecord = {
      ...parsed.data,
      id: `enq-${Date.now()}`,
      referenceCode,
      createdAt: new Date().toISOString(),
    };

    enquiryLog.push(record);

    return NextResponse.json(
      {
        success: true,
        enquiry: record,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: 'Malformed request body.' },
      { status: 400 }
    );
  }
}
