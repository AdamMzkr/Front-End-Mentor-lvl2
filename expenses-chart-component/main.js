const dataJONSON = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
const daysArr = [];
const amountArr = [];

dataJONSON.forEach((el) => {
  daysArr.push(el.day);
  amountArr.push(el.amount);
});
const data = {
  labels: daysArr,
  datasets: [
    {
      data: amountArr,
      backgroundColor: "hsl(186, 34%, 60%)",
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        color: "hsl(33, 100%, 98%)",
      },

      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
