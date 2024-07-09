// Mengimpor Link dari react-router-dom untuk navigasi antar halaman
import { Link } from "react-router-dom";
// Mengimpor useState dari React untuk mengelola state dalam komponen
import { useState, useEffect } from "react";
// Mengimpor gambar logo untuk digunakan dalam tampilan
import loginImg from "../../assets/logo-s.png";

import axios from "axios";

// Deklarasi komponen Register
const Register = () => {
  // Mengelola state untuk nama lengkap, email, nomor telepon, dan password
  const [nama, setNama] = useState(''); // State untuk menyimpan nama lengkap
  const [username, setUserName] = useState(''); // State untuk menyimpan email
  const [password, setPassword] = useState(''); // State untuk menyimpan nomor telepon
  const [level, setLevel] = useState(''); // State untuk menyimpan password

  // useEffect(async () => {
  //   const getData = await axios.get('http://localhost:3000/lapangan/data');
  //   console.log(getData.data, 'get data');
  // }, []);

  // Fungsi untuk menangani pengiriman formulir registrasi
  const handleRegist = async (e) => {
    e.preventDefault(); // Mencegah halaman dari reload saat formulir dikirim
    // alert(`Name: ${fullName}, Email: ${email}, Number: ${number}, Password: ${pass}`); // Menampilkan data input sebagai alert

    console.log(nama, username, password, level, 'data')

    const response = await axios.post('http://localhost:3000/auth/register', {
      nama, username, password, level
    });


    // console.log(nama, username, password, level, response, 'response')

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
            <form onSubmit={handleRegist} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900">Nama Lengkap</label>
                {/* Input untuk nama lengkap */}
                <input
                  onChange={(e) => setNama(e.target.value)}
                  value={nama}
                  type="text"
                  name="nama"
                  id="nama"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="nama"
                  required
                />
              </div>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">User Name</label>
                {/* Input untuk email */}
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  value={username}
                  type="text"
                  name="username"
                  id="nama"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="email account"
                  required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password Anda</label>
                {/* Input untuk nomor telepon */}
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Password"
                  required />
              </div>
              <div>
                <label htmlFor="level" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Level</label>
                {/* Input untuk password */}
                <input
                  onChange={(e) => setLevel(e.target.value)}
                  value={level}
                  type="number"
                  name="level"
                  id="level"
                  placeholder="level"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required />
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
