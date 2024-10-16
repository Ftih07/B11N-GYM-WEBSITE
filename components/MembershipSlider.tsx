"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import CustomButton from "./CustomButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const membershipData = [
  {
    title: "harian",
    price: "10.000",
    benefits: [
      { icon: FaCheck, text: "Satu hari penuh di B11N Gym" },
      { icon: FaCheck, text: "Akses bebas untuk semua alat" },
      { icon: FaCheck, text: "Free Personal trainer" },
      { icon: FaCheck, text: "Full akses untuk semua fasilitas" },
      { icon: MdClose, text: "Free biaya pendaftaran" },
      { icon: MdClose, text: "Senin - Minggu akses ke B11N GYM" },
      { icon: MdClose, text: "Masuk sebagai member dari B11N Gym" },
    ],
    waktu: "hari",
  },
  {
    title: "mingguan",
    price: "30.000",
    benefits: [
      { icon: FaCheck, text: "Satu hari penuh di B11N Gym" },
      { icon: FaCheck, text: "Akses bebas untuk semua alat" },
      { icon: FaCheck, text: "Free Personal trainer" },
      { icon: FaCheck, text: "Full akses untuk semua fasilitas" },
      { icon: MdClose, text: "Free biaya pendaftaran" },
      { icon: MdClose, text: "Senin - Minggu akses ke B11N GYM" },
      { icon: MdClose, text: "Masuk sebagai member dari B11N Gym" },
    ],
    waktu: "minggu",
  },
  {
    title: "bulanan",
    price: "80.000",
    benefits: [
      { icon: FaCheck, text: "Satu hari penuh di B11N Gym" },
      { icon: FaCheck, text: "Akses bebas untuk semua alat" },
      { icon: FaCheck, text: "Free Personal trainer" },
      { icon: FaCheck, text: "Full akses untuk semua fasilitas" },
      { icon: FaCheck, text: "Free biaya pendaftaran" },
      { icon: FaCheck, text: "Senin - Minggu akses ke B11N GYM" },
      { icon: FaCheck, text: "Masuk sebagai member dari B11N Gym" },
    ],
    waktu: "bulan",
  },
];

const MembershipSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);
  const [selectedMembershipTitle, setSelectedMembershipTitle] = useState<
    string | null
  >(null);

  useEffect(() => {
    setIsClient(true); // Komponen sudah dimuat di sisi client
  }, []);

  const openModal = (title: string) => {
    setSelectedMembershipTitle(title); // Set the selected membership title
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPaymentMethod(null);
    setSelectedMembershipTitle(null); // Reset the membership title when closing the modal
  };

  const selectPaymentMethod = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Swiper
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
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
      >
        {membershipData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
                <div className="py-5 px-[60px] border-b border-accent">
                  <h4 className="h4">{item.title}</h4>
                </div>
                {/* benefits */}
                <div className="py-[30px] px-[60px]">
                  <ul className="flex flex-col gap-5 mb-7">
                    {item.benefits.map((item, index) => {
                      return (
                        <li className="flex items-center gap-2" key={index}>
                          <item.icon className="text-accent text-lg" />
                          {item.text}
                        </li>
                      );
                    })}
                  </ul>
                  {/* price & button */}
                  <p className="text-accent mb-8 flex gap-1 items-center">
                    <sup className="text-2xl">Rp</sup>
                    <strong className="text-6xl">{item.price}</strong>
                    <em className="self-end text-2xl">/{item.waktu}</em>
                  </p>
                  <CustomButton
                    onClick={() => openModal(item.title)}
                    containerStyles="w-[196px] h-[62px]"
                    text="Beli Sekarang"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto max-h-screen bg-cover"
          onClick={closeModal}
        >
          <div
            className="bg-white text-black p-10 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {!selectedPaymentMethod && (
              <>
                <h3 className="text-[2rem] font-bold mb-4 text-center">
                  Pilih Metode Pembayaran untuk Member <span style={{ color: 'red' }}>{selectedMembershipTitle}</span>
                </h3>

                <div className="flex justify-center mb-4 items-center">
                  <div className="flex flex-col items-center mx-4">
                    <Image
                      src="/assets/img/pembayaran/qris.png"
                      width={300}
                      height={300}
                      alt="QRIS"
                      className="mb-2"
                    />
                    <button
                      className="px-4 py-2 bg-accent text-white rounded hover:bg-black transition"
                      onClick={() => selectPaymentMethod("qris")}
                    >
                      Bayar via QRIS
                    </button>
                  </div>

                  <div className="flex flex-col items-center mx-4">
                    <Image
                      src="/assets/img/pembayaran/bca.png"
                      width={300}
                      height={300}
                      alt="Transfer Bank"
                      className="mb-2"
                    />
                    <button
                      className="px-4 py-2 bg-accent text-white rounded hover:bg-black transition"
                      onClick={() => selectPaymentMethod("transfer")}
                    >
                      Bayar via Transfer
                    </button>
                  </div>
                </div>

                <div className="flex justify-center mt-17">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-black text-white rounded hover:bg-accent transition text-20"
                  >
                    Tutup
                  </button>
                </div>
              </>
            )}

            {selectedPaymentMethod === "qris" && (
              <>
                <h3 className="text-3xl font-bold mb-4 text-center mt-[25rem]">
                  Pembayaran via QRIS untuk member <span style={{ color: 'red' }}>{selectedMembershipTitle}</span>
                </h3>
                <Image
                  src="/assets/img/pembayaran/qris-barcode.png"
                  width={400}
                  height={300}
                  alt="QRIS Barcode"
                  className="mb-4 mx-auto"
                />
                <p className="text-center mb-2">
                  Scan kode QR di atas untuk melakukan pembayaran.
                </p>
                <button
                  onClick={() => {
                    const email = "naufalfathi37@gmail.com"; // Ganti dengan alamat email Anda
                    const subject = encodeURIComponent(
                      "Konfirmasi Pembayaran B11N Gym"
                    );
                    const body = encodeURIComponent(
                      "Tolong lampirkan bukti pembayaran Anda di sini.\n\nTerima kasih."
                    );
                    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
                  }}
                  className="mt-4 px-4 py-2 bg-black text-white text-xl rounded hover:bg-accent transition mx-auto block"
                >
                  Kirim Bukti Pembayaran
                </button>
                <p className="text-red-600 text-center mt-5 mr-10 ml-10 text-xl">
                  Catatan Penting: Setelah pembayaran, wajib kirim bukti
                  pembayaran dengan klik tombol di atas ya!
                </p>

                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setSelectedPaymentMethod(null)} // Mengatur ulang metode pembayaran
                    className="px-4 py-2 text-xl bg-accent text-white rounded hover:bg-black transition mx-2"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 text-xl bg-accent text-white rounded hover:bg-black transition mx-2"
                  >
                    Tutup
                  </button>
                </div>
                <p className="text-center mt-5 text-lg bg-gray-300 bg-opacity-50 rounded-lg mr-4 ml-4 mb-4 pt-4 pb-4 pr-4 pl-4">
                  Jangan lupa absen saat berkunjung ke B11N Gym. Jika kamu
                  membeli atau memperpanjang{" "}
                  <span className="text-red-700">Member Bulanan</span>, minta
                  kartu member baru atau serahkan kartu lamamu ke kasir.
                </p>
              </>
            )}

            {selectedPaymentMethod === "transfer" && (
              <>
                <h3 className="text-3xl font-bold mb-4 text-center">
                  Pembayaran via Transfer untuk member <span style={{ color: 'red' }}>{selectedMembershipTitle}</span>
                </h3>
                <p className="text-center text-xl">
                  Nomor rekening: 0461701506
                </p>
                <p className="text-center text-xl">An: Sobiin</p>
                <Image
                  src="/assets/img/pembayaran/bca.png"
                  width={300}
                  height={300}
                  alt="Bca Bank"
                  className="mb-4 mx-auto"
                />
                <p className="text-center mt-4 text-xl">
                  Lakukan transfer ke nomor rekening di atas.
                </p>
                <button
                  onClick={() => {
                    const email = "naufalfathi37@gmail.com"; // Ganti dengan alamat email Anda
                    const subject = encodeURIComponent(
                      "Konfirmasi Pembayaran Anda ke B11N Gym"
                    );
                    const body = encodeURIComponent(
                      "Tolong lampirkan bukti pembayaran Anda di sini.\n\nTerima kasih."
                    );
                    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
                  }}
                  className="mt-4 px-4 py-2 bg-black text-white text-xl rounded hover:bg-accent transition mx-auto block"
                >
                  Kirim Bukti Pembayaran
                </button>
                <p className="text-red-600 text-center mt-5 mr-10 ml-10 text-xl">
                  Catatan Penting: Setelah pembayaran, wajib kirim bukti
                  pembayaran dengan klik tombol di atas ya!
                </p>

                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setSelectedPaymentMethod(null)}
                    className="px-4 py-2 text-xl bg-accent text-white rounded hover:bg-black transition mx-2"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 text-xl bg-accent text-white rounded hover:bg-black transition mx-2"
                  >
                    Tutup
                  </button>
                </div>
                <p className="text-center mt-5 text-lg bg-gray-300 bg-opacity-50 rounded-lg mr-4 ml-4 mb-4 pt-4 pb-4 pr-4 pl-4">
                  Jangan lupa absen saat berkunjung ke B11N Gym. Jika kamu
                  membeli atau memperpanjang{" "}
                  <span className="text-red-700">Member Bulanan</span>, minta
                  kartu member baru atau serahkan kartu lamamu ke kasir.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MembershipSlider;
