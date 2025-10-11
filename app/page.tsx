import DotGrid from './components/dotgrid/DotGrid';
import Ballpit from './components/ballpit/BallPit';
import Header from './components/header';

export default function Home() {
  return (
    <main>

      <Header />

      <div className="relative overflow-hidden min-h-screen max-h-screen w-full">
        <Ballpit
          count={100}
          gravity={0.5}
          friction={1}
          wallBounce={0.95}
          followCursor={false}
        />
      </div>

    </main>
  );
}
