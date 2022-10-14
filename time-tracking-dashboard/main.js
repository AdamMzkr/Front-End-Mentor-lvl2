const DATA = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const dailyArrCur = [];
const dailyArrPrev = [];

DATA.forEach((el) => {
  dailyArrCur.push(el.timeframes.daily.current);
  dailyArrPrev.push(el.timeframes.daily.previous);
});

const currentArr = document.querySelectorAll(".current");
const lastArr = document.querySelectorAll(".last");

const dayOp = document.querySelector("#day");

/*set displayed dafault value */
for (let i = 0; i < currentArr.length; i++) {
  currentArr[i].textContent = dailyArrCur[i];
  lastArr[i].textContent = dailyArrPrev[i];
}

// dayOp.addEventListener("click", () => {
//   for (let i = 0; i < currentArr.length; i++) {
//     currentArr[i].textContent = dailyArrCur[i];
//     lastArr[i].textContent = dailyArrPrev[i];
//   }
// });
