const petshops = [
  {
    "weekdayPrices": {
      "small": 15,
      "big": 50
    },
    "weekendPrices": {
      "small": 20,
      "big": 55
    },
    "_id": "65bc8deaf15f9699af20a22d",
    "name": "Vai Rex",
    "image": "https://images.pexels.com/photos/16991194/pexels-photo-16991194/free-photo-of-animal-bicho-cachorro-cao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "distance": 1700,
    "createdAt": "2024-02-02T06:38:34.659Z",
    "updatedAt": "2024-02-02T06:38:34.659Z",
    "__v": 0
  },
  {
    "weekdayPrices": {
      "small": 30,
      "big": 45
    },
    "weekendPrices": {
      "small": 30,
      "big": 45
    },
    "_id": "65bd5dd1c953ebf021eaee62",
    "name": "ChowChawgas",
    "image": "https://images.pexels.com/photos/7176277/pexels-photo-7176277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "distance": 800,
    "createdAt": "2024-02-02T21:25:37.671Z",
    "updatedAt": "2024-02-02T21:25:37.671Z",
    "__v": 0
  },
  {
    "weekdayPrices": {
      "small": 20,
      "big": 40
    },
    "weekendPrices": {
      "small": 24,
      "big": 48
    },
    "_id": "65bd5edbc953ebf021eaee66",
    "name": "Meu Canino Feliz",
    "image": "https://images.pexels.com/photos/13016002/pexels-photo-13016002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "distance": 2000,
    "createdAt": "2024-02-02T21:30:03.656Z",
    "updatedAt": "2024-02-02T21:30:03.656Z",
    "__v": 0
  }
];


const findBestPetshop = (shops, smallDogsNumber, BigDogsNumber, day) => {

  shops.forEach(shop => {
  

    let bestPrice = shop
  });


};

const calculateTotalPrice = (shop, weekend) => {
  

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


// console.log(calculateTotalPrice(2, 20, 1, 50));

const { weekendPrices: {small, big} } = petshops[0];

console.log(big);