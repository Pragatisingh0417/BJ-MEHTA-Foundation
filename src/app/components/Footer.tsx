"use client";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";


export default function FooterSection() {
  return (
    <div className="w-full bg-[#007BFF] text-white py-14 px-6 md:px-16">
      {/* TOP LOGO */}
      <div className="flex  mb-10 justify-between">
        <Image
          src="/heart-logo.png" // change to your actual logo
          alt="Logo"
          width={120}
          height={120}
          className="rounded-lg"
        />
        <div>
             <div className="flex items-center gap-4">
            
                      <FaFacebookF className="cursor-pointer hover:text-gray-200" size={16} />
                      <FaLinkedinIn className="cursor-pointer hover:text-gray-200" size={16} />
                    </div>
        </div>
      </div>

      {/* WHITE LINE */}
      <div className="w-full border-t-2 border-6 border-white mb-10"></div>

      {/* 3 COLUMNS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
        {/* CONTACT US */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact us</h3>

          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-2xl" />
              <span>1-438-795-3481</span>
            </li>

            <li className="flex items-center gap-3">
              <MdEmail className="text-2xl" />
              <span>info@maheartfoundation.org</span>
            </li>

            <li className="flex items-start gap-3">
              <FaLocationDot className="text-2xl mt-1" />
              <span>
                255 D’Anjou Blvd, Suite 257F, <br />
                Châteauguay, QC J6J 2R4
              </span>
            </li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">About</h3>

          <ul className="space-y-2 text-lg">
            <li>Become A Member</li>
            <li>Make A Donation</li>
            <li>What We Do</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-lg">
            <li>Tips For A Healthy Heart</li>
            <li>Donate</li>
            <li>Our Medical Advisory</li>
            <li>Team</li>
            <li>Jobs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
