/* eslint-disable react/prop-types */

const SkillIcon = ({ details }) => {
  console.log(details)
  return (
    <li className="px-10">
      <img src={details.imageUrl} className="w-[60px]" />
    </li>
  );
};

export default SkillIcon;
