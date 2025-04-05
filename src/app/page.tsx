import Header from "../components/navigation/header";
import Image from "next/image";
import Button from "@/components/ui/button";
import PartnerLogos from "@/components/ui/homepage/partnerLogos";

export default function Home() {
    return (
        <>
            <Header/>
            <main className="pt-40 px-4 sm:px-6 lg:px-8 mx-auto max-w-[1440px] overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                    <div>
                        <h1 className="text-5xl md:text-7xl text-[#0D0E12] dark:text-[#f6f6f8] font-[425] tracking-[-2.5]">The Content<br /> Operating
                            System</h1>
                        <p className="text-2xl font-[425] text-[#0D0E12] dark:text-[#f6f6f8] mt-4">A fully customizable all-code backend for content-driven websites and apps—their builders and creators.</p>
                        <div className="mt-8 flex gap-4 ">
                            <Button ctaURL="https://sanity.io" ctaCopy="Start Building" padding="py-4 px-6" />
                            <Button ctaURL="https://sanity.io" ctaCopy="Book a Demo" bgColor="bg-white" textColor="text-[#1B1D27]" darkBgColor="bg-[#1B1D27]" darkTextColor="text-[#EEEEF1]" padding="py-4 px-6" />
                        </div>
                    </div>
                    <div className="relative w-full md:pr-0 md:-mr-[100vw-50%]">
                        <div className="md:w-[calc(100%+((100vw-1440px)/2))]">
                            <Image
                                src="/v4--light 1.png"
                                alt="Description of image"
                                width={0}
                                height={0}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ width: '100%', height: 'auto' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
                <PartnerLogos />
            </main>
        </>
    );
}