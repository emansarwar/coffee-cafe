import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../../assets/website/coffee-footer.jpg";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};
const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="grid md:grid-cols-3 pt-5 pb-20 container">
          {/* company details */}
          <div className="px-4 py-8">
            <a
              href="#"
              className="font-cursive font-semibold text-2xl sm:text-3xl tracking-widest"
            >
              Coffee Cafe
            </a>
            <p className="pt-4">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
              Espresso Escape
            </p>
            
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="px-4 py-8">
              <h1 className="mb-3 font-semibold text-xl sm:text-left">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="px-4 py-8">
              <h1 className="mb-3 font-semibold text-xl sm:text-left">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="col-span-2 px-4 py-8 sm:col-auto">
              <h1 className="mb-3 font-semibold text-xl sm:text-left">
                Address
              </h1>
              <div>
                <p className="mb-3">Cox's Bazar, Bangladesh</p>
                <p>01829000000</p>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="https://www.facebook.com/emansarwar.emu/">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="https://www.linkedin.com/in/emansarwaralam/">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
