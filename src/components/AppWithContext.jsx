import React, {useState} from 'react';
import App from './App';
import AppContext from './Context';

const AppWithContext = () => {

    const [token, setToken] = useState(
      localStorage.getItem("token")
    );
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user'))
    //     ()=>(async ()=>{
    //     let [id, token] = [localStorage.getItem("id"), localStorage.getItem("token")];
    //     id= JSON.parse(id);
    //     try{
    //         token = JSON.parse(token);
    //     }catch(err){
    //         //do nothing, keep as string
    //     }
    //     if (id && token) {
    //         console.log('hola como estas')
    //         const res = await fetch(`http://localhost:5000/users/${id}`, {
    //           headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${token}`,
    //           },
    //         });
    //         const data = await res.json();
    //         return data;
    //     }
    // })()
    );

    const login = (token, user) => {
      localStorage.setItem("token", token);
      localStorage.setItem("id", user.id);
      localStorage.setItem('user', JSON.stringify(user)); //TODO: remove once the real user GET route works 
      setToken(token);
      setUser(user);
    };
    const logout = () => {
      localStorage.setItem("token", null);
      localStorage.setItem("id", null);
      localStorage.setItem("user", null);
      setToken(null);
      setUser(null);
    };

    const context = { token, user, login, logout };
    return (
        <AppContext.Provider value={context}>
            <App/>
        </AppContext.Provider>
    )
}

export default AppWithContext


