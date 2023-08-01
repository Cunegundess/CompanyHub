import { Typography } from "@material-tailwind/react";
import Logo from "../assets/construcao.png";
 
export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <div className="flex items-center flex-shrink-0 ml-6 mr-3">
            <Typography color="blue-gray" className="text-center font-normal">
            &copy; 2023 CompanyHub
            </Typography>
        </div>
        <div className="flex items-center flex-shrink-0 ml-6 mr-3">
            <img src= {Logo} alt="logo-ct"/>
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Sobre Nós
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Fale Conosco
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
}