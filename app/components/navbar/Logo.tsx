'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <div className="flex">
    <Image
      onClick={() => router.push('/')}
      className="cursor-pointer border rounded-full" 
      src="/images/triveni.jpg" 
      height="50" 
      width="50" 
      alt="Logo" 
    />
      <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/images/Triveni.png" 
      height="50" 
      width="50" 
      alt="Logo" 
    />
    </div>
   );
}
 
export default Logo;
