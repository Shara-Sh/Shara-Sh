import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";

function App() {
  const darkMode = useSelector((state: RootState) => state.darkMode).darkMode;

  return (
    <div className={darkMode ? "dark dark:bg-charcoal dark:text-white" : ""}>
      <Header />
      <Banner />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
