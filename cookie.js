let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

// name the companies and their properties
let Seattle = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  customerPerHour: [],
  cookiesPerHour: [],
  customerRatePerHour: function () {
    //   loop that iterates through the hours array
    for (let i = 0; i < hours.length; i++) {
      let randomNumberOfCustomersGenerated = getRandomInt(
        this.minCustomer,
        this.maxCustomer
      );

      this.customerPerHour.push(randomNumberOfCustomersGenerated);
    }
  },
  customersCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNumberOfCookiesGenerated = getRandomInt(
        this.customerPerHour[i],
        this.avgCookieSale
      );
      console.log("adding cookies");

      this.cookiesPerHour.push(randomNumberOfCookiesGenerated);
    }
  },
  //   cookiesSoldPerHour:wasd
};

let Tokyo = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  customerPerHour: [],
  cookiesPerHour: [],
  customerRatePerHour: function () {
    //   loop that iterates through the hours array
    for (let i = 0; i < hours.length; i++) {
      let randomNumberOfCustomersGenerated = getRandomInt(
        this.minCustomer,
        this.maxCustomer
      );

      this.customerPerHour.push(randomNumberOfCustomersGenerated);
    }
  },
  customersCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomNumberOfCookiesGenerated = getRandomInt(
        this.customerPerHour[i],
        this.avgCookieSale
      );
      console.log("adding cookies");

      this.cookiesPerHour.push(randomNumberOfCookiesGenerated);
    }
  },
  //   cookiesSoldPerHour:wasd
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let cookiesCity = [Seattle, Tokyo];

// for (let i = 0; i < cookiesCity.length; i++) {
//     console.log('cookies university ');
//   // use the customerRatePerHour method in my seattle object
//   cookiesCity[i].customerRatePerHour();
//   // call the cookie function
//   cookiesCity[i].customersCookiesPerHour();

//   // from the seattle object print the customer per hr
//   console.log("Customer per hour");
//   for (let i = 0; i < cookiesCity[i].customerPerHour.length; i++) {
//     console.log(hours[i] + "  " + cookiesCity[i].customerPerHour[i]);
//   }
//   // from the seattle object print the cookies per hr
//   console.log("Cookies per hour");
//   for (let i = 0; i < cookiesCity[i].cookiesPerHour.length; i++) {
//     console.log(hours[i] + "  " + cookiesCity[i].cookiesPerHour[i]);
//   }
// }


















// use the customerRatePerHour method in my seattle object
Seattle.customerRatePerHour();
// call the cookie function
Seattle.customersCookiesPerHour();

// from the seattle object print the customer per hr
console.log("Customer per hour");
for (let i = 0; i < Seattle.customerPerHour.length; i++) {
  console.log(hours[i] + "  " + Seattle.customerPerHour[i]);
}
// from the seattle object print the cookies per hr
console.log('Cookies per hour');
for (let i = 0; i < Seattle.cookiesPerHour.length; i++) {
    console.log(hours[i] + "  " + Seattle.cookiesPerHour[i]);
  }

// use the customerRatePerHour method in my seattle object
Tokyo.customerRatePerHour();
// call the cookie function
Tokyo.customersCookiesPerHour();

// from the seattle object print the customer per hr
console.log("Tokyo Customer per hour");
for (let i = 0; i < Tokyo.customerPerHour.length; i++) {
  console.log(hours[i] + "  " + Tokyo.customerPerHour[i]);
}
// from the seattle object print the cookies per hr
console.log(' Tokyo Cookies per hour');
for (let i = 0; i < Tokyo.cookiesPerHour.length; i++) {
    console.log(hours[i] + "  " + Tokyo.cookiesPerHour[i]);
  }

// let Tokyo = {
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,
//   randomCustomer: Math.floor(Math.random() * 25), // generate a random number of customers per hour
//   avg: function () {
//     randomCustomer / avgCookieSale;
//   },
// };
// let companyThree = {
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSale: 3.7,
//   randomCustomer: Math.floor(Math.random() * 50), // generate a random number of customers per hour
//   avg: function () {
//     randomCustomer / avgCookieSale;
//   },
// };
// let companyFour = {
//   minCustomer: 20,
//   maxCustomer: 36,
//   avgCookieSale: 2.3,
//   randomCustomer: Math.floor(Math.random() * 50), // generate a random number of customers per hour
//   avg: function () {
//     randomCustomer / avgCookieSale;
//   },
// };
// let companyFive = {
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieSale: 4.6,
//   randomCustomer: Math.floor(Math.random() * 20), // generate a random number of customers per hour
//   // function that divides the random number of customers by the
//   avg: function () {
//     randomCustomer / avgCookieSale;
//   },
// };
