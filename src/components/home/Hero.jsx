import "./Hero.css";
import LanguageChange from "../../i18n/LanguageChange";

function Hero() {
  return (
    <>
      <div className="w-full  bg-center bg-no-repeat bg-cover main">
        <div className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
          <div className="mx-4 text-center shadow-2xl text-white mb-36">
            <h1 className="font-bold text-8xl mb-4">Peter Dinis</h1>
            <h2 className="font-bold text-4xl mb-12">
              Junior FullStack Developer
            </h2>
            <div className="mt-2">
              <LanguageChange />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
