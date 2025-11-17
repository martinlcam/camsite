import GridBackground from "../components/GridBackground";
import Header from "../components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <GridBackground />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start bg-white/30 px-8 py-3 shadow-2xl backdrop-blur-2xl rounded-xl">
          <div>Under Construction :0</div>
        </div>
      </div>
    </main>
  );
}
