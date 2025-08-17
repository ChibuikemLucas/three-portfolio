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
        href: "https://crypto-tracker-yourname.vercel.app",
        repo: "https://github.com/yourname/crypto-tracker"
    },
    {
        id: "vendor-profile",
        title: "Vendor Profile System",
        description: "Next + Redux + file uploads + auth.",
        tags: ["Next.js", "Redux", "TypeScript"],
        image: "/covers/vendor-profile.png",
        href: "https://vendor-profile.vercel.app",
        repo: "https://github.com/yourname/vendor-profile"
    }
    // add more…
];
