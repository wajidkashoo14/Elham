import { Button } from "@/components/ui/button";
import { Quote, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";

export default function Founders() {
  const testimonials = [
    {
      text: "Working with Wajid has been transformative for our business. His innovative approach and dedication to excellence set him apart.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp"
    },
    {
      text: "An exceptional leader with a vision that inspires. Wajid's expertise and commitment to quality are unmatched in the industry.",
      author: "Michael Chen",
      role: "Director, Innovation Labs"
    },
    {
      text: "Wajid brings creativity and strategic thinking to every project. His ability to solve complex problems is truly remarkable.",
      author: "Emma Williams",
      role: "Product Manager, StartupXYZ"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section with Founder */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-24">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Meet Our Founder
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Visionary Leadership
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Driving innovation and excellence through passion and dedication
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl -z-0"></div>

          {/* Image Section */}
          <div className="w-full lg:w-5/12 flex flex-col items-center gap-6 relative z-10">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="/pic.jpeg"
                alt="Wajid Kashoo - Founder"
                height={350}
                width={350}
                className="relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full object-cover border-8 border-white shadow-xl"
              />
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full hover:bg-gray-700 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6 text-center lg:text-left relative z-10">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Wajid Kashoo
              </h1>
              <p className="text-lg text-blue-600 font-medium">
                Founder & Chief Executive Officer
              </p>
            </div>

            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto lg:mx-0 rounded-full"></div>

            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              With over a decade of experience in transforming visionary ideas into reality, 
              Wajid leads our mission to innovate and excel. His commitment to excellence 
              and forward-thinking approach has positioned our company at the forefront of 
              the industry. Passionate about creating meaningful impact, Wajid believes in 
              the power of collaboration and continuous innovation to drive sustainable growth 
              and deliver exceptional value to our clients.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                Innovation Leader
              </span>
              <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                Strategic Thinker
              </span>
              <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                Tech Enthusiast
              </span>
            </div>

            <div className="flex gap-4 flex-col sm:flex-row justify-center lg:justify-start mt-2">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all">
                Schedule a Meeting
              </Button>
              <Button variant="outline" className="border-2 hover:bg-gray-50">
                Download Bio
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              What People Say
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from those who have experienced our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-700"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300"></div>

                <div className="relative z-10">
                  <p className="text-gray-300 italic leading-relaxed mb-6 text-base">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="pt-4 border-t border-slate-700">
                    <p className="text-white font-semibold text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-blue-400 text-sm mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate and create something extraordinary together
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl text-lg px-8">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}