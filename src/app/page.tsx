import Image from "next/image";
import ThreeHero from "@/components/ThreeHero";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ThreeHero />

      {/* Accessible 2D listing (good for SEO + fallback) */}
      <section className="container py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">All Projects</h2>
        <p className="text-zinc-400 mt-1">Click in 3D above or browse below.</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {projects.map((p) => (
            <article key={p.id} className="rounded-lg border border-white/10 overflow-hidden">
              <div className="relative h-48">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-zinc-300 mt-1">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <Link href={p.href} target="_blank" className="text-sm underline">Live</Link>
                  <Link href={p.repo} target="_blank" className="text-sm underline">Repo</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Chibuikem — Built with Next.js, Tailwind, Three.js
      </footer>
    </main>
  );
}
