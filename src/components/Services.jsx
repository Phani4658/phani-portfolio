import ServiceCard from "./ServiceCard";

const servicesList = [
  {
    imageUrl: "https://img.icons8.com/pastel-glyph/ffffff/64/web-apps--v2.png",
    serviceName: "Web Apps",
    serviceDescription:
      "Have something complex in mind? I can help you break it and create an application that suits your needs.",
  },
  {
    imageUrl: "https://img.icons8.com/pastel-glyph/ffffff/64/webpages--v2.png",
    serviceName: "Website Development",
    serviceDescription:
      "Looking for a website to showcase your business? I can help create cool customizable websites.",
  },
  {
    imageUrl: "https://img.icons8.com/ios/ffffff/50/imac-settings.png",
    serviceName: "Software Development",
    serviceDescription:
      "Looking for a software to automate your business? Drop a Hi and let's discuss your requirements.",
  },
];

const Services = () => {
  return (
    <div className="py-14 px-10 lg:px-0">
      <h1 className="text-4xl text-center font-bold mb-8">Services</h1>
      <ul className="xl:w-[95%] gap-10 mx-auto flex flex-col lg:flex-row justify-between">
        {servicesList.map((service, index) => (
          <ServiceCard
            key={index}
            imageUrl={service.imageUrl}
            serviceName={service.serviceName}
            serviceDescription={service.serviceDescription}
          />
        ))}
      </ul>
    </div>
  );
};

export default Services;
