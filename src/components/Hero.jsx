import Button from "./ButtonStart";
import Email from "./icons/Email";
import Facebook from "./icons/Facebook";
import Github from "./icons/Github";
import Instagram from "./icons/Instagram";

const Hero = () => {
    return (
        <div className="flex justify-center items-center p-10 min-h-screen text-center">
            <div className="z-20 text-white">
            <h1 className="text-7xl font-extrabold leading-tight mb-4 text-center">
                Hi, i’am <a href="about" className="text-accent hover:underline">Irfan</a>di
            </h1>
                <p className="text-lg mb-6">
                    I’m a passionate Programmer focused on creating innovative solutions and building the future of technology.
                </p>
                <Button />
                <div className="mt-10 flex justify-center gap-4">
                    <Email />
                    <Github />
                    <Facebook />
                    <Instagram />
                </div>
            </div>
        </div>
    );
};

export default Hero;
