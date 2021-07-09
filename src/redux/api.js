import axios from "axios";



const YOUR_APP_ID="2dc79776"
const YOUR_APP_KEY="b020e87f3ec9e1fdea7ea7fc69a7b36b	"



export const getRecipes  =async (query)=>{ 
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

    return await axios.get(url);
}