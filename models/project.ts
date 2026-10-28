import { Technology } from "./technology";
import { technologies } from "./technology";

export type Project = {
	name: string;
	descriptionEn: string;
	descriptionIt: string;
	imageSrc: string;
	date: string;
	link: string;
	technologyNames: string[];
};

export function getTechnologyByName(name: string): Technology {
	const selectedTechnology = technologies.find(
		(technology) => technology.name === name,
	);
	return selectedTechnology!;
}

export const projects: Project[] = [
	{
		name: "Lupus (Werewolf)",
		descriptionEn:
			"A role-playing game to play with friends on a single mobile device, built with React and TypeScript.",
		descriptionIt:
			"Un gioco di ruolo per giocare tra amici con un singolo dispositivo mobile, aviluppato in React e TypeScript.",
		imageSrc: "/lupus.png",
		date: new Date("October 2026").toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
		}),
		link: "https://lupus-the-game.vercel.app/",
		technologyNames: ["TypeScript", "Tailwind", "Framer Motion", "Zustand"],
	},

	{
		name: "Music release tracker",
		descriptionEn:
			"Full-stack app with Google authentication and database to track your favorite artists and be notified via e-mail when they release a new record. \nUses Spotify API to retrieve artists' data.",
		descriptionIt:
			"Un’app full-stack con Google login e database che permette di seguire i tuoi artisti preferiti e ricevere e-mail all'uscita di nuovi album. Dati forniti da Spotify API.",
		imageSrc: "/next-album2.png",
		date: new Date("September 2025").toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
		}),
		link: "https://latest-albums.vercel.app/",
		technologyNames: [
			"NextJS",
			"TypeScript",
			"Firebase",
			"Tailwind",
			"Spotify Web API",
		],
	},

	{
		name: "Mood tracker",
		descriptionEn:
			"Daily tracker of mood, sleep and thoughts.\nInspired by a challenge from Frontend Mentor.",
		descriptionIt:
			"Tracker giornaliero di correlazione tra umore, sonno e pensieri.\nIspiritato da challenge di Frontend Mentor.",
		imageSrc: "/mood-tracker.png",
		date: new Date("May 2025").toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
		}),
		link: "https://federico0284364.github.io/mood-tracker/",
		technologyNames: ["React", "Tailwind", "Redux"],
	},
	{
		name: "Guess the Pokémon",
		descriptionEn:
			"Test your Pokémon knowledge in a fun quiz game with two difficulty modes.\nPowered by data from PokéAPI.",
		descriptionIt:
			"Un gioco a quiz di conoscenza sui Pokémon con due diverse difficoltà.\nDati forniti da PokéAPI.",
		imageSrc: "/guess-the-pokemon.png",
		date: new Date("April 2025").toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
		}),
		link: "https://federico0284364.github.io/guess-the-pokemon/",
		technologyNames: [
			"React",
			"Tailwind",
			"Redux",
			"REST API",
			"Framer Motion",
		],
	},
];
