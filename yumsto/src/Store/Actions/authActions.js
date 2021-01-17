const RegUrl = "https://yumsjwt.herokuapp.com/register"
const LoginUrl = "https://yumsjwt.herokuapp.com/auth/login"



export const userData = (userdata)=>{
    return{
        type:"USERDATA",
        payload: userdata
    }
}
export const isAuthenticated = (bool)=>{
    return{
        type:"ISLOGGEDIN",
        payload:bool
    }
}
export const registration = (state)=>{
    const output = fetch(RegUrl,{
        method:"POST",
        body:JSON.stringify(state),
        headers:{"Content-Type":"application/json"}
      })
      .then(res=>res.json())
      .catch(err=>err)
      return output
}
export const signIn = (state) =>{
    const userdata = fetch(LoginUrl,{
        method:"POST",
        body:JSON.stringify(state),
        headers:{"Content-Type":"application/json"}
      })
      .then(res=>res.json())
      .then((data)=>{
        sessionStorage.setItem("_ltk", data.access_token)
        return data.userdetails
      })
      .catch((err)=>{
        return err
      })
      return userdata
} 
