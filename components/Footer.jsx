import {FiTerminal} from "react-icons/fi";

function Footer() {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
    <p className="flex items-center justify-center font-semibold text-gray-500 hover:text-gray-700 space-x-2">
      Developed by {'  '}
      <FiTerminal />
      <a className="">
        Ayush Pattanyak.
      </a>
    </p>
  </footer>
  );
}

export default Footer;
