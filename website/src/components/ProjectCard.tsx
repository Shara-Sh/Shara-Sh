import { ArrowRight } from "lucide-react";
import SkillBadge from "./SkillBadge";

type ProjectCardProps = {
  name: string;
  description: string;
  website: string;
  github: string;
  skills: string[];
};

function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="flex w-full flex-col gap-3 rounded-lg bg-gunmetal p-5 text-white">
      <h1 className="text-4xl font-bold">{props.name}</h1>
      <p className="text-slate-gray">{props.description}</p>
      <div className="flex max-w-full flex-wrap gap-3">
        {props.skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
      <div className="flex gap-3">
        <a href={props.website} target="_blank">
          <button className="flex w-fit items-center gap-1 rounded-lg bg-slate-blue px-4 py-2 text-2xl text-white hover:bg-slate-blue/75">
            <p>Read More</p>
            <ArrowRight />
          </button>
        </a>
        <a href={props.github} target="_blank">
          <button className="flex w-fit items-center gap-1 rounded-lg bg-slate-blue px-4 py-2 text-2xl text-white hover:bg-slate-blue/75">
            <img
              src="./assets/socials/github_white.svg"
              alt="github"
              className="w-8"
            />
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
