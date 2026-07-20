const StatCard = ({ stat }) => {
  return (
    <div
      style={{
        padding: "24px",
        border: "1px solid #eee",
        borderRadius: "10px",
        textAlign: "center",
        background: "#fff",
      }}
    >
      <h3 style={{ fontSize: "36px", marginBottom: "10px", color: `${stat.color}` }}>
        {stat.value}
      </h3>
      <p style={{ color: "#555", margin: 0 }}>{stat.label}</p>
    </div>
  );
};

export default StatCard;
