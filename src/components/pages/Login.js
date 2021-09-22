import React, {useState, useEffect} from 'react';
import Sawo from "sawo";
import '../../App.css';

console.log(process.env.REACT_APP_SAWO_API_KEY);

const Login = () => {
    const [isLogin, setIsLogin] = useState("Please Login With Your Email");

    useEffect(()=>{
        var config = {
            containerID: "sawo-container",
            // can be one of 'email' or 'phone_number_sms'
            identifierType: "email",
            apiKey: process.env.REACT_APP_SAWO_API_KEY,
            onSuccess: (payload) => {
                console.log(payload);
                setIsLogin("true");
            },
        };
        let sawo = new Sawo(config)
        sawo.showForm();
    }, [])
    return (
        <div className="jkl">
        <div className="log">
            <h2>{isLogin}</h2>
            <div id="sawo-container" style={{height: "400px", width: "300px",}}></div>
        </div>
        </div>
    )
}

export default Login
