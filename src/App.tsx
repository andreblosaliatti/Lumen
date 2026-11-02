import LumenCTA from "./components/LumenCTA";
import LumenFooter from "./components/LumenFooter";
import LumenHeader from "./components/LumenHeader";
import LumenIntroduction from "./components/LumenIntroduction";
import ExperienceList from "./components/ExperienceList";
import DecorativeWave from "./components/DecorativeWave";

export default function App() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <div aria-hidden="true" className="ambient-glow" />
      <div className="page-shell">
        <LumenHeader />
        <LumenIntroduction />
        <DecorativeWave />
        <ExperienceList />
        <LumenCTA />
        <LumenFooter />
      </div>
    </main>
  );
}
