import React from 'react';
import { useState,useEffect,useCallback } from 'react';
import './text_changer.css';

const names = [
    'Escapes', 'Thrills', 'Experiences'
]

function Textchanger() {
    const [newName, setnewName] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 1000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return(
        <h1 className='text-changer'>{newName}</h1>
    )
}
export default Textchanger;

