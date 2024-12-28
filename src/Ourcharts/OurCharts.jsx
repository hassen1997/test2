import React from 'react'
import './Ourcharts.css'
import { BarChartPro } from '@mui/x-charts-pro/BarChartPro';
import NetProfit from './NetProfit';
import PrimaryText from './PrimaryText';
function OurCharts() {
  return (
    <div className='OurCharts'>
        <h1>OurCharts</h1>
<div className='Net'>
        <div className='Net-Profit'>

 <div className='Net-Profit-d'>        
<h1>Net Profit</h1>
<p>2024</p>
<NetProfit/>
<div  className='pip-1'>
  <p className='p-1'></p>
  <p>Product 1</p>
</div>

<div  className='pip-2'>
  <p className='p-2'></p>
  <p>Product 2</p>
</div>

<div  className='pip-3'>
  <p className='p-3'></p>
  <p>Product 3</p>
</div>
</div> 



        </div>

 <div className='Net-Profit'>
<h1>Primary Text</h1>
<h1>5.987,34</h1>
<p>Secondary text</p>
<PrimaryText/>
<div>
<div  className='pip-4'>
  <p className='p-4'></p>
  <p>Product 2</p>
</div>

<div  className='pip-5'>
  <p className='p-5'></p>
  <p>Product 1</p>
</div>
</div>


</div>
</div>
    </div>
  )
}

export default OurCharts