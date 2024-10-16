'use client';
import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa6';

// import swiper components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';

// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// testimonial data
const testimonialData = [
  {
    img: '/assets/img/testimonial/testimoni1.jpg',
    message:
      'Tempat gym premium yg alat full import presisi dan ergonomis serta tempat nyaman.',
    name: 'Latifatun Nur',
    stars: 5,
  },
  {
    img: '/assets/img/testimonial/testimoni_2.png',
    message:
      'Yg hobi olahraga wajib kesini sih Tempat GYM Premium dengan alat" Import, trainernya sangat ramah , Tempatnya luas, nyaman, bersih.',
    name: 'Ungguh Sasongko',
    stars: 5,
  },
  {
    img: '/assets/img/testimonial/testimoni_3.png',
    message:
      'ang hobi nge gym paling pas klo nge gym disini, tempatnya luas, suasananya nyaman, alatnya lengkapp',
    name: 'Iful Rahmat',
    stars: 5,
  },
  {
    img: '/assets/img/testimonial/testimoni_4.jpg',
    message:
      'Josss... utk tempat gym dgn alat yg bagus dan harga termurah di Purwokerto',
    name: 'Otna iluJ',
    stars: 5,
  },
  {
    img: '/assets/img/testimonial/testimoni_5.png',
    message:
      'Tempat nyaman ....instruktur oke semua',
    name: 'teguh wiseno',
    stars: 5,
  },
  {
    img: '/assets/img/testimonial/testimoni_6.png',
    message:
      'Tempatnya nyaman cocok untuk anak muda',
    name: 'Utomo Indra Kusuma',
    stars: 5,
  },
];

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const Testimonial = () => {
  return (
    <section className="py-12 xl:py-28" id="testimonial">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center"
        >
          Testimoni Dari Pengunjung
        </motion.h2>
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="h-[400px]"
          >
            {testimonialData.map((person, index) => {
              return (
                <SwiperSlide className="h-full" key={index}>
                  <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
                    <Image
                      src={person.img}
                      width={90}
                      height={90}
                      alt=""
                      className="rounded-full border-2 border-accent"
                    />
                    <div className="flex flex-col justify-center items-center">
                      <FaQuoteLeft className="text-2xl text-gray-300" />
                      <p className="max-w-[380px] mb-4">{person.message}</p>
                      <span className="text-2xl text-accent">
                        {person.name}
                      </span>
                      <div className="flex mt-2">
                        {Array.from({ length: person.stars }, (_, i) => (
                          <FaStar key={i} color="#FFD700" className="text-xl" />
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
