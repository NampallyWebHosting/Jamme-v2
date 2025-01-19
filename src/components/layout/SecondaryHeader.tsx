import { Link } from "react-router-dom";
import Logo from "@/assets/Logo.png"
const SecondaryHeader = () => {
  return (
    <header className="w-full h-24  overflow-hidden font-Chillax">
      <nav className="w-full h-full flex justify-between items-center ml-6 mt-4">
        <Link
          to="/"
          className="group flex justify-center items-center gap-0 cursor-pointer animate-pulse"
        >
          <img
            id="logo"
            src={Logo}
            alt="Jamme"
            loading="lazy"
            className="w-16 h-auto"
          />
          <p
            id="logo__text"
            className="text-xl font-bold text-gray-800 select-none opacity-0 transition-all ease-in-out duration-500 invisible group-hover:opacity-100 group-hover:visible"
          >
            JAMME
          </p>
        </Link>
      </nav>
    </header>
  )
}

export default SecondaryHeader