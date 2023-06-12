import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function EmailSignUp() {
  const url =
    "https://yahoo.us21.list-manage.com/subscribe/post?u=e0088d8c707670e628db79c31&amp;id=392e3f1541&amp;f_id=007559e1f0";
  const SimpleForm = () => <MailchimpSubscribe url={url} />;
  return (
    <div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <div>
            <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
            {status === "sending" && (
              <div style={{ color: "blue" }}>sending...</div>
            )}
            {status === "error" && (
              <div
                style={{ color: "red" }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === "success" && (
              <div style={{ color: "green" }}>Subscribed !</div>
            )}
          </div>
        )}
      />
    </div>
  );
}
