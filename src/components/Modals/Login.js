import React, { useState } from 'react'
import { Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch } from 'react-redux';
// import { modalActions } from '../../store/ModalSlice';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [signUp, setSignUp]= useState(false);
const [formData, setFormData] = useState({
  number:'',
  name:'',
  email:''
});
  const [errors, setErrors] = useState({});

 
  const navigate= useNavigate();

const inputHandler=(e)=>{
const {name, value} =e.target;
setFormData({...formData,[name]:value});
// setErrors({...errors,[name]:''})

}
  

  const changeHandler=()=>{
    setSignUp((prevState)=>!prevState);
  }
  const closeHandler=()=>{
   
    navigate('/');
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    const validationErrors = validateForm(formData);
   
    if(Object.keys(validationErrors).length === 0){
      navigate('/');
      alert("you have successfully signed up");
    
    }else {
      setErrors(validationErrors);
    }
  }
  const validateForm = (formData) => {
    const errors={};
    if(!formData.number){
      errors.number = "phone number is required";
      }
      else if(!/^\d{10}$/.test(formData.number)){
        errors.number ="Please enter a 10 digit valid Phone number";
      }
      if(signUp && !formData.name){
        errors.name = "Name is required";
      }
      if(signUp && !formData.email){
        errors.email = "Email is required";
      }
      return errors;
  }



  return (
    <div className='modalBackground'>
    <div className='loginContainer'> 
  
    <Row>
<Col xs={8}>   {!signUp? <h2>Login</h2> :<h2>Sign Up</h2>}</Col>
<Col style={{textAlign:"right"}} xs lg='4'><FontAwesomeIcon icon={faXmark} onClick={closeHandler}/> </Col>
    </Row>
 
    {!signUp ?<h6 onClick={changeHandler}> or Create a New Account?</h6> :<h6 onClick={changeHandler}>or Login here</h6> }
    
    <form className='formControl'>
        <input className='loginInput' name="number" value={formData.number} type="number" placeholder="enter phone number here" onChange={inputHandler}></input>
        {errors.number && <span className='error'>{errors.number}</span>}
        {signUp && (
          <div>
             <input className='loginInput' name="name" value={formData.name} type="text" placeholder="enter your name here" onChange={inputHandler}></input>
             {errors.name && <span  className='error'>{errors.name}</span>}
             <input className='loginInput' name="email" type="email" value={formData.email} placeholder="enter email" onChange={inputHandler}></input>
          {errors.email && <span  className='error'>{errors.email}</span>}
          </div>
        )}
        {!signUp ? <div className='button'><button onClick={submitHandler}type="submit" >LOGIN</button></div> : <div className='button'><button type="submit" onClick={submitHandler} >SIGN UP</button></div> }
        {signUp && <p style={{fontSize:"10px"}}>By creating an account I accept to the terms and conditions and privacy policy</p>}
    </form>

   </div>
   </div>
  )
}

export default Login;
