import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-white p-10">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-6">
        <h1 className="text-3xl font-bold">CardWise AI</h1>
        <div>Profile</div>
      </div>

      {/* My Cards */}
      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">My Cards</h2>

          <Link
            href="/cards/new"
            className="rounded-lg border px-4 py-2 hover:bg-gray-100"
          >
            Add Card
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-6 shadow-sm">
            Axis Atlas
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            HDFC Diners Black
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            Amex Platinum Travel
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6 shadow-sm">
          <h3 className="text-lg font-semibold">
            Recommendations This Month
          </h3>

          <p className="mt-3 text-4xl font-bold">
            12
          </p>
        </div>

        <div className="rounded-lg border p-6 shadow-sm">
          <h3 className="text-lg font-semibold">
            Estimated Savings
          </h3>

          <p className="mt-3 text-4xl font-bold">
            ₹2,350
          </p>
        </div>
      </section>

      {/* CTA */}
      <Link
        href="/optimize"
        className="mt-10 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
      >
        Optimize Transaction
      </Link>
    </main>
  );
}