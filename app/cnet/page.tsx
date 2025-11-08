import GridBackground from "../components/GridBackground";
import Header from "../components/Header";
import AuthComponent from "./AuthComponent";

export default function Home() {
  return (
    <main>
      <Header />
      <GridBackground />
      <AuthComponent />
    </main>
  );
}
