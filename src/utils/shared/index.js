export const countItemsInOrder = (order) => {
    return Object.keys(order).reduce(
      (acc, itemName) => acc + order[itemName].amount
    , 0);
  };