import { Download } from "lucide-react";
import resume from "/assets/Shara_Shahverdian_Resume.pdf";

function Banner() {
  return (
    <div
      className="bg-gradient-to-b from-slate-blue to-white py-10 dark:to-charcoal"
      id="home"
    >
      <div className="mx-auto my-5 flex w-11/12 flex-col items-center justify-between gap-10 sm:w-3/4 sm:flex-row sm:gap-0">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold">Hi i'm Shara</h1>
          <h2 className="text-4xl font-semibold">Front-End Developer</h2>
          <button className="rounded-lg bg-slate-blue px-4 py-2 text-2xl text-white hover:bg-slate-blue/75">
            <a href={resume} className="flex items-center gap-1">
              <Download />
              Resume
            </a>
          </button>
        </div>
        <img
          src="./assets/code_thinking.svg"
          alt="Banner"
          className="w-full sm:w-2/3"
        />
      </div>
    </div>
  );
}

export default Banner;
