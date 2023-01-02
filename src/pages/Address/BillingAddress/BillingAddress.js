import React, { useContext, useState } from 'react';
import { DropdownList } from 'react-widgets';
import { BillContext } from '../../../context/BillProvider';
import './BillingAddress.css'


const BillingAddress = () => {
    const [division,setDivision]=useState([])
    const [district,setDistrict]=useState([])
    const [area,setArea]=useState([])
    const [zip,setZip]=useState([])
    const [street,setStreet]=useState([])
    const {setData}=useContext(BillContext)

    const [details,setDetails]=useState([])
    const handleName=(e)=>{
        const name=e.target.value;
        const user={
            name:name
        }
        setDetails([user])
    }
    const handleCOuntry=(value)=>{
        const info=[...details,{country:value}]
        setDetails(info)
        fetch('data/division.json')
        .then(res=>res.json())
        .then(data=>{
            setDivision(data)
        })
    }
    const handleDivision=(value)=>{
        const info=[...details,{division:value.name}]
        setDetails(info)
        const divisionId=value.id;
        const selectedDivInfo = division.filter(div=>div.id===divisionId)
        setDistrict(selectedDivInfo[0].distrct)
    }
    const handleDistrict=(value)=>{
        const info=[...details,{district:value.dist_name}]
        setDetails(info)
        const districtId=value.dist_id;
        const selectedDistInfo=district.filter(dist=>dist.dist_id===districtId)
        setArea(selectedDistInfo[0].area)
    }
    const handleArea=(value)=>{
        const info=[...details,{area:value.area_name}]
        setDetails(info)
        const areaId=value.area_id;
        const selectedAreaInfo=area.filter(arr=>arr.area_id===areaId)
        setZip(selectedAreaInfo[0].zip)
    }
    const handleZip=(value)=>{
        const info=[...details,{zip:value.zip_code}]
        setDetails(info)
        const streetId=value.street_id;
        const selectedStreetInfo=zip.filter(zp=>zp.street_id===streetId)
        setStreet(selectedStreetInfo[0].street);
    }
    const handleStreet=(value)=>{
        const info=[...details,{street:value.street_name}]
        setDetails(info)
    }
    setData(details);
    return (
        <div className='form-container'>
            <h3>Billing Address</h3>
            <form action="">
                <div>
                    <p >Name: </p>
                    <input onChange={handleName} placeholder="Enter Your Name" name='name' type="text" />
                </div>
                <div>
                    <p >Country: </p>
                    <DropdownList
                        onChange={value => handleCOuntry(value)}
                        name='country'
                        defaultValue="Choose Your Divison"
                        data={['Bangladesh']}
                    />   
                </div>
                <div>
                    <p >Division/State: </p>
                    <DropdownList
                        onChange={value => handleDivision(value)}
                        name='division'
                        dataKey='id'
                        textField='name'
                        defaultValue="Choose Your Divison"
                        data={division}
                    />
                </div>
                <div>
                    <p >City/Sub-District/Thana: </p>
                    <DropdownList
                        onChange={value=>handleDistrict(value)}
                        name='city'
                        dataKey='dist_id'
                        textField='dist_name'
                        defaultValue="Choose Your City"
                        data={district}
                    />
                </div>
                <div>
                    <p >Union/Area/Town: </p>
                    <DropdownList
                        onChange={value=>handleArea(value)}
                        name='area'
                        dataKey='area_id'
                        textField='area_name'
                        defaultValue="Choose Your Area"
                        data={area}
                    />
                </div>
                <div>
                    <p >Zip Code: </p>
                    <DropdownList
                        onChange={value=>handleZip(value)}
                        name='zipCode'
                        dataKey='zip_id'
                        textField='zip_code'
                        defaultValue="Choose Your Zip Code"
                        data={zip}
                    />
                </div>
                <div>
                    <p >Street Address: </p>
                    <DropdownList
                    onChange={value=>handleStreet(value)}
                        name='street'
                        dataKey='street_id'
                        textField='street_name'
                        defaultValue="Enter Your Street Address"
                        data={street}
                    />
                </div>
            </form>
        </div>
    );
};

export default BillingAddress;