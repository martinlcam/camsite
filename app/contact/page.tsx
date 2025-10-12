import GridBackground from "../components/GridBackground";
import Header from "../components/header";

export default function Home() {
    return (
        <main>
            <Header />
            <GridBackground />


            <div className="max-w-xl flex h-screen justify-center items-center bg-white/30 shadow-2xl backdrop-blur-2xl rounded-xl">
                test
            </div>
        </main>
    );
}