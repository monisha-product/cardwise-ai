import Link from "next/link";

export default function RecommendationResult() {
  return (
    <main className="min-h-screen bg-white p-10">
      <div className="flex items-center justify-between border-b pb-6">
        <h1 className="text-3xl font-bold">CardWise AI</h1>
        <div>Profile</div>
      </div>

      <section className="mx-auto mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold">Recommendation Result</h2>
        <p className="mt-2 text-gray-600">
          Based on your transaction details, this is the best card to use.
        </p>

        <div className="mt-8 rounded-xl border p-8 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Recommended Card</p>
          <h3 className="mt-2 text-4xl font-bold">Axis Atlas</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Estimated Reward</p>
              <p className="mt-2 text-3xl font-bold">₹800</p>
            </div>

            <div className="rounded-lg bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Category</p>
              <p className="mt-2 text-3xl font-bold">Travel</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-gray-500">Reason</p>
            <p className="mt-2 text-gray-700">
              Axis Atlas gives the highest reward value for this travel
              transaction compared to the other saved cards.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Card Comparison</h3>

          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
              <span>Axis Atlas</span>
              <span className="font-semibold">₹800</span>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
              <span>HDFC Diners Black</span>
              <span className="font-semibold">₹600</span>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
              <span>Amex Platinum Travel</span>
              <span className="font-semibold">₹400</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            href="/optimize"
            className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
          >
            Optimize Another Transaction
          </Link>

          <Link
            href="/dashboard"
            className="rounded-lg border px-6 py-3 hover:bg-gray-100"
          >
            Back to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}