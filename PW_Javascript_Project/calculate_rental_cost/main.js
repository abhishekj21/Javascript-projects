const Economy = 4000,
  Midsize = 10000,
  Luxury = 20000;
const days = 10;
const value = 2;
const rent = function (Economy, Midsize, Luxury, days, value) {
  if (value === 1) {
    console.log(Economy * 10);
  } else if (value == 2) {
    console.log(Midsize * 10);
  } else {
    console.log(Luxury * 10);
  }
};

rent(Economy, Midsize, Luxury, days, value);
