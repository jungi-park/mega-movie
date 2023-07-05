import axios from "axios";
import React from "react";

const url ='http://localhost:8080'

export const sendSingIn = async(form:any) =>{
    return await axios.post(`${url}/v1/login`,{...form},{ withCredentials: true }
    )
  }

  export const sendSingOut = async(form:any) =>{
    return await axios.post(`${url}/v1/logout`,{...form},{ withCredentials: true }
    )
  }