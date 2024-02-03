
const findBestPetshop = (shops, smallDogsNumber, bigDogsNumber, day) => {
  if(shops.length === 0){
    return 'The petshop list is empty';
  };

  const firstPrices = getPricesBasedOnTheDay(shops[0], day);
  let bestPrice = calculateTotalPrice(smallDogsNumber, firstPrices.smallPrice, bigDogsNumber, firstPrices.bigPrice);
  let bestshop = shops[0];

  shops.forEach(shop => {
    const prices = getPricesBasedOnTheDay(shop, day);
    let currentPrice = calculateTotalPrice(smallDogsNumber, prices.smallPrice, bigDogsNumber, prices.bigPrice);

    console.log(`\nShop: ${shop.name}. price: ${currentPrice}\n`);
    if(currentPrice < bestPrice ){
      bestPrice = currentPrice;
      bestshop = shop;
    }
    else if (currentPrice === bestPrice){
      console.log(`\nThere was a tie beetween ${shop.name} and ${bestshop.name}\n`);
      if (shop.distance < bestshop.distance){
        bestPrice = currentPrice;
        bestshop = shop;
      }
    }

  });
  
  return bestshop;
};

const calculateTotalPrice = (smallDogsNumber, smallDogsPrice, bigDogsNumber, bigDogsPrice) => {
  
  const totalPrice = (smallDogsNumber * smallDogsPrice) + (bigDogsNumber * bigDogsPrice);

  return totalPrice;
};

const getPricesBasedOnTheDay = (shop, day) => {
  const weekend = day === 0 || day === 6;
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