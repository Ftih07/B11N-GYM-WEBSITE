"use client";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";

// components
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Image from "next/image";
import Link from "next/link";

// modal
import { useState } from "react";

interface Blog {
  img: string;
  date: string;
  title: string;
  href: string;
  content: string;
}

const blogData: Blog[] = [
  {
    img: "/assets/img/blog/post1.jpg",
    date: "29 September, 2024",
    title: "Rekomendasi Gym Termurah di Purwokerto? Ya di B11N Gym Purwokerto",
    href: "",
    content: `
        <p style="font-size: 1rem; margin-bottom: 2rem;">Jika Anda mencari tempat gym dengan fasilitas lengkap dan layanan berkualitas tanpa harus menguras dompet, 
        B11N Gym adalah pilihan yang tepat! Dengan biaya harian mulai dari hanya 10.000 IDR, Anda sudah bisa menikmati berbagai fasilitas yang kami tawarkan.</p>
        
        <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Kenapa Memilih B11N Gym?</h3>
        <p style="font-size: 1rem; margin-bottom: 1rem;">Kami percaya bahwa nge-gym seharusnya bisa diakses oleh semua orang. Meskipun harga kami sangat terjangkau, 
        kualitas sarana dan layanan kami tidak kalah dengan gym lainnya. Ini adalah tempat yang wajib dikunjungi bagi Anda yang ingin tetap bugar tanpa harus mengeluarkan banyak biaya.</p>
  
        <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Detail dari B11N Gym:</h3>
        <ul>
          <li style="font-size: 1rem;"><strong>Alamat:</strong> Jl. Masjid Baru, Arcawinangun, Kec. Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah</li>
          <li style="font-size: 1rem;"><strong>Maps:</strong> <a href="https://maps.app.goo.gl/hP4Sre9EXaVeZXdz9">Klik di sini (Langsung nyambung ke google maps kok hehe)</a></li>
          <li style="font-size: 1rem;"><strong>Jam Buka:</strong> Setiap hari, 07.00 - 21.00</li>
          <li style="font-size: 1rem;"><strong>Harga:</strong> Mulai dari 10.000 IDR</li>
        </ul>
        
        <p style="font-size: 1rem; margin-top: 1rem;">Jadi, tunggu apalagi? Segera kunjungi B11N Gym dan raih tujuan kebugaran Anda tanpa harus merogoh kocek dalam-dalam!</p>
      `,
  },
  {
    img: "/assets/img/blog/last.png",
    date: "30 September, 2024",
    title: "Coming Soon, K1NG GYM Purwokerto",
    href: "",
    content: `
        <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Siap-Siap! K1NG Gym Segera Hadir!</h3>
        <p style="font-size: 1rem; margin-bottom: 1rem;">Hey guys! Ada kabar seru nih yang pengen banget kita share. Setelah sukses ngebangun B11N Gym Purwokerto didaerah Arcawinangun, Purwokerto Timur, Kabupaten Banyumas dan dapet support luar biasa dari kalian semua, sekarang saatnya kita bawa sesuatu yang fresh buat kita semua. Yup, mengingat dengan antusias kalian semua di B11N Gym kita berencana bakal buka cabang baru yang bakal dinamain K1NG Gym!</p>

        <p style="font-size: 1rem; margin-bottom: 1rem;">K1NG Gym ini bakal jadi tempat workout yang nggak cuma keren tapi juga super lengkap dengan fasilitas modern. Aku pengen kasih pengalaman nge-gym yang beda, dengan vibes yang lebih seru dan program latihan yang cocok buat semua level, dari pemula sampai yang udah pro. Dengan semangat yang sama kayak di B11N Gym, aku yakin K1NG Gym bakal jadi tempat yang asyik buat kita semua ngembangin diri dan stay fit bareng-bareng.</p>
        <p style="font-size: 1rem; margin-bottom: 1rem;">Buat saat ini, K1NG Gym rencananya bakalan dibuka di Desa Ledug, Kec. Kembaran, Kab. Banyumas di Jl Raden Patah No. 51. Dan pastinya buat kalian yang tinggal didaerah Kembaran atau sekitarnya udah gaperlu jauh - jauh lagi deh buat dateng ke B11N Gym di Arcawinangun.</p>
        <p style="font-size: 1rem; margin-bottom: 1rem;">Pantengin terus update-nya ya, karena dalam waktu dekat kami bakal umumkan tanggal pembukaan dan beberapa promo menarik yang cuma ada di K1NG Gym. Thanks banget buat dukungan kalian selama ini buat B11N Gym, dan siap-siap buat nge-challenge diri kalian di K1NG Gym Purwokerto!</p>
      `,
  },
  {
    img: "/assets/img/blog/post3.png",
    date: "07 Oktober, 2024",
    title: "5 Tips Gym untuk Meningkatkan Performa dan Hasil Latihan",
    href: "",
    content: `
        <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Optimalkan Latihanmu dengan 5 Tips Sederhana Ini!</h3>
        <p style="font-size: 1rem; margin-bottom: 1rem;">Bosan dengan hasil yang begitu-begitu saja di gym? Saatnya ubah kebiasaan latihanmu! Berikut 5 tips yang bisa bantu kamu mendapatkan hasil maksimal setiap kali berlatih di gym.</p>

        <p style="font-size: 1rem; margin-bottom: 1rem;"><strong>1. Panaskan Mesin Tubuhmu: Jangan Lewatkan Pemanasan</strong></p>
        <p style="font-size: 1rem; margin-bottom: 1rem;">Banyak yang langsung terjun ke latihan inti tanpa pemanasan. Padahal, hanya 5-10 menit pemanasan bisa membuat perbedaan besar! Pemanasan membantu meningkatkan aliran darah ke otot, membuat tubuh siap menghadapi latihan berat, serta mengurangi risiko cedera. Jadi, jangan abaikan bagian kecil ini ya!</p>

        <p style="font-size: 1rem; margin-bottom: 1rem;"><strong>2. Kualitas Lebih Penting dari Kuantitas: Fokus pada Teknik</strong></p>
        <p style="font-size: 1rem; margin-bottom: 1rem;">Jangan hanya mengejar berat beban yang besar! Jika teknikmu salah, latihan malah bisa berakhir dengan cedera. Fokus pada gerakan yang benar, baik itu angkat beban atau gerakan fungsional. Ingat, teknik yang tepat akan membuat otot bekerja lebih efektif dan memberikan hasil lebih cepat.</p>

        <p style="font-size: 1rem; margin-bottom: 1rem;"><strong>3. Tujuan Jelas, Hasil Maksimal: Tentukan Targetmu!</strong></p>
        <p style="font-size: 1rem; margin-bottom: 1rem;">Ingin punya tubuh kekar, mengurangi lemak, atau sekadar meningkatkan stamina? Apa pun targetmu, pastikan kamu tahu apa yang ingin dicapai. Dengan tujuan yang jelas, kamu bisa merancang latihan yang tepat dan tetap termotivasi. Tanpa target, kamu hanya akan berjalan tanpa arah.</p>

        <p style="font-size: 1rem; margin-bottom: 1rem;"><strong>4. Jangan Lupakan Recovery: Beri Ototmu Waktu untuk Pulih</strong></p>
        <p style="font-size: 1rem; margin-bottom: 1rem;">Latihan keras itu penting, tapi recovery juga tak kalah pentingnya. Otot butuh waktu untuk pulih dan tumbuh setelah sesi latihan. Jangan lupa istirahat yang cukup, tidur berkualitas, dan beri jeda antar sesi latihan, terutama untuk area otot yang sama. Saat otot pulih dengan baik, kekuatan dan performamu akan meningkat.</p>

        <p style="font-size: 1rem; margin-bottom: 1rem;"><strong>5. Makanan Adalah Bahan Bakar: Nutrisi untuk Dukung Latihanmu</strong></p>
        <p style="font-size: 1rem; margin-bottom: 1rem;">Tanpa nutrisi yang tepat, latihan sekeras apa pun tidak akan memberikan hasil yang optimal. Pastikan kamu mengonsumsi makanan tinggi protein, karbohidrat yang baik, serta lemak sehat. Ini akan membantu mempercepat pemulihan dan mendukung pertumbuhan otot yang lebih baik.</p>

        <p style="font-size: 1rem; font-weight: 400;">Mulai Sekarang dan Rasakan Perbedaannya!</p>
        <p style="font-size: 1rem;">Latihan yang efektif bukan hanya tentang mengangkat beban berat atau berlari lebih jauh. Dengan tips-tips sederhana ini, kamu bisa mengoptimalkan usahamu di gym dan mulai melihat perubahan nyata pada tubuhmu. Jangan tunggu lagi—latihan lebih cerdas, bukan lebih keras!</p>
      `,
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "07 Oktober, 2024",
    title: "Fitness membership b11n gym purwokerto",
    href: "",
    content: `
        <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Mengapa kamu harus mendaftar menjadi member bulanan b11n gym?</h3>

        <p style="font-size: 1rem; margin-bottom: 1rem;">Dengan kamu mendaftarkan diri menjadi member dari B11N GYM. Kamu bisa mendapatkan beberapa promo khusus, potongan biaya, dan waktu yang lebih banyak dan fleksibel di B11N GYM</p>
        <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Beberapa manfaat atau keuntungan yang bisa kamu dapatkan saat kamu menjadi Member Bulanan dari B11N Gym adalah:</h3>
        <ul>
          <li style="font-size: 1rem;">Akses waktu yang tidak terbatas selama satu bulan penuh</li>
          <li style="font-size: 1rem;">Potongan biaya khusus</li>
          <li style="font-size: 1rem;">Promo khusus dari B11N GYM</li>
        </ul>

        <p style="font-size: 1rem; margin-bottom: 1rem;">Nah selain itu B11N GYM juga menyediakan 3 macam jenis member diantaranya:</p>

        <ul>
          <li style="font-size: 1rem;">1. Member Bulanan, mulai dari 80rb/bulan</li>
          <li style="font-size: 1rem;">2. Member Mingguan, mulai dari 30rb/minggus</li>
          <li style="font-size: 1rem;">3. Member Harian, mulai dari 10rb/hari/li>
        </ul>
      `,
  },
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
    content:
      "Learn how to maintain a proper posture and body structure after a workout to maximize recovery and muscle growth.",
  },
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 11, 2024",
    title: "Boost your stamina with this routine",
    href: "",
    content:
      "This blog will guide you through a stamina-building workout routine that will increase your endurance and strength.",
  },
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 12, 2024",
    title: "Effective muscle recovery techniques",
    href: "",
    content:
      "Explore different muscle recovery techniques that help you recover faster and prevent injuries after intense workouts.",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "March 13, 2024",
    title: "Healthy eating habits for athletes",
    href: "",
    content:
      "Find out what athletes need to eat to fuel their workouts and promote muscle growth, endurance, and recovery.",
  },
];

