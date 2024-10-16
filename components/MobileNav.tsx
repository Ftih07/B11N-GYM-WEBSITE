'use client';

import { useMediaQuery } from 'react-responsive';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/navigation'; 

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

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const router = useRouter();

  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  });
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
            activeClass={`${!isMobile && 'active'}`}
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

export default MobileNav;
