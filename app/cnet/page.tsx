import GridBackground from "../components/GridBackground/GridBackground";
import Header from "../components/Header/header";
import AuthComponent from "./AuthComponent";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <GridBackground />
      </div>
      <div className="relative z-30">
        <Header />
      </div>
      <div className="relative z-20 animate-pageFadeIn">
        <AuthComponent />
      </div>
    </main>
  );
}
