import axios from "axios";
const URL = `${process.env.REACT_APP_API}/handmade/me`

const perfil = async(token) => {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Authorize": `Bearer ${token}`
        }
        let {data} = await axios.get(URL, {headers})
        return data
    }catch(error){
        throw error
    }
}

export{
    perfil,
}
