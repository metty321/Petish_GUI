import axios, {Axios} from "axios";

const API_URL = 'https://localhost:8888/petish/'


const register = async (userData)=>{
    await Axios.post(API_URL+'register',{userData})
    .then(res => {
      console.log('res: ',res);

      if(!res.success){
        alert(res.message);
      }
    })

if(res.data){
    localStorage.setItem('user',JSON.stringify(res.data))
 } 

 return res.data;

}

// Login user
const login = async (userData) => {
  await Axios.post(API_URL + 'login', {userData})
  .then(res => {
    console.log('res: ',res);

    if(!res.success){
      alert(res.message);
    }
  })

  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data))
  }

  return res.data
}

const authService = {
    register,
    login
}

export default authService