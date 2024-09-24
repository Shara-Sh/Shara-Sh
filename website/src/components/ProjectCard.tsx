import { ArrowRight } from "lucide-react";
import SkillBadge from "./SkillBadge";

type ProjectCardProps = {
  name: string;
  description: string;
  privateProject: boolean;
  website: string;
  github: string;
  skills: string[];
};

function ProjectCard({
  name,
  description,
  privateProject,
  website,
  github,
  skills,
}: ProjectCardProps) {
  return (
    <div className="flex h-full w-full flex-col gap-3 rounded-lg bg-gunmetal p-5 text-white">
      <h1 className="text-4xl font-bold">{name}</h1>
      <p className="text-slate-gray">{description}</p>
      <div className="flex max-w-full flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
      <div className="flex flex-1 items-end gap-3">
        <a href={website} target="_blank">
          <button className="flex w-fit items-center gap-1 rounded-lg bg-slate-blue px-4 py-2 text-2xl text-white hover:bg-slate-blue/75">
            <p>Visit Website</p>
            <ArrowRight />
          </button>
        </a>
        {privateProject ? (
          ""
        ) : (
          <a href={github} target="_blank">
            <button className="flex w-fit items-center gap-1 rounded-lg bg-slate-blue px-4 py-2 text-2xl text-white hover:bg-slate-blue/75">
              <img
                src="./assets/socials/github_white.svg"
                alt="github"
                className="w-8"
              />
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
