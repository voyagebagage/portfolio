export const calculateTotalWidth = (
  cardWidth: number,
  cardCount: number,
  cardMargin: number
): number => {
  return (cardWidth + cardMargin) * cardCount;
};
