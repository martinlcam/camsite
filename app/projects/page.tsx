import GridBackground from "../components/GridBackground";
import Header from "../components/header";

export default function Home() {
    return (
        <main>
            <Header />
            <GridBackground />
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor ante. Quisque nec volutpat magna. Nam volutpat nibh nisi, id congue nisi euismod ac. Nam vel sagittis tortor. Nunc eleifend scelerisque scelerisque. Integer mi sem, interdum ut est sed, fringilla interdum odio. Donec tempus justo sed tincidunt feugiat. Vivamus semper quis nisi laoreet maximus. Vivamus ultrices leo et lectus fermentum, et scelerisque leo venenatis. Phasellus sapien leo, tincidunt quis feugiat non, condimentum id velit. Nam laoreet est et accumsan efficitur. Maecenas non felis a leo consectetur scelerisque. Vivamus feugiat venenatis congue.
                </div>
            </div>
        </main>
    );
}