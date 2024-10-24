
import Image from "next/image";
import client from "../../../lib/mongodb";
import BgImage from '../../../public/hero.webp'
import { Logo } from "../components/Logo";
import Link from "next/link";





export default async function Home() {
  const isConnected = await client.connect().then(() => true).catch(() => false);
  if (isConnected) {
    console.log("connected to mongodb");
  }
  

  return ( 
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={BgImage} alt="Back Ground Image Landing" fill className="absolute" />
      <div className=" relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/60 rounded-md backdrop-blur-sm">
        <Logo />
        <p>
          AI-powered solution to help you prepare for interviews. Get step by step guide to prepare for your dream job.
        </p>
        <Link className="btn mt-2 " href="/posts"> login</Link>
      </div>
      

    </div>
  );
}
