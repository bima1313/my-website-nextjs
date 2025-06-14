import Image from "next/image";

interface props {
  imageSrc: string;
  imageAlt: string;
  link: string;
}
const Icon: React.FC<props> = ({ imageSrc, imageAlt, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex justify-center w-10 h-10 grayscale opacity-50 rounded-full border-2 border-slate-500 transition duration-300 hover:grayscale-0 hover:bg-primary hover:opacity-100">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={28}
        height={28}
        loading="lazy"
      />
    </a>
  );
};

export default Icon;
