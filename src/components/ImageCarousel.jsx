import ImageCard from "./ImageCard";

const ImageCarousel = () => {
  return (
    <div className="flex gap-6 text-black py-28">
      <div className="w-[50%] md:w-[34%] xl:w-[34%] flex flex-col">
        <ImageCard
          imageUrl={
            "https://res.cloudinary.com/dv0oedkxm/image/upload/v1716114244/Portfolio/DSC00314-1_n6sjzg.jpg"
          }
          imageText="@Dubai Tech Conference - 2023"
        />
        <ImageCard
          imageUrl={
            "https://res.cloudinary.com/dv0oedkxm/image/upload/v1716114245/Portfolio/IMG-20230406-WA0023_ksz74h.jpg"
          }
          imageText="@Institute Meets Industry - 2023"
        />
      </div>
      <div className="w-[50%] md:w-[33%] xl:w-[31%]">
        <ImageCard
          imageUrl="https://res.cloudinary.com/dv0oedkxm/image/upload/v1716124411/Portfolio/IMG_1787_1_yjijh6.jpg"
          imageText="@Fly High Challenge-2023"
        />
      </div>
      <div >

      </div>
    </div>
  );
};

export default ImageCarousel;
