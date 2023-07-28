import './maincard.css';
import { BsCurrencyDollar } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import Button from '../button/button';
import React , {useState, useEffect} from 'react';


function MainCard() {

    const [bill, setBill] = useState('');
    const [percentage, setPercentage] = useState(0);
    const [result, setResult] = useState(0);
    const [nrPeople, setNrPeople] = useState(2);
    const [total, setTotal] = useState(0);

    function reset(){
        setBill('');
        setResult(0);
        setPercentage(0);
        setNrPeople(2);
        setTotal(0);
    }

    function handleChange(e){
        if(e.target.value <=100){
            setPercentage(e.target.value)
            calculate(e.target.value)
        } else return;
        
    }
    function handleInputClick(e){
        if(e.target.value <=100){
            setPercentage(e.target.value)
            calculate(e.target.value)
        } else return;
        
    }
    function inputBill(e){
        setBill(e.target.value)
    }

    function focusBill(e){
        e.target.placeholder = ''
    }

    function calculate(perc){
        if(nrPeople < 1){reset(); return}
        if(bill[0] < 1){setBill(0);  setResult(0);return;}
        setResult(((perc/100)*bill)/nrPeople) ;
    
    }   

 

    function changeNrPeople(e){
        
        setNrPeople(e.target.value);
    }
 
    useEffect(() => {
        setTotal((bill/nrPeople)+result);
        if(result===Infinity ){setResult(0)}
        if(result===NaN ){setResult(0)}
      }, [result]); 
    useEffect(() => {
        if(total===Infinity){setTotal(0)}
        if(result===NaN ){setTotal(0)}
      }, [total]); 
  

    return (
    <div className="main-div">
        <div className='left-div'>
            <div className='bill-div'>
                <p style={{display:'flex', alignItems:'center', gap:'5px'}}>Bill<BsCurrencyDollar/></p>
                <input type="number" placeholder={0} value={bill} onChange={inputBill} onFocus={focusBill}/>
            </div>
            <div className='select-tip'>
                <p>Select tip %</p> 
                <div className='percentages'>
                    <Button percent={5} bill={bill} setPercentage={calculate}/>
                    <Button percent={10} bill={bill} setPercentage={calculate}/>
                    <Button percent={15} bill={bill} setPercentage={calculate}/>
                    <Button percent={25} bill={bill} setPercentage={calculate}/>
                    <Button percent={50} bill={bill} setPercentage={calculate}/>
                    <input type="number"  placeholder='Custom' onClick={handleInputClick} onChange={handleChange} />
                </div>
            </div>
            <div className='nr-people'>
                <p style={{display:'flex', alignItems:'center', columnGap:'10px'}}>Number of People <BiUser/></p>
                <input type="number" value={nrPeople} onChange={changeNrPeople}/>
            </div>
        </div>
        <div className='right-div'>
            <div className='amounts-div'>
                <div className='tip-amount'>
                    <p><strong style={{color:'white'}}>Tip Amount</strong><br />/ person</p>
                    <p style={{display:'flex', alignItems:'center', fontSize:'35px', color:'var(--strongcyan)' , maxWidth:'150px', overflow:'hidden'}}><BsCurrencyDollar/>{result}</p>
                </div>
                <div className='total-person'>
                    <p><strong style={{color:'white'}}>Total</strong>  <br/>/ person</p>
                    <p style={{display:'flex', alignItems:'center', fontSize:'35px', color:'var(--strongcyan)', maxWidth:'150px', overflow:'hidden'}}><BsCurrencyDollar/>{total}</p>
                </div>
            </div>
            <button className='reset' style={{border:'0px', padding:'10px', borderRadius:'7px', width:'80%', fontSize:'17px', backgroundColor:'var(--strongcyan)', color:'var(--Verydarkcyan)', cursor:'pointer'}} onClick={reset}>RESET</button>
        </div>
    </div>
  );
}

export default MainCard;
