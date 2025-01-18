import Link from "next/link";

const NavbarComponent = () => {
  const menuItems = ["Home", "Projects", "Blog"];

  return (
    <nav className="px-3 py-5 bg-[#0000005f] backdrop-blur-md fixed top-0 left-0 w-full z-10 flex justify-center items-center">
      <ul className="flex space-x-4">
        {menuItems.map((item) => (
          <li
            key={item}
            className="text-lg font-semibold text-gray-500 hover:text-gray-200 transition-all duration-500 cursor-pointer"
          >
            <Link href={`/${item.toLocaleLowerCase()}`}>{item}</Link>
          </li>
        ))}
        <li className="text-lg font-semibold text-gray-500 hover:text-gray-200 transition-all duration-500 cursor-pointer">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
