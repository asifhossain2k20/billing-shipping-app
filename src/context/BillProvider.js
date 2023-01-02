import React, { createContext, useState } from 'react';
export const BillContext=createContext()
const BillProvider = (props) => {
    const [data,setData]=useState([])
    const billInfo={
        setData,
        data
    }
    
    return (
        <BillContext.Provider value={billInfo}>
             {props.children}
        </BillContext.Provider>
    );
};

export default BillProvider;
