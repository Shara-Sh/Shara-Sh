import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div className="h-screen bg-gradient-to-t from-slate-blue to-white py-5">
      <div className="mx-auto w-3/4">
        <h1 className="my-5 text-center text-5xl font-bold">Projects</h1>
        <ProjectCard />
      </div>
    </div>
  );
}

export default Project;
