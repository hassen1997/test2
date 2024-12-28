"use client";

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const series = [{ data: [0,75,0,125,0,175 ] }];

export default function ColorScale() {
  const [colorX, setColorX] = React.useState('piecewise');
  const [colorY, setColorY] = React.useState('None');

  return (
    <Stack direction="column" spacing={1} sx={{ width: '150%', maxWidth: 900, height:"70vh"}}>
      <Stack direction="row" spacing={1}>
      
       
      </Stack>

      <BarChart
        height={300}
        grid={{ horizontal: true }}
        series={series}
        margin={{
          top: 10,
          bottom: 20,
        }}

        yAxis={[
            {
              label: 'Value', // يمكنك تغيير النص حسب الحاجة
              sx: {
                tickLabel: { fill: '#ffffff' }, // تغيير لون الأرقام إلى الأبيض
              },
            },
          ]}

        
        xAxis={[
          {
            scaleType: 'band',
            data: [
              new Date(2019, 1, 1),
              new Date(2020,1,1),
              new Date(2021, 1, 1),
              new Date(2022, 1, 1),
              new Date(2023, 1, 1),
              new Date(2024, 1, 1),
              new Date(2025, 1, 1),
              new Date(2026, 1, 1),
            ],
            valueFormatter: (value) => value.getFullYear().toString(),
            colorMap:
              (colorX === 'ordinal' && {
                type: 'ordinal',
                colors: [
                  '#ffffff',
                  '#ffffff',
                  '#ffffff',
                  '#ffffff',
                  '#ffffff',
                  '#ffffff',
                ],
              }) ||
              (colorX === 'continuous' && {
                type: 'continuous',
                min: new Date(sx, 1, 1),
                max: new Date(sx, 1, 1),
                color: ['green', 'orange'],
              }) ||
              (colorX === 'piecewise' && {
                type: 'piecewise',
                thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
                colors: ['#7D4283', 'orange', '#F8961E'],
              }) ||
              undefined,
          },
        ]}
      />
     
    </Stack>
  );
}
