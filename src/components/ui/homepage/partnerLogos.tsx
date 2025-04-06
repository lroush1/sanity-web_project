import Image from "next/image";

const logos = [
    { id: 1, src: "/logos/Figma-Wordmark-Black 1.svg", alt: "Figma" },
    { id: 2, src: "/logos/Shopify.svg", alt: "Shopify" },
    { id: 3, src: "/logos/Linear.svg", alt: "Linear" },
    { id: 4, src: "/logos/Skims.svg", alt: "Skims" },
    { id: 5, src: "/logos/Arcteryx.svg", alt: "Arcteryx" },
    { id: 6, src: "/logos/Tecovas.svg", alt: "Tecovas" },
    { id: 7, src: "/logos/Marimekko.svg", alt: "Marimekko" },
    { id: 8, src: "/logos/Brex.svg", alt: "Brex" },
    { id: 9, src: "/logos/lvmh.svg", alt: "LVMH" },
    { id: 10, src: "/logos/Ableton.svg", alt: "Ableton" },
    { id: 11, src: "/logos/clerk.svg", alt: "Clerk" },
    { id: 12, src: "/logos/loo.svg", alt: "Loom" },
    { id: 13, src: "/logos/tailscale.svg", alt: "Tailscale" },
    { id: 14, src: "/logos/retool.svg", alt: "Retool" },
    { id: 15, src: "/logos/elastic.svg", alt: "Elastic" },
    { id: 16, src: "/logos/pinecone.svg", alt: "Pinecone" },
    { id: 17, src: "/logos/anthropic.svg", alt: "Anthropic" },
    { id: 18, src: "/logos/dbt.svg", alt: "dbt" },
    { id: 19, src: "/logos/replit.svg", alt: "Replit" },
    { id: 20, src: "/logos/MoMa.svg", alt: "MoMA" },
];

export default function PartnerLogos() {
    return (
        <div>
            <div className="flex items-center gap-2 mb-4">
                <p className="uppercase font-medium text-[#727892] text-xs sm:text-sm dark:text-[#515870]">
                    trusted by leaders and innovators
                </p>
                <div className="h-px flex-grow bg-gray-300 dark:bg-[#252837]" />
            </div>
            <div className="overflow-hidden max-h-[76px] sm:max-h-full">
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-6 sm:gap-[36px] mt-2 sm:mt-8">
                    {logos.map((logo) => (
                        <div
                            key={logo.id}
                            className="relative h-5 w-full flex items-center justify-center"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill
                                className="object-contain dark:filter dark:invert"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}