import Link from "next/link";
import { getBestCard } from "@/lib/recommendation";

export default async function RecommendationResult({
  searchParams,
}: {
  searchParams: Promise<{
    amount?: string;
    category?: string;
  }>;
}) {
  const params = await searchParams;

  const amount = Number(params.amount || 0);

  const category =
    (params.category as
      | "travel"
      | "dining"
      | "shopping"
      | "grocery"
      | "fuel"
      | "general") || "general";

  const { bestCard, rankedCards } = getBestCard(
    amount,
    category
  );

  return (
    <main className="min-h-screen bg-white p-10">
      <div className="flex items-center justify-between border-b pb-6">
        <h1 className="text-3xl font-bold">CardWise AI</h1>
        <div>Profile</div>
      </div>

      <section className="mx-auto mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold">
          Recommendation Result
        </h2>

        <p className="mt-2 text-gray-600">
          Transaction Amount: ₹{amount.toLocaleString()}
        </p>

        <p className="text-gray-600">
          Category: {category}
        </p>

        <div className="mt-8 rounded-xl border p-8 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Recommended Card
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            {bestCard.name}
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-5">
              <p className="text-sm text-gray-500">
                Estimated Reward
              </p>

              <p className="mt-2 text-3xl font-bold">
                ₹{bestCard.rewardValue.toFixed(0)}
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-5">
              <p className="text-sm text-gray-500">
                Reward Rate
              </p>

              <p className="mt-2 text-3xl font-bold">
                {bestCard.rewardRate}%
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border p-6 shadow-sm">
          <h3 className="text-xl font-semibold">
            Card Comparison
          </h3>

          <div className="mt-5 space-y-4">
            {rankedCards.map((card) => (
              <div
                key={card.name}
                className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
              >
                <span>{card.name}</span>

                <span className="font-semibold">
                  ₹{card.rewardValue.toFixed(0)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            href="/optimize"
            className="rounded-lg bg-black px-6 py-3 text-white"
          >
            Optimize Another Transaction
          </Link>

          <Link
            href="/dashboard"
            className="rounded-lg border px-6 py-3"
          >
            Back to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}