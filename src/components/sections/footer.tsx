import { fetchAbout } from "@/database/data";
import Icon from "@/components/icon";

const Footer: React.FC = async () => {
  const about = await fetchAbout();
  return (
    <footer className="w-full bg-slate-700 px-8 py-8 3xl:px-[96px] 3xl:py-12">
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-wrap justify-around">
            <div>
              <h5 className="font-montserrat font-semibold tracking-wider text-white">
                Navigation
              </h5>
              <ul className="my-4">
                <li className="font-poppins tracking-wide mt-2 text-white hover:text-primary">
                  <a href="#">Home</a>
                </li>
                <li className="font-poppins tracking-wide mt-2 text-white hover:text-primary">
                  <a href="#about">About</a>
                </li>
                <li className="font-poppins tracking-wide mt-2 text-white hover:text-primary">
                  <a href="#portfolio">Portfolio</a>
                </li>
              </ul>
            </div>
            <div className="ml-12">
              <h5 className="font-montserrat font-semibold tracking-wider text-white">
                Social Media
              </h5>
              <ul className="my-4">
                <li className="font-poppins tracking-wide mt-2 text-white hover:text-primary">
                  <a href="https://linkedin.com" target="_blank">
                    LinkedIn
                  </a>
                </li>
                <li className="font-poppins tracking-wide mt-2 text-white hover:text-primary">
                  <a href="https://github.com" target="_blank">
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="pt-6 text-center font-montserrat font-bold text-4xl tracking-wider text-white mx-auto xl:text-[40px]">
              {"Let's Connect"}
            </h4>
            <ul className="pt-4 flex gap-4 justify-center">
              {about?.at(0)?.images.map((iconData, index) => (
                <Icon
                  key={index}
                  imageSrc={iconData.image_source}
                  imageAlt={iconData.image_alt}
                  link={iconData.link}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
