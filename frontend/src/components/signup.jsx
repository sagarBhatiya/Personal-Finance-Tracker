import React, { useState } from 'react';

const signup = () => {
    const [user,setUser] = useState({
        fullname:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:"",
    });

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(user);
        
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Sign Up</h2>
        <form onSubmit={onSubmitHandler()} className="flex flex-col">
        
            <input value={user.fullname} onChange={(e)=>setUser({...user,fullName:e.target.value})} placeholder="Full Name" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
           
       
          <input value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} placeholder="Username" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />

          <input value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Password" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />
          <input value={user.confirmPassword} onChange={(e)=>setUser({...user,confirmPassword:e.target.value})} placeholder="Confirm Password" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />
          <label className="text-sm mb-2 text-gray-200 cursor-pointer" htmlFor="gender">
            Gender
          </label>
          <select className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          
          
          <p className="text-white mt-4">
            Already have an account?
            <a className="text-sm text-blue-500 -200 hover:underline mt-4" href="/login">Login</a>
          </p>
          <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default signup;
