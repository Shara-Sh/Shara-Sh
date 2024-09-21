import { color } from "../utils/skillBadgeColor";

type SkillBadgeProps = {
  skill: string;
};

function SkillBadge(props: SkillBadgeProps) {
  return (
    <div className={`rounded-lg px-2 py-0.5 font-bold ${color(props.skill)}`}>
      <p>{props.skill}</p>
    </div>
  );
}

export default SkillBadge;
