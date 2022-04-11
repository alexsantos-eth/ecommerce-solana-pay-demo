export const addProp = (
  setSelectedProp: SetState<Record<string, number>>,
  add: number,
  id: string,
  type: "sauces" | "extras" | "dips",
  currentProduct: Product
) =>
  setSelectedProp((prevProps) => {
    const globalCounter = Object.values(prevProps).reduce((a, b) => a + b, 0);
    if (globalCounter + add < +(currentProduct[`max${type}`] ?? 0) + 1)
      return {
        ...prevProps,
        [id]: Math.max(0, (prevProps[id] ?? 0) + add),
      };
    else return prevProps;
  });
