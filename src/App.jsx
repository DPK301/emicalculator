
import { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {

  const [amount,setAmount]=useState(0);
    const [iper,setiPer]=useState(0);
    const [emi,setEMI]=useState('');
    const [tenure,setTenure]=useState(0);
    const reset=(e)=>{
      setAmount(0);
      setiPer(0);
      setEMI(0);
      setTenure(0);
  
    }
    function calculate(e){
      const r = iper/12/100;
      const total= amount*r*(1+r)**tenure/((1+r)**tenure-1);
     setEMI(total.toFixed(0));
   
   }
  return (
    <div className="App">
      <div className='row'>
        <div className="col"></div>
        <div className="col"><div className=''>
      <div >
        <h1 style={{fontSize:'100px'}}>
          <b>EMI</b>
        </h1>
        <h3 ><b>Calculator</b></h3>
       </div>
      
<div style={{justifyContent:"space-around",marginTop:'10px'}}>
<TextField value={amount||''} className='mt-3 shadow '  onChange={(e)=>setAmount(e.target.value)} id="outlined-basic" label="Loan amount" variant="outlined" /> <br />

<TextField value={iper||''}  className='mt-3 shadow '  onChange={(e)=>setiPer(e.target.value)} id="outlined-basic" label="interest rate %" variant="outlined" /> <br />


<TextField value={tenure||''} className='mt-3 shadow '  onChange={(e)=>setTenure(e.target.value)} id="outlined-basic" label="tenure / in month" variant="outlined" /> <br />
</div>


     
      <div style={{width:'250px'}}>
      <Button  className='mt-3 shadow '   onClick={(e)=>calculate(e)} variant="contained">Calculate</Button>
      <Button  className='mt-3 ms-3 shadow '   onClick={(e)=>reset(e)} variant="contained">RESET</Button>
      </div>
     
      <div  style={{backgroundColor:'rgba(255, 255, 255, 0.566)',zIndex:'1'}} className='mt-3 p-3 card  border-0'>
      
        <b >EMI amount :  <span style={{color:'green'}}>Rs {emi}</span></b>

      </div>

      </div></div>
        <div className="col"></div>

      </div>
    </div>
  );
}

export default App;
