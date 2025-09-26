export default function Home() {
  return (
<div>

  <header className="absolute top-0 left-0 w-full bg-[#02ff71] text-black p-4 z-10">
  <h1 className="text-2xl font-bold">asdfa</h1>
  </header>

  <main className="relative h-screen flex">


      <div className="flex flex-col justify-center h-screen pl-[400px] gap-0">
        <div id="titlePlate" className="-mb-20">Martin</div>
        <div id="titlePlate">Cam</div>
      </div>



      <div
        style={{
        position: "absolute",
        top: -50,
        left: 1100,
        width: "100%",
        height: "100%",
        transform: "rotate(-45deg)",
        transformOrigin: "top left",
        background: "#E79FFF",
        borderRadius: "21.42px",
        zIndex: -1,
       }}
        ></div>




    </main>
</div>
  );
}
