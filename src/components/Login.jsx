import React, {useState, useContext}  from 'react';
import {Redirect} from 'react-router-dom';
import appContext from './Context';
import Input from './Input';
import {Words, Button, Content, Heading, Frame} from 'arwes';
import Puffs from './Puffs';

const Login = () => {

    const style = {
      container: {
        padding: "2rem",
        maxWidth: 600,
        margin: "0 auto",
      },
      title: {
        textAlign: "center",
        margin: "1rem",
      },
      contentWrapper: {
          margin: '2rem',
      },
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false)

    const {login} = useContext(appContext);
    
    const setFormValues = e =>{
        if(e.target.name === 'email') setEmail(e.target.value)
        else if(e.target.name === 'password') setPassword(e.target.value)
    }
    const submitForm = async (e) => {
        e.preventDefault()
        try{
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

            if(data.error){
                setErrors(data.error)
                return;
            }
            login(data.access_token, data.user);
            setLoggedIn(true);
        }catch(err){
            alert('Oh no, It looks like there was some force interference causing problems with our server...')
        }        
    }
    const demoLogin = () => {
      setEmail('lukeskywalker@aol.com');
      setPassword('force1');
    }

    return (
      <div>
        {loggedIn ? (
          <Redirect to="/" />
        ) : (
          <div>
            <Content style={style.container}>
              <Frame animate level={3} corners={4} style={style.frame}>
                <div style={style.contentWrapper}>
                  <Heading node="h2" style={style.title}>
                    Log In
                  </Heading>
                  <div
                    style={{
                      padding: ".75rem .75rem 1.5rem",
                      textAlign: "center",
                    }}
                  >
                    <Words animate layer="alert">
                      {errors ? errors : " "}
                    </Words>
                  </div>
                  <div>
                    <form onSubmit={submitForm} style={style.loginForm}>
                      <Input
                        label="Email: "
                        type="email"
                        name="email"
                        onChange={setFormValues}
                        value={email}
                      />
                      <Input
                        label="Password: "
                        type="password"
                        name="password"
                        onChange={setFormValues}
                        value={password}
                      />
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Button>Log In</Button>
                        <Button onClick={demoLogin}>Demo User</Button>
                      </p>
                    </form>
                  </div>
                </div>
              </Frame>
            </Content>
            <Puffs />
          </div>
        )}
      </div>
    );
}

export default Login;
