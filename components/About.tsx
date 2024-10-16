"use client";

import { FaBellSlash, FaChalkboardTeacher, FaParking, FaToilet, FaUsers, FaWifi } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Achievements from "./Achievements";

import { FaLock, FaAirFreshener, FaMusic } from "react-icons/fa";

const facilities = [
  {
    icon: <FaLock />,
    title: "Loker",
    subtitle:
      "Butuh Loker? Tinggal bilang aja ke Trainer kami disana, nanti dikasih kuncinya kok dan yang jelas barangmu udah pasti terjamin aman.",
  },
  {
    icon: <FaAirFreshener />,
    title: "Ruang Istirahat Ber-AC",
    subtitle:
      "Habis latihan pengen istirahat? Di B11N Gym kami punya ruang istirahat yang ber-AC nih jadi gaperlu gerah atau kepanasan lagi deh.",
  },
  {
    icon: <FaMusic />,
    title: "Ruang Karaoke",
    subtitle:
      "Suka denger musik atau bahkan karaokean? Di ruang istirahat kami juga ada loh tempat buat karaoke, cocok nih buat kalian yang hobi nyanyi.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "free personal trainer",
    subtitle:
      "Pengen nge Gym tapi masih bingung gerakan dan cara pake alatnya? Tenang, di B11N Gym kami ada Personal Trainer khusus buat bantu kamu.",
  },
  {
    icon: <FaWifi />,
    title: "free wifi",
    subtitle:
      "Ga ada Kuota? Santai aja, di B11N Gym kami menyediakan free wifi untuk pengunjung kami. Soal password bisa tanya langsung ke trainer kami ya.",
  },
  {
    icon: <FaParking />,
    title: "free parkir",
    subtitle:
      "Demi kenyamanan anda, kami menyediakan tempat perkir yang gratis tanpa dipungut biaya apapun dan yang pasti tempat parkirnya nyaman.",
  },
];

const featured = [
  {
    icon: <FaUsers />,
    title: "pelatih professional",
    subtitle:
      "Saat anda berlatih di B11N Gym Purwokerto, Anda akan dibimbing oleh pelatih profesional yang berpengalaman. Mereka siap membantu Anda dengan program latihan yang disesuaikan dan pendekatan yang aman serta efektif.",
  },
  {
    icon: <IoIosPricetags />,
    title: "harga termurah",
    subtitle:
      "Di B11N GYM Purwokerto, kami menyediakan harga untuk member harian, mingguan, dan bulanan yang paling murah di Purwokerto. Dimana salah satunya adalah harga dari Member Bulanannya yang hanya Rp 80.000 per bulan",
  },
  {
    icon: <FaDumbbell />,
    title: "peralatan modern",
    subtitle:
      "Di B11N GYM Purwokerto, kami terus berkomitmen untuk selalu meng-upgrade alat-alat gym kami demi kenyamanan dan keamanan para member, sehingga pengalaman latihan Anda akan semakin optimal.",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2"
          >
            Tentang Kami
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[600px] mx-auto text-center"
          >
            Selamat datang di B11N Gym Purwokerto, pusat kebugaran populer di
            Arcawinangun, Purwokerto Timur. Kami menawarkan keanggotaan harian,
            mingguan, dan bulanan dengan harga terjangkau. Fasilitas kami
            meliputi peralatan gym lengkap, ruang istirahat ber-AC, ruang
            karaoke, dan loker yang aman. B11N Gym bukan hanya tempat
            berolahraga, tapi juga ruang untuk membangun komunitas hidup sehat
            yang menyenangkan.
          </motion.p>
        </div>
        {/* featured itmes */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-4 border p-10"
                key={index}
              >
                <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* fasilitas kami */}
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-8"
        >
          Fasilitas Kami
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {facilities.map((facilities, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-4 border p-10"
                key={index}
              >
                <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {facilities.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-accent">{facilities.title}</h4>
                  <p>{facilities.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* achievements */}
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