const Blog: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeBlog, setActiveBlog] = useState<Blog | null>(null);

  // Fungsi untuk membuka modal dengan blog yang dipilih
  const openModal = (blog: Blog): void => {
    setActiveBlog(blog);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = (): void => {
    setIsModalOpen(false);
    setActiveBlog(null);
  };

  return (
    <section className="bg-primary-300 text-white py-24" id="blog">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-8"
        >
          Blogs
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              760: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className="h-[420px] md:max-w-[660px] lg:max-w-none mb-8"
          >
            {blogData.map((post, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className="flex flex-col justify-start h-full max-w-[320px] mx-auto cursor-pointer"
                    onClick={() => openModal(post)}
                  >
                    <Image
                      src={post.img}
                      width={320}
                      height={266}
                      alt={post.title}
                      className="mb-6"
                    />
                    <div className="flex flex-col items-start">
                      <p className="uppercase text-[12px] tracking-[3px] mb-1">
                        {post.date}
                      </p>
                      <h5 className="h5 hover:text-accent transition-all duration-300">
                        {post.title}
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperNavButtons
              containerStyles="absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 flex justify-between gap-1"
              btnStyles="bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
              iconStyles="text-2xl"
            />
          </Swiper>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomButton
            containerStyles="block w-[196px] h-[62px] mx-auto"
            text="B11N GYM"
          />
        </motion.div>

        {/* Modal */}
        {isModalOpen && activeBlog && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div className="bg-white text-black p-8 rounded-lg max-w-[900px] max-h-screen overflow-y-auto">
              <h3 className="text-[2.5rem] font-bold mb-2">
                {activeBlog.title}
              </h3>
              <p className="mb-4">{activeBlog.date}</p>
              <Image
                src={activeBlog.img}
                width={900}
                height={266}
                alt={activeBlog.title}
                className="mb-4"
              />
              <div
                className="text-sm mb-4"
                dangerouslySetInnerHTML={{ __html: activeBlog.content }}
              />
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
