export default function Home() {
  return (
    <div>
      <main className="relative h-screen flex">
        <div className="flex flex-col justify-center h-screen pl-[40vw] gap-0">
          <div className="flex gap-20 mb-8">
            <a
              href="https://github.com"
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
              href="https://Linkedin.com"
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
          </div>

          <div id="titlePlate" className="-mb-20">
            Martin
          </div>
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
