import React, { useContext, useState } from 'react';
import { DropdownList } from 'react-widgets';
import { BillContext } from '../../../context/BillProvider';
import './ShippingAddress.css'
const ShippingAddress = () => {
    const {data,setData}=useContext(BillContext)
    const[value,setValue]=useState(false)
    console.log(data);
    return (
        <div className='container'>
            <div className='form-container'>
            <div className='header'>
                <h3>Shipping Address</h3>
                <button onClick={()=>{
                    if(data.length===0){
                        alert('Please Update your Billing Form')
                    }
                    else{
                        setValue(true)
                    }
                    
                }}>Shipping Done</button>
                <button onClick={()=>{
                    setData([])
                    setValue(false)
                }}>Reset</button>
            </div>
            <form action="">
                <div>
                    <p >Name: </p>
                    <input disabled value={value===true && data!==null ? data[0]?.name :'Enter Your Name'}  type="text" />
                </div>
                <div>
                    <p >Country: </p>
                    <DropdownList
                        disabled
                        value={value===true && data!==null ? data[1]?.country :"Choose Your Country"} 
                    />   
                </div>
                <div>
                    <p >Division/State: </p>
                    <DropdownList
                        disabled
                        value={value===true && data!==null ? data[2]?.division :"Choose Your Divison"}
                    />
                </div>
                <div>
                    <p >City/Sub-District/Thana: </p>
                    <DropdownList
                        disabled
                        value={value===true && data!==null ? data[3]?.district :"Choose Your City"} 
                    />
                </div>
                <div>
                    <p >Union/Area/Town: </p>
                    <DropdownList
                        disabled
                        value={value===true && data!==null ? data[4]?.area :"Choose Your Area"} 
                    />
                </div>
                <div>
                    <p >Zip Code: </p>
                    <DropdownList
                       disabled
                        value={value===true && data!==null ? data[5]?.zip :"Choose Your Zip Code"} 
                    />
                </div>
                <div>
                    <p >Street Address: </p>
                    <DropdownList
                        disabled
                        value={value===true && data!==null ? data[6]?.street :"Enter Your Street Address"} 
                    />
                </div>
            </form>
        </div>
            
        </div>
    );
};

export default ShippingAddress;