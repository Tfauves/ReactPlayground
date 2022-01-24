import React, {useState, useEffect, useContext} from "react";
import axios from 'axios';
//useParams allow to send data through a link. (Dynamic links on react)
import {useParams} from 'react-router-dom';
import {AuthContext} from '../Providers/AuthProvider'

const Profile = (props) => {
    const params = useParams();
    const [developer, setDeveloper] = useState({
        id: params.devId
    });
    const [loading, setLoading] = useState(true);
    const [auth] = useContext(AuthContext);

    //pull developer data from backend
    useEffect(() => {
        const _fetchDeveloper = async () => {
            const res = await axios.get(
                `http://localhost:8080/developers/${developer.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                }
            )
            console.log(res.data);
            setDeveloper(res.data); 
        }
        _fetchDeveloper();
    }, [])

    //display a header with avatar and name 
    //display a cohort number on right with block options
    //display about me and if friends then display 
    return (
       <h1>Profile, {developer.name}</h1> 
    )
}

export default Profile;