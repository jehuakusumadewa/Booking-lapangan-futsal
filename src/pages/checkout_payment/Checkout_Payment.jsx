import React from "react"
import logo from "../../../src/assets/logo-s.png"
import Login from "../login/Login"

const Checkout_Payment = () => {
  return (
    <>
      <section >
        <div>
          <img className="w-32 p-5" src={logo} alt="" />
        </div>
      </section>
      <section className="flex justify-center gap-3">
        <div className="space-y-5">
          <div className="max-w-lg border border-gray-400 rounded-lg shadow-secondary-1 dark:bg-surface-dark space-y-5 p-5 ">
            <div>
              <h2 className="text-xl font-bold">Data Penyewa</h2>
              <p>Sudah punya akun AYO? <a className="text-red-600" href="" >Masuk disini</a></p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input className="w-full rounded-lg border border-gray-300 col-span-2 p-2" type="text" name="" id="" placeholder="Nama Lengkap" />
              <input className="w-full border rounded-lg border-gray-300 p-2" type="text" name="" id="" placeholder="Nomor Ponsel" />
              <input className="w-full border rounded-lg border-gray-300 p-2" type="email" name="" id="" placeholder="Email" />
            </div>
            <p className="bg-gray-200 rounded">Dengan melakukan booking lapangan, Kamu akan otomatis terdaftar sebagai pengguna AYO Futsal.</p>
          </div >
          <div className="p-5">
            <h2>Metode Pambayaran</h2>
          </div>
        </div>
        <section className="max-w-sm ">
          <div>
            <div className="border rounded-lg border-gray-400 shadow-secondary-1 dark:bg-surface-dark space-y-5 p-5" >
              <div>
                <h2 className="text-xl font-bold">Rincian Biaya</h2>
              </div>
              <ul className="flex flex-col mt-5">
                <span>Biaya Sewa</span>
                <span>Biaya Produk Tambahan</span>
                <span>Total Biaya (Lunas)</span>
                <span>Biaya Transaksi</span>
                <span className="mt-4 font-bold text-xl">Total Bayar</span>
              </ul>
            </div>
            <div>
              <p>Dengan mengklik tombol berikut, Anda menyetujui <a className="text-red-600" href="">Syarat dan Ketentuan </a> serta <a className="text-red-600" href=""> Kebijakan privasi</a>.</p>
            </div>
            <button className="w-full bg-slate-400 p-2 rounded-md text-white mt-4">Lakukan Pembayaran</button>
          </div>
        </section>
      </section>
    </>
  )
}

export default Checkout_Payment