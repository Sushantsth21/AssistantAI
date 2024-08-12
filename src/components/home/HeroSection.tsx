import Link from "next/link";

function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white text-center">
      <div className="relative z-10 px-6 md:px-12 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Unleash Your Inner Strength
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Whether you’re a seasoned athlete or just starting out, our expert trainers and world-class equipment are here to help you reach your goals.
        </p>
        <Link href="/talk">
          <span className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition duration-300 cursor-pointer">
            Get Started
          </span>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
