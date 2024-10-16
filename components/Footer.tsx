'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Link as RouterLink } from 'react-router-dom';

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import CustomButton from './CustomButton';
import { motion } from 'framer-motion';
import ContactSection from './ContactSection';
import Gallery from './Gallery';

// variants
const footerContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      straggerChildren: 0.4,
      duration: 0.5,
      ease: 'linear',
    },
  },
};

const footerItem = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-8">
      <div className="container mx-auto pb-24">
        <div
          className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12"
        >
          {/* info */}
          <motion.div variants={footerItem} className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={'/assets/img/logo.png'}
                width={117}
                height={55}
                alt=""
              />
            </Link>
            <p className="max-w-sm">B11N GYM Purwokerto</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Arcawinangun Purwokerto Timur, Banyumas</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>+62 896 5384 7651</span>
              </li>
              <li>
                <Link className="flex items-center gap-4" href="#">
                  <FaEnvelope className="text-xl text-accent" />
                  <span>Sobiin77@gmail.com</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          {/* blog */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Coming Soon</h4>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#">
              <Image
                src={'/assets/img/collab.png'}
                width={500}
                height={500}
                alt=""
              />
            </Link>
            </div>
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">
                  K1NG GYM PURWOKERTO
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  Empower the King in You
                </p>
              </Link>
            </div>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#">
              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                Jl Raden Patah 51 Rt 5/5 Ledug Kembaran
              </p>
            </Link>
            </div>
            {/* post */}
            <div className="flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all" href="#">
                <h5 className="h5 leading-snug">
                  Cabang dari B11N GYM PURWOKERTO
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  Jl. Masjid Baru, Arcawinangun, Kec. Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah
                </p>
              </Link>
            </div>
          </motion.div>
          {/* gallery */}
          <div>
            <h4 className="h4 text-accent mb-4">Gallery</h4>
            {/* gallery imgs */}
            <Gallery/>
          </div>
          {/* newsletter */}
          <motion.div variants={footerItem}>
          <h4 className="h4 text-accent mb-4">Hubungi Kami</h4>
            <div>
              <ContactSection/>
            </div>
          </motion.div>
        </div>
      </div>
      {/* copyright */}
      <div className="text-white border-t border-white/20 py-12">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <span>&copy; Copyright 2024 B11N GYM Purwokerto</span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
