import React, { useEffect, useState } from 'react';



export const Flash = () => {
  
    let [visibility, setVisibility] = useState(false);
    let [message, setMessage] = useState('');
    let [type, setType] = useState('');


    return (
        visibility && <div className={`alert alert-${type}`}>
                <span className="close"><strong>X</strong></span>
                <p>{message}</p>
            </div>
    )
}