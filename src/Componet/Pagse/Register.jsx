import { Link } from "react-router-dom"
// import logo from '../assets/logo/editable-hotel-logo-vector-business-corporate-identity-hostel_53876-111553.avif'
import signup from '../../assets/Login/Login.jpg'
import { useContext } from "react"
import { AuthContext } from "../../Provaider/AuthProvaider"
// import { useContext } from "react";
// import { AuthContext } from "../Provaider/AuthProvider";
const Register = () => {

     
    const {crateUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name,email,password,photo);
        
        crateUser(email, password)
        .then(result =>{
             const user = result.user;
             console.log(user);
        })
        .catch(error =>{
            console.log(error);
        })
      }





    return (
      <div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
        <div className='flex w-full mt-28 mb-10  max-w-sm mx-auto overflow-hidden bg-green-300  rounded-lg shadow-lg  lg:max-w-4xl '>
          <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
            <div className='flex justify-center mx-auto'>
              <img
                className='w-auto h-7 sm:h-12'
                // src= {logo}
                src=""
                alt=''
              />
            </div>
  
            <p className='mt-3 font-semibold text-center text-3xl  text-gray-600 '> 
            Sign Up now Tour Guide 
           
            </p>
  
            <div className='flex items-center justify-between mt-4'>
              <span className='w-1/5 border-b  lg:w-1/4'></span>
  
              <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                get free account now
              </div>
  
              <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
            </div>
            <form onSubmit={handleSignUp}>
              <div className='mt-4'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='name'
                >
                  Username
                </label>
                <input
                  id='name'
                  autoComplete='name'
                  name='name'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='text'
                />
              </div>
              <div className='mt-4'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='photo'
                >
                  Photo URL
                </label>
                <input
                  id='photo'
                  autoComplete='photo'
                  name='photo'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='text'
                />
              </div>
              <div className='mt-4'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='LoggingEmailAddress'
                >
                  Email Address
                </label>
                <input
                  id='LoggingEmailAddress'
                  autoComplete='email'
                  name='email'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='email'
                />
              </div>
  
              <div className='mt-4'>
                <div className='flex justify-between'>
                  <label
                    className='block mb-2 text-sm font-medium text-gray-600 '
                    htmlFor='loggingPassword'
                  >
                    Password
                  </label>
                </div>
  
                <input
                  id='loggingPassword'
                  autoComplete='current-password'
                  name='password'
                  className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                  type='password'
                />
              </div>
              <div className='mt-6'>
                <button
                  type='submit'
                  className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                >
                  Sign Up
                </button>
              </div>
            </form>
  
            <div className='flex items-center justify-between mt-4'>
              <span className='w-1/5 border-b  md:w-1/4'></span>
  
              <Link
                to='/login'
                className='text-xs text-gray-500 uppercase  hover:underline'
              >
                or sign in
              </Link>
  
              <span className='w-1/5 border-b  md:w-1/4'></span>
            </div>
          </div>
          <div
            className='hidden  bg-cover bg-center lg:block lg:w-1/2'
            style={{
              backgroundImage: `url(${signup})`,
            }}
          ></div>
        </div>
      </div>
    )
  }
  
  export default Register