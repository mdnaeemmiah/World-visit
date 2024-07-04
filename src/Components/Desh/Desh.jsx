import { useState } from 'react';
import './desh.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Desh = ({county,handleVisitedContry,handleViistedFlags}) => {
    const {name ,flags, area,population,cca3}= county;

    const [Visited,setVisited]= useState(false);
    const handleVisited=()=>{
        setVisited(!Visited)
    }
  
// remove item from an array in a state 
// use filter 




    return (
        <div className={`desh ${Visited && 'visited'}`}>
            <h2 style={{color:Visited?'purple':'white'}}>name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area:{area}</p>
            <p>Population:{population}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={()=> handleVisitedContry(county)}>Mark visited</button>
            <br />
            <button onClick={()=>handleViistedFlags(county.flags.png)}> Add flags </button>
            <br />
            <button onClick={handleVisited}>{!Visited?'Going':'visited'}</button>
            {Visited? 'I have visited this county':'I want to visit'}
            <hr />
            <CountryDetail>
            county={county}
            handleVisitedContry={handleVisitedContry}
            handleViistedFlags ={handleViistedFlags}
            </CountryDetail>
        </div>
    );
};

export default Desh;