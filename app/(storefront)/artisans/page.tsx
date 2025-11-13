import React from 'react';

export default function ArtisansPage() {
  const team = [
    {
      id: 1,
      name: "Wajid Hussain",
      role: "Paper Mâché Artist",
      bio: "Master craftsman specializing in handcrafted decorative boxes with traditional Kashmiri motifs.",
      imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      socials: { instagram: "#", linkedin: "#" },
    },
    {
      id: 2,
      name: "Aisha Khan",
      role: "Product Designer",
      bio: "Blending traditional aesthetics with modern design principles for contemporary appeal.",
      imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      socials: { twitter: "#", linkedin: "#" },
    },
    {
      id: 3,
      name: "Imran Shah",
      role: "Crafts Manager",
      bio: "Coordinating artisan workshops and ensuring quality standards across all productions.",
      imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      socials: { instagram: "#", linkedin: "#" },
    },
    {
      id: 4,
      name: "Sara Bhat",
      role: "Marketing Lead",
      bio: "Sharing the stories of Kashmiri craftsmanship with the world through strategic marketing.",
      imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      socials: { twitter: "#", linkedin: "#" },
    },
    {
      id: 5,
      name: "Farooq Ahmad",
      role: "Wood Carving Specialist",
      bio: "Expert in traditional walnut wood carving techniques passed down through generations.",
      imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      socials: { instagram: "#" },
    },
    {
      id: 6,
      name: "Zainab Mir",
      role: "Textile Artist",
      bio: "Creating intricate embroidery patterns that honor Kashmir's rich textile heritage.",
      imgSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      socials: { instagram: "#", linkedin: "#" },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-indigo-900/5 to-purple-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full shadow-lg">
                Meet Our Artisans
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Masters Behind
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Every Masterpiece
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We're a passionate collective of designers, makers, and storytellers dedicated to preserving 
              traditional crafts while creating modern, sustainable products. Each member brings unique expertise—from 
              hand-painting and inlay work to product design and strategic marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {team.slice(0, 3).map((member, index) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative p-8 flex flex-col items-center">
                {/* Image Container */}
                <div className="relative mb-6 transform group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden">
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Status Badge */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors mb-2">
                  {member.name}
                </h3>
                <p className="text-indigo-600 group-hover:text-indigo-200 font-medium mb-4 transition-colors">
                  {member.role}
                </p>
                <p className="text-gray-600 group-hover:text-white/90 text-center text-sm leading-relaxed transition-colors">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 mt-6">
                  {member.socials?.twitter && (
                    <a href={member.socials.twitter} className="w-10 h-10 bg-gray-100 group-hover:bg-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-all">
                      <svg className="w-5 h-5 text-gray-700 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 5.92c-.64.29-1.33.49-2.05.58a3.52 3.52 0 001.55-1.94 7.02 7.02 0 01-2.23.85 3.5 3.5 0 00-6 3.19A9.94 9.94 0 013 4.9a3.5 3.5 0 001.08 4.67c-.53-.02-1.03-.16-1.47-.4v.04a3.5 3.5 0 002.8 3.43c-.5.14-1.03.17-1.57.06a3.5 3.5 0 003.27 2.43A7.02 7.02 0 012 19.54a9.9 9.9 0 005.36 1.57c6.43 0 9.95-5.33 9.95-9.95v-.45A7.1 7.1 0 0022 5.92z" />
                      </svg>
                    </a>
                  )}
                  {member.socials?.linkedin && (
                    <a href={member.socials.linkedin} className="w-10 h-10 bg-gray-100 group-hover:bg-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-all">
                      <svg className="w-5 h-5 text-gray-700 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8.5 8.98h4.78v2.04h.07c.66-1.26 2.27-2.59 4.67-2.59C23.16 8.43 24 11.03 24 14.98V24h-5V15.9c0-2.08-.04-4.75-2.9-4.75-2.9 0-3.34 2.26-3.34 4.58V24h-5V8.98z" />
                      </svg>
                    </a>
                  )}
                  {member.socials?.instagram && (
                    <a href={member.socials.instagram} className="w-10 h-10 bg-gray-100 group-hover:bg-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-all">
                      <svg className="w-5 h-5 text-gray-700 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.4.6.22 1.03.48 1.48.93.45.45.71.88.93 1.48.16.46.34 1.26.4 2.43.06 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.4 2.43-.22.6-.48 1.03-.93 1.48-.45.45-.88.71-1.48.93-.46.16-1.26.34-2.43.4-1.26.06-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.43-.4-.6-.22-1.03-.48-1.48-.93-.45-.45-.71-.88-.93-1.48-.16-.46-.34-1.26-.4-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.055-1.17.24-1.97.4-2.43.22-.6.48-1.03.93-1.48.45-.45.88-.71 1.48-.93.46-.16 1.26-.34 2.43-.4C8.416 2.212 8.8 2.2 12 2.2z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Complete Elham Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our extended team consists of artisans, product managers, and community liaisons working 
            together to bring traditional Kashmiri handicrafts to the world—every piece is designed 
            and inspected with care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-200 text-sm font-medium">{member.role}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-2 pt-4 border-t border-gray-100">
                  {member.socials?.twitter && (
                    <a
                      href={member.socials.twitter}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors group/link"
                      aria-label={`${member.name} on Twitter`}
                    >
                      <svg className="w-4 h-4 text-gray-600 group-hover/link:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 5.92c-.64.29-1.33.49-2.05.58a3.52 3.52 0 001.55-1.94 7.02 7.02 0 01-2.23.85 3.5 3.5 0 00-6 3.19A9.94 9.94 0 013 4.9a3.5 3.5 0 001.08 4.67c-.53-.02-1.03-.16-1.47-.4v.04a3.5 3.5 0 002.8 3.43c-.5.14-1.03.17-1.57.06a3.5 3.5 0 003.27 2.43A7.02 7.02 0 012 19.54a9.9 9.9 0 005.36 1.57c6.43 0 9.95-5.33 9.95-9.95v-.45A7.1 7.1 0 0022 5.92z" />
                      </svg>
                    </a>
                  )}
                  {member.socials?.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors group/link"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <svg className="w-4 h-4 text-gray-600 group-hover/link:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8.5 8.98h4.78v2.04h.07c.66-1.26 2.27-2.59 4.67-2.59C23.16 8.43 24 11.03 24 14.98V24h-5V15.9c0-2.08-.04-4.75-2.9-4.75-2.9 0-3.34 2.26-3.34 4.58V24h-5V8.98z" />
                      </svg>
                    </a>
                  )}
                  {member.socials?.instagram && (
                    <a
                      href={member.socials.instagram}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors group/link"
                      aria-label={`${member.name} on Instagram`}
                    >
                      <svg className="w-4 h-4 text-gray-600 group-hover/link:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.4.6.22 1.03.48 1.48.93.45.45.71.88.93 1.48.16.46.34 1.26.4 2.43.06 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.4 2.43-.22.6-.48 1.03-.93 1.48-.45.45-.88.71-1.48.93-.46.16-1.26.34-2.43.4-1.26.06-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.43-.4-.6-.22-1.03-.48-1.48-.93-.45-.45-.71-.88-.93-1.48-.16-.46-.34-1.26-.4-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.055-1.17.24-1.97.4-2.43.22-.6.48-1.03.93-1.48.45-.45.88-.71 1.48-.93.46-.16 1.26-.34 2.43-.4C8.416 2.212 8.8 2.2 12 2.2z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Work With Us?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented artisans and passionate individuals to join our mission 
            of preserving and promoting traditional Kashmiri crafts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-300">
              Join Our Team
            </button>
            <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-blue-600 transition-all shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}