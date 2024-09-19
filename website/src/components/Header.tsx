import { Menu, Moon } from "lucide-react";
import { useEffect, useState } from "react";

function Header() {
  const [screenWidth, setScreenWidth] = useState(Number);
  const [isExtended, setIsExtended] = useState(false);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sticky top-0 bg-white py-5 shadow-lg">
      <div className="mx-auto flex w-3/4 items-center justify-between">
        <img
          src="./assets/Shara.jpg"
          alt="Shara"
          className="w-12 rounded-full"
        />
        {screenWidth >= 712 ? (
          <ul className="flex gap-5 *:px-4 *:py-2 hover:*:cursor-pointer hover:*:rounded-lg hover:*:bg-slate-blue hover:*:px-4 hover:*:py-2 hover:*:text-white">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <Moon />
            </li>
          </ul>
        ) : (
          <div>
            <ul className="flex gap-5 hover:*:cursor-pointer">
              <li>
                <Moon />
              </li>
              <li>
                <Menu onClick={() => setIsExtended(!isExtended)} />
              </li>
            </ul>
            {isExtended ? (
              <ul className="absolute left-0 top-[83px] w-full bg-white text-center *:p-5 hover:*:cursor-pointer">
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
              </ul>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
