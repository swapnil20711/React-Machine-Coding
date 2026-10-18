import Link from "next/link";
import { problems } from "@/src/problems";

export default function Home() {
  return (
    <main className="home">
      <header className="home-header">
        <span className="home-eyebrow">Practice set</span>
        <h1>React Machine Coding</h1>
        <p>
          Solutions to common frontend interview problems.{" "}
          <strong>{problems.length}</strong> problems so far.
        </p>
      </header>

      <ul className="problem-grid">
        {problems.map((p, i) => (
          <li key={p.slug}>
            <Link href={`/${p.slug}`} className="problem-card">
              <span className="problem-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="problem-title">{p.title}</span>
              <span className="problem-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
