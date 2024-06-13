// Mengimpor Link dari react-router-dom untuk navigasi antar halaman
import { Link } from "react-router-dom";
// Mengimpor useState dari React untuk mengelola state dalam komponen
import { useState } from "react";
// Mengimpor gambar logo untuk digunakan dalam tampilan
import loginImg from "../../assets/logo-s.png";

// Deklarasi komponen Register
const Register = () => {
  // Mengelola state untuk nama lengkap, email, nomor telepon, dan password
  const [fullName, setName] = useState(); // State untuk menyimpan nama lengkap
  const [email, setEmail] = useState(); // State untuk menyimpan email
  const [number, setNumber] = useState(); // State untuk menyimpan nomor telepon
  const [pass, setPass] = useState(); // State untuk menyimpan password

  // Fungsi untuk menangani pengiriman formulir registrasi
  const handleRegist = (e) => {
    e.preventDefault(); // Mencegah halaman dari reload saat formulir dikirim
    alert(`Name: ${fullName}, Email: ${email}, Number: ${number}, Password: ${pass}`); // Menampilkan data input sebagai alert
  }

  // Mengembalikan JSX untuk tampilan registrasi
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* Link ke halaman utama */}
        <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img className="w-14 h-14 mr-2" src={loginImg} alt="logo" />
          Ayofutsal   
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Register Form
            </h1>
            
            {/* Formulir registrasi */}
            <form onSubmit={handleRegist} className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Full Name</label>
                {/* Input untuk nama lengkap */}
                <input onChange={(e) => setName(e.target.value)} type="text" name="fullName" id="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="full name" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                {/* Input untuk email */}
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="email account" required />
              </div>
              <div>
                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">Your Phone Number</label>
                {/* Input untuk nomor telepon */}
                <input onChange={(e) => setNumber(e.target.value)} type="number" name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="phone number" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                {/* Input untuk password */}
                <input onChange={(e) => setPass(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
              </div>
              {/* Tombol untuk mengirimkan formulir */}
              <button type="submit" className="w-full text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
              <p className="text-sm font-light text-gray-500">
                have an account yet? <Link to="#" className="font-medium text-primary-600 hover:underline">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

// Mengekspor komponen Register sebagai default
export default Register;
