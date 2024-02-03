
const findBestPetshop = (shops, smallDogsNumber, bigDogsNumber, day) => {
  if(shops.length === 0){ // if the list is empty it returns so the rest of the function dont execute
    return 'The petshop list is empty';
  };

  // initializes the best shop and best price as the first one in the array
  const firstPrices = getPricesBasedOnTheDay(shops[0], day); 
  let bestPrice = calculateTotalPrice(smallDogsNumber, firstPrices.smallPrice, bigDogsNumber, firstPrices.bigPrice);
  let bestshop = shops[0];

  // pass on each item of the array and calculates the price in each store
  shops.forEach(shop => { 
    const prices = getPricesBasedOnTheDay(shop, day);
    let currentPrice = calculateTotalPrice(smallDogsNumber, prices.smallPrice, bigDogsNumber, prices.bigPrice);

    console.log(`\nShop: ${shop.name}. price: ${currentPrice}\n`);
    // if the price of the current shop is lower than the previous best price stores, it is stored in the best price variable and the shop is stored in best shop
    if(currentPrice < bestPrice ){
      bestPrice = currentPrice;
      bestshop = shop;
    }
    // if the prices are the same, the distance of the stores will be the tie-breaker
    else if (currentPrice === bestPrice){
      if (shop.distance < bestshop.distance){
        bestPrice = currentPrice;
        bestshop = shop;
      }
    }

  });
  
  return bestshop;
};

const calculateTotalPrice = (smallDogsNumber, smallDogsPrice, bigDogsNumber, bigDogsPrice) => { // this function encapsulates the formula to get the total price
  
  const totalPrice = (smallDogsNumber * smallDogsPrice) + (bigDogsNumber * bigDogsPrice);

  return totalPrice;
};

const getPricesBasedOnTheDay = (shop, day) => { // receive the day and the current shop and returns the correct prices
  const weekend = day === 0 || day === 6; // checks if the day is 0 or 6 (represents sunday and saturday in js date obj)
  let smallPrice, bigPrice;

  if(weekend){
    const { weekendPrices: {small, big} } = shop;
    smallPrice = small;
    bigPrice = big
  }else{
    const { weekdayPrices: {small, big} } = shop;
    smallPrice = small;
    bigPrice = big
  };

  return { smallPrice, bigPrice };
}

export default findBestPetshop;