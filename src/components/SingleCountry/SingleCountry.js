import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleCountry = () => {
    const {name} = useParams();

    const [country, setCountry] = useState({});

    useEffect(() =>{
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then( res => res.json() )
        .then( data => setCountry(data[0]) )
    } ,[])

    console.log(country)


    return (
        <div className="countries">
            <img src={country.flag} alt="" />
            <h1>{country.name}</h1>
            <h3>{country.capital}</h3>
        </div>
    );
};

export default SingleCountry;