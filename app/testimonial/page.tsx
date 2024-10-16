// pages/testimonial.js
import Image from 'next/image'; // Untuk menampilkan gambar

const testimonials = [
  {
    img: '/assets/img/blog/post1.jpg',
    date: '10 Maret 2024',
    title: 'Maintain a perfect structure after workout',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // ... data testimonial lainnya
];

export default function testimonial() {
  return (
    <div className="testimonial-page">
      <h1>Testimonials</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <Image
              src={testimonial.img}
              alt={testimonial.title}
              width={100}
              height={100}
              className="testimonial-image"
            />
            <h3>{testimonial.title}</h3>
            <p className="testimonial-date">{testimonial.date}</p>
            <p>{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
