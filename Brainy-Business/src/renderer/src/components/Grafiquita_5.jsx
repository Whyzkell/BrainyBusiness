import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const data = [
  { month: 'Ene', Lacteos: 3000, Granos_Basicos: 5000, Carnes: 8000 },
  { month: 'Feb', Lacteos: 4000, Granos_Basicos: 7000, Carnes: 10000 },
  { month: 'Mar', Lacteos: 5000, Granos_Basicos: 9000, Carnes: 12000 },
  { month: 'Abr', Lacteos: 6000, Granos_Basicos: 11000, Carnes: 14000 },
  { month: 'May', Lacteos: 7000, Granos_Basicos: 13000, Carnes: 16000 },
  { month: 'Jun', Lacteos: 8000, Granos_Basicos: 15000, Carnes: 18000 },
  { month: 'Jul', Lacteos: 9000, Granos_Basicos: 17000, Carnes: 20000 },
  { month: 'Ago', Lacteos: 10000, Granos_Basicos: 14000, Carnes: 17000 },
  { month: 'Sep', Lacteos: 11000, Granos_Basicos: 16000, Carnes: 19000 },
  { month: 'Oct', Lacteos: 12000, Granos_Basicos: 18000, Carnes: 21000 },
  { month: 'Nov', Lacteos: 13000, Granos_Basicos: 15000, Carnes: 18000 },
  { month: 'Dic', Lacteos: 14000, Granos_Basicos: 17000, Carnes: 20000 }
]

export default function Grafiquita_4() {
  return (
    <>
      <LineChart width={1200} height={700} data={data}>
        <XAxis dataKey="month" />
        <YAxis domain={[0, 25000]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />

        <Line type="monotone" dataKey="Lacteos" stroke="#8884d8" />
        <Line type="monotone" dataKey="Granos_Basicos" stroke="#4339F2" />
        <Line type="monotone" dataKey="Carnes" stroke="#06b6d4" />
      </LineChart>
    </>
  )
}
