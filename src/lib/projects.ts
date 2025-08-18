export type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;        // thumbnail or cover
    href: string;         // live url
    repo: string;         // github
};

export const projects: Project[] = [
    {
        id: "crypto-tracker",
        title: "Crypto Tracker",
        description: "Realtime prices, charts, and alerts.",
        tags: ["Next.js", "Tailwind", "TypeScript", "API"],
        image: "/covers/crypto-tracker.png",
        href: "https://crypto-tracker-kby7.vercel.app/",
        repo: "https://github.com/ChibuikemLucas/crypto-tracker"
    },
    {
        title: "Interactive Resume",
        id: "interactive-resume",
        description: "A live animated, interactive resume built with HTML, CSS, JavaScript, and GSAP. It switches between tabs with smooth and unique animations, giving a quick summary of my developer experience for recruiters, future collaborators and other viewers before I have my 3D portfolio website ready.",
        tags: ["JavaScript ES6", "HTML5", "CSS3"],
        image: "/covers/interactive-resume.png",
        repo: "https://github.com/ChibuikemLucas/interactive-resume",
        href: "https://interactive-resume-bice.vercel.app/"
    }
    // add more here…
];
