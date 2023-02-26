import React, { useEffect, useState } from 'react';
import MainNavBar from '../MainNavBar/MainNavBar';

const UserInfo = () => {

    const [list, setList] = useState([]);
    useEffect(()=>{
        const list = JSON.parse(localStorage.getItem('list'));
        if (list){
            setList(list)
        }
    }, [])
    return (
        <div>
            <MainNavBar></MainNavBar>
            <h1>Hello from User</h1>
        </div>
    );
};

export default UserInfo;