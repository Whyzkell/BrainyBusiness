import React from 'react'
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts'

const data = [
  { mes: 'Enero', lacteos: 10000, tecnologia: 5000, abarrotes: 7000 },
  { mes: 'Febrero', lacteos: 12000, tecnologia: 6000, abarrotes: 8000 },
  { mes: 'Marzo', lacteos: 15000, tecnologia: 7000, abarrotes: 9000 },
  { mes: 'Abril', lacteos: 18000, tecnologia: 8000, abarrotes: 10000 },
  { mes: 'Mayo', lacteos: 20000, tecnologia: 10000, abarrotes: 12000 },
  { mes: 'Junio', lacteos: 22000, tecnologia: 12000, abarrotes: 14000 },
  { mes: 'Julio', lacteos: 24000, tecnologia: 14000, abarrotes: 16000 },
  { mes: 'Agosto', lacteos: 26000, tecnologia: 16000, abarrotes: 18000 },
  { mes: 'Septiembre', lacteos: 28000, tecnologia: 18000, abarrotes: 20000 },
  { mes: 'Octubre', lacteos: 30000, tecnologia: 20000, abarrotes: 22000 },
  { mes: 'Noviembre', lacteos: 32000, tecnologia: 22000, abarrotes: 24000 },
  { mes: 'Diciembre', lacteos: 35000, tecnologia: 25000, abarrotes: 26000 }
]

export default function Grafiquita_3() {
  return (
    <BarChart width={1200} height={700} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="mes" />
      <YAxis domain={[1000, 50000]} />
      <Tooltip />

      <Bar dataKey="lacteos" stackId="a" fill="#8884d8" />
      <Bar dataKey="tecnologia" stackId="a" fill="#06b6d4" />
      <Bar dataKey="abarrotes" stackId="a" fill="#4339F2" />
    </BarChart>
  )
}
