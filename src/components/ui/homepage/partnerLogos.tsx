import Image from "next/image";

const logos = [
    { id: 1, src: "/logos/Figma-Wordmark-Black 1.svg", alt: "Arcteryx" },
    { id: 2, src: "/logos/Shopify.svg", alt: "Brex" },
    { id: 3, src: "/logos/Linear.svg", alt: "dbt" },
    { id: 4, src: "/logos/Skims.svg", alt: "Elastic" },
    { id: 5, src: "/logos/Arcteryx.svg", alt: "Figma" },
    { id: 6, src: "/logos/Tecovas.svg", alt: "Linear" },
    { id: 7, src: "/logos/Marimekko.svg", alt: "LVMH" },
    { id: 8, src: "/logos/Brex.svg", alt: "Marimekko" },
    { id: 9, src: "/logos/lvmh.svg", alt: "MoMA" },
    { id: 10, src: "/logos/Ableton.svg", alt: "Pinecone" },
    { id: 11, src: "/logos/clerk.svg", alt: "Replit" },
    { id: 12, src: "/logos/loo.svg", alt: "Retool" },
    { id: 13, src: "/logos/tailscale.svg", alt: "Shopify" },
    { id: 14, src: "/logos/retool.svg", alt: "Skims" },
    { id: 15, src: "/logos/elastic.svg", alt: "Next.js" },
    { id: 16, src: "/logos/pinecone.svg", alt: "Next.js" },
    { id: 17, src: "/logos/anthropic.svg", alt: "Next.js" },
    { id: 18, src: "/logos/dbt.svg", alt: "Next.js" },
    { id: 19, src: "/logos/replit.svg", alt: "Next.js" },
    { id: 20, src: "/logos/MoMa.svg", alt: "Next.js" },
];

export default function PartnerLogos() {
    return (
        <div>
            <div className="flex items-center gap-2 mb-4">
                <p className="uppercase font-medium text-[#727892] text-sm">
                    trusted by leaders and innovators
                </p>
                <div className="h-px flex-grow bg-gray-300" />
            </div>
            <div className="overflow-hidden max-h-[76px] sm:max-h-full">
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-[36px] mt-8">
                    {logos.map((logo) => (
                        <div
                            key={logo.id}
                            className="relative h-5 w-full flex items-center justify-center"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}