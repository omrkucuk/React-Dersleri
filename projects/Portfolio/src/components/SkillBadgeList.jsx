import React from "react";
import SkillBadge from "./SkillBadge";

const SkillBadgeList = ({ skills }) => {
  return (
    <section id="skills" style={{ padding: "60px 32px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "24px" }}>Yeteneklerim</h2>
      <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillBadgeList;
