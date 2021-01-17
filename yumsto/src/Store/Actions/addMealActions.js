import { apiKey1 } from './apikey'

const base_url = "https://api.spoonacular.com/mealplanner"
const testUrl = "http://localhost:8900/mealplans"


export const addMealPlan = (username, hash, obj) => {
    const output = fetch(`${base_url}/${username}/items?apiKey=${apiKey1}&hash=${hash}`,{
        method:"POST",
        body : JSON.stringify(obj),
        headers:{"Content-Type":"application/json"}
    })
    .then(res=>res.json())
    .then(data=>data)
    return output
}

// `${base_url}/${username}/week/${date}?apiKey=${apiKey}&hash=${hash}`
export const getMealPlans = (username, date, hash)=>{
    console.log(date)
    const output = fetch(`${base_url}/${username}/week/${date}?apiKey=${apiKey1}&hash=${hash}`)
    .then(res=>res.json())
    
    return{
        type:"MEALPLANS",
        payload:output
    }
}
