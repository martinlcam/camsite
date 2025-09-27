

export default function Home() {
  return (
    <div>
      <main className="h-screen w-screen flex overflow-hidden">
        <img src="\landingpagevectors\cornertriangle.svg"
               alt="triangle"
               className="absolute translate-x-191 z-[-1]">
        </img>
        
        <img src="\landingpagevectors\namedot.svg"
               alt="dot"
               className="absolute translate-x-150 translate-y-70 z-[-1]">
        </img>

        <img src="\landingpagevectors\topleftgraphic.svg"
               alt="ASKDFKAJSDF"
               className="absolute  z-[-1]">
        </img>

        <div className="flex flex-col justify-center h-screen pl-[18vw] gap-0">
          <div className="flex gap-20 mb-8 items-center ">
            <a
              href="https://github.com/martinlcam"
              target="_blank"
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              <img
                src="\icons\github-142-svgrepo-com.svg"
                alt="Github"
                className="w-12 h-12 hover:scale-110 transition-transform"
              />
            </a>

            <a
              href="www.linkedin.com/in/martin-cam-542909295"
              target="_blank"
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              <img
                src="/icons/linkedin-linked-in-svgrepo-com.svg"
                alt="LinkedIn"
                className="w-12 h-12 hover:scale-110 transition-transform"
              />
            </a>
        
            <a
              href="https://www.instagram.com/_martincam_/"
              target="_blank"
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              <img
                src="\icons\instagram-svgrepo-com.svg"
                alt="LinkedIn"
                className="w-12 h-12 hover:scale-110 transition-transform"
              />
            </a>
              <a href="http://localhost:3000/about"
               className="pl-20 text-[35px] hover:text-[#7b847c] transition-colors duration-200">
            ./About
            </a>

              <a href="http://localhost:3000/about"
               className="text-[35px] hover:text-[#7b847c] transition-colors duration-200">
            ./Projects
            </a>

              <a href="http://localhost:3000/about"
               className="text-[35px] hover:text-[#7b847c] transition-colors duration-200">
            ./Contact
            </a>

          </div>

          
          <div id="titlePlate" className="-mb-20">Martin</div>
          <div id="titlePlate">Cam</div>
        </div>

        <div className="relative w-[max-content] font-mono
  before:absolute before:inset-0 before:animate-typewriter before:bg-white
  after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
  Hello World </div>

      </main>
    </div>
  );
}
