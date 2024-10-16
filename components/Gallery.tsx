"use client";

import Image from "next/image";
import db from "@/app/db/gallery.json";
import { gallery } from "@/models/gallery";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<number>(0);
  const [imgPop, setImgPop] = useState<boolean>(false);

  const swipeImg = (moveType: string) => {
    if (moveType == "prv") {
      if (selectedImg == 0) setSelectedImg(db.gallery.length - 1);
      else setSelectedImg(selectedImg - 1);
    }

    if (moveType == "nxt") {
      if (selectedImg == db.gallery.length - 1) setSelectedImg(0);
      else setSelectedImg(selectedImg + 1);
    }
  };  

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      swipeImg("prv");  // Menggunakan tombol panah kiri
    }
    if (event.key === "ArrowRight") {
      swipeImg("nxt");  // Menggunakan tombol panah kanan
    }
  });

  return (
    <>
      {/* Grid untuk gambar kecil */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-5">
        {db.gallery.map((loc: gallery, i: number) => {
          return (
            <a
              key={i}
              onClick={() => {
                setSelectedImg(i);
                setImgPop(true);
              }}
              className="cursor-pointer hover:scale-105 transition-all ease-linear"
            >
              <Image
                src={`/gallery/${loc.img}`}
                alt={loc.location}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </a>
          );
        })}
      </div>

      {/* Picture Pop-up */}
      {imgPop && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-85 z-50 flex justify-between items-center gap-3">
          {/* Close Button */}
          <a
            onClick={() => setImgPop(false)}
            className="absolute top-2 right-2 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full">
              <FaWindowClose className="text-red-600 h-8 w-8 rounded-full" />
            </div>
          </a>

          {/* Back Button */}
          <a
            onClick={() => swipeImg("prv")}
            className="bg-green rounded-full ml-2 hover:translate-x-2 transition-all ease-linear cursor-pointer"
          >
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 md:w-16 md:h-16 fill-white bg-red-600 m-5"
            >
              <path
                clipRule="evenodd"
                d="M15.0303 6.46967C15.3232 6.76256 15.3232 7.23744 15.0303 7.53033L10.5607 12L15.0303 16.4697C15.3232 16.7626 15.3232 17.2374 15.0303 17.5303C14.7374 17.8232 14.2626 17.8232 13.9697 17.5303L8.96967 12.5303C8.82902 12.3897 8.75 12.1989 8.75 12C8.75 11.8011 8.82902 11.6103 8.96967 11.4697L13.9697 6.46967C14.2626 6.17678 14.7374 6.17678 15.0303 6.46967Z"
                fillRule="evenodd"
              />
            </svg>
          </a>

          {/* Gambar Pop-up */}
          <div>
            <Image
              src={`/gallery/${db.gallery[selectedImg].img}`}
              alt={db.gallery[selectedImg].location}
              width={650}
              height={500}
              className="w-full max-w-[500px] h-auto"
            />
            <h3 className="text-center text-white font-bold uppercase text-3xl mt-3">
              {db.gallery[selectedImg].location}
            </h3>
          </div>

          {/* Tombol Berikutnya */}
          <a
            onClick={() => swipeImg("nxt")}
            className="bg-green rounded-full mr-2 hover:-translate-x-2 transition-all ease-linear cursor-pointer"
          >
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 md:w-16 md:h-16 fill-white bg-red-600 m-5"
            >
              <path
                clipRule="evenodd"
                d="M8.96967 17.5303C8.67678 17.2374 8.67678 16.7626 8.96967 16.4697L13.4393 12L8.96967 7.53033C8.67678 7.23744 8.67678 6.76256 8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967L15.0303 11.4697C15.171 11.6103 15.25 11.8011 15.25 12C15.25 12.1989 15.171 12.3897 15.0303 12.5303L10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303Z"
                fillRule="evenodd"
              />
            </svg>
          </a>

          {/* Thumbnail Navigasi */}
          <nav className="absolute hidden left-0 right-0 bottom-5 lg:flex justify-center gap-3 px-4">
            {db.gallery.map((loc: gallery, i: number) => {
              return (
                <a
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`hover:-translate-y-2 transition-all ease-linear cursor-pointer ${
                    selectedImg == i ? "-translate-y-2" : ""
                  }`}
                >
                  <Image
                    src={`/gallery/${loc.img}`}
                    alt={loc.location}
                    width={80}
                    height={80}
                  />
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
};

export default Gallery;
