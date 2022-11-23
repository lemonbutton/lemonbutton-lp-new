import Image from "next/image";
import img from "../../public/linkedin.png";

interface MemberContactProps {
  phone: string;
}

export const MemberContact: React.FC<MemberContactProps> = ({ phone }) => {
  return (
    <div className="flex font-JetBrainsMono">
      <Image
        className="mr-3"
        src={img}
        alt="linkedin icon"
        width={15}
        height={15}
        layout="fixed"
        objectFit="contain"
      />
      <div className="border-l-[1px] border-gray-700 mx-3" />
      <span className="text-sm -tracking-widest pr-2">TEL:</span>
      <span className="text-sm -tracking-widest">{phone}</span>
    </div>
  );
};
