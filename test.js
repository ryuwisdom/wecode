function even() {
  let Nums = [];
  let result = [];

  for (let i = 0; i <= 50; i++) {
    Nums.push(i);

    if (Nums[i] % 2 == 0) {
      result.push(Nums[i]);
    }
  }

  return result;
}
console.log(even());
