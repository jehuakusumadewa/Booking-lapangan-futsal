import { Link } from "react-router-dom";
import logo from "../assets/logo-s.png";

const Header = () => {
  const link = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Venue",
      path: "/venue",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Register",
      path: "/login",
    },
  ];

  return (
    <header className="my-4">
      <div className="w-[70%] mx-auto flex justify-between">
        <div className="">
          <img className="h-10" src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center gap-10">
          {link.map((item) => (
            <Link
              className="text-gray-800 text-lg hover:scale-110 transition-all"
              key={item.name}
              to={item.path}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
