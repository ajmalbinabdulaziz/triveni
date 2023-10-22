'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <div className="flex">
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer border rounded-full" 
      src="/images/hb1.jpg" 
      height="70" 
      width="70" 
      alt="Logo" 
    />
      <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/images/Triveni.png" 
      height="70" 
      width="70" 
      alt="Logo" 
    />
    </div>
   );
}
 
export default Logo;
