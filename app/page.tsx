import Link from 'next/link';

export default function Home() {
  return (
    <main className="container">
      <div className="card">
        <h1>HumanWrite AI</h1>
        <p>Generate assignment answers, humanize text, estimate AI detection, and export to Word.</p>
        <Link href="/dashboard">
          <button>Open Dashboard</button>
        </Link>
      </div>
    </main>
  );
}
