import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Member = {
  id: number | string;
  name: string;
  role: string;
  bio?: string;
  imgSrc?: string;
  socials?: { twitter?: string; linkedin?: string; instagram?: string };
};

const sampleTeam: Member[] = [
  {
    id: 1,
    name: "Wajid Hussain",
    role: "Paper Mâché Artist",
    bio: "Handcrafted decorative boxes & traditional Kashmiri motifs.",
    imgSrc: "/pic.jpeg",
    socials: { instagram: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "Aisha Khan",
    role: "Product Designer",
    imgSrc: "/pic.jpeg",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: 3,
    name: "Imran Shah",
    role: "Crafts Manager",
    imgSrc: "/pic.jpeg",
    socials: { instagram: "#", linkedin: "#" },
  },
  {
    id: 4,
    name: "Sara Bhat",
    role: "Marketing Lead",
    imgSrc: "/pic.jpeg",
    socials: { twitter: "#", linkedin: "#" },
  },
];

export default function OurTeam({ team = sampleTeam }: { team?: Member[] }) {
  return (
    <section className="px-4 lg:px-8 py-12">
      {/* Top intro: left text, right image / cards */}
      <div className="max-w-7xl mx-auto">
        <div className="py-10 flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="flex-1 flex flex-col gap-5 lg:w-1/2">
            <h1 className="text-2xl lg:text-3xl font-semibold">Our Team</h1>
            <p className="text-sm lg:text-base text-justify text-gray-700">
              We’re a small crew of designers, makers and storytellers passionate
              about preserving traditional crafts while building modern,
              sustainable products. Each member brings a unique skillset — from
              hand-painting and inlay work to product design and marketing.
            </p>
            <div className="flex items-center gap-4">
              <Button>Learn More</Button>
              <a
                href="#contact"
                className="text-sm underline text-slate-600 hover:text-slate-800"
              >
                Contact the team
              </a>
            </div>
          </div>

          {/* Highlight cards on the right for large screens */}
          <div className="flex-1 lg:w-1/2 flex flex-wrap justify-center lg:justify-end gap-6">
            {team.slice(0, 3).map((m, i) => (
              <div
                key={m.id}
                className={`w-[160px] sm:w-[180px] h-[220px] bg-[#213869] rounded-lg flex flex-col gap-3 items-center justify-start p-4 transform transition-all hover:-translate-y-2 hover:shadow-xl`}
                role="group"
                aria-label={`${m.name}, ${m.role}`}
              >
                <div className="relative -mt-6">
                  <div className="rounded-full bg-gradient-to-tr from-slate-700 to-slate-900 p-[3px]">
                    <Image
                      src={m.imgSrc ?? "/pic.jpeg"}
                      alt={m.name}
                      width={120}
                      height={120}
                      className="h-[100px] w-[100px] sm:h-[110px] sm:w-[110px] rounded-full object-cover block"
                    />
                  </div>
                </div>

                <h2 className="text-gray-100 font-medium text-center text-sm">
                  {m.name}
                </h2>
                <p className="text-gray-300 text-xs italic text-center">
                  {m.role}
                </p>
                <div className="mt-1 flex gap-2">
                  {/* small decorative indicator */}
                  <span className="w-2 h-2 rounded-full bg-emerald-400 block" />
                  <span className="text-xs text-gray-300 hidden sm:block">
                    {m.bio ?? "Dedicated craft professional"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full team grid */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Elham Team</h2>
          <p className="text-sm lg:text-base text-justify text-gray-700 mb-6">
            Our extended Elham Team consists of artisans, product managers and
            community liaisons working together to bring traditional Kashmiri
            handicrafts to the world—every piece is designed and inspected with
            care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <article
                key={member.id}
                className="bg-white/5 backdrop-blur-sm border border-white/6 rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-lg hover:scale-[1.02] transition"
                aria-labelledby={`team-${member.id}-name`}
              >
                <div className="relative w-28 h-28 mb-3">
                  <Image
                    src={member.imgSrc ?? "/pic.jpeg"}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 112px, 112px"
                    className="object-cover rounded-full"
                  />
                </div>

                <h3
                  id={`team-${member.id}-name`}
                  className="text-gray-100 font-medium"
                >
                  {member.name}
                </h3>
                <p className="text-xs text-gray-300 italic">{member.role}</p>

                {member.bio && (
                  <p className="text-xs text-gray-400 mt-3 line-clamp-3">
                    {member.bio}
                  </p>
                )}

                {/* Socials */}
                <div className="mt-4 flex gap-3">
                  {/* Inline simple icons (accessible) */}
                  {member.socials?.twitter && (
                    <a
                      href={member.socials.twitter}
                      aria-label={`${member.name} on Twitter`}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M22 5.92c-.64.29-1.33.49-2.05.58a3.52 3.52 0 001.55-1.94 7.02 7.02 0 01-2.23.85 3.5 3.5 0 00-6 3.19A9.94 9.94 0 013 4.9a3.5 3.5 0 001.08 4.67c-.53-.02-1.03-.16-1.47-.4v.04a3.5 3.5 0 002.8 3.43c-.5.14-1.03.17-1.57.06a3.5 3.5 0 003.27 2.43A7.02 7.02 0 012 19.54a9.9 9.9 0 005.36 1.57c6.43 0 9.95-5.33 9.95-9.95v-.45A7.1 7.1 0 0022 5.92z" />
                      </svg>
                    </a>
                  )}
                  {member.socials?.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      aria-label={`${member.name} on LinkedIn`}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8.5 8.98h4.78v2.04h.07c.66-1.26 2.27-2.59 4.67-2.59C23.16 8.43 24 11.03 24 14.98V24h-5V15.9c0-2.08-.04-4.75-2.9-4.75-2.9 0-3.34 2.26-3.34 4.58V24h-5V8.98z" />
                      </svg>
                    </a>
                  )}
                  {member.socials?.instagram && (
                    <a
                      href={member.socials.instagram}
                      aria-label={`${member.name} on Instagram`}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.4.6.22 1.03.48 1.48.93.45.45.71.88.93 1.48.16.46.34 1.26.4 2.43.06 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.4 2.43-.22.6-.48 1.03-.93 1.48-.45.45-.88.71-1.48.93-.46.16-1.26.34-2.43.4-1.26.06-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.43-.4-.6-.22-1.03-.48-1.48-.93-.45-.45-.71-.88-.93-1.48-.16-.46-.34-1.26-.4-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.055-1.17.24-1.97.4-2.43.22-.6.48-1.03.93-1.48.45-.45.88-.71 1.48-.93.46-.16 1.26-.34 2.43-.4C8.416 2.212 8.8 2.2 12 2.2zm0 3.1A6.7 6.7 0 105.3 11 6.7 6.7 0 0012 5.3zm0 1.55a5.15 5.15 0 11-5.15 5.15A5.15 5.15 0 0112 6.85zm6.2-.9a1.56 1.56 0 11-1.56 1.56 1.56 1.56 0 011.56-1.56z" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
