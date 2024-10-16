"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import CustomButton from "./CustomButton";
import { useState } from "react";

interface Class {
  name: string;
  img: string;
  description: string;
  content: string;
}

const classes: Class[] = [
  {
    name: "Day 1",
    img: "/assets/img/classes/day1.jpg",
    description: `
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">1. Pelatihan Dada</h2>
      <p style="font-size: 1rem;">Pelatihan dada dirancang untuk membangun kekuatan dan massa otot pada area dada, memberikan bentuk yang lebih terdefinisi dan meningkatkan performa dalam aktivitas sehari-hari. Program ini mencakup berbagai jenis latihan yang menargetkan otot pectoralis mayor dan minor.</p>
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">2. Pelatihan Bicep</h2>
      <p style="font-size: 1rem;">Pelatihan bicep fokus pada penguatan dan pengembangan otot lengan atas, khususnya otot bicep brachii. Program ini bertujuan untuk memberikan lengan yang lebih kuat dan lebih berotot.</p>
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">3. Pelatihan Perut</h2>
      <p style="font-size: 1rem;">Pelatihan perut dirancang untuk menguatkan otot inti dan membantu membentuk area perut. Program ini berfokus pada peningkatan stabilitas, keseimbangan, dan kekuatan otot perut.</p>
    `,
    content: `Untuk Basic Training Program Day 1. Kami menyediakan 3 program pelatihan diantaranya pelatihan untuk Dada, Bicep, dan Perut.`,
  },
  {
    name: "Day 2",
    img: "/assets/img/classes/day2.png",
    description: `
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">1. Pelatihan Dada</h2>
      <p style="font-size: 1rem;">Pelatihan dada dirancang untuk membangun kekuatan dan massa otot pada area dada, memberikan bentuk yang lebih terdefinisi dan meningkatkan performa dalam aktivitas sehari-hari. Program ini mencakup berbagai jenis latihan yang menargetkan otot pectoralis mayor dan minor.</p>
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">2. Pelatihan Bicep</h2>
      <p style="font-size: 1rem;">Pelatihan bicep fokus pada penguatan dan pengembangan otot lengan atas, khususnya otot bicep brachii. Program ini bertujuan untuk memberikan lengan yang lebih kuat dan lebih berotot.</p>
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">3. Pelatihan Perut</h2>
      <p style="font-size: 1rem;">Pelatihan perut dirancang untuk menguatkan otot inti dan membantu membentuk area perut. Program ini berfokus pada peningkatan stabilitas, keseimbangan, dan kekuatan otot perut.</p>
    `,
    content: `Untuk Basic Training Program Day 1. Kami menyediakan 3 program pelatihan diantaranya pelatihan untuk Dada, Bicep, dan Perut.`,
  },
  {
    name: "Day 3",
    img: "/assets/img/classes/day2.png",
    description: `
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">1. Pelatihan Dada</h2>
      <p style="font-size: 1rem;">Pelatihan dada dirancang untuk membangun kekuatan dan massa otot pada area dada, memberikan bentuk yang lebih terdefinisi dan meningkatkan performa dalam aktivitas sehari-hari. Program ini mencakup berbagai jenis latihan yang menargetkan otot pectoralis mayor dan minor.</p>
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">2. Pelatihan Bicep</h2>
      <p style="font-size: 1rem;">Pelatihan bicep fokus pada penguatan dan pengembangan otot lengan atas, khususnya otot bicep brachii. Program ini bertujuan untuk memberikan lengan yang lebih kuat dan lebih berotot.</p>
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">3. Pelatihan Perut</h2>
      <p style="font-size: 1rem;">Pelatihan perut dirancang untuk menguatkan otot inti dan membantu membentuk area perut. Program ini berfokus pada peningkatan stabilitas, keseimbangan, dan kekuatan otot perut.</p>
    `,
    content: `Untuk Basic Training Program Day 1. Kami menyediakan 3 program pelatihan diantaranya pelatihan untuk Dada, Bicep, dan Perut.`,
  },
  {
    name: "Day 4",
    img: "/assets/img/classes/day4.jpg",
    description: `
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">1. Pelatihan Dada</h2>
      <p style="font-size: 1rem;">Pelatihan dada dirancang untuk membangun kekuatan dan massa otot pada area dada, memberikan bentuk yang lebih terdefinisi dan meningkatkan performa dalam aktivitas sehari-hari. Program ini mencakup berbagai jenis latihan yang menargetkan otot pectoralis mayor dan minor.</p>
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">2. Pelatihan Bicep</h2>
      <p style="font-size: 1rem;">Pelatihan bicep fokus pada penguatan dan pengembangan otot lengan atas, khususnya otot bicep brachii. Program ini bertujuan untuk memberikan lengan yang lebih kuat dan lebih berotot.</p>
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">3. Pelatihan Perut</h2>
      <p style="font-size: 1rem;">Pelatihan perut dirancang untuk menguatkan otot inti dan membantu membentuk area perut. Program ini berfokus pada peningkatan stabilitas, keseimbangan, dan kekuatan otot perut.</p>
    `,
    content: `Untuk Basic Training Program Day 1. Kami menyediakan 3 program pelatihan diantaranya pelatihan untuk Dada, Bicep, dan Perut.`,
  },
];

