import { fetchPortfolio } from "@/database/data";
import Card from "@/components/card";

const Portfolio: React.FC = async () => {
  const portfolioData = await fetchPortfolio();
  return (
    <section id="portfolio" className="w-full pt-32 pb-16 xl:pb-0">
      <h2 className="font-montserrat font-bold tracking-wider mb-12 text-3xl md:text-4xl">
        Portfolio
      </h2>
      <div className="flex flex-wrap gap-8 3xl:gap-8 md:justify-center lg:justify-start">
        {portfolioData?.map((data) => (
          <Card key={data.id} portfolioData={data} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
