import React from "react";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="payment w-full bg-[#f6f7f9] p-4 sm:p-6 flex flex-wrap justify-start font-[family-name:var(--font-geist-sans)]">
        <div className="cards w-full md:w-[70%] grid grid-cols-1 gap-6 order-2 lg:order-1">
          
          <div className="billing-info w-full lg:w-[852px] h-auto lg:h-[336px] flex flex-col justify-around p-6 bg-white rounded-xl">
            <div className="header flex justify-between items-center">
              <h2 className="font-bold text-lg">Billing Info</h2>
              <p className="text-sm">Step 1 of 4</p>
            </div>
            <p>Please enter your billing info</p>
            <div className="flex flex-wrap gap-4">
              <div className="w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="name">Name</label> <br />
                <input placeholder="Your Name" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
              <div className="w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="phone">Phone Number</label><br />
                <input placeholder="Your Phone Number" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="address">Address</label><br />
                <input placeholder="Your Address" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
              <div className="w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Town/City</label><br />
                <input placeholder="Your City" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
            </div>
          </div>

          <div className="rental-info w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col justify-around p-6 bg-white rounded-xl">
            <div className="header flex justify-between items-center">
              <h2 className="font-bold text-lg">Rental Info</h2>
              <p className="text-sm">Step 2 of 4</p>
            </div>
            <p>Please select your rental date</p>
            <div className="first">
              {/* <Image src={"/Pick - Up (1).png"} alt="Pick Up" width={92} height={20} /> */}
              <div className="flex items-center">
    <input type="radio" className="w-5 h-5" checked />
    <label className="text-lg font-semibold text-black ml-4">Pick - Up</label>
  </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="pickup-location">Pickup Location</label>
                <select className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your City</option>
                </select>
              </div>
              <div className="w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="pickup-date">Pickup Date</label>
                <select className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Date</option>
                </select>
              </div>
            </div>
            <div className="w-full lg:w-[45%]">
              <label className="font-bold" htmlFor="pickup-time">Pickup Time</label>
              <select className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                <option value="">Select Your Time</option>
              </select>
            </div>
            <div className="fourth">
              <Image src={"/Drop - Off (1).png"} alt="Drop Off" width={104} height={20} />
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="drop-location">Drop Location</label>
                <select className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your City</option>
                </select>
              </div>
              <div className="w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="drop-date">Drop Date</label>
                <select className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Date</option>
                </select>
              </div>
            </div>
            <div className="w-full lg:w-[45%]">
              <label className="font-bold" htmlFor="drop-time">Drop Time</label>
              <select className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                <option value="">Select Your Time</option>
              </select>
            </div>
          </div>

          <div className="payment-method w-full lg:w-[852px] h-auto lg:h-[596px] flex flex-col justify-around p-6 bg-white rounded-xl">
            <div className="header flex justify-between items-center">
              <h2 className="font-bold text-lg">Payment Method</h2>
              <p className="text-sm">Step 3 of 4</p>
            </div>
            <p>Please enter your payment method</p>
            <Image src={"/Credit Card.png"} alt="Credit Card" width={804} height={308} />
            <Image src={"/PayPal.png"} alt="PayPal" width={804} height={56} />
            <Image src={"/Bitcoin.png"} alt="Bitcoin" width={804} height={56} />
          </div>

          <div className="confirmation w-full lg:w-[852px] h-auto lg:h-[484px] flex flex-col justify-around p-6 bg-white rounded-xl">
            <div className="header flex justify-between items-center">
              <h2 className="font-bold text-lg">Confirmation</h2>
              <p className="text-sm">Step 4 of 4</p>
            </div>
            <p>We are getting to the end. Just a few clicks and your rental is ready</p>
            <Image src={"/Confirmation.png"} alt="Confirmation" width={804} height={136} />
            <Link href={'/admin'}>
              <button className="bg-[#3563e9] p-2 text-white rounded-xl w-[140px] h-[56px]">
                Rent Now
              </button>
            </Link>
            <Image src={"/Safe Data.png"} alt="Safe Data" width={548} height={100} />
          </div>
        </div>

        <div className="details w-full flex-1 lg:w-[40%] order-1 lg:order-2 flex justify-start">
          <Image src={"/Rental Summary.png"} alt="Rental Summary" width={492} height={568} className="lg:w-[492px] h-[568px]" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
