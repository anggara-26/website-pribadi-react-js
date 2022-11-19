import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between px-8 py-3 backdrop-blur-md">
      <span>Copyright © 2022 Anggara Roshandi Putra</span>
      <div>
        {social_media.map((item, key) => (
          <a
            id={key}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group ml-5 cursor-pointer"
          >
            <FontAwesomeIcon
              className="group-hover:-translate-y-2 duration-300 ease-out"
              icon={item.icon}
              size="xl"
            />
          </a>
        ))}
      </div>
    </footer>
  );
}

const social_media = [
  { url: "https://www.instagram.com/anggara0526/", icon: faInstagram },
  {
    url: "https://www.youtube.com/channel/UCueveA-8JhShzO_kAQM-GXA/",
    icon: faYoutube,
  },
  { url: "https://mobile.twitter.com/AnggaraRoshandi/", icon: faTwitter },
  { url: "https://github.com/anggara-26/", icon: faGithub },
];
