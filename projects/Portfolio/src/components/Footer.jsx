import React from "react";

const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      style={{
        marginTop: "60px",
        padding: "32px",
        borderTop: "1px solid #eee",
        textAlign: "center",
        background: "#fafafa",
      }}
    >
      <h3>İletişim</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "20px 0px" }}>
        <a href={`mailto:${profile.email}`}>E-Posta</a>
        <a href={profile.github}>Github</a>
        <a href={profile.linkedin}>LinkedIn</a>
      </div>

      <small>
        @{currentYear} {profile.name}. Tüm hakları saklıdır.
      </small>
    </footer>
  );
};

export default Footer;
