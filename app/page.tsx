import DotGrid from './components/dotgrid/DotGrid';
import Ballpit from './components/ballpit/BallPit';
import Header from './components/header';

export default function Home() {
  return (
    <main>
      <Header />

      <div className="absolute inset-0 flex justify-center items-center z-10">
        <span className="text-[80px] text-black animate-slideInUp mt-[-20vh]">
          Martin Cam
        </span>
      </div>

      <div className="relative overflow-hidden min-h-screen max-h-screen w-full z-[-1]">
        <Ballpit
          count={100}
          gravity={0.3}
          friction={1}
          wallBounce={0.95}
          followCursor={false}
        />

      </div>
    </main>
  );
}
