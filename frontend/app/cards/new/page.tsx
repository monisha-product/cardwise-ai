export default function AddCard() {
    return (
      <main className="min-h-screen bg-white p-10">
        <div className="flex items-center justify-between border-b pb-6">
          <h1 className="text-3xl font-bold">CardWise AI</h1>
          <div>Profile</div>
        </div>
  
        <section className="mx-auto mt-10 max-w-xl">
          <h2 className="text-2xl font-semibold">Add New Card</h2>
          <p className="mt-2 text-gray-600">
            Add reward details so CardWise AI can recommend the best card.
          </p>
  
          <form className="mt-8 space-y-5">
            <input className="w-full rounded-lg border p-3" placeholder="Card Name" />
            <input className="w-full rounded-lg border p-3" placeholder="Issuer" />
            <input className="w-full rounded-lg border p-3" placeholder="Annual Fee" />
            <input className="w-full rounded-lg border p-3" placeholder="Base Reward %" />
            <input className="w-full rounded-lg border p-3" placeholder="Travel Reward %" />
            <input className="w-full rounded-lg border p-3" placeholder="Dining Reward %" />
            <input className="w-full rounded-lg border p-3" placeholder="Online Shopping Reward %" />
  
            <button className="w-full rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800">
              Save Card
            </button>
          </form>
        </section>
      </main>
    );
  }