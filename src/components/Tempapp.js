import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () =>{

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("bengaluru");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=dd08b9abd97a3e17e75fc287f1243f11`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        } 
        
        fetchApi();
    },[search] ) 

    return( 
        <>
        <div className="box">
            <div className="inputData">
                <input
                type="search"
                value={search}
                className="inputField" 
                onChange={ (event) => {setSearch(event.target.value)}} />
            </div>

        {!city ? (
            <p className="errorMsg"> No Data Found </p>
        ) : (
            <div>
            <div className="info">
                <h2 className="location">
                {search}
                </h2>
                <h1 className="temp">
                    {city.temp}°cel
                </h1>
                <h3 className="tempmin_max"> min : {city.temp_min}°cel | max : {city.temp_max}°cel</h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
        )}
         
        </div>

        </>

    )
}

export default Tempapp;