import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="flex flex-col lg:flex-row justify-center w-full items-center min-h-screen py-4 bg-gray-900 text-white">
      <div className="bg-white text-black p-4 rounded shadow-md w-full max-w-2xl mx-8">
        <h1 className="text-center text-xl font-semibold mb-4">Contact Us</h1>
        <form method="get" className="space-y-4">
          <div>
            <h3 className="text-left text-sm mb-2">*Required Information</h3>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="fname"
              placeholder="Enter your  Name"
              required
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              placeholder="612-000-111"
              required
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>
          <div>
            <h3 className="text-left text-sm mb-2">Location</h3>
            <select
              name="location"
              required
              className="w-full p-1 border border-gray-300 rounded"
            >
              <option>Select</option>
              <option>Mogadishu</option>
              <option>Afgoye</option>
              <option>Hargisa</option>
              <option>Kismayo</option>
              <option>Jamama</option>
              <option>Baidoa</option>
              <option>Marko</option>
              <option>Bosaso</option>
              <option>Janale</option>
              <option>Barawe</option>
              <option>Galkayo</option>
            </select>
          </div>
          <div>
            <h3 className="text-left text-sm mb-2">
              What are you interested in*
            </h3>
            <select
              required
              className="w-full p-1 border border-gray-300 rounded"
            >
              <option></option>
              <option>Business Laptops</option>
              <option>Student Laptops</option>
              <option>Gaming Laptops</option>
              <option>Accessories</option>
            </select>
          </div>
          <div>
            <h3 className="text-left text-sm mb-2">Comment</h3>
            <textarea
              name="comment"
              cols="30"
              rows="4"
              className="w-full p-1 border border-gray-300 rounded"
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              className="w-full p-1 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600"
            />
          </div>
        </form>
      </div>
      <div className="mt-8 lg:mt-0 lg:ml-10 text-center">
        <h1 className="mb-4 text-3xl font-semibold">Follow Us</h1>
        <div className="space-x-4">
          <a
            href="https://www.facebook.com/SunDus-Store-104392012312717/?ref=page_internal"
            className="text-yellow-500 text-3xl hover:scale-110 transform transition"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.instagram.com/sunduslaptops/"
            className="text-yellow-500 text-3xl hover:scale-110 transform transition"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://wa.me/message/HWCQMFVDROBLN1"
            className="text-yellow-500 text-3xl hover:scale-110 transform transition"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
