/* eslint-disable react/prop-types */

const ServiceCard = ({ imageUrl, serviceName, serviceDescription }) => {
  return (
    <li className="bg-[#031D44] p-10 rounded-lg">
      <img src={imageUrl} className="w-[35px]" />
      <h4 className="mt-4 font-bold text-lg">{serviceName}</h4>
      <p className="mt-1">{serviceDescription}</p>
    </li>
  );
};

export default ServiceCard;
