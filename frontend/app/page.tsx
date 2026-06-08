import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b px-10 py-6">
        <div>
          <h1 className="text-2xl font-bold">CardWise AI</h1>
          <p className="text-sm text-gray-500">
            Maximize rewards, cashback and card benefits
          </p>
        </div>

        <button className="rounded-lg border px-4 py-2 hover:bg-gray-100">
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h2 className="max-w-4xl text-5xl font-bold">
          Use the Right Credit Card Every Time
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          AI-powered recommendations to maximize rewards, cashback and
          milestones.
        </p>

        <Link
          href="/dashboard"
          className="mt-10 rounded-lg bg-black px-8 py-4 text-white hover:bg-gray-800"
        >
          Optimize My Spend
        </Link>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-8 pb-24 md:grid-cols-3">
        <div className="rounded-xl border p-6 text-center shadow-sm">
          <h3 className="text-lg font-semibold">Reward Optimization</h3>
          <p className="mt-2 text-sm text-gray-600">
            Find the card that generates the highest reward value.
          </p>
        </div>

        <div className="rounded-xl border p-6 text-center shadow-sm">
          <h3 className="text-lg font-semibold">Cashback Maximization</h3>
          <p className="mt-2 text-sm text-gray-600">
            Compare cashback benefits across cards for every purchase.
          </p>
        </div>

        <div className="rounded-xl border p-6 text-center shadow-sm">
          <h3 className="text-lg font-semibold">AI Recommendations</h3>
          <p className="mt-2 text-sm text-gray-600">
            Get simple explanations for why a card is recommended.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        Built by Monisha • CardWise AI MVP
      </footer>
    </main>
  );
}