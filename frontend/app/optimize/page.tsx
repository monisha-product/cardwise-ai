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
              className="w-full rounded-lg border p-3"
              placeholder="Amount e.g. 20000"
            />
  
            <select className="w-full rounded-lg border p-3">
              <option>Travel</option>
              <option>Dining</option>
              <option>Online Shopping</option>
              <option>Grocery</option>
              <option>Fuel</option>
              <option>General Spend</option>
            </select>
  
            <input
              className="w-full rounded-lg border p-3"
              placeholder="Merchant e.g. MakeMyTrip"
            />
  
            <select className="w-full rounded-lg border p-3">
              <option>Domestic</option>
              <option>International</option>
            </select>
  
            <button className="w-full rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800">
              Recommend Best Card
            </button>
          </form>
        </section>
      </main>
    );
  }