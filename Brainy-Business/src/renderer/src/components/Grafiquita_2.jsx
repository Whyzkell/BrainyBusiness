import React from 'react'
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts'

const data = [
  { mes: 'Enero', lacteos: 10000, abarrotes: 5000 },
  { mes: 'Febrero', lacteos: 12000, abarrotes: 15000 },
  { mes: 'Marzo', lacteos: 15000, abarrotes: 7000 },
  { mes: 'Abril', lacteos: 18000, abarrotes: 8000 },
  { mes: 'Mayo', lacteos: 20000, abarrotes: 10000 },
  { mes: 'Junio', lacteos: 22000, abarrotes: 12000 },
  { mes: 'Julio', lacteos: 24000, abarrotes: 14000 },
  { mes: 'Agosto', lacteos: 26000, abarrotes: 16000 },
  { mes: 'Septiembre', lacteos: 28000, abarrotes: 18000 },
  { mes: 'Octubre', lacteos: 30000, abarrotes: 20000 },
  { mes: 'Noviembre', lacteos: 32000, abarrotes: 22000 },
  { mes: 'Diciembre', lacteos: 35000, abarrotes: 25000 }
]

export default function Grafiquita_2() {
  return (
    <BarChart width={400} height={300} data={data} margin={{ right: 30, left: 20 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="mes" />
      <YAxis domain={[1000, 50000]} />
      <Tooltip />

      <Bar dataKey="lacteos" stackId="a" fill="#FE6BBA" />
      <Bar dataKey="abarrotes" stackId="a" fill="#0090FF" />
    </BarChart>
  )
}
