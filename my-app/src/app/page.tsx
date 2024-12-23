import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";



export default function Home() {
  return (
    <div> <Header/>
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
     
      <section className="first w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center">
        <Image src={"/Ads 1.png"} alt="" width={640} height={360} className="max-w-full" />
        <Image src={"/Ads 2.png"} alt="" width={640} height={360} className="max-w-full" />
      </section>

    
      <section className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
        <Image src={"/bg.png"} alt="" width={582} height={132} className="max-w-full" />
        <Image src={"/Switch.png"} alt="" width={60} height={60} className="max-w-full" />
        <Image src={"/Drop - Off.png"} alt="" width={582} height={132} className="max-w-full" />
      </section>

      
      <section className="popular w-full flex flex-col gap-4">
        <div className="first w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
           
     <section className="max-w-xs h-[388px]  mx-auto flex flex-col justify-between border p-4 rounded-md shadow-lg">
       <div className="mb-4">
         <div className="flex items-center justify-between mb-2">
           <h2>Koenigsegg</h2>
           <img src="/heart.png" alt="Heart" width={20} height={20} />
         </div>
         <p>Sport</p>
       </div>
     <div className="flex flex-col items-center gap-4 mb-4">
         <img src="/car.png" alt="Car" width={220} height={68} />
         <img src="/Spesification.png" alt="Specification" width={256} height={24} />
       </div>
       <div className="flex items-center justify-between">
        <p>$99.00/<span className="text-gray-500">day</span></p>
        <Link href={'/payment'}><button className="bg-blue-600 p-2 text-white rounded-md">Rent Now</button>
        </Link></div>
     </section>


     <section className="max-w-xs h-[388px]  mx-auto flex flex-col justify-between border p-4 rounded-md shadow-lg">
       <div className="mb-4">
         <div className="flex items-center justify-between mb-2">
           <h2>Koenigsegg</h2>
           <img src="/heart.png" alt="Heart" width={20} height={20} />
         </div>
         <p>Sport</p>
       </div>
     <div className="flex flex-col items-center gap-4 mb-4">
         <img src="/car.png" alt="Car" width={220} height={68} />
         <img src="/Spesification.png" alt="Specification" width={256} height={24} />
       </div>
       <div className="flex items-center justify-between">
        <p>$99.00/<span className="text-gray-500">day</span></p>
        <Link href={'/payment'}><button className="bg-blue-600 p-2 text-white rounded-md">Rent Now</button>
       </Link> </div>
     </section>

     <section className="max-w-xs h-[388px]  mx-auto flex flex-col justify-between border p-4 rounded-md shadow-lg">
       <div className="mb-4">
         <div className="flex items-center justify-between mb-2">
           <h2>Koenigsegg</h2>
           <img src="/heart.png" alt="Heart" width={20} height={20} />
         </div>
         <p>Sport</p>
       </div>
     <div className="flex flex-col items-center gap-4 mb-4">
         <img src="/car.png" alt="Car" width={220} height={68} />
         <img src="/Spesification.png" alt="Specification" width={256} height={24} />
       </div>
       <div className="flex items-center justify-between">
        <p>$99.00/<span className="text-gray-500">day</span></p>
        <Link href={'/payment'}><button className="bg-blue-600 p-2 text-white rounded-md">Rent Now</button>
      </Link> </div>
     </section>

     <section className="max-w-xs h-[388px]  mx-auto flex flex-col justify-between border p-4 rounded-md shadow-lg">
       <div className="mb-4">
         <div className="flex items-center justify-between mb-2">
           <h2>Koenigsegg</h2>
           <img src="/heart.png" alt="Heart" width={20} height={20} />
         </div>
         <p>Sport</p>
       </div>
     <div className="flex flex-col items-center gap-4 mb-4">
         <img src="/car.png" alt="Car" width={220} height={68} />
         <img src="/Spesification.png" alt="Specification" width={256} height={24} />
       </div>
       <div className="flex items-center justify-between">
        <p>$99.00/<span className="text-gray-500">day</span></p>
         <button className="bg-blue-600 p-2 text-white rounded-md">Rent Now</button>
       </div>
     </section>

     
         
           
          
         
        </div>
      </section>








       
      <section className="popular w-full flex flex-col gap-4">
        <div className="first w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recommanding Car</h1>
          
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
           
     <section className="max-w-xs h-[388px]  mx-auto flex flex-col justify-between border p-4 rounded-md shadow-lg">
       <div className="mb-4">
         <div className="flex items-center justify-between mb-2">
           <h2>Koenigsegg</h2>
           <img src="/heart.png" alt="Heart" width={20} height={20} />
         </div>
         <p>Sport</p>
       </div>
     <div className="flex flex-col items-center gap-4 mb-4">
         <img src="/car.png" alt="Car" width={220} height={68} />
         <img src="/Spesification.png" alt="Specification" width={256} height={24} />
       </div>
       <div className="flex items-center justify-between">
        <p>$99.00/<span className="text-gray-500">day</span></p>
        <Link href={'/payment'}><button className="bg-blue-600 p-2 text-white rounded-md">Rent Now</button>
       </Link> </div>
     </section>


     <section className="max-w-xs h-[388px]  mx-auto flex flex-col justify-between border p-4 rounded-md shadow-lg">
       <div className="mb-4">
         <div className="flex items-center justify-between mb-2">
           <h2>Koenigsegg</h2>
           <img src="/heart.png" alt="Heart" width={20} height={20} />
         </div>
         <p>Sport</p>
       </div>
     <div className="flex flex-col items-center gap-4 mb-4">
         <img src="/car.png" alt="Car" width={220} height={68} />
         <img src="/Spesification.png" alt="Specification" width={256} height={24} />
       </div>
       <div className="flex items-center justify-between">
        <p>$99.00/<span className="text-gray-500">day</span></p>
        <Link href={'/payment'}><button className="bg-blue-600 p-2 text-white rounded-md">Rent Now</button>
       </Link> </div>
     </section>

     <section className="max-w-xs h-[388px]  mx-auto flex flex-col justify-between border p-4 rounded-md shadow-lg">
       <div className="mb-4">
         <div className="flex items-center justify-between mb-2">
           <h2>Koenigsegg</h2>
           <img src="/heart.png" alt="Heart" width={20} height={20} />
         </div>
         <p>Sport</p>
       </div>
     <div className="flex flex-col items-center gap-4 mb-4">
         <img src="/car.png" alt="Car" width={220} height={68} />
         <img src="/Spesification.png" alt="Specification" width={256} height={24} />
       </div>
       <div className="flex items-center justify-between">
        <p>$99.00/<span className="text-gray-500">day</span></p>
        <Link href={'/payment'}><button className="bg-blue-600 p-2 text-white rounded-md">Rent Now</button>
       </Link> </div>
     </section>

     <section className="max-w-xs h-[388px]  mx-auto flex flex-col justify-between border p-4 rounded-md shadow-lg">
       <div className="mb-4">
         <div className="flex items-center justify-between mb-2">
           <h2>Koenigsegg</h2>
           <img src="/heart.png" alt="Heart" width={20} height={20} />
         </div>
         <p>Sport</p>
       </div>
     <div className="flex flex-col items-center gap-4 mb-4">
         <img src="/car.png" alt="Car" width={220} height={68} />
         <img src="/Spesification.png" alt="Specification" width={256} height={24} />
       </div>
       <div className="flex items-center justify-between">
        <p>$99.00/<span className="text-gray-500">day</span></p>
        <Link href={'/payment'}><button className="bg-blue-600 p-2 text-white rounded-md">Rent Now</button>
      </Link> </div>
     </section>

     
         
           
          
         
        </div>
      </section>

 
      <section className="popular w-full flex flex-col gap-4">
        <div className="first w-full flex items-center justify-between">
           
           
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
           
     <section className="max-w-xs h-[388px]  mx-auto flex flex-col justify-between border p-4 rounded-md shadow-lg">
       <div className="mb-4">
         <div className="flex items-center justify-between mb-2">
           <h2>Koenigsegg</h2>
           <img src="/heart.png" alt="Heart" width={20} height={20} />
         </div>
         <p>Sport</p>
       </div>
     <div className="flex flex-col items-center gap-4 mb-4">
         <img src="/car.png" alt="Car" width={220} height={68} />
         <img src="/Spesification.png" alt="Specification" width={256} height={24} />
       </div>
       <div className="flex items-center justify-between">
        <p>$99.00/<span className="text-gray-500">day</span></p>
        <Link href={'/payment'}>  <button className="bg-blue-600 p-2 text-white rounded-md">Rent Now</button>
      </Link>  </div>
     </section>


     <section className="max-w-xs h-[388px]  mx-auto flex flex-col justify-between border p-4 rounded-md shadow-lg">
       <div className="mb-4">
         <div className="flex items-center justify-between mb-2">
           <h2>Koenigsegg</h2>
           <img src="/heart.png" alt="Heart" width={20} height={20} />
         </div>
         <p>Sport</p>
       </div>
     <div className="flex flex-col items-center gap-4 mb-4">
         <img src="/car.png" alt="Car" width={220} height={68} />
         <img src="/Spesification.png" alt="Specification" width={256} height={24} />
       </div>
       <div className="flex items-center justify-between">
        <p>$99.00/<span className="text-gray-500">day</span></p>
        <Link href={'/payment'}>  <button className="bg-blue-600 p-2 text-white rounded-md">Rent Now</button>
    </Link>   </div>
     </section>

     <section className="max-w-xs h-[388px]  mx-auto flex flex-col justify-between border p-4 rounded-md shadow-lg">
       <div className="mb-4">
         <div className="flex items-center justify-between mb-2">
           <h2>Koenigsegg</h2>
           <img src="/heart.png" alt="Heart" width={20} height={20} />
         </div>
         <p>Sport</p>
       </div>
     <div className="flex flex-col items-center gap-4 mb-4">
         <img src="/car.png" alt="Car" width={220} height={68} />
         <img src="/Spesification.png" alt="Specification" width={256} height={24} />
       </div>
       <div className="flex items-center justify-between">
        <p>$99.00/<span className="text-gray-500">day</span></p>
        <Link href={'/payment'}>   <button className="bg-blue-600 p-2 text-white rounded-md">Rent Now</button>
     </Link>   </div>
     </section>

     <section className="max-w-xs h-[388px]  mx-auto flex flex-col justify-between border p-4 rounded-md shadow-lg">
       <div className="mb-4">
         <div className="flex items-center justify-between mb-2">
           <h2>Koenigsegg</h2>
           <img src="/heart.png" alt="Heart" width={20} height={20} />
         </div>
         <p>Sport</p>
       </div>
     <div className="flex flex-col items-center gap-4 mb-4">
         <img src="/car.png" alt="Car" width={220} height={68} />
         <img src="/Spesification.png" alt="Specification" width={256} height={24} />
       </div>
       <div className="flex items-center justify-between">
        <p>$99.00/<span className="text-gray-500">day</span></p>
        <Link href={'/payment'}>   <button className="bg-blue-600 p-2 text-white rounded-md">Rent Now</button>
         </Link>
       </div>
     </section>

     
         
           
          
         
        </div>
      </section>

      <section className="button w-full text-center">
        <Link href={"/category"}>
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </section>
    
      </div>
      <Footer />
    </div>
  );
}
