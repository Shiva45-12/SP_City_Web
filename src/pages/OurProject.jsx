import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import AppointmentSection from "../components/AppointmentSection";

const services = [
  {
    title: "Kitchens",
    content:
      "At Real Estate, we design and build stunning kitchens tailored to your style and needs. Whether you're after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home.",
  },
  {
    title: "Loft Conversions",
    content:
      "Transform unused loft space into functional and stylish living areas, from bedrooms to home offices, with smart layouts and seamless integration.",
  },
  {
    title: "Bathrooms",
    content:
      "Elegant and practical bathroom solutions combining modern design, premium materials, and efficient layouts.",
  },
  {
    title: "Extensions",
    content:
      "Expertly planned home extensions that expand your living space while maintaining quality and compliance.",
  },
  {
    title: "Restorations",
    content:
      "Preserving the character of your property while upgrading it to modern living standards.",
  },
  {
    title: "External Works",
    content:
      "Professional exterior upgrades including landscaping and structural enhancements.",
  },
];

const OurProject = () => {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50"></div>
        <div className="relative z-10 text-white px-6">
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse">
            ✨ Our Projects
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            What We <span className="text-red-400">Do</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-200">
            Discover our range of services designed to transform your property
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section ref={sectionRef} className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4">
              <span>🏗️</span> Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find the <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Perfect Service</span>
            </h2>
            <p className="text-gray-600 text-lg">Choose the service that fits your project needs</p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Image */}
            <div className={`relative group transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800"
                  alt="Our Services"
                  className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-4xl font-black mb-2">{services.length}+</div>
                  <div className="text-lg">Premium Services</div>
                </div>
              </div>
            </div>

            {/* Right Accordion */}
            <div className={`space-y-4 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              {services.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 ${
                    active === index ? 'shadow-2xl scale-105' : 'hover:shadow-xl'
                  }`}
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  <button
                    onClick={() => setActive(active === index ? null : index)}
                    className="w-full flex justify-between items-center text-left p-6 group"
                  >
                    <h3 className={`text-lg font-bold transition-colors duration-300 ${
                      active === index ? 'text-red-600' : 'text-gray-900 group-hover:text-red-600'
                    }`}>
                      {item.title}
                    </h3>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      active === index ? 'bg-red-600 text-white rotate-180' : 'bg-gray-100 text-gray-600 group-hover:bg-red-100'
                    }`}>
                      {active === index ? <FaTimes /> : <FaPlus />}
                    </div>
                  </button>

                  <div className={`transition-all duration-500 overflow-hidden ${
                    active === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <div className="w-full h-px bg-gradient-to-r from-red-500 to-transparent mb-4"></div>
                      <p className="text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FaqSection />
      <AppointmentSection />

      <Footer />
    </>
  );
};

export default OurProject;
