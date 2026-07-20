const Hero = ({ profile }) => {
  //   const { name, title, bio, isAvailable } = profile;

  return (
    <section style={{ padding: "80px 32px", textAlign: "center" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "8px" }}>{profile.name}</h1>
      <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "#666" }}>{profile.title}</h2>
      <p style={{ maxWidth: "600px", margin: "0 auto 24px", color: "#555" }}>{profile.bio}</p>

      {profile.isAvailable && (
        <span
          style={{
            background: "#d4edda",
            color: "#155724",
            padding: "8px",
            borderRadius: "20px",
            fontSize: "14px",
          }}
        >
          İş tekliflerine açığım
        </span>
      )}
    </section>
  );
};

export default Hero;
