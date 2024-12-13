import Button from "./ButtonContact"

const Hero = () => {
    return (
        <div
            className="flex justify-center items-center p-10 min-h-screen bg-cover bg-center bg-[url('/assets/bg.jpg')]"
        ><div className="absolute inset-0 bg-primary bg-opacity-50"></div>
            <div className="text-center z-10 text-neutral">
                <h1 className="text-5xl font-extrabold leading-tight mb-4">
                    I`m <a href="" className="text-accent">Irfan</a>di
                </h1>
                <p className="text-lg mb-6">
                    I’m a passionate Programmer focused on creating innovative solutions and building the future of technology.
                </p>
                <Button />
            </div>
        </div>
    )
}

export default Hero