import { Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { toggleDarkMode } from "../../redux/slices/darkMode";

function Header() {
  const [screenWidth, setScreenWidth] = useState(Number);
  const [isExtended, setIsExtended] = useState(false);

  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.darkMode).darkMode;

  const handleToggleDarkMode = (value: boolean) => {
    dispatch(toggleDarkMode(value));
    localStorage.setItem("darkMode", JSON.stringify(value));
  };

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
    <div className="sticky top-0 bg-white py-5 shadow-lg dark:bg-charcoal dark:text-white dark:shadow-slate-blue">
      <div className="mx-auto flex w-11/12 items-center justify-between">
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
              {darkMode ? (
                <button
                  onClick={() => handleToggleDarkMode(!darkMode)}
                  className="flex"
                >
                  <Sun />
                </button>
              ) : (
                <button
                  onClick={() => handleToggleDarkMode(!darkMode)}
                  className="flex"
                >
                  <Moon />
                </button>
              )}
            </li>
          </ul>
        ) : (
          <div>
            <ul className="flex gap-5 *:px-4 *:py-2 hover:*:cursor-pointer hover:*:rounded-lg hover:*:bg-slate-blue hover:*:px-4 hover:*:py-2 hover:*:text-white">
              <li>
                {darkMode ? (
                  <button
                    onClick={() => handleToggleDarkMode(!darkMode)}
                    className="flex"
                  >
                    <Sun />
                  </button>
                ) : (
                  <button
                    onClick={() => handleToggleDarkMode(!darkMode)}
                    className="flex"
                  >
                    <Moon />
                  </button>
                )}
              </li>
              <li>
                <Menu onClick={() => setIsExtended(!isExtended)} />
              </li>
            </ul>
            {isExtended ? (
              <ul className="absolute left-0 top-[83px] w-full bg-white text-center shadow-lg *:p-5 hover:*:cursor-pointer hover:*:bg-slate-blue hover:*:text-white dark:bg-charcoal dark:shadow-slate-blue">
                <li>
                  <a href="#home" onClick={() => setIsExtended(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setIsExtended(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#project" onClick={() => setIsExtended(false)}>
                    Project
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setIsExtended(false)}>
                    Contact
                  </a>
                </li>
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
