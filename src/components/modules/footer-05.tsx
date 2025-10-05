import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import { Link } from "react-router";

const footerLinks = [
  { title: "Overview", href: "#" },
  { title: "Features", href: "#" },
  { title: "Pricing", href: "#" },
  { title: "Careers", href: "#" },
  { title: "Help", href: "#" },
  { title: "Privacy", href: "#" },
];

const FooterPage = () => {
  return (
    <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50">
      <div className="flex flex-col">
        <div className="grow bg-muted " />
        <footer className="border-t">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="py-12 flex flex-col items-center text-center">
              {/* Logo */}
              <h1 className="text-[22px] text-cyan-800">
                BOOK<strong>SOW</strong>
              </h1>

              {/* Links */}
              <ul className="mt-6 flex flex-wrap justify-center gap-4">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      to={href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            <Separator />

            <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between gap-x-2 gap-y-5">
              {/* Copyright */}
              <span className="text-muted-foreground text-center sm:text-left">
                &copy; {new Date().getFullYear()}{" "}
                <Link to="/" target="_blank">
                  Shadcn UI Blocks
                </Link>
                . All rights reserved.
              </span>

              {/* Social Icons */}
              <div className="flex items-center gap-5 text-muted-foreground justify-center sm:justify-start">
                <Link to="#" target="_blank">
                  <TwitterIcon className="h-5 w-5" />
                </Link>
                <Link to="#" target="_blank">
                  <DribbbleIcon className="h-5 w-5" />
                </Link>
                <Link to="#" target="_blank">
                  <TwitchIcon className="h-5 w-5" />
                </Link>
                <Link to="#" target="_blank">
                  <GithubIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterPage;
