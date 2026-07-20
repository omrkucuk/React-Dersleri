import React from "react";

const SkillBadge = ({ skill }) => {
  return (
    <span
      style={{
        background: "#007bff",
        color: "#fff",
        padding: "6px 16px",
        borderRadius: "20px",
        fontSize: "14px",
      }}
    >
      {skill}
    </span>
  );
};

export default SkillBadge;
