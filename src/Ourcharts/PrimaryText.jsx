import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import {  pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Box } from '@mui/material';
function PrimaryText() {
  return (

    <>
    
   
<PieChart
  colors={['red', '', 'green']} // Use palette
  series={[

  
  
  
    
    {
      data: [   { value: 10, color: '#F3722C' },  { value: 10, color: '  #7D4283' },],
      innerRadius: 104,
      outerRadius: 149,
      paddingAngle: -187,
      cornerRadius: 2,
      startAngle: 270,
      endAngle: -270,
      cx: 150,
      cy: 150,
    }
  ]}
  
/> 





</>



)
}

export default PrimaryText