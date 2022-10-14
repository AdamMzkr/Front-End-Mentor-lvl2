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

const dailyArrCurrent = [];
const dailyArrPrev = [];

const weekArrCurrent = [];
const weekArrayPrev = [];

const monthArrayCurrent = [];
const monthArrayPrev = [];

DATA.forEach((el) => {
  dailyArrCurrent.push(el.timeframes.daily.current);
  dailyArrPrev.push(el.timeframes.daily.previous);
  weekArrCurrent.push(el.timeframes.weekly.current);
  weekArrayPrev.push(el.timeframes.weekly.previous);
  monthArrayCurrent.push(el.timeframes.monthly.current);
  monthArrayPrev.push(el.timeframes.monthly.previous);
});

const arrayElCurrent = document.querySelectorAll(".current");
const arrayElLast = document.querySelectorAll(".last");

const dayOp = document.querySelector("#day");
const weekOp = document.querySelector("#week");
const monthOp = document.querySelector("#month");

/*set displayed dafault value */
for (let i = 0; i < arrayElCurrent.length; i++) {
  arrayElCurrent[i].textContent = dailyArrCurrent[i];
  arrayElLast[i].textContent = dailyArrPrev[i];
}

dayOp.addEventListener("click", () => {
  for (let i = 0; i < arrayElCurrent.length; i++) {
    arrayElCurrent[i].textContent = dailyArrCurrent[i];
    arrayElLast[i].textContent = dailyArrPrev[i];
    dayOp.classList.add("active");
    weekOp.classList.remove("active");
    monthOp.classList.remove("active");
  }
});

weekOp.addEventListener("click", () => {
  for (let i = 0; i < arrayElCurrent.length; i++) {
    arrayElCurrent[i].textContent = weekArrCurrent[i];
    arrayElLast[i].textContent = weekArrayPrev[i];
    weekOp.classList.add("active");
    dayOp.classList.remove("active");
    monthOp.classList.remove("active");
  }
});

monthOp.addEventListener("click", () => {
  for (let i = 0; i < arrayElCurrent.length; i++) {
    arrayElCurrent[i].textContent = monthArrayCurrent[i];
    arrayElLast[i].textContent = monthArrayPrev[i];
    monthOp.classList.add("active");
    weekOp.classList.remove("active");
    dayOp.classList.remove("active");
  }
});
