import axios from "axios";
import React from "react";


function Main(){
    const url ='http://localhost:8080'
    const sendTestAdmin = async() =>{
        const response = await axios.get(`${url}/v1/admin`,{ withCredentials: true }
        ).then((Response)=>{
            console.log("Response",Response)
        })
        .catch((Error)=>{console.log(Error)});
      }

      return(<>
      <button onClick={sendTestAdmin}>testAdmin</button>
      </>)
}

export default Main