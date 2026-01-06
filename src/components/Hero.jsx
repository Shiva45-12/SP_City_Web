import Button from "./Button";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pb-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-white pt-32">
        <div className="max-w-4xl">
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse">
            ✨ Discover Your Dream Home with Us
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in-up">
            Find the Perfect <br />
            <span className="text-red-400 animate-bounce inline-block">Property</span> for Your <br />
            Lifestyle
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-300">
            Explore thousands of premium properties with our expert guidance. 
            Your dream home is just one click away.
          </p>

          <div className="animate-fade-in-up animation-delay-500">
            <Button variant="primary" className="text-xl px-12 py-3 animate-pulse hover:animate-none relative z-20">
               Start Searching
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
