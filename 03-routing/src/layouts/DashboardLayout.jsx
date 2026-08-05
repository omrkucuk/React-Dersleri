import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: "240px", borderRight: "1px solid #eee", padding: "24px" }}>
        <h3 style={{ marginBottom: "16px" }}>Dashboard</h3>
        <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <NavLink to={"/dashboard"} end>
            Ana
          </NavLink>
          <NavLink to={"/dashboard/profile"}>Profil</NavLink>
          <NavLink to={"/dashboard/settings"}>Ayarlar</NavLink>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "32px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
