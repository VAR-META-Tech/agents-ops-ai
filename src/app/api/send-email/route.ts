import ContactEmail from "@/components/emails/contact-email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const {
      to,
      from,
      subject,
      pathPage,
      fullName,
      email,
      phone,
      companyName,
      jobTitle,
      country,
      message,
    } = await request.json();

    const countryValue =
      typeof country === "object" && country !== null
        ? country.label || country.value || ""
        : country || "";

    const emailComponent = ContactEmail({
      pathPage: pathPage || "",
      fullName: fullName || "",
      email: email || "",
      phone: phone || "",
      companyName: companyName || "",
      jobTitle: jobTitle || "",
      country: countryValue || "",
      message: message || "",
    });

    const { data, error } = await resend.emails.send({
      from: from || "AgentOps <contact@agentsops.ai>",
      to: Array.isArray(to) ? to : [to],
      subject: subject || "Contact form submitted",
      react: emailComponent,
    });

    if (error) {
      return NextResponse.json(
        {
          error:
            error instanceof Error
              ? error.message
              : "An unknown error occurred",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
