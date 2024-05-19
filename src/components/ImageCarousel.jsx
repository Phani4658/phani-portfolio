import ImageCard from "./ImageCard";

const ImageCarousel = () => {
  return (
    <div className="flex flex-col py-28 px-5 text-black">
      <div className="flex gap-5 lg:gap-10">
        <div className="w-[82%] md:w-[34%] xl:w-[34%] flex flex-col">
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
          <div className="md:hidden">
          <ImageCard
            imageText="@Hack Banglore - 2024"
            imageUrl="https://res.cloudinary.com/dv0oedkxm/image/upload/v1716139734/Portfolio/IMG-20240511-WA0031_1_w4rkau.jpg"
          />
          </div>
        </div>
        <div className="w-[0px] hidden md:block md:w-[33%] lg:w-[32%]">
          <ImageCard
            imageText="@Hack Banglore - 2024"
            imageUrl="https://res.cloudinary.com/dv0oedkxm/image/upload/v1716139734/Portfolio/IMG-20240511-WA0031_1_w4rkau.jpg"
          />
          <ImageCard
            imageUrl="https://res.cloudinary.com/dv0oedkxm/image/upload/v1716139416/Portfolio/IMG-20240218-WA0032_1_clneju.jpg"
            imageText="@DevFiesta - 2024"
          />
        </div>
      </div>
      <div className="flex lg:h-[330px] gap-6">
        <ImageCard imageUrl="https://res.cloudinary.com/dv0oedkxm/image/upload/v1716137835/Portfolio/IMG_8079_2_vnorvo.jpg" imageText="@Cloud Study Jams - 2024" />
        <ImageCard imageUrl="https://res.cloudinary.com/dv0oedkxm/image/upload/v1716138468/Portfolio/IMG-20221124-WA0052_1_nxyajg.jpg" imageText="@GIST Coding Club - 2022" />
      </div>
    </div>
  );
};

export default ImageCarousel;
