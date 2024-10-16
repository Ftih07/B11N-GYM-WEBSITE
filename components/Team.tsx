'use client';

import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const trainerData = [
  {
    image: '/assets/img/trainers/samson.jpg',
    name: 'Samson',
    role: 'Body builder coach',
    description:
      'Samson adalah instruktur kami yang berpengalaman di B11N GYM Purwokerto',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaInstagram, href: 'http://twitter.com' },
      { icon: FaWhatsapp, href: 'https://wa.me/+6281288281970' },
    ],
  },
  {
    image: '/assets/img/trainers/mail.jpg',
    name: 'Mail',
    role: 'Body builder coach',
    description:
      'Mail adalah instruktur kami yang berpengalaman di B11N GYM Purwokerto',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaInstagram, href: 'http://twitter.com' },
      { icon: FaWhatsapp, href: 'https://wa.me/+6282220438887' },
    ],
  },
  {
    image: '/assets/img/trainers/kholis.jpg',
    name: 'Kholis',
    role: 'Body builder coach',
    description:
      'Kholis adalah instruktur kami yang berpengalaman di B11N GYM Purwokerto',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaInstagram, href: 'http://twitter.com' },
      { icon: FaWhatsapp, href: 'https://wa.me/+6285799474974' },
    ],
  },
  {
    image: '/assets/img/trainers/sobiin.jpg',
    name: 'Sobiin',
    role: 'Body builder coach',
    description:
      'Sobiin adalah instruktur kami yang berpengalaman di B11N GYM Purwokerto',
    social: [
      { icon: FaFacebook, href: 'http://facebook.com' },
      { icon: FaInstagram, href: 'https://www.instagram.com/biin_gym/' },
      { icon: FaWhatsapp, href: 'https://wa.me/+6289653847651' },
    ],
  },
];

const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center">
        <motion.h2
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-6"
        >
          Instruktur Kami
        </motion.h2>
        {/* trainers grid */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12"
        >
          {trainerData.map((trainer, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                {/* image */}
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={trainer.image} fill alt="" />
                </div>
                {/* name */}
                <h4 className="h4 mb-2">{trainer.name}</h4>
                {/* role */}
                <p className="uppercase text-xs tracking-[3px] mb-2">
                  {trainer.role}
                </p>
                {/* description */}
                <p className="mb-6 max-w-[320px] mx-auto">
                  {trainer.description}
                </p>
                {/* socials */}
                <div className="flex gap-12 justify-center">
                  {trainer.social.map((social, index) => {
                    return (
                      <div key={index}>
                        <Link
                          href={social.href}
                          className="hover:text-accent transition-all"
                          target="_blank"
                        >
                          <social.icon className="text-lg" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* btn */}
      </div>
    </section>
  );
};

export default Team;
