import Image from "next/image";
import img1 from "../../public/mainImage1.png";

export const Homepage: React.FC = () => {
  return (
    <div className="flex justify-center h-full">
      <div className="h-3/5 w-full relative">
        <Image
          src={img1}
          alt="lemonbutton back logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};
