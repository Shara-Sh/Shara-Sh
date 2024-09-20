import Footer from "../components/Footer";
import Header from "../components/Header";

function NotFound() {
  return (
    <div>
      <Header />
      <div className="mt-20 flex size-80 w-full justify-center">
        <img src="./assets/page_not_found.svg" alt="404" />
      </div>
      <p className="mt-5 text-center text-xl font-bold text-slate-blue">
        Seems like this page dosen't exist.
      </p>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default NotFound;
