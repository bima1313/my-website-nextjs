import Icon from "@/components/icon";
import TechStackSection from "@/components/tech-stack-section";
import { fetchAbout } from "@/database/data";

const About: React.FC = async () => {
  const aboutData = await fetchAbout();
  return (
    <section id="about" className="mt-64 pt-32 lg:mt-0">
      <h2 className="font-montserrat font-bold tracking-wider text-3xl md:text-4xl">
        About Me
      </h2>
      <p className="pt-8 pb-4 font-poppins tracking-wide  text-justify lg:text-lg 2xl:text-xl">
        Recent Informatics graduate from Harapan Medan University with a strong
        passion for Front-end Web and Android Development. Having experience
        developing Websites using React and Android apps using Flutter for
        personal projects. A strong problem-solver, adaptable, and continuous
        learner.
      </p>
      <ul className="flex gap-4">
        {aboutData?.at(0)?.images.map((iconData) => (
          <li key={iconData.image_alt}>
            <Icon
              imageSrc={iconData.image_source}
              imageAlt={iconData.image_alt}
              link={iconData.link}
            />
          </li>
        ))}
      </ul>
      <h4 className="font-montserrat font-bold tracking-wider text-2xl md:text-[28px] pt-8">
        Tech Stack
      </h4>
      {aboutData?.slice(1).map((data) => (
        <TechStackSection key={data.id} techStack={data} />
      ))}
    </section>
  );
};

export default About;
