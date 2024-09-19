function Footer() {
  return (
    <div className="bg-white py-5 sm:py-10">
      <div className="mx-auto flex w-3/4 flex-col items-center justify-between sm:flex-row">
        <div className="flex items-center gap-5">
          <h3 className="text-xl">Contact:</h3>
          <a href="https://www.linkedin.com/in/shara-sh/" target="_blank">
            <img
              src="./assets/socials/linkedin.svg"
              alt="social"
              className="size-7"
            />
          </a>
          <a href="https://www.github.com/Shara-Sh" target="_blank">
            <img
              src="./assets/socials/github.svg"
              alt="social"
              className="size-7"
            />
          </a>
          <a href="mailto:sharashahverdian@gmail.com" target="_blank">
            <img
              src="./assets/socials/gmail.svg"
              alt="social"
              className="size-7"
            />
          </a>
        </div>
        <h3 className="text-xl">Design By Shara</h3>
      </div>
    </div>
  );
}

export default Footer;
