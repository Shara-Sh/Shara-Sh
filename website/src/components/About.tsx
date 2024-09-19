import Skill from "./Skill";
import skillsData from "../data/skills/skills.json";

function About() {
  return (
    <div className="my-5">
      <div className="mx-auto w-3/4 space-y-5">
        <h1 className="text-center text-5xl font-bold">About Me</h1>
        <h2 className="text-3xl font-bold text-slate-blue">About Me</h2>
        <p className="text-2xl text-slate-gray">
          I'm Shara, an enthusiast who loves everything related to computers,
          programming, and design. I find joy in crafting digital experiences
          and bringing ideas to life through code and creativity.
        </p>
        <h2 className="text-3xl font-bold text-slate-blue">Skills</h2>
        <div className="grid place-items-center gap-y-5 sm:grid-cols-3 sm:space-y-0 lg:grid-cols-4 xl:grid-cols-6">
          {skillsData.map((skill, index) => (
            <Skill
              key={index}
              name={skill.name}
              bgColor={skill.bgColor}
              textColor={skill.textColor}
              image={skill.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
