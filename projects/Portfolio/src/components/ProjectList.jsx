import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  return (
    <section id="projects" style={{ padding: "60px 32px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "32px" }}>Projelerim</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
          gap: "24px",
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
