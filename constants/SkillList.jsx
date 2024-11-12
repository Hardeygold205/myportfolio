import Image from "next/image";

function SkillList({ src, skill }) {
  return (
    <span className="flex items-center gap-3">
      <Image src={src} alt="Checkmark icon" width={20} height={20}/>
      <p className="text-lg font-medium">{skill}</p>
    </span>
  );
}

export default SkillList;
