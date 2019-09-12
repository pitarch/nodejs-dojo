function getMoneySpent(keyboards: number[], drivers: number[], budget: number): number {
  let max = -1;
  keyboards.forEach(keyboard => {
    drivers.forEach(driver => {
      let total = keyboard + driver;
      if (total <= budget && total > max) {
        max = total;
      }
    });
  });

  return max;
}

export const fn = getMoneySpent
