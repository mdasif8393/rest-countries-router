import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Countries.css'

const Countries = (props) => {

    const {name} = props.country;

    const history = useHistory();

    const handleClick = (name) => history.push(`/country/${name}`);

    return (
        <div className="countries">
            <h1>{name}</h1>
            <Link to= {`/country/${name}`} >See More</Link>
            <br />
            <button onClick={ () => {handleClick(name)} } >See More</button>
        </div>
    );
};

export default Countries;