import { useEffect, useRef } from "react";
import Button from "./ButtonStart";

const Hero = () => {
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
        <div
            ref={vantaRef}
            className="relative flex justify-center items-center p-10 min-h-screen"
        >
            <div className="text-center z-10 text-white">
                <h1 className="text-5xl font-extrabold leading-tight mb-4">
                    I`m <a href="" className="text-accent">Irfan</a>di
                </h1>
                <p className="text-lg mb-6">
                    I’m a passionate Programmer focused on creating innovative solutions and building the future of technology.
                </p>
                <Button />
            </div>
        </div>
    );
};

export default Hero;
