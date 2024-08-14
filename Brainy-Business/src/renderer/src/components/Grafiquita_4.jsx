import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const data = [
  { month: 'Ene', Aguacate: 3000, Frijoles: 5000, Leche: 8000 },
  { month: 'Feb', Aguacate: 4000, Frijoles: 7000, Leche: 10000 },
  { month: 'Mar', Aguacate: 5000, Frijoles: 9000, Leche: 12000 },
  { month: 'Abr', Aguacate: 6000, Frijoles: 11000, Leche: 14000 },
  { month: 'May', Aguacate: 7000, Frijoles: 13000, Leche: 16000 },
  { month: 'Jun', Aguacate: 8000, Frijoles: 15000, Leche: 18000 },
  { month: 'Jul', Aguacate: 9000, Frijoles: 17000, Leche: 20000 },
  { month: 'Ago', Aguacate: 10000, Frijoles: 14000, Leche: 17000 },
  { month: 'Sep', Aguacate: 11000, Frijoles: 16000, Leche: 19000 },
  { month: 'Oct', Aguacate: 12000, Frijoles: 18000, Leche: 21000 },
  { month: 'Nov', Aguacate: 13000, Frijoles: 15000, Leche: 18000 },
  { month: 'Dic', Aguacate: 14000, Frijoles: 17000, Leche: 20000 }
]

export default function Grafiquita_4() {
  return (
    <>
      <LineChart width={1200} height={700} data={data}>
        <XAxis dataKey="month" />
        <YAxis domain={[0, 25000]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />

        <Line type="monotone" dataKey="Aguacate" stroke="#8884d8" />
        <Line type="monotone" dataKey="Frijoles" stroke="#4339F2" />
        <Line type="monotone" dataKey="Leche" stroke="#06b6d4" />
      </LineChart>
    </>
  )
}
