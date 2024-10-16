'use client';

import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/navigation'; // Jika menggunakan App Router

const links = [
  { name: 'home', target: 'home', offset: -100 },
  { name: 'tentang kami', target: 'about', offset: -80 },
  { name: 'class', target: 'class', offset: -80 },
  { name: 'instruktur', target: 'team', offset: -80 },
  { name: 'membership', target: 'prices', offset: -85 },
  { name: 'testimoni', target: 'testimonial', offset: -50 },
  { name: 'blog', target: 'blog', offset: -90 },
  { name: 'hubungi kami', target: 'contactus', offset: -100 },
];

const Nav = ({ containerStyles }: { containerStyles: string }) => {
  const router = useRouter();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            onClick={() => router.push('/')}
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass="active"
            className="cursor-pointer hover:text-accent transition-all"
            key={index}
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default Nav;
