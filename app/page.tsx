import DotGrid from './dotgrid/DotGrid';
import Ballpit from './ballpit/BallPit';

export default function Home() {
  return (

  <main>

    <div className="relative overflow-hidden min-h-screen max-h-screen w-full">
      <Ballpit
        count={100}
        gravity={0.5}
        friction={1}
        wallBounce={0.95}
        followCursor={false}
      />



    </div>

      <div id="titlePlate" className="-mb-20">Martin</div>
      <div id="titlePlate">Cam</div>



    


  </main>
  );
}
