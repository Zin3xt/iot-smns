export const options2 = {
  plugins: {
    Legend: {
      display: true,
    },
    title: {
      display: true,
      text: "Phosphorus",
      color: "white",
      font: {
        size: 18,
      },
    },
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      borderColor: "green",
      fill: "start",
      backgroundColor: "lightgreen",
    },
    point: {
      radius: 1,
      hitRadius: 1,
    },
  },
  scales: {
    x: {
      display: true,
      ticks: {
        color: "white",
      },
    },
    y: {
      display: true,
      ticks: {
        color: "white",
      },
    },
  },
};
