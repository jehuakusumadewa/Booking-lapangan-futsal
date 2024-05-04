import React from "react";
import logo from "../assets/logo-s.png";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white max-w-full max-h-full">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black">
        <div>
          <div className="mt-5">
            <img className="h-10" src={logo} alt="logo" />
          </div>
          <p className="py-4">
            Platform all-in-one untuk sewa lapangan, cari lawan sparring, atau
            cari kawan main bareng. Olahraga makin mudah dan menyenangkan!
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-black font-bold">Perusahaan</h6>
            <ul>
              <li className="py-2 text-sm">Tentang</li>
              <li className="py-2 text-sm">Kebijakan & Privasi</li>
              <li className="py-2 text-sm">Syarat dan Ketentuan</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black font-bold">Ekosistem</h6>
            <ul>
              <li className="py-2 text-sm">Sparring</li>
              <li className="py-2 text-sm">Main Bareng</li>
              <li className="py-2 text-sm">Direktori Tim</li>
              <li className="py-2 text-sm">Direktori Lapangan</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black font-bold">Hubungi Kami</h6>
            <ul>
              <li className="py-2 text-sm">Kontak</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black font-bold">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
