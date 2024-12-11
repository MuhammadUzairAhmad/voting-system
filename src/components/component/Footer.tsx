import Link from "next/link";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

const Footer = () => {
  const resources = [
    { name: "Resource", href: "/resource" },
    { name: "Resource name", href: "/resource-name" },
    { name: "Another resource", href: "/another-resource" },
    { name: "Final resource", href: "/final-resource" },
  ];

  const helpLinks = [
    { name: "Support", href: "/support" },
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-light-background dark:bg-dark-background py-8 sm:py-12">
      <div className="mx-auto px-2 sm:px-6 lg:px-8 py-4 ">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 py-4 border-y border-gray-200 dark:border-gray-600">
          {/* Social Media Column */}
          <div className="px-4 sm:w-2/3 xl:w-4/6">
            <div className="flex items-center gap-4 mb-6">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <h5 className="text-lg sm:text-xl font-bold text-light-text dark:text-dark-text">
                PolyMarket
              </h5>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-light-text mb-6 dark:text-dark-text">
              The world's largest prediction market.
            </h4>
            <div className="flex">
              <Link
                href="#"
                className="w-8 h-8 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-center justify-center text-light-text dark:text-dark-text hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors"
              >
                <FaFacebook />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-center justify-center ml-2 text-light-text dark:text-dark-text hover:text-white hover:bg-blue-400 hover:border-blue-400 transition-colors"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-center justify-center ml-2 text-light-text dark:text-dark-text hover:text-white hover:bg-red-600 hover:border-red-600 transition-colors"
              >
                <FaGoogle />
              </Link>
            </div>
          </div>

          {/* Resources Column */}
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-lg sm:text-xl font-bold mb-6 text-light-text dark:text-dark-text">
              Resources
            </h5>
            <ul className="list-none text-sm sm:text-base">
              {resources.map((item) => (
                <li key={item.name} className="mb-2">
                  <Link
                    href={item.href}
                    className="border-b border-transparent text-light-text dark:text-dark-text hover:border-light-bluetext dark:hover:border-dark-bluetext hover:text-light-bluetext dark:hover:text-dark-bluetext transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-lg sm:text-xl font-bold mb-6 text-light-text dark:text-dark-text">
              Help
            </h5>
            <ul className="list-none text-sm sm:text-base">
              {helpLinks.map((item) => (
                <li key={item.name} className="mb-2">
                  <Link
                    href={item.href}
                    className="border-b border-transparent text-light-text dark:text-dark-text hover:border-light-bluetext dark:hover:border-dark-bluetext hover:text-light-bluetext dark:hover:text-dark-bluetext transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-4 sm:mt-8">
          <div className="flex sm:flex-row flex-col sm:justify-between gap-2 sm:gap-0 sm:items-center w-full px-4">
            <div className="text-sm sm:text-base text-light-text dark:text-dark-text">
              Adventure One QSS Inc. © 2024
            </div>
            <div className="flex gap-4 text-sm sm:text-base">
              <Link
                href="/privacy"
                className="text-light-text dark:text-dark-text hover:text-light-bluetext dark:hover:text-dark-bluetext"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-light-text dark:text-dark-text hover:text-light-bluetext dark:hover:text-dark-bluetext"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
