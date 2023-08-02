import Logo from "../assets/construcao.png";
import Avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center flex-shrink-0 mr-6 ml-3">
          <img src={Logo} alt="App logo" />
          <span className="font-black text-xl tracking-tight ml-1 text-blue-900">
            CompanyHub
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="flex text-sm lg:flex-grow justify-center">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4"
            >
              Dashboard
            </Link>
            <Link
              to="/clientes"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4"
            >
              Clientes
            </Link>
            <Link
              to="/docs"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4"
            >
              Docs
            </Link>
          </div>
          <div className="flex items-center flex-shrink-0 ml-6 mr-3 relative">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4"
            >
              UserFulano
            </a>
            <img
              src={Avatar}
              alt="Avatar logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="bottom-0 right-0 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
        </div>
      </nav>
    </>
  );
}
