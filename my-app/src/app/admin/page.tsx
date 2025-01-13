import React from "react";
import Image from "next/image";
import Header from "@/components/header/page";
 export default function Page() {
  return (
  <div>
    <Header />
     
    <div className="w-[1440px] flex flex-col md:flex-row justify-center">
      <div className="first hidden md:flex w-[25%] lg:w-[20%]">
        <Image src={"/Nav Bar.png"} alt="Nav Bar" width={286} height={900} />
        
      </div>
      
      <Image src="/Details Rental (1).png" alt="" width={534} height={836} className="border-[1px] m-[32px]  "/> 
      <div>
     <div className="mt-[32px] border-[1px]"> <Image src="/Top 5 Car Rental (1).png" alt="" width={524} height={324}/></div>
     
      
     <div className="mt-[30px] border-[1px] ">  <Image src="/Recent Transaction (1).png" alt="" width={524} height={480}/></div>
        </div>
        
      </div>
       
      
    </div>
   
  );
}