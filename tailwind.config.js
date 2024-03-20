module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Tambahkan nama warna khusus Anda di sini dan tentukan nilai HEX-nya
        firstcolor: '#72BDBD',
        secondcolor: '#D36767',
        threecolor: '#e6eaec', // Menambahkan warna khusus baru
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}


