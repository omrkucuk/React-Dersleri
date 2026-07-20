const Header = ({ name }) => {
  return (
    <header
      style={{
        padding: "16px 32px",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span style={{ fontWeight: "bold", fontSize: "20px" }}>{name}</span>
      <nav style={{ display: "flex", gap: "24px" }}>
        <a href="#projects">Projeler</a>
        <a href="#skills">Yetenekler</a>
        <a href="#contact">İletişim</a>
      </nav>
    </header>
  );
};

export default Header;
