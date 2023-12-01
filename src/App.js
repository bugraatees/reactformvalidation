import './App.css';
import {useState} from "react";

function App() {

  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if (!formData.username.trim()){
      validationErrors.username = "username is required"
    }

    if (!formData.email.trim()){
      validationErrors.email = "email is required"
    }
    if (!formData.email.trim()){
      validationErrors.password = "password is required"
    } else if (formData.password.length < 6){
      validationErrors.password = "password should be at least 6 char"
    }

    if(formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "password not matched"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length ===0) {
      alert ("Form Submitted succesfully")
    }
  }

  return (
    <form id='formvalidation' onSubmit = {handleSubmit}>
    <div id='form'>
      <div >
        <label id='text'>Username : </label>
        <input 
        type='text'
        name='username'
        placeholder='Username..'
        autoComplete='off'
        onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label id='text'>Email : </label>
        <input 
        type='email'
        name='email'
        placeholder='example@gmail.com'
        autoComplete='off'
        onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label id='text'>Password : </label>
        <input 
        type='password'
        name='password'
        placeholder='*********'
        onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label id='text'>Confirm Password : </label>
        <input 
        type='password'
        name='confirmPassword'
        placeholder='*********'
        onChange={handleChange}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      </div>
        <button id='button' type='submit'>Submit</button>
    </div>
    </form>
  );
}

export default App;
