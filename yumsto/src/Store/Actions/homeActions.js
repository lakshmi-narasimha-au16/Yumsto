import { apiKey, apiKey1 } from './apikey'

const base_url='https://api.spoonacular.com'
// const testing='http://localhost:8900/searchresults'
// const testing1 = 'http://localhost:8900/recipedetailbulk'


export const SearchResults=(query)=>{
    const output = fetch(`${base_url}/recipes/complexSearch?apiKey=${apiKey1}&query=${query}&number=20`).then(res=>res.json())             // `${base_url}/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=20`
    return {
        type: 'SEARCH',
        payload: output
    }
}

export const SearchTerm = (searchTerm)=>{
    return {
        type:'SEARCH_TERM',
        payload: searchTerm
    }
}

export const ItemDetailBulk = async (ids) => {
    const Ids = ids.join(',')
    const output1 = fetch(`${base_url}/recipes/informationBulk?ids=${Ids}&apiKey=${apiKey1}`).then(res=>res.json())            // `${base_url}/recipes/informationBulk?ids=${Ids}&apiKey=${apiKey}`
    
    return {
        type:'ITEM_DETAILBULK',
        payload: await output1
    }
}


export const Home_details_action=(c, d, m, r, mp, mc, maxc, maxp )=>{
    const output2 = fetch(`${base_url}/recipes/complexSearch?cuisine=${c}&diet=${d}&type=${m}&number=20&maxReadyTime=${r}&minProtein=${mp}&minCalories=${mc}&maxCalories=${maxc}&maxProtein=${maxp}&apiKey=${apiKey1}`)
    .then(res=>res.json())
    return {
        type: 'HOMEPAGEFILTERS',
        payload:output2
    }
}