type SkillProps = {
  image: string;
  name: string;
  bgColor: string;
  textColor: string;
};

function Skill(props: SkillProps) {
  return (
    <div
      className="flex h-[40px] w-[160px] items-center justify-center gap-2 rounded-lg text-xl text-white"
      style={{ backgroundColor: props.bgColor, color: props.textColor }}
    >
      <img src={props.image} alt="skill" className="size-7" />
      {props.name}
    </div>
  );
}

export default Skill;
