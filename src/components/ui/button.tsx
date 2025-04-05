import Link from "next/link";

export default function Button({
                                   ctaURL = "/",
                                   ctaCopy = "Click me",
                                   bgColor = "bg-[#0D0E12]",
                                   textColor = "text-[#F6F6F8]",
                                   darkBgColor = "bg-[#F6F6F8]",
                                   darkTextColor = "text-[#13141B]",
                                    padding = "px-4 py-2",
                               }) {
    return (
        <Link
            href={ctaURL}
            className={`${padding} rounded-lg transition ${bgColor} ${textColor} dark:${darkBgColor} dark:${darkTextColor} hover:${bgColor}/50 text-sm font-[525]`}
        >
            {ctaCopy}
        </Link>
    );
}