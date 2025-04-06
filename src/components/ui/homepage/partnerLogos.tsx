import Image from "next/image";

const logos = [
    { id: 1, src: "/logos/Arcteryx.svg", alt: "Arcteryx" },
    { id: 2, src: "/logos/Brex.svg", alt: "Brex" },
    { id: 3, src: "/logos/dbt.svg", alt: "dbt" },
    { id: 4, src: "/logos/elastic.svg", alt: "Elastic" },
    { id: 5, src: "/logos/Figma-Wordmark-Black 1.svg", alt: "Figma" },
    { id: 6, src: "/logos/Linear.svg", alt: "Linear" },
    { id: 7, src: "/logos/lvmh.svg", alt: "LVMH" },
    { id: 8, src: "/logos/Marimekko.svg", alt: "Marimekko" },
    { id: 9, src: "/logos/MoMa.svg", alt: "MoMA" },
    { id: 10, src: "/logos/pinecone.svg", alt: "Pinecone" },
    { id: 11, src: "/logos/replit.svg", alt: "Replit" },
    { id: 12, src: "/logos/retool.svg", alt: "Retool" },
    { id: 13, src: "/logos/Shopify.svg", alt: "Shopify" },
    { id: 14, src: "/logos/Skims.svg", alt: "Skims" },
    { id: 15, src: "/next.svg", alt: "Next.js" },
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
            <div className="grid grid-cols-10 gap-8 mt-8">
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
    );
}