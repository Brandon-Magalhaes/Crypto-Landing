"use client";
import React from "react";
import LineChart from "../Chart/LineChart";

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string[]; // Alterado para array de strings para permitir múltiplas cores
    tension: number;
  }[];
}

export default function LineGraphic() {
  // Dados de exemplo para o gráfico do Bitcoin
  const bitcoinData = {
    labels: [
      "Dia 1",
      "Dia 2",
      "Dia 3",
      "Dia 4",
      "Dia 5",
      "Dia 6",
      "Dia 7",
      "Dia 8",
      "Dia 9",
      "Dia 10",
      "Dia 11",
      "Dia 12",
      "Dia 13",
      "Dia 14",
      "Dia 15",
      "Dia 16",
      "Dia 17",
      "Dia 18",
      "Dia 19",
      "Dia 20",
    ],
    datasets: [
      {
        label: "Preço do Bitcoin",
        data: [
          45000, 48000, 50000, 49000, 51000, 52000, 53000, 52000, 51000, 48000,
          60000, 50000, 60000, 52000, 58000, 60000, 62000, 63000, 62000, 63000,
        ], // Dados fictícios, substitua pelos dados reais
      },
    ],
  };

  // Processar os dados para definir as cores da linha com base na direção do movimento
  const processedBitcoinData: ChartData = {
    labels: bitcoinData.labels,
    datasets: [
      {
        ...bitcoinData.datasets[0],
        borderColor: getLineColor(bitcoinData.datasets[0].data),
        tension: 0.4,
      },
    ],
  };

  // Função para determinar a cor da linha com base na direção do movimento
  function getLineColor(data: number[]) {
    const colors = [];
    for (let i = 1; i < data.length; i++) {
      if (data[i] > data[i - 1]) {
        // Subindo: verde
        colors.push("green");
      } else {
        // Descendo: vermelho
        colors.push("red");
      }
    }
    return colors;
  }

  return (
    <main className="w-28 h-8">
      {/* Renderize o componente LineChart com os dados processados */}
      <LineChart data={processedBitcoinData} />
    </main>
  );
}
