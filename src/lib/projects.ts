export type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;  // cover thumbnail path (from /public/covers/)
    href: string;   // live demo URL
    repo: string;   // GitHub repo URL
};

export const projects: Project[] = [
    {
        id: "interactive-resume",
        title: "Interactive Resume",
        description:
            "A live animated, interactive resume built with HTML, CSS, JavaScript, and GSAP. It switches between tabs with smooth and unique animations, giving a quick summary of my developer experience for recruiters, future collaborators and other viewers before I have my 3D portfolio website ready.",
        tags: ["JavaScript ES6", "HTML5", "CSS3"],
        image: "/covers/interactive-resume.png",
        href: "https://interactive-resume-bice.vercel.app",
        repo: "https://github.com/ChibuikemLucas/interactive-resume",
    },
    {
        id: "crypto-tracker",
        title: "Crypto Tracker",
        description: "Realtime prices, charts, and alerts.",
        tags: ["Next.js", "Tailwind", "TypeScript", "API"],
        image: "/covers/crypto-tracker.png",
        href: "https://crypto-tracker-kby7.vercel.app",
        repo: "https://github.com/ChibuikemLucas/crypto-tracker",
    },
    // 🚀 Add more projects below in the same format
    {
        id: "developer-personal-assistant",
        title: "Developer Personal Assistant",
        description: "One place for all your developer needs.",
        tags: ["Next.js", "Tailwind", "TypeScript", "API", "shadcn/ui", "AI"],
        image: "/covers/dpa.png",
        href: "https://developer-personal-assistant.vercel.app",
        repo: "",
    },
];
