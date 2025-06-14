import clsx from "clsx";

interface props {
  /**
   *`size`: Define size and border size of Rounded Loading using classes `TailwindCSS`.
   *        ex: `w-32 h-32 border-[28px]`
   *`inImage`: This loading inside of image or not `(optional)`
   *
   */
  size: string;
  inImage?: boolean;
}
const LoadingComponent: React.FC<props> = ({ size, inImage }) => {
  return (
    <div
      className={clsx(
        `border-slate-300 border-t-primary rounded-full animate-spin ${size}`,
        [
          inImage
            ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "",
        ]
      )}></div>
  );
};

export default LoadingComponent;
