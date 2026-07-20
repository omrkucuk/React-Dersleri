const ProjectCard = ({ project }) => {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: "8px", padding: "20px" }}>
      <h3 style={{ marginBottom: "8px" }}>{project.title}</h3>
      <p style={{ color: "#555", marginBottom: "12px" }}>{project.description}</p>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
        {project.tech.map((t, index) => (
          <span
            key={index}
            style={{
              background: "#e9ecef",
              padding: "2px 10px",
              borderRadius: "12px",
              fontSize: "12px",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <a href={project.liveUrl}>Canlı Gör</a>
        <a href={project.githubUrl}>Github</a>
      </div>
    </div>
  );
};

export default ProjectCard;
