import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const socialData = [
  {
    title: "Youtube",
    icon: <Youtube width={20} height={20} />,
    link: "https://www.youtube.com/@MehediHasan-ri4hg",
  },
  {
    title: "Github",
    icon: <Github width={20} height={20} />,
    link: "https://www.github.com/mdmehedi121888",
  },
  {
    title: "Linkedin",
    icon: <Linkedin width={20} height={20} />,
    link: "https://www.linkedin.com/in/md-mehedi-hasan-85619519a/",
  },
  {
    title: "Facebook",
    icon: <Facebook width={20} height={20} />,
    link: "https://www.facebook.com/md.mehedi.hasan.249333",
  },
  {
    title: "instagram",
    icon: <Instagram width={20} height={20} />,
    link: "https://www.instagram.com/mdmehedi121888/",
  },
  {
    title: "twitter",
    icon: <Twitter width={20} height={20} />,
    link: "https://www.instagram.com/mdmehedi121888/",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {socialData?.map((item) => (
        <div
          key={item?.title}
          className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hover:text-lightSky hoverEffect"
        >
          <Link href={"https://www.github.com"} target="blank">
            <span className="">{item?.icon}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
