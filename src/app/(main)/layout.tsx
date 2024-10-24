
import UserInfo from "@/app/components/UserInfo";
import Link from 'next/link';
import NewPostButton from "../components/NewPostButton";
import Tokens from "../components/Tokens";
import { Logo } from "../components/Logo";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
            <div className="flex flex-col text-white overflow-hidden">
                <div className=" bg-slate-800 px-2">
                    <Logo/>
                    <NewPostButton/>
                    <Tokens/> 
                </div> 
                <div className=" flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800"> interview list</div>
                <div className="bg-cyan-800"> <UserInfo/> </div>
            </div>
            <div> { children}</div>
        </div>
  );
}