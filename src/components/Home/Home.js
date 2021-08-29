import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Countries from '../Countries/Countries';
import './Home.css'

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then( res => res.json() )
        .then( data => setCountries(data) )
    } ,[] )

    return (
        <div>
            {
                countries.map( (country) => <Countries country={country}></Countries>)
            }
        </div>
    );
};

export default Home;