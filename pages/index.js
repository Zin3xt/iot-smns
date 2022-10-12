import Head from "next/head";
import styles from "../styles/Home.module.css";
import { options1 } from "./chartsOptions/nChart";
import { options2 } from "./chartsOptions/pChart";
import { options3 } from "./chartsOptions/kChart";
import { options4 } from "./chartsOptions/tempOption";
import { options5 } from "./chartsOptions/moisOption";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);
import { Line } from "react-chartjs-2";
import { useRef } from "react";
export default function Home() {
  const lineChart5 = useRef(null);
  const lineChart4 = useRef(null);
  const lineChart3 = useRef(null);
  const lineChart2 = useRef(null);
  const lineChart = useRef(null);

  var defaultData = {
    labels: ["January", "February", "March", "April", "May", "May", "May"], //[0,1,2,3,4,5,6....99]
    datasets: [{ data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6, 0.3] }],
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}></main>
      <h1>hahaha</h1>
      <Line
        data={defaultData}
        width={100}
        height={40}
        options={options1}
        ref={lineChart}
      ></Line>
      <Line
        data={defaultData}
        width={100}
        height={40}
        options={options2}
        ref={lineChart2}
      ></Line>
      <Line
        data={defaultData}
        width={100}
        height={40}
        options={options3}
        ref={lineChart3}
      ></Line>
      <Line
        data={defaultData}
        width={100}
        height={40}
        options={options4}
        ref={lineChart4}
      ></Line>
      <Line
        data={defaultData}
        width={100}
        height={40}
        options={options5}
        ref={lineChart5}
      ></Line>
    </div>
  );
}
