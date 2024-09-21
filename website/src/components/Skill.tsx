type SkillProps = {
  image: string;
  name: string;
  bgColor: string;
  textColor: string;
};

function Skill({ image, name, bgColor, textColor }: SkillProps) {
  return (
    <div
      className="flex h-[40px] w-[160px] items-center justify-center gap-2 rounded-lg text-xl text-white shadow-lg"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <img src={image} alt="skill" className="size-7" />
      {name}
    </div>
  );
}

export default Skill;
