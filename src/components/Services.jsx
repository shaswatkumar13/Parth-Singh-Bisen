import React from "react";

const services = [
  { name: "Green Screen", image: "/green.jpeg" },
  { name: "Environment Design", image: "/environment.jpg" },
  { name: "VFX Creation", image: "/VFX.jpeg" },
  { name: "Shader Nodes", image: "/shader.png" },
  { name: "Geometry Nodes", image: "/geometry.jpg" },
  { name: "Keyframing", image: "/keyframing.png" },
  { name: "Video Editing", image: "/edit.png" },
  { name: "Color Correction", image: "/color.jpeg" },
];

const Services = () => {
  return (
    <div className="bg-blue-200 min-h-screen w-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Skills Section */}
      <h2 className="text-4xl md:text-6xl uppercase font-bold text-black mb-6">
        Skills
      </h2>

      {/* Blurry Box for Skills */}
      <div className="bg-white/30 backdrop-blur-md rounded-lg p-6 md:p-10 shadow-lg flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10 w-full max-w-4xl">
        {/* Blender Skill */}
        <div className="flex flex-col items-center">
          <img src="/blender.png" alt="Blender" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
          <p className="text-lg md:text-xl font-semibold mt-2 text-black">Blender</p>
        </div>

        {/* Unity Skill */}
        <div className="flex flex-col items-center">
          <img src="/unity.png" alt="Unity" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
          <p className="text-lg md:text-xl font-semibold mt-2 text-black">Unity</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/capcut.png" alt="Unity" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
          <p className="text-lg md:text-xl font-semibold mt-2 text-black">Capcut</p>
        </div>
      </div>

      {/* Services Section */}
      <h2 className="text-4xl md:text-6xl uppercase font-bold text-black mt-16 mb-8">
        Services
      </h2>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img src={service.image} alt={service.name} className="w-32 h-32 object-contain mb-4" />
            <h3 className="text-2xl font-semibold text-black">{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
