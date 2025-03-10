import { GiCheckMark } from "react-icons/gi";

function SkillList({ skill }) {
  return (
    <span className="flex items-center gap-3">
      <GiCheckMark className="text-md "/>
      <p className="text-lg font-medium">{skill}</p>
    </span>
  );
}

export default SkillList;
