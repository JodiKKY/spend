import React from 'react';
import icon from '../assets/icon.png';
import heroImage from '../assets/hero11.png';
import hero from '../assets/hero.png';
import About1 from '../assets/About1.png';
import About2 from '../assets/About2.png';
import About3 from '../assets/About3.png';
import About4 from '../assets/About4.png';

const features = [
  {
    img: About1,
    title: 'Invoicing like a Pro',
    description:
      'Track your finances and send professional invoices in seconds—all from one powerful app. Stay in control, get paid faster, and manage like a boss.',
  },
  {
    img: About2,
    title: 'Stay on Top of Your Personal Finances',
    description:
      'Easily track your expenses, assets, and income in one place. Make smarter money moves with real-time insights, right from your pocket.',
  },
  {
    img: About3,
    title: 'Manage Invoices with Ease',
    description:
      'Create, send, and track invoices in just a few taps. It’s fast, effortless, and built for how you do business.',
  },
  {
    img: About4,
    title: 'Manage Invoices with Ease',
    description:
      'Create, send, and track invoices in just a few taps. It’s fast, effortless, and built for how you do business.',
  },
];

const Homepage = () => {
  return (
    <div className="text-gray-800">

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="relative z-10 max-w-3xl text-center text-white px-4">
          <img src={hero} alt="Spend App Logo" className="h-20 w-20 mx-auto mb-4" />
          <p className="text-lg mb-6">Your Complete Financial Management Solution</p>
          <a
            href="/path/to/your/file.pdf"
            download
            className="bg-blue-500 text-white font-semibold text-sm px-[37px] py-[9px] rounded-full inline-block  hover:bg-blue-700 transition duration-200">
            Download Now
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-12 px-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">OUR SERVICES</h2>
          <p className="text-gray-600 mt-2">
            Smart financial tools to simplify your business and personal life
          </p>
        </div>

        <div className="flex flex-nowrap lg:grid lg:grid-cols-4 gap-[30px] w-max lg:w-full mx-auto justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-[300px] flex-shrink-0 lg:w-auto bg-white rounded-xl shadow-md transition duration-300 text-center"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-[96%] h-[600px] object-cover rounded-[45px] mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm px-4 pb-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gray-50 font-[Segoe UI,sans-serif]">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-wide">
            What Our Users Say
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                quote:
                  "App is very easy to use, efficient, the UI is simple and sleek. The tracking of expenses is top notch. Kudos!",
                name: "George Mante",
              },
              {
                quote:
                  "All business owners should get this app. It helps you generate invoices, receipts and also track your sales and expenses. I love ittt!",
                name: "Miss Mimie",
              },
              {
                quote:
                  "My go-to app for tracking expenses. UI is very neat, making the entire experience using this app nothing short of a delight.",
                name: "Fedelis Amenga-etego Wekia",
              },
            ].map(({ quote, name }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-8 max-w-xs w-full text-left transform transition-transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              >
                <svg
                  className="w-10 h-10 text-red-600 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7.17 6.07a5.02 5.02 0 015.66 1.46l1.42-1.42A7.02 7.02 0 006.75 8.36l.42-.42zm9.24 1.46a5.02 5.02 0 015.66 1.46l1.42-1.42A7.02 7.02 0 0016 8.36l.42-.42zM2 17h6v-2H2v2zm7 0h6v-2H9v2zm7 0h6v-2h-6v2z" />
                </svg>
                <p className="text-gray-700 text-base mb-6 leading-relaxed italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <p className="font-semibold text-gray-900 text-lg">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

