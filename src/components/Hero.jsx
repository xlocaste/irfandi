import Button from "./ButtonStart";

const Hero = () => {
    return (
        <div className="flex justify-center items-center p-10 min-h-screen text-center">
            <div className="z-20 text-white">
                <h1 className="text-5xl font-extrabold leading-tight mb-4">
                    I`m <a href="" className="text-neutral">Irfan</a>di
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
