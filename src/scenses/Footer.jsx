import { IconMail, IconPhoneCall } from "@tabler/icons-react";
const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-gray-700 text-white px-6 py-28">
      <div className="grid  text-center grid-cols-1 gap-16 sm:text-start sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">
            Gym<span className="text-orange-600">ing</span>
          </h1>
          <p className="text-black">
           The best way to achive your goals and dreams
          </p>
          <div className="mt-3 flex flex-col gap-4 items-center sm:items-start">
            <a
              className="flex font-semibold transition duration-150 hover:text-orange-500"
              href="tel:567456789"
            >
              <IconPhoneCall />
              &nbsp;(567) -456-789
            </a>
            <a
              className="flex font-semibold transition duration-150 hover:text-orange-500"
              href="mailto:Gyming@gmail.com"
            >
              <IconMail />
              &nbsp;Gyming@gmail.com
            </a>
            <a
              target="_blank"
              href="https://themewagon.com/"
              rel="noreferrer"
              className="text-sm transition duration-150 hover:text-orange-500"
            >
              Design by ThemeWagon
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">ClASSES</h1>
          <ul className="flex flex-col gap-2">
            <li className="transition duration-150 hover:text-orange-500">
              <button>First Class</button>
            </li>
            <li className="transition duration-150 hover:text-orange-500">
              <button>Second Class</button>
            </li>
            <li className="transition duration-150 hover:text-orange-500">
              <button>Third Class</button>
            </li>
            <li className="transition duration-150 hover:text-orange-500">
              <button>Fourth Class</button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">WORKING HOURS</h1>
          <p className="flex flex-col gap-2">
            <span>Mon - Fri: 9:00AM - 9:00PM </span>
            <span>Sat: 9:00AM - 19:00PM</span>
            <span>Sun: Closed</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">SUBSCRIPTION</h1>
          <div className="flex flex-col gap-4">
            <input
              id="email"
              type="text"
              className="border-transparent bg-[#ececec] py-4 px-16 text-sm outline-none"
              placeholder="Enter Email Address"
            />
            <button className="bg-orange-500 py-3 font-medium text-white shadow-lg transition duration-300 hover:bg-orange-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
