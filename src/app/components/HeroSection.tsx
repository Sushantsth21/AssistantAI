const HeroSection: React.FC = () => {
    return (
      <section className="bg-white text-gray-900 text-center py-20 px-6 lg:px-16 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Welcome to Rec Center
          </h1>
          <p className="text-lg lg:text-xl mb-4">
            Get in touch, we are happy to hear back from you!
          </p>
          <p className="text-md lg:text-lg mb-8">
            What's on your mind?
          </p>
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-500 transition-colors">
            Ask Questions
          </button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  