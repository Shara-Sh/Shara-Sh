import { Download } from "lucide-react";

function Banner() {
  return (
    <div className="bg-gradient-to-b from-slate-blue to-white py-10">
      <div className="mx-auto flex w-3/4 flex-col items-center justify-between gap-10 sm:flex-row sm:gap-0">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold">Hi i'm Shara</h1>
          <h2 className="text-4xl font-semibold">Front-End Developer</h2>
          <button className="flex items-center gap-1 rounded-lg bg-slate-blue px-4 py-2 text-2xl text-white hover:bg-slate-blue/75">
            <Download />
            Resume
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
