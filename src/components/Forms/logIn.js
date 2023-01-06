import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { SingleData } from '../../Redux/Actions/AllActions';
import Header from '../Header';
import { useTranslation } from 'react-i18next';

export default function LogIn() {
  const {t}=useTranslation();
    const [mail,setMail]=useState("")
    const [pass,setPass]=useState("")
    const changes=(e)=>{
        if(e.target.name === "mail"){
            setMail(e.target.value)
        }else if(e.target.name === "password"){
            setPass(e.target.value)
        
        }
      }

      const all = useSelector((state)=>state.allUsers.users) 

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const sing = useSelector((state)=>state.userData.info)

    useEffect(()=>{
      if(Object.keys(sing).length > 0){
        
        navigate('/user')
      }
    },[sing])
    
    const checkLog =()=>{
       if (all.some((check)=>check.email === mail)){
        const search = all.find((f)=>f.email === mail)
        if(search.password === pass){  
            dispatch(SingleData(search))
            
        }else{
            alert("Wrong Password")
        }

       }else{
        navigate('/signUp')

       }
    }
    

    
  return <>
  <Header/>
  <div className='container w-75 bg-light mt-3 p-3'>
    <h5>LogIn</h5>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">{t("Emailaddress")}</label>
        <input type="email" className="form-control" name='mail' value={mail} onChange={(e)=>changes(e)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">{t("Password")}</label>
        <input type="password" className="form-control" name='password' value={pass} onChange={(e)=>changes(e)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>

    <button className="btn btn-primary" onClick={checkLog}>{t("Login")}</button>

  </div>
  
  </>
}
