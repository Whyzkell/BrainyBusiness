import React from 'react'
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from 'recharts'

const data = [
  { mes: 'Enero', potaxio: 10000, aguacate: 5000 },
  { mes: 'Febrero', potaxio: 12000, aguacate: 6000 },
  { mes: 'Marzo', potaxio: 9000, aguacate: 7000 },
  { mes: 'Abril', potaxio: 18000, aguacate: 8000 },
  { mes: 'Mayo', potaxio: 20000, aguacate: 10000 },
  { mes: 'Junio', potaxio: 22000, aguacate: 12000 },
  { mes: 'Julio', potaxio: 24000, aguacate: 14000 },
  { mes: 'Agosto', potaxio: 26000, aguacate: 16000 },
  { mes: 'Septiembre', potaxio: 28000, aguacate: 18000 },
  { mes: 'Octubre', potaxio: 30000, aguacate: 20000 },
  { mes: 'Noviembre', potaxio: 32000, aguacate: 22000 },
  { mes: 'Diciembre', potaxio: 35000, aguacate: 25000 }
]

export default function Grafiquita() {
  return (
    <AreaChart
      width={1200}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="mes" />
      <YAxis domain={[1000, 50000]} />
      <Tooltip />
      <Area type="monotone" dataKey="potaxio" stackId="1" stroke="#06b6d4" fill="#06b6d4" />
      <Area type="monotone" dataKey="aguacate" stackId="1" stroke="#a78bfa" fill="#a78bfa" />
    </AreaChart>
  )
}
