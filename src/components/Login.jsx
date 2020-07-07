import React, {useState}  from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(null);


    const setFormValues = e =>{
        if(e.target.name === 'email') setEmail(e.target.value)
        else if(e.target.name === 'password') setPassword(e.target.value)
    }
    const submitForm = async (e) => {
        e.preventDefault()
        try{
            const res = await fetch("http://localhost:5000/users/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

            if(data.error){
                setErrors(data.error)
                return;
            }

            localStorage.setItem("id", data.user.id);
            localStorage.setItem("token", data.access_token);
        }catch(err){
            alert('Oh no, It looks like there was some force interference causing problems with our server...')
        }
        
        
    }

    return (
      <div>
        <div>{errors ? errors : " "} </div>
        <form onSubmit={submitForm}>
            <label>
                Email: 
                <input type="email" name="email" onChange={setFormValues} />
            </label>
            <label>
                Password: 
                <input type="password" name="password" onChange={setFormValues} />
            </label>
          <input type="submit" value="Log In" />
        </form>
      </div>
    );
}

export default Login;