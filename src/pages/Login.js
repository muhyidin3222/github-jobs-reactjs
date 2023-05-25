import axios from '../service/axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { setCookie } from '../libs/cookies';

export default function Login() {
    const navigate = useNavigate()
    const [form, setForm] = useState({});
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [textError, setTextError] = useState(null);

    const onSetFormHandler = (e) => {
        const { name, value } = e.target
        setForm((oldForm) => ({
            ...oldForm,
            [name]: value,
        }));
    };
    const login = async () => {
        setLoadingLogin(true)
        try {
            const email = form?.email?.replace(/\s/gm, '')
            const password = form?.password?.replace(/\s/gm, '')
            const { data } = await axios.post("/login", {
                email,
                password,
            })
            if (data) {
                await setCookie("token", data.token, 1)
                navigate("/")
            }
            return data
        } catch (error) {
            // console.log(error)
            setTextError(error?.status_message || "Password Salah")
        } finally {
            setLoadingLogin(false)
        }
    }
    return (
        <div className='login-container'>
            <div className='label-login'>Email</div>
            <input className='input-login' onChange={onSetFormHandler} name='email' type='email' />
            <div className='label-login'>Password</div>
            <input className='input-login' onChange={onSetFormHandler} name='password' type='password' />
            {textError ? <div style={{ marginTop: 8 }} > {textError}</div> : ""}
            <button className='button' onClick={login}>
                {loadingLogin ? "Loading" : <a> Login</a>}
            </button>
        </div >
    )
}
