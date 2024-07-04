import { useEffect } from "react";
import { useState } from "react";
import Desh from "../Desh/Desh";
import './countries.css'


const Contries = () => {
    const [county,setConuty] = useState([]);
    const [visitedVontries,setvisitedVontries] =useState([]);
    const [visitedFlags,setvisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setConuty(data))
    },[])


    const handleVisitedContry= county =>{
        // console.log('add this visited to your country');
        const newvisitedVontries =[...visitedVontries,county];
        setvisitedVontries(newvisitedVontries);
    }

const handleViistedFlags = flag =>{
    // console.log('flag adding')
    const newvisitedFlags =[...visitedFlags,flag];
    setvisitedFlags(newvisitedFlags);
}


    return (
        <div >
            <h2>Countries:{county.length} </h2>
            <div>
              <h3>Visited Countries:{visitedVontries.length}</h3>
              <ul>
                  {
                    visitedVontries.map(county => <li>{county.name.common}</li> )
                
                  }
                  
              </ul>
            </div>
            <div className="flag">
                {
                    visitedFlags.map((flag,ind) => <img src={flag} key={ind}></img>)
                }
            </div>
            <div className="counteirss">
            {
                county.map(county=><Desh 
                    handleViistedFlags={handleViistedFlags} 
                    handleVisitedContry={handleVisitedContry}
                     key={county.cca3}
                    county={county}></Desh>)
            }
            </div>
        </div>
    );
};

export default Contries;