import { Link, useNavigate } from "react-router-dom";
import signup from '../../assets/Login/Login.jpg';

import usePublic from "../../Hooks/usePublic";

import UseAuth from "../../Hooks/UseAuth";

import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const axiosPublic = usePublic();
  const { createUser, user, updateUserProfile } = UseAuth();
  console.log(user?.photoURL);
  const navigate = useNavigate();



  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name = form.name.value;
    const info = { email, password, photo, name };
    console.log(info);

    // if (password.length < 6) {
    //   setError("password must be 6 characters");
    //   return;
    // }
    // if (!/[A-Z]/.test(password)) {
    //   setError("Must have an Uppercase letter in the password");
    //   return;
    // }
    // if (!/[!@#$%^&*()_+]/.test(password)) {
    //   setError("password with at least one special character");
    //   return;
    // }
    // if (!/\d/.test(password)) {
    //   setError("at least one numeric character");
    //   return;
    // }
    // const user = { name, email, password, photo };
    // console.log(user);

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        updateUserProfile(name, photo).then(() => {
          // create user entry in the database
          const userInfo = {
            name: name,
            email: email,
            photo: photo,
            role: "user"
          };
          axiosPublic.post("/users", userInfo).then(res => {
            if (res.data.insertedId) {
              toast.success("user Create successfully");
              // setSuccess("User created successfully");
              navigate(location?.state ? location.state : "/");
            }
          });
        });
      })
      .catch(error => {
        console.error(error);
        // setError(error.massage);
        toast.error(error);
      });
  }

  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
      <Helmet>
        <title>Sign Up || Pagse</title>
      </Helmet>
      <div className='flex w-full mt-28 mb-10 max-w-sm mx-auto overflow-hidden bg-[#00B19D] text-white rounded-lg shadow-lg lg:max-w-4xl'>
        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex justify-center mx-auto'>
            <img
              className='w-auto h-7 sm:h-12'
              src=""
              alt=''
            />
          </div>

          <p className='mt-3 font-semibold text-center text-3xl'>
            Sign Up now Tour Guide
          </p>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b lg:w-1/4'></span>

            <div className='text-xs text-center  uppercase hover:underline'>
              get free account now
            </div>

            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
          </div>
          <form onSubmit={handleSignUp}>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium '
                htmlFor='name'
              >
                Username
              </label>
              <input
                id='name'
                autoComplete='name'
                name='name'
                className='block w-full px-4 py-2  bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium '
                htmlFor='photo'
              >
                Photo URL
              </label>
              <input
                id='photo'
                autoComplete='photo'
                name='photo'
                className='block w-full px-4 py-2  bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium '
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
              />
            </div>

            <div className='mt-4'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600'
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
              </div>

              <input
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                className='block w-full px-4 py-2  bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300'
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
            <span className='w-1/5 border-b md:w-1/4'></span>

            <Link
              to='/login'
              className='text-xs  uppercase hover:underline'
            >
              or sign in
            </Link>

            <span className='w-1/5 border-b md:w-1/4'></span>
          </div>
        </div>
        <div
          className='hidden bg-cover bg-center lg:block lg:w-1/2'
          style={{
            backgroundImage: `url(${signup})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Register;
