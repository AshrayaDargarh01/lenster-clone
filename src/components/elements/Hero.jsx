import PostCard from "./PostCard";

const Hero = () => {
    return (
      <div className="w-full bg-gray-50 py-16">
      <div className="w-[75%] mx-auto flex items-center ">
        {/* Header */}
        <div className="">
        <img src="/src/assets/logo.png" alt="logo" className="w-36 " />

        </div>

        <div className="mx-auto flex w-full max-w-screen-xl items-center px-5 py-8 sm:py-12">
          <h1 className="font-extrabold text-2xl sm:text-5xl">
            Welcome to Hey, <br />
            <span className="text-gray-500 font-extrabold text-2xl sm:text-5xl">
              a social network built
            </span><br />
            <span className="text-gray-500 font-extrabold text-2xl sm:text-5xl">
              on Lens Protocol
            </span>
          </h1>
        </div>
        
      </div>
      </div>
      
    );
  };

  export default Hero