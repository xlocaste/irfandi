import { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
    const vantaRef = useRef(null);

    useEffect(() => {
        const VANTA = window.VANTA;

        const vantaEffect = VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x1e3a8a,
            backgroundColor: 0x000000,
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return (
      <div className="relative">
        <div
            ref={vantaRef}
            className="fixed top-0 left-0 right-0 bottom-0 z-0"
        ></div>

        <div className="absolute inset-0 z-10">
            <Hero />
            <About />
        </div>
    </div>
    );
};

export default App;
