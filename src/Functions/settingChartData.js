import { gettingData } from "./gettingDate";

export const settingChartData = (setChartData) => {
  setChartData({
    labels: prices.map((data) => gettingData(data[0])),
    datasets: [
      {
        // label: coin?.name,
        data: prices.map((data) => data[1]),
        borderWidth: 1,
        fill: false,
        backgroundColor: "rgba(58,128,233,0.1)",
        tension: 0.25,
        borderColor: "#3a80e9",
        pointRadius: 0,
      },
    ],
  });
};
