const coinOptions = [1000, 500, 200, 100, 50, 5, 1];
const recursiveChanges = [];
const nonRecursiveChanges = [];

function recursiveExchange(coin) {
  for (let i = 0; i < coinOptions.length; i++) {
    if (coin >= coinOptions[i]) {
      recursiveChanges.push(coinOptions[i]);
      recursiveExchange(coin - coinOptions[i]);
      break;
    }
  }
}

function nonRecursiveExchange(coin) {
    let k = 0;

    while (k < coinOptions.length) {
        let tempCoin = coin;

        if (tempCoin < coinOptions[k]) {
            k++;
        } else {
            let count = 0;
            while (tempCoin >= coinOptions[k]) {
                tempCoin -= coinOptions[k]; 
                count++;
            }

            if (count > 0) {
                coin -= count * coinOptions[k];
                for (let j = 0; j < count; j++) {
                    nonRecursiveChanges.push(coinOptions[k]);
                }
            }
            k++;
        }
    }
}

module.exports = {
    recursiveExchange,
    nonRecursiveExchange,
    recursiveChanges,
    nonRecursiveChanges
};
