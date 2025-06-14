interface props {
  text: string;
}
const Chip: React.FC<props> = ({ text }) => {
  return (
    <div className="px-5 py-0.5 rounded-full border-2 border-white lg:border-dark cursor-pointer">
      <h2 className="text-xs font-montserrat font-bold text-white lg:text-dark">
        {text}
      </h2>
    </div>
  );
};

export default Chip;
