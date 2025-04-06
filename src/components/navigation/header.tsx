import Link from "next/link";
import Image from "next/image";
import Button from '../ui/button';

export default function Header() {
    return (
        <header className="fixed z-50 h-24 w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto left-0 right-0">
            <div className="flex items-center">
                <Image src={'/sanity-monogram--red.svg'} alt="Sanity Logo" width={35} height={35} quality={100}/>
                <nav className="flex items-center mx-4 hidden sm:block">
                    <Link
                        className="p-3 text-sm font-[525] text-[#1B1D27] dark:text-[#EEEEF1] hover:text-white hover:bg-white/10 rounded-md transition"
                        href="/">Product</Link>
                    <Link
                        className="p-3 text-sm font-[525] text-[#1B1D27] dark:text-[#EEEEF1] hover:text-white hover:bg-white/10 rounded-md transition"
                        href="/">Developer</Link>
                    <Link
                        className="p-3 text-sm font-[525] text-[#1B1D27] dark:text-[#EEEEF1] hover:text-white hover:bg-white/10 rounded-md transition"
                        href="/">Enterprise</Link>
                    <Link
                        className="p-3 text-sm font-[525] text-[#1B1D27] dark:text-[#EEEEF1] hover:text-white hover:bg-white/10 rounded-md transition"
                        href="/">Pricing</Link>
                </nav>
            </div>
            <div className="flex gap-2 items-center">
                <Link href="/" className="p-3 text-sm font-[525] text-[#1B1D27] dark:text-[#EEEEF1] hover:text-white hover:bg-white/10 rounded-md transition">Log in</Link>
                <Button ctaURL="https://google.com" ctaCopy="Get Started" padding="p-3" borderRadius="rounded"/>
            </div>
        </header>
    );
}