const getHiddenCard = (card, stars = 2) => {
  return '*'.repeat(stars) + card.slice(12,16);
};

export default getHiddenCard;