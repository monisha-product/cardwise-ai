export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6 border-b">
        <div>
          <h1 className="text-2xl font-bold">CardWise AI</h1>
          <p className="text-sm text-gray-500">
            Choose the best card every time
          </p>
        </div>

        <button className="rounded-lg border px-4 py-2 hover:bg-gray-100">
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="max-w-4xl text-5xl font-bold">
          Use the Right Credit Card Every Time
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          AI-powered recommendations to maximize rewards, cashback and
          milestones.
        </p>

        <button className="mt-10 rounded-lg bg-black px-8 py-4 text-white hover:bg-gray-800">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-8 pb-24 md:grid-cols-3">
        <div className="rounded-xl border p-6 text-center shadow-sm">
          <h3 className="text-lg font-semibold">Reward Optimization</h3>
        </div>

        <div className="rounded-xl border p-6 text-center shadow-sm">
          <h3 className="text-lg font-semibold">Cashback Maximization</h3>
        </div>

        <div className="rounded-xl border p-6 text-center shadow-sm">
          <h3 className="text-lg font-semibold">AI Recommendations</h3>
        </div>
      </section>
    </main>
  );
}