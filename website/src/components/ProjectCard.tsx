import { ArrowRight } from "lucide-react";

function ProjectCard() {
  return (
    <div className="flex max-w-[600px] flex-col gap-3 rounded-lg bg-gunmetal p-10 text-white">
      <h1 className="text-4xl font-bold">Comming Soon...</h1>
      <p className="text-slate-gray">Comming Soon...</p>
      <button className="flex w-fit items-center gap-1 rounded-lg bg-slate-blue px-4 py-2 text-2xl text-white hover:bg-slate-blue/75">
        <p>Read More</p>
        <ArrowRight />
      </button>
    </div>
  );
}

export default ProjectCard;
