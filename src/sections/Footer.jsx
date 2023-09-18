import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col max-sm:gap-10">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            neque consequuntur fugiat deleniti atque cum iste dolore provident
            laboriosam, iure eius perferendis quis, debitis natus alias, itaque
            quibusdam harum laudantium.
          </p>
        </div>
        <div className="flex items-center gap-5 ">
          {socialMedia.map((icon, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
            >
              <img src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-8">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h4 className="text-white font-montserrat text-2xl leading-normal mb-6">
              {section.title}
            </h4>
            <ul>
              {section.links.map((link, index) => (
                <li
                  key={index}
                  className="mt-3 font-montserrat text-white-400 text-base leading-normal hover:text-slate-gray"
                >
                  <a>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
