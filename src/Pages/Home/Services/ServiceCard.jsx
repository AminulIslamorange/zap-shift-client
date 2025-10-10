const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description } = service;

  return (
    <div
      className="
        bg-white 
        shadow-md 
        rounded-[24px] 
        p-6 
        border 
        transition-all 
        duration-300 
        hover:bg-[#CAEB66]
        hover:shadow-lg
      "
    >
      <div className="text-4xl text-primary mb-4 transition-colors duration-300 hover:text-black">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary transition-colors duration-300 hover:text-black">
        {title}
      </h3>
      <p className="text-gray-600 transition-colors duration-300 hover:text-black">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
