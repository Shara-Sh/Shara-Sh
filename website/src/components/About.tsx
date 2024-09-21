import Skill from "./Skill";
import skillsData from "../data/skills.json";

function About() {
  return (
    <div className="my-5" id="about">
      <div className="mx-auto w-11/12 space-y-5 sm:w-3/4">
        <h1 className="text-center text-5xl font-bold">About Me</h1>
        <h2 className="text-3xl font-bold text-slate-blue">About Me</h2>
        <p className="text-2xl text-slate-gray dark:text-white">
          I'm Shara, an enthusiast who loves everything related to computers,
          programming, and design. I find joy in crafting digital experiences
          and bringing ideas to life through code and creativity.
        </p>
        <h2 className="text-3xl font-bold text-slate-blue">Background</h2>
        <p className="text-2xl text-slate-gray dark:text-white">
          I hold a Bachelor's degree in Computer Science, where I developed a
          passion for problem-solving and innovation through technology. My
          education provided me with a solid understanding of programming,
          software development, and design principles, which laid the groundwork
          for my skills in Python, JavaScript, and web technologies.
        </p>
        <h2 className="text-3xl font-bold text-slate-blue">Interests</h2>
        <p className="text-2xl text-slate-gray dark:text-white">
          Computer Programming: I enjoy transforming ideas into functional
          software solutions, constantly pushing the boundaries of what's
          possible.
          <br />
          Designing: Creating visually appealing designs that not only look
          great but also enhance user experiences is something I'm genuinely
          passionate about.
        </p>
        <h2 className="text-3xl font-bold text-slate-blue">Skills</h2>
        <div className="grid grid-cols-2 place-items-center gap-y-5 sm:grid-cols-3 sm:space-y-0 lg:grid-cols-4 xl:grid-cols-6">
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
