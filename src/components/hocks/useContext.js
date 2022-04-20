import { useState } from "react";

import { AuthContext } from '../../AuthContext';
import useApi from '../hocks/useApi.js';


function useContext () {

    let {user} = useContext(AuthContext)
    let {result, error, auth} = useApi()



    return {

    }

}

export default useContext;