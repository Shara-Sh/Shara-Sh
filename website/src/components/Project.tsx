// import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";

function Project() {
  return (
    <div
      className="h-fit bg-gradient-to-t from-slate-blue to-white py-5 dark:to-charcoal"
      id="project"
    >
      <div className="mx-auto w-11/12 sm:w-3/4">
        <h1 className="my-5 text-center text-5xl font-bold">Projects</h1>
        <div className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              website={project.website}
              github={project.github}
              skills={project.skills}
            />
          ))}
        </div>
        {/* <div className="mt-5 flex justify-center">
          <button className="tex flex w-fit items-center gap-1 rounded-lg bg-slate-blue px-4 py-2 text-2xl text-white hover:bg-slate-blue/75">
            <p>Show More</p>
            <ArrowRight />
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Project;
