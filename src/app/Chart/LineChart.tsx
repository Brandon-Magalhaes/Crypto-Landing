import React, { useEffect, useRef } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string | string[]; // Alterado para aceitar uma string única ou um array de strings
    tension: number;
  }[];
}

const LineChart: React.FC<{ data: ChartData }> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();

  useEffect(() => {
    if (chartRef.current && data) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: data,
          options: {
            plugins: {
              legend: {
                display: false, // Ocultar a legenda
              },
            },
            elements: {
              point: {
                radius: 0, // Definir o raio do ponto como 0 para ocultá-lo
              },
            },
            scales: {
              x: {
                display: false, // Ocultar o eixo x
              },
              y: {
                display: false, // Ocultar o eixo y
              },
            },
          },
        });
      }
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
