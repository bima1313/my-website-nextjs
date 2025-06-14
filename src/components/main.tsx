import About from "@/components/sections/about";
import Home from "@/components/sections/home";
import Portfolio from "@/components/sections/portfolio";

const Main: React.FC = () => {
  return (
    <main className="px-8 pt-[7.5rem] bg-linear-to-b overflow-x-scroll no-scrollbar from-slate-100 to-slate-600 lg:px-16 lg:pt-[9.5rem] xl:px-[96px] xl:pt-44 xl:pb-20">
      <Home />
      <About />
      <Portfolio />
    </main>
  );
};

export default Main;
