import { navLinks, policyLinks, socialLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer bg-neutral text-neutral-content p-4 md:p-10">
        <nav>
          <h6 className="footer-title">Offerings</h6>
          {navLinks
            .filter((navLink) =>
              ["Services", "Specialists", "Blogs"].includes(navLink.label)
            )
            .map((navLink) => (
              <Link
                key={navLink.id}
                href={navLink.route}
                className="link link-hover"
              >
                {navLink.label}
              </Link>
            ))}
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          {navLinks
            .filter((navLink) =>
              ["About", "Gallery", "Testimonials", "FAQs", "Contact"].includes(
                navLink.label
              )
            )
            .map((navLink) => (
              <Link
                key={navLink.id}
                href={navLink.route}
                className="link link-hover"
              >
                {navLink.label}
              </Link>
            ))}
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          {policyLinks.map((navLink) => (
            <Link
              key={navLink.id}
              href={navLink.route}
              className="link link-hover"
            >
              {navLink.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="footer bg-neutral text-neutral-content border-base-300 border-t px-4 md:px-10 py-4">
        <aside>
          <p>
            <Link href="/" className="link link-hover">
              Bliss Kiss Spa Ltd.
            </Link>
            <br />
            Providing serenity & wellness since 2025
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            {socialLinks.map((socialLink) => (
              <span
                key={socialLink.id}
                className="tooltip tooltip-primary"
                data-tip={socialLink.label}
              >
                <Link href={socialLink.href} target="_blank">
                  <socialLink.icon />
                </Link>
              </span>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
