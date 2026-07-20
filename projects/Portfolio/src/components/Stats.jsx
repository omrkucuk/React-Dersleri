import React from "react";
import StatCard from "./StatCard";

const Stats = ({ stats }) => {
  return (
    <section style={{ padding: "60px 32px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "32px" }}>İstatistikler</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
