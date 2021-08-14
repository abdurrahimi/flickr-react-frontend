//import axios from "../axios/axios";
import axios from "axios";

const getPublicImage = async (params = null) => {
    //fetch('http://localhost:3000/public').then(r => console.log(r.data)).catch(e => console.log("errpr"));
    const data = await axios.get('http://localhost:3000/public');
    //console.log(data.data);
    return data.data;
}

export { getPublicImage };