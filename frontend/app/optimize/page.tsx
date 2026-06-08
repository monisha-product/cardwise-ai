export default function OptimizeTransaction() {
  return (
    <main className="min-h-screen bg-white p-10">
      <div className="flex items-center justify-between border-b pb-6">
        <h1 className="text-3xl font-bold">CardWise AI</h1>
        <div>Profile</div>
      </div>

      <section className="mx-auto mt-10 max-w-xl">
        <h2 className="text-2xl font-semibold">Optimize Transaction</h2>
        <p className="mt-2 text-gray-600">
          Enter transaction details and we’ll recommend the best card.
        </p>

        <form action="/recommendation" className="mt-8 space-y-5">
          <input
            name="amount"
            className="w-full rounded-lg border p-3"
            placeholder="Amount e.g. 20000"
          />

          <select name="category" className="w-full rounded-lg border p-3">
            <option value="travel">Travel</option>
            <option value="dining">Dining</option>
            <option value="shopping">Online Shopping</option>
            <option value="grocery">Grocery</option>
            <option value="fuel">Fuel</option>
            <option value="general">General Spend</option>
          </select>

          <input
            name="merchant"
            className="w-full rounded-lg border p-3"
            placeholder="Merchant e.g. MakeMyTrip"
          />

          <select name="transactionType" className="w-full rounded-lg border p-3">
            <option value="domestic">Domestic</option>
            <option value="international">International</option>
          </select>

          <button className="w-full rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800">
            Recommend Best Card
          </button>
        </form>
      </section>
    </main>
  );
}