import { color } from "../utils/skillBadgeColor";

type SkillBadgeProps = {
  skill: string;
};

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className={`rounded-lg px-2 py-0.5 font-bold ${color(skill)}`}>
      <p>{skill}</p>
    </div>
  );
}

export default SkillBadge;
