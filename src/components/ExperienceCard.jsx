/* eslint-disable react/prop-types */
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ExperienceCard = ({ imageUrl, name, role, time, externalLink }) => {
  return (
    <li className="flex items-start my-4 gap-4">
      <div className=" bg-white p-2 rounded-lg shadow-lg">
        <img src={imageUrl} className="w-12" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{role}</h3>
        <p className="text-lg">{name}</p>
        <p className="text-lg">{time}</p>
      </div>
      <Link to={externalLink} target="_blank">
        <RiExternalLinkFill className="w-4 mt-1 lg:h-4" />
      </Link>
    </li>
  );
};

export default ExperienceCard;
