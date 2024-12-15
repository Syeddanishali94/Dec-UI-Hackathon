import React from "react";

export default function Footer() {
  return (
    <div>
      {/* Footer container */}
      <footer className="tracking-wide px-10 pt-12 pb-6 max-w-screen-xl m-auto">
        {/* Main content area */}
        <div className="flex flex-wrap justify-between gap-10">
          {/* Brand section */}
          <div className="max-w-md">
            {/* Brand name */}
            <span className="text-3xl font-semibold text-blue-600">MORENT</span>
            {/* Brand description */}
            <div className="mt-6">
              <p className="text-gray-600 leading-relaxed text-sm max-w-[280px]">
                Our vision is to provide convenience and help increase your
                sales business.
              </p>
            </div>
          </div>

          {/* Navigation links section */}
          <div className="flex sm:gap-14 gap-5 flex-wrap">
            {/* 'About' section */}
            <div className="max-lg:min-w-[140px]">
              <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">
                About
              </h4>
              <ul className="space-y-4 mt-6">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Featured
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Partnerships
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Business Relation
                  </a>
                </li>
              </ul>
            </div>

            {/* 'Community' section */}
            <div className="max-lg:min-w-[140px]">
              <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">
                Community
              </h4>
              <ul className="space-y-4 mt-6">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Podcast
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Invite a friend
                  </a>
                </li>
              </ul>
            </div>

            {/* 'Socials' section */}
            <div className="max-lg:min-w-[140px]">
              <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">
                Socials
              </h4>
              <ul className="space-y-4 mt-6">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <hr className="mt-10 mb-6 border-gray-300" />

        {/* Footer bottom content */}
        <div className="flex flex-wrap flex-col-reverse md:flex-col gap-4">
          {/* Copyright text */}
          <p className="text-sm md:mr-auto">
            ©2022 MORENT. All rights reserved
          </p>
          {/* Additional links */}
          <ul className="flex justify-between md:space-x-6  w-full md:w-fit">
            <li>
              <a href="#" className="hover:text-gray-800 text-sm">
                Privacy & Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800 text-sm">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
