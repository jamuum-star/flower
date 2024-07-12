import React from "react";
//footer
function Footer() {
  return (
    <footer className="bg-gray-100 py-12 text-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-10 justify-between">
          <div>
            <h5 className="text-2xl font-bold mb-4 text-red-600 uppercase">
              EVEFLOWER
            </h5>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Contact Us</h6>
            <ul className="space-y-2">
              <li>
                Email us{" "}
                <a href="mailto:eveflowersom@gmail.com" className="text-red-600 hover:underline">
                  here
                </a>
              </li>
              <li>Phone: (061) 799 2890</li>
              <li>
                Follow us{" "}
                <a
                  href="https://twitter.com/eveflower"
                  className="text-red-600 hover:underline"
                >
                  @hello_eveflower
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">About Us</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Flower Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Join the EVE Flower team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  EVE Flower Values
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  EVE Flower to the Planet
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Services</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Corporate Gifting
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Where we deliver
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Manage Flower Subscription
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
            
          </div>
        </div>
        <div className="flex flex-col items-center pt-10">
          <h6 className="text-lg font-semibold mb-4">
            Become a EVE Flower VIP
          </h6>
          <div className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full p-2 border border-gray-300 rounded-l focus:outline-none"
            />
            <button className="bg-red-600 text-white p-2 rounded-r hover:bg-red-700">
              SIGN UP
            </button>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-300 pt-8">
          <h6 className="text-lg font-semibold mb-4 text-gray-600">
            Find us here!
          </h6>
          <ul className="flex flex-wrap space-x-4 text-gray-600">
            <li>
              <a href="#" className="hover:underline">
                Mogadishu
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Central Hargisa
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Kismayo
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Baidoa
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Afgoye
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bosaso
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Barwo
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Marko
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Janale
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Galkayo
              </a>
            </li>
          </ul>
          <div className="mt-8 text-center text-gray-600">
            <p>© EVE Flower Pty Ltd. 2022 Liquor License No. 36148709</p>
            <p className="mt-4">
              In the spirit of reconciliation, EVE Flower acknowledges the
              Traditional Custodians of country throughout Somalia and their
              connections to land, sea and community. We pay our respect to
              their elders past and present and extend that respect to all
              Aboriginal and Torres Strait Islander peoples today.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
