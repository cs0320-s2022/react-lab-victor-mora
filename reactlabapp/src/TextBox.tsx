import React from 'react';
import './App.css';

function TextBox(props : any) {
    const changeHandler = (event : React.FormEvent<HTMLInputElement>) : void => {props.change(event.currentTarget.value)}
    return (
        <div className="TextBox">
            
            <input type={'text'} onChange={changeHandler}>

            </input>

            
            <label>
                <p>
                    {props.label}
                </p>
            </label>
        

        </div>
        

    );
}


export default TextBox