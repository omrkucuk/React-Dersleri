import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import ProjectList from "./components/ProjectList";
import SkillBadge from "./components/SkillBadge";
import SkillBadgeList from "./components/SkillBadgeList";
import StatCard from "./components/StatCard";
import Stats from "./components/Stats";
import { profile, projects, skills, stats } from "./data/portfolio";

function App() {
  return (
    <>
      <Header name={profile.name} />
      <Hero profile={profile} />
      <ProjectList projects={projects} />
      <SkillBadgeList skills={skills} />
      <Stats stats={stats} />
      <Footer profile={profile} />
    </>
  );
}

export default App;
