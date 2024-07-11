import React from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

Modal.setAppElement("#root"); // Set the app element for accessibility

function Contact() {
  const initialFormData = {
    fname: "",
    email: "",
    phone: "",
    location: "",
    interest: "",
    comment: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation logic
    let error = "";
    if (name === "fname") {
      if (!/^[a-zA-Z\s]{3,20}$/.test(value)) {
        error =
          "Name must be between 3 and 20 letters and can only contain letters";
      }
    } else if (name === "phone") {
      if (!/^\d{6,15}$/.test(value)) {
        error = "Phone number must be between 6 and 15 digits";
      }
    }

    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }));

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fname.trim()) newErrors.fname = "Name is required";
    if (!/^[a-zA-Z\s]{3,20}$/.test(formData.fname))
      newErrors.fname =
        "Name must be between 3 and 20 letters and can only contain letters";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!/^\d{6,15}$/.test(formData.phone))
      newErrors.phone = "Phone number must be between 6 and 15 digits";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.interest.trim()) newErrors.interest = "Interest is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setFormData(initialFormData); // Reset the form data
    setErrors({}); // Reset errors
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center w-full items-center min-h-screen py-4 bg-gray-900 text-white">
      <div className="bg-white text-black p-4 rounded shadow-md w-full max-w-2xl mx-8">
        <h1 className="text-center text-xl font-semibold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="text-left text-sm mb-2">*Required Information</h3>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="fname"
              placeholder="Enter your Name"
              required
              value={formData.fname}
              onChange={handleChange}
              className={`w-full p-1 border border-gray-300 rounded ${
                errors.fname ? "border-red-500" : ""
              }`}
            />
            {errors.fname && (
              <p className="text-red-500 text-sm">{errors.fname}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="612-000-111"
              required
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-1 border border-gray-300 rounded ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div>
            <h3 className="text-left text-sm mb-2">Location</h3>
            <select
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className={`w-full p-1 border border-gray-300 rounded ${
                errors.location ? "border-red-500" : ""
              }`}
            >
              <option value="">Select</option>
              <option value="Mogadishu">Mogadishu</option>
              <option value="Afgoye">Afgoye</option>
              <option value="Hargisa">Hargisa</option>
              <option value="Kismayo">Kismayo</option>
              <option value="Jamama">Jamama</option>
              <option value="Baidoa">Baidoa</option>
              <option value="Marko">Marko</option>
              <option value="Bosaso">Bosaso</option>
              <option value="Janale">Janale</option>
              <option value="Barawe">Barawe</option>
              <option value="Galkayo">Galkayo</option>
            </select>
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location}</p>
            )}
          </div>

          <div>
            <h3 className="text-left text-sm mb-2">
              What are you interested in*
            </h3>
            <select
              name="interest"
              required
              value={formData.interest}
              onChange={handleChange}
              className={`w-full p-1 border border-gray-300 rounded ${
                errors.interest ? "border-red-500" : ""
              }`}
            >
              <option value="">Select</option>
              <option value="Gifts">Gifts</option>
              <option value="Seasional Flowers">Seasional Flowers</option>
              <option value="Single Varietey">Single Varietey</option>
              <option value="Native Flowers">Native Flowers</option>
              <option value="Accessories">Plants</option>
            </select>
            {errors.interest && (
              <p className="text-red-500 text-sm">{errors.interest}</p>
            )}
          </div>

          <div>
            <h3 className="text-left text-sm mb-2">Comment</h3>
            <textarea
              name="comment"
              cols="30"
              rows="4"
              placeholder="Enter your comments here"
              value={formData.comment}
              onChange={handleChange}
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
            href="https://www.facebook.com/profile.php?id=100095057142235"
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Submitted Data"
        className="modal-content bg-white p-4 rounded shadow-lg max-w-lg mx-auto"
        overlayClassName="modal-overlay fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center"
      >
        <h2 className="text-xl font-semibold mb-4">Submitted Data</h2>
        <div className="bg-gray-100 p-4 rounded overflow-auto">
          <p>
            <strong>Name:</strong> {formData.fname}
          </p>
          <p>
            <strong>Email:</strong> {formData.email || "Not provided"}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>
          <p>
            <strong>Location:</strong> {formData.location}
          </p>
          <p>
            <strong>Interest:</strong> {formData.interest}
          </p>
          <p>
            <strong>Comment:</strong> {formData.comment || "Not provided"}
          </p>
        </div>
        <button
          onClick={closeModal}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Contact;

