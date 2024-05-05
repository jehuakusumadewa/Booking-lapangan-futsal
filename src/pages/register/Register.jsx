import { Link } from "react-router-dom";
import { useState } from "react";
import loginImg from "../../assets/logo-s.png";

const Register = () => {
  const [fullName, setName] = useState()
  const [email, setEmail] = useState()
  const [number, setNumber] = useState()
  const [pass, setPass] = useState()

  const handleRegist = () => {
    alert(fullName, email, number, pass)
  }

  return (
  <section className="bg-gray-50">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
        <img className="w-14 h-14 mr-2" src={loginImg} alt="logo" />
          Ayofutsal   
      </Link>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
          Register Form
          </h1>
          
          <form onSubmit={handleRegist} className="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Your Full Name</label>
              <input onChange={(e)=>setName(e.target.value)} type="text" name="fullName" id="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="full name" required="" />
            </div>
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="email account" required="" />
            </div>
            <div>
              <label for="number" className="block mb-2 text-sm font-medium text-gray-900">Your Phone Number</label>
              <input onChange={(e)=>setNumber(e.target.value)} type="number" name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="phone number" required="" />
            </div>
            <div>
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input onChange={(e)=>setPass(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
            </div>
            <button type="submit" className="w-full text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Registerr</button>
            <p className="text-sm font-light text-gray-500 ">
                      have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>

</section>

  )
};

export default Register;
