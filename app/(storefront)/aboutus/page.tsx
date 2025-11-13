import { Sparkles, Heart, Award, Users, Globe, Hammer } from "lucide-react";
import Image from "next/image";

function AboutRoute() {
  const features = [
    { icon: Hammer, text: "Expert Artisan Craft" },
    { icon: Globe, text: "Rich Cultural Heritage" },
    { icon: Sparkles, text: "Elegant Handmade Creations" },
    { icon: Award, text: "Genuine Artisan Creations" },
    { icon: Heart, text: "Enduring Craft Traditions" },
  ];

  const highlights = [
    "Handmade Treasures",
    "Skilled Craftsmanship",
    "Timeless Beauty",
    "Masterful Creations",
    "Unique Crafting",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 lg:px-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30">
              <Sparkles className="w-5 h-5 text-blue-300" />
              <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
            </div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {`Preserving Kashmir's rich heritage through exquisite handcrafted
            artistry`}
          </p>
        </div>
      </div>

      {/* First Section - Hero with Highlights */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/img1.jpg"
                alt="Handcrafted Kashmiri art"
                height={600}
                width={600}
                className="w-full h-[400px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="space-y-8">
            {highlights.map((text, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 transform hover:translate-x-4 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {text}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Years of Heritage", value: "100+" },
              { label: "Master Artisans", value: "50+" },
              { label: "Happy Customers", value: "10K+" },
              { label: "Unique Products", value: "500+" },
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Section - About Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 lg:p-12 space-y-6">
              <div className="space-y-4">
                {["About us", "Our Team", "Press"].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 cursor-pointer"
                  >
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full group-hover:h-12 transition-all duration-300"></div>
                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {item}
                    </h2>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 p-8 lg:p-12 space-y-6">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  {`At the heart of Kashmir's majestic valleys lies a tradition
                  of craftsmanship that has been passed down through
                  generations. Our artisans pour their soul into every creation,
                  transforming raw materials into treasures that tell stories of
                  heritage, passion, and unparalleled skill`}.
                </p>
                <p className="text-lg">
                  {`We believe in preserving the authenticity of Kashmiri
                  handicrafts while embracing contemporary aesthetics. Each
                  piece is a testament to the dedication of our master craftsmen
                  who have spent decades perfecting their art. From intricate
                  embroidery to hand-woven textiles, every creation carries the
                  essence of Kashmir's rich cultural tapestry.`}
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                    Crafted with Love
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The Essence of Artistry
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300"></div>

              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <span className="font-bold text-gray-800 text-base leading-snug">
                  {feature.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/pic.jpg"
            alt="Master artisan at work"
            width={1200}
            height={500}
            className="w-full h-[300px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent flex items-end p-8 lg:p-12">
            <div className="text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-2">
                Masters at Work
              </h3>
              <p className="text-lg opacity-90">
                Witness the magic of traditional craftsmanship
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Section - Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-16 flex items-center">
              <div className="space-y-6 text-white">
                <div className="inline-block">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      Our Mission
                    </span>
                  </div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Discover Kashmiri handcrafted treasures, blending artistry,
                  tradition, and elegance
                </h2>
                <div className="h-1 w-20 bg-white/50 rounded-full"></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 lg:p-16 flex items-center">
              <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                `We are dedicated to bringing you the finest collection of
                Kashmiri handicrafts, from exquisite clothing and crafted goods
                to our exclusive Kashmir Collection. Each piece represents a
                harmonious blend of centuries-old techniques and contemporary
                design sensibilities. Our artisans work tirelessly to ensure
                that every product not only meets but exceeds the highest
                standards of quality and authenticity. We invite you to explore
                our collection and become part of a legacy that celebrates the
                rich cultural heritage of Kashmir.`
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12 text-center border border-slate-200">
          <Users className="w-16 h-16 mx-auto mb-6 text-blue-600" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Artisan Community
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the beauty of handcrafted excellence and become part of
            our story
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Explore Our Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutRoute;