const secondClasses: Class[] = [
  {
    name: "Day 1",
    img: "/assets/img/classes/day1.jpg",
    description: `
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">1. Pelatihan Dada</h2>
      <p style="font-size: 1rem;">Pelatihan dada dirancang untuk membangun kekuatan dan massa otot pada area dada, memberikan bentuk yang lebih terdefinisi dan meningkatkan performa dalam aktivitas sehari-hari. Program ini mencakup berbagai jenis latihan yang menargetkan otot pectoralis mayor dan minor.</p>
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">2. Pelatihan Bicep</h2>
      <p style="font-size: 1rem;">Pelatihan bicep fokus pada penguatan dan pengembangan otot lengan atas, khususnya otot bicep brachii. Program ini bertujuan untuk memberikan lengan yang lebih kuat dan lebih berotot.</p>
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">3. Pelatihan Perut</h2>
      <p style="font-size: 1rem;">Pelatihan perut dirancang untuk menguatkan otot inti dan membantu membentuk area perut. Program ini berfokus pada peningkatan stabilitas, keseimbangan, dan kekuatan otot perut.</p>
    `,
    content: `Untuk Super Set Training Program Day 1. Kami menyediakan 3 program pelatihan diantaranya pelatihan untuk Dada, Punggung, dan Perut.`,
  },
  {
    name: "Day 2",
    img: "/assets/img/classes/day2.png",
    description: `
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">1. Pelatihan Dada</h2>
      <p style="font-size: 1rem;">Pelatihan dada dirancang untuk membangun kekuatan dan massa otot pada area dada, memberikan bentuk yang lebih terdefinisi dan meningkatkan performa dalam aktivitas sehari-hari. Program ini mencakup berbagai jenis latihan yang menargetkan otot pectoralis mayor dan minor.</p>
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">2. Pelatihan Bicep</h2>
      <p style="font-size: 1rem;">Pelatihan bicep fokus pada penguatan dan pengembangan otot lengan atas, khususnya otot bicep brachii. Program ini bertujuan untuk memberikan lengan yang lebih kuat dan lebih berotot.</p>
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">3. Pelatihan Perut</h2>
      <p style="font-size: 1rem;">Pelatihan perut dirancang untuk menguatkan otot inti dan membantu membentuk area perut. Program ini berfokus pada peningkatan stabilitas, keseimbangan, dan kekuatan otot perut.</p>
    `,
    content: `Untuk Super Set Training Program Day 1. Kami menyediakan 3 program pelatihan diantaranya pelatihan untuk Bahu, Kaki, dan Perut.`,
  },
  {
    name: "Day 3",
    img: "/assets/img/classes/day2.png",
    description: `
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">1. Pelatihan Dada</h2>
      <p style="font-size: 1rem;">Pelatihan dada dirancang untuk membangun kekuatan dan massa otot pada area dada, memberikan bentuk yang lebih terdefinisi dan meningkatkan performa dalam aktivitas sehari-hari. Program ini mencakup berbagai jenis latihan yang menargetkan otot pectoralis mayor dan minor.</p>
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">2. Pelatihan Bicep</h2>
      <p style="font-size: 1rem;">Pelatihan bicep fokus pada penguatan dan pengembangan otot lengan atas, khususnya otot bicep brachii. Program ini bertujuan untuk memberikan lengan yang lebih kuat dan lebih berotot.</p>
      <br>
      <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">3. Pelatihan Perut</h2>
      <p style="font-size: 1rem;">Pelatihan perut dirancang untuk menguatkan otot inti dan membantu membentuk area perut. Program ini berfokus pada peningkatan stabilitas, keseimbangan, dan kekuatan otot perut.</p>
    `,
    content: `Untuk Super Set Training Program Day 1. Kami menyediakan 3 program pelatihan diantaranya pelatihan untuk Bicep, Tricep, dan Perut.`,
  },
];

const ClassesSection = ({
  classesData,
  sectionTitle,
}: {
  classesData: Class[];
  sectionTitle: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeClass, setActiveClass] = useState<Class | null>(null);

  const openModal = (selectedClass: Class): void => {
    setActiveClass(selectedClass);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setActiveClass(null);
  };

  return (
    <section id="class">
      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="h2 text-center bg-black py-10 border-t border-dotted border-black"
      >
        <p className="text-[2rem] font-bold text-white">{sectionTitle}</p>
      </motion.h2>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {classesData.map((item, index) => {
          return (
            <div
              className="relative w-full h-[400px] lg:h-[485px] flex flex-col justify-center items-center"
              key={index}
            >
              {/* Overlay */}
              <div className="bg-black/50 absolute w-full h-full top-0 z-10 "></div>
              <Image src={item.img} fill className="object-cover" alt="" />
              {/* Text & Button */}
              <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
                <motion.h3
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="h3 text-accent"
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-white"
                >
                  {item.content}
                </motion.p>
                <motion.div
                  variants={fadeIn("up", 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <CustomButton
                    containerStyles="w-[164px] h-[46px]"
                    text="Read more"
                    onClick={() => openModal(item)}
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Modal */}
      {isModalOpen && activeClass && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-8 rounded-lg w-[800px]">
            <h3 className="text-[2rem] font-bold mb-4">{activeClass.name}</h3>
            <div
              className="text-sm mb-4"
              dangerouslySetInnerHTML={{ __html: activeClass.description }}
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
    </section>
  );
};

const Classes = () => {
  return (
    <>
      {/* Section 1 */}
      <ClassesSection
        classesData={classes}
        sectionTitle="Basic - Training Program"
      />
      {/* Section 2 */}
      <ClassesSection
        classesData={secondClasses}
        sectionTitle="Super Set - Training Program"
      />
    </>
  );
};

export default Classes;
