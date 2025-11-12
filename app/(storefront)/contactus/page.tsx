'use client'
import { ImLocation2 } from "react-icons/im";
import {
  FaPhoneAlt,
  FaMobile,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { Mail, Send, MapPin, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactRoute() {
  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 lg:px-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30">
              <MessageCircle className="w-5 h-5 text-blue-300" />
              <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            </div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Let's Connect
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Have a question or want to work together? Fill out the form or reach out through any of our contact channels below.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Nantes, France</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 9596103894</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaMobile className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Mobile</h3>
                    <p className="text-gray-600">+91 9596103894</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex items-center gap-4">
                <Link href="https://www.facebook.com/elham.fr/" className="group">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <FaFacebook className="w-6 h-6 text-blue-300 group-hover:text-blue-200" />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/shopelham.fr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="group">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <FaInstagram className="w-6 h-6 text-pink-300 group-hover:text-pink-200" />
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/company/elham-fr?trk=profile-position" className="group">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <FaLinkedin className="w-6 h-6 text-blue-300 group-hover:text-blue-200" />
                  </div>
                </Link>
                <Link href="/" className="group">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <FaPinterest className="w-6 h-6 text-red-300 group-hover:text-red-200" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86684.63425220412!2d-1.6427362740002889!3d47.238203213174536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ee81f0a8aead%3A0x40d37521e0ded30!2sNantes%2C%20France!5e0!3m2!1sen!2sin!4v1728236025271!5m2!1sen!2sin"
                className="w-full h-[300px] lg:h-[350px] rounded-2xl border-4 border-white"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-slate-200">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send us a Message
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Your Name</label>
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="John Doe" 
                    className="pl-12 h-12 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="pl-12 h-12 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Your Message</label>
                <Textarea
                  placeholder="Tell us what's on your mind..."
                  className="h-[180px] border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                />
              </div>

              <Button 
                onClick={handleSubmit}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>

            <p className="text-sm text-gray-500 text-center mt-6">
              We'll get back to you within 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start a Conversation?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you have a question, feedback, or just want to say hello, we're here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 h-12 px-8 font-semibold shadow-xl">
              Schedule a Call
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 h-12 px-8 font-semibold">
              View FAQ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}