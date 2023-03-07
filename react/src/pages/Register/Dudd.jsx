

import { useEffect,useState } from "react";
import axiosClient from "../../axios-client";


const Dudd = () => 
    {useEffect(() => {
        async function checkAuthStatus(e){
            axiosClient.get('/users')
            .then(({data})=>{
                console.log(data)
            })
            .catch(({response})=>{
                console.log(response.status)
                // if(response.status==401){
                //     // dispatch(setUser(null))
                // }
            })
        }
        checkAuthStatus();
    },[]);
    return ( 
        <div>
            test
        </div>
     );
}
 
export default Dudd;