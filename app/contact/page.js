import React from "react";
import DownNavbar from "@/components/downNavbar/DownNavbar";
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ContactDetail from "@/components/contact-detail/ContactDetail";
import LeafletMap from "@/components/leafletmap/LeafletMap";
import Form from "@/components/form/Form";
import SocialMedia from "@/components/socialmedia/SocialMedia";
import { ToastContainer } from "react-toastify";
export default function page() {
  return (
    <>
      <ToastContainer />
      <DownNavbar title="Contact Me" />
      <div className="container mx-auto my-20 ">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/4 lg:mr-32 xl:mr-0">
            <div className="flex gap-5 flex-wrap md:justify-center">
              <ContactDetail
                title="Pakistan, Faisalabad"
                desc="Gulam rasool,St#3"
                icon={
                  <IoHome
                    className=" text-5xl mx-auto"
                    style={{ color: "#34A1CD" }}
                  />
                }
              />

              <ContactDetail
                title="(+92) 3159165858"
                desc="9am to 5pm"
                icon={
                  <FaPhoneAlt
                    className=" text-5xl mx-auto"
                    style={{ color: "#34A1CD" }}
                  />
                }
              />
              <ContactDetail
                title="hassangulzar121@gmail.com"
                desc="Send us your query any time!"
                icon={
                  <IoMdMail
                    className=" text-5xl mx-auto"
                    style={{ color: "#34A1CD" }}
                  />
                }
              />
            </div>
            <div className=" flex flex-col">
              <Form />
              <h1
                className=" text-3xl font-semibold text-center"
                style={{ fontFamily: "var(--font-karla)" }}
              >
                Follow us here
              </h1>
              <SocialMedia />
            </div>
          </div>

          <div className="lg:w-2/4 mx-10 sm:mx-0 z-0">
            <LeafletMap latitude={31.39} longitude={73.09} zoom={15} />
          </div>
        </div>
      </div>
    </>
  );
}
