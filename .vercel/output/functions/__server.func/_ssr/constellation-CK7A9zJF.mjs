//#region node_modules/.nitro/vite/services/ssr/assets/constellation-CK7A9zJF.js
var FLEET_URL = "https://mono-fleet.grok.me";
var PILOT_URL = "https://monomyth.grok.me";
var LINKEDIN_URL = "https://www.linkedin.com/in/eugeneray/";
var DESKS = [{
	id: "fleet",
	name: "FLEET",
	label: "Bots",
	href: "/",
	external: false,
	role: "Grok Bot desk",
	blurb: "Every public Grok Bot Eugene has shipped, with a working sample."
}, {
	id: "pilot",
	name: "MONOMYTH",
	label: "Hire me",
	href: PILOT_URL,
	external: true,
	role: "Pilot desk",
	blurb: "The operator — resume, experience, and how to reach him."
}];
var PILOT = {
	name: "Eugene Ray",
	title: "Senior Software Engineer",
	availability: "Available for hire",
	focus: "AI · Space · Robotics",
	location: "San Jose / Cupertino, CA",
	tenure: "13y 7m at Apple Siri",
	blurb: "13+ years building and operating Siri at production scale. Now shipping agentic AI tooling and robotics interfaces. Looking for AI, space, and robot companies that need someone who has already run the machine.",
	quote: "I think about the things you haven't thought about — so you don't have to.",
	photo: `${PILOT_URL}/eugene-photo.jpg`,
	photoFallback: "/pilot/eugene-photo.jpg",
	avatar: `${PILOT_URL}/eugene-avatar.jpg`,
	avatarFallback: "/pilot/eugene-avatar.jpg",
	stats: [
		{
			label: "Apple Siri",
			value: "13y 7m"
		},
		{
			label: "Production",
			value: "2010–24"
		},
		{
			label: "Desk",
			value: "monomyth.grok.me"
		}
	]
};
PILOT.name, DESKS[0].blurb, DESKS[1].blurb;
//#endregion
export { PILOT_URL as a, PILOT as i, FLEET_URL as n, LINKEDIN_URL as r, DESKS as t };
