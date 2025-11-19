import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  jobTitle?: string;
  country?: string;
  message?: string;
}

export default function ContactEmail({
  fullName = "",
  email = "",
  phone = "",
  companyName = "",
  jobTitle = "",
  country = "",
  message = "",
}: ContactFormEmailProps) {
  const sentAt = new Date().toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  });

  // Ensure we have at least basic info
  if (!fullName && !email) {
    return (
      <Html>
        <Head />
        <Body style={main}>
          <Container style={container}>
            <Section style={contentSection}>
              <Text style={value}>No contact information provided.</Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  }

  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {fullName}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>New Contact Form Submission</Heading>
            <Text style={headerSubtitle}>
              You received a new inquiry from your AgentOps website
            </Text>
          </Section>

          <Hr style={divider} />

          {/* Main Content */}
          <Section style={contentSection}>
            <Text style={timestamp}>Received on {sentAt}</Text>

            {/* Contact Information */}
            <Section style={infoSection}>
              <Heading style={sectionTitle}>Contact Information</Heading>

              {fullName && (
                <Row style={infoRow}>
                  <Column style={labelColumn}>
                    <Text style={label}>Full Name</Text>
                  </Column>
                  <Column style={valueColumn}>
                    <Text style={value}>{fullName}</Text>
                  </Column>
                </Row>
              )}

              {email && (
                <Row style={infoRow}>
                  <Column style={labelColumn}>
                    <Text style={label}>Email</Text>
                  </Column>
                  <Column style={valueColumn}>
                    <Link href={`mailto:${email}`} style={linkValue}>
                      {email}
                    </Link>
                  </Column>
                </Row>
              )}

              {phone && (
                <Row style={infoRow}>
                  <Column style={labelColumn}>
                    <Text style={label}>Phone</Text>
                  </Column>
                  <Column style={valueColumn}>
                    <Link href={`tel:${phone}`} style={linkValue}>
                      {phone}
                    </Link>
                  </Column>
                </Row>
              )}

              {companyName && (
                <Row style={infoRow}>
                  <Column style={labelColumn}>
                    <Text style={label}>Company Name</Text>
                  </Column>
                  <Column style={valueColumn}>
                    <Text style={value}>{companyName}</Text>
                  </Column>
                </Row>
              )}

              {jobTitle && (
                <Row style={infoRow}>
                  <Column style={labelColumn}>
                    <Text style={label}>Job Title</Text>
                  </Column>
                  <Column style={valueColumn}>
                    <Text style={value}>{jobTitle}</Text>
                  </Column>
                </Row>
              )}

              {country && (
                <Row style={infoRow}>
                  <Column style={labelColumn}>
                    <Text style={label}>Country</Text>
                  </Column>
                  <Column style={valueColumn}>
                    <Text style={value}>{country}</Text>
                  </Column>
                </Row>
              )}
            </Section>

            {/* Message Section */}
            {message && (
              <>
                <Hr style={divider} />
                <Section style={messageSection}>
                  <Heading style={sectionTitle}>Message</Heading>
                  <Section style={messageBox}>
                    <Text style={messageText}>{message}</Text>
                  </Section>
                </Section>
              </>
            )}

            {/* Quick Action */}
            {email && (
              <Section style={actionSection}>
                <Link
                  href={`mailto:${email}?subject=Re: Contact Form Submission from ${
                    fullName || "Contact"
                  }`}
                  style={button}
                >
                  Reply to {fullName ? fullName.split(" ")[0] : "Contact"}
                </Link>
              </Section>
            )}
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This email was sent from your AgentOps contact form.
            </Text>
            {fullName && (
              <Text style={footerText}>
                Reply directly to this email to respond to {fullName}.
              </Text>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  backgroundColor: "#f6f9fc",
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  margin: "0 auto",
  maxWidth: "600px",
  padding: "0",
  overflow: "hidden",
};

const header = {
  backgroundColor: "#19368F",
  width: "100%",
  padding: "40px 40px 32px",
  textAlign: "center" as const,
};

const headerTitle = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "600",
  margin: "0 0 8px 0",
  lineHeight: "1.4",
};

const headerSubtitle = {
  color: "#e0e0e0",
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.5",
};

const divider = {
  borderColor: "#e6e6e6",
  margin: "0",
};

const contentSection = {
  padding: "32px 40px",
};

const timestamp = {
  color: "#7C89AE",
  fontSize: "12px",
  margin: "0 0 24px 0",
  textAlign: "center" as const,
  fontStyle: "italic",
};

const infoSection = {
  marginBottom: "24px",
};

const sectionTitle = {
  color: "#1E1E1E",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 20px 0",
  lineHeight: "1.4",
};

const infoRow = {
  marginBottom: "16px",
  width: "100%",
};

const labelColumn = {
  width: "140px",
  verticalAlign: "middle",
  paddingRight: "16px",
  paddingTop: "4px",
  paddingBottom: "4px",
};

const valueColumn = {
  verticalAlign: "middle",
  paddingTop: "4px",
  paddingBottom: "4px",
};

const label = {
  color: "#7C89AE",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0",
  lineHeight: "1.4",
};

const value = {
  color: "#1E1E1E",
  fontSize: "15px",
  fontWeight: "400",
  margin: "0",
  lineHeight: "1.6",
};

const linkValue = {
  color: "#1E1E1E",
  fontSize: "15px",
  fontWeight: "400",
  textDecoration: "underline",
  margin: "0",
  lineHeight: "1.6",
};

const messageSection = {
  marginTop: "24px",
};

const messageBox = {
  backgroundColor: "#f8f9fa",
  border: "1px solid #e6e6e6",
  borderRadius: "6px",
  padding: "20px",
  marginTop: "12px",
};

const messageText = {
  color: "#1E1E1E",
  fontSize: "15px",
  fontWeight: "400",
  margin: "0",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap" as const,
};

const actionSection = {
  textAlign: "center" as const,
  marginTop: "32px",
  marginBottom: "8px",
};

const button = {
  backgroundColor: "#19368F",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 32px",
  borderRadius: "6px",
  display: "inline-block",
  lineHeight: "1.5",
};

const footer = {
  padding: "24px 40px 32px",
  backgroundColor: "#f8f9fa",
  textAlign: "center" as const,
};

const footerText = {
  color: "#7C89AE",
  fontSize: "12px",
  margin: "4px 0",
  lineHeight: "1.5",
};
