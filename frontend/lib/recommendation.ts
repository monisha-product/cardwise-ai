import { cards } from "@/data/cards";

type Category =
  | "travel"
  | "dining"
  | "shopping"
  | "grocery"
  | "fuel"
  | "general";

export function getBestCard(amount: number, category: Category) {
  const rankedCards = cards
    .map((card) => {
      let rewardRate = card.baseReward;

      if (category === "travel") rewardRate = card.travelReward;
      if (category === "dining") rewardRate = card.diningReward;
      if (category === "shopping") rewardRate = card.shoppingReward;
      if (category === "grocery") rewardRate = card.groceryReward;
      if (category === "fuel") rewardRate = card.fuelReward;

      const rewardValue = (amount * rewardRate) / 100;

      return {
        ...card,
        rewardRate,
        rewardValue,
      };
    })
    .sort((a, b) => b.rewardValue - a.rewardValue);

  return {
    bestCard: rankedCards[0],
    rankedCards,
  };
}