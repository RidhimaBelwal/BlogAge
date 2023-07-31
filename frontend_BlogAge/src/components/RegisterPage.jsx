import { useState } from "react";
import { Navigate } from "react-router-dom";
import {BiHide} from 'react-icons/bi'
import { BiShowAlt } from "react-icons/bi";


const RegisterPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch ('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    })
    if(response.status === 200){
      alert('Registration Successfull')
      setRedirect(true);
    }
    else{
      alert('Registration Failed')
    }
    
  }

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
  return (
    <div className="flex items-center justify-center h-[91vh] bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded shadow-md max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Register
        </h2>
        <form onSubmit={register} className="register">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Password
            </label>

            <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            <button
                type="button"
                className="absolute right-2 top-2 focus:outline-none"
                onClick={togglePasswordVisibility}
                >
                {showPassword ? (
                  <BiHide color="gray" size={28} />
                  ) : (
                    <BiShowAlt color="gray" size={28}/>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
            Register
          </button>
        </form>
        <p className="text-gray-700 text-sm mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:text-blue-600">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
