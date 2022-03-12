import React, {useState} from 'react';
import TextBox from './TextBox';
// @ts-ignore 
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
// @ts-ignore 
import axios, { AxiosResponse } from 'axios';

function Horoscope() {

    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");

    //TODO: Fill in the ? with appropriate names/values for a horoscope.
    //HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.
    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {
        const toSend = {
            //TODO: Pass in the values for the data. Follow the format the route expects!
            sun : sun,
            moon : moon,
            rising : rising
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post('http://localhost:4567/horoscope', toSend, config)
        .then((response : AxiosResponse) => {
            console.log(response.data);
            //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
            //Note: It is very important that you understand how this is set up and why it works!
            setHoroscope(response.data['horoscope']);
        })
        .catch((error : Error)=> {
            console.log(error);
        });
    }


    return (
        <div className="Horoscope">
            <header className="Horoscope-header">
                <p>
                    This is the Horoscope Heading Title.
                </p>
            </header>
            <TextBox label={'Sun Sign'} change={setSun}></TextBox>
            <TextBox label={'Moon Sign'} change={setMoon}></TextBox>
            <TextBox label={'Rising Sign'} change={setRising}></TextBox>

            <AwesomeButton type="primary" onPress={requestHoroscope}>Submit</AwesomeButton>


            {horoscope.map((x, index) => <p key={index}>{x}</p>)}

        </div>

    );
}



export default Horoscope