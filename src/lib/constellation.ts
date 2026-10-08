export const FLEET_URL = "https://mono-fleet.grok.me";
export const PILOT_URL = "https://monomyth.grok.me";
export const SLOP_URL = "https://jon-slop.grok.me";
export const LINKEDIN_URL = "https://www.linkedin.com/in/eugeneray/";

export type DeskId = "fleet" | "pilot" | "slop";

export type Desk = {
  id: DeskId;
  name: string;
  label: string;
  href: string;
  external: boolean;
  role: string;
  blurb: string;
};

export const DESKS: Desk[] = [
  {
    id: "fleet",
    name: "FLEET",
    label: "Bots",
    href: "/",
    external: false,
    role: "Grok Bot desk",
    blurb: "Every public Grok Bot Eugene has shipped, with a working sample.",
  },
  {
    id: "pilot",
    name: "MONOMYTH",
    label: "Hire me",
    href: PILOT_URL,
    external: true,
    role: "Pilot desk",
    blurb: "The operator — resume, experience, and how to reach him.",
  },
  {
    id: "slop",
    name: "JON SLOP",
    label: "Slop",
    href: SLOP_URL,
    external: true,
    role: "Slop Cannon catalog",
    blurb: "520 Slop Cannon music videos, Aug 24 to Oct 7. The watch list Jon Slop keeps.",
  },
];

export const PILOT = {
  name: "Eugene Ray",
  title: "Senior Software Engineer",
  availability: "Available for hire",
  focus: "AI · Space · Robotics",
  location: "San Jose / Cupertino, CA",
  tenure: "13y 7m at Apple Siri",
  blurb:
    "13+ years building and operating Siri at production scale. Now shipping agentic AI tooling and robotics interfaces. Looking for AI, space, and robot companies that need someone who has already run the machine.",
  quote: "I think about the things you haven't thought about — so you don't have to.",
  photo: `${PILOT_URL}/eugene-photo.jpg`,
  photoFallback: "/pilot/eugene-photo.jpg",
};
