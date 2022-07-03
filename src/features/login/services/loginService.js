import axios from 'axios'
import endpoints from '../../../constants/endpoints';

const loginUrl = 'users/login';

const login = (user,password) =>{

    const options = {
        method:'POST',
        url: `${endpoints.URL_API}${loginUrl}`,
        data:{
            email: user,
            password: password
        }
    }
    
    axios.request(options).then(function(response){
        console.log(response.data);
    }).catch(function(error){
        console.log(error)
    })
}

export {
    login
}