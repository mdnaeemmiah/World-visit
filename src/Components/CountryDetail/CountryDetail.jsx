import CountryData from "../CountryData/CountryData";


const CountryDetail = (props) => {
    // const {county,handleVisitedContry,handleViistedFlags}=props;
    return (
        <div>
            <h3>Country Details</h3>
            <hr />
            {/* <CountryData>
            county={county}
            handleVisitedContry={handleVisitedContry}
            handleViistedFlags ={handleViistedFlags}
            </CountryData> */}
            <CountryData {...props} ></CountryData>
        </div>
    );
};

export default CountryDetail;