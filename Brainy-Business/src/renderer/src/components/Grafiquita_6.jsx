import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { month: 'Ene', value: 3000 },
  { month: 'Feb', value: 4000 },
  { month: 'Mar', value: 5000 },
  { month: 'Abr', value: 6000 },
  { month: 'May', value: 7000 },
  { month: 'Jun', value: 8000 },
  { month: 'Jul', value: 9000 },
  { month: 'Ago', value: 10000 },
  { month: 'Sep', value: 11000 },
  { month: 'Oct', value: 12000 },
  { month: 'Nov', value: 13000 },
  { month: 'Dic', value: 14000 },
];

export default function Grafiquita_6() {
    return (
        <AreaChart width={1200} height={700} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    )
}
