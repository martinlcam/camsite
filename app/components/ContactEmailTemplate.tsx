interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmailTemplate({
  name,
  email,
  message,
}: ContactEmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          backgroundColor: "#f9fafb",
          padding: "40px 20px",
          borderRadius: "8px",
        }}
      >
        <h1
          style={{ color: "#111827", fontSize: "24px", marginBottom: "20px" }}
        >
          New Contact Form Submission
        </h1>

        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <strong
              style={{
                color: "#6b7280",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              Name:
            </strong>
            <p
              style={{
                color: "#111827",
                fontSize: "16px",
                margin: "5px 0 0 0",
              }}
            >
              {name}
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <strong
              style={{
                color: "#6b7280",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              Email:
            </strong>
            <p
              style={{
                color: "#111827",
                fontSize: "16px",
                margin: "5px 0 0 0",
              }}
            >
              <a
                href={`mailto:${email}`}
                style={{ color: "#7c3aed", textDecoration: "none" }}
              >
                {email}
              </a>
            </p>
          </div>

          <div>
            <strong
              style={{
                color: "#6b7280",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              Message:
            </strong>
            <p
              style={{
                color: "#111827",
                fontSize: "16px",
                lineHeight: "1.6",
                margin: "10px 0 0 0",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </p>
          </div>
        </div>

        <p style={{ color: "#6b7280", fontSize: "14px", textAlign: "center" }}>
          This message was sent from your website contact form
        </p>
      </div>
    </div>
  );
}
