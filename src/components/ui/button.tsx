import Link from "next/link";

export default function Button({
                                   ctaURL = "/",
                                   ctaCopy = "Click me",
                                   bgColor = "bg-[#0D0E12]",
                                   textColor = "text-[#F6F6F8]",
                                   darkBgColor = "bg-[#F6F6F8]",
                                   darkTextColor = "text-[#13141B]",
                                    padding = "px-4 py-2",
    borderRadius = "rounded-lg",
                               }) {
    return (
        <Link
            href={ctaURL}
            className={`${padding} ${borderRadius} leading-3 transition ${bgColor} ${textColor} dark:${darkBgColor} dark:${darkTextColor} hover:shadow-lg text-sm font-[525]`}
        >
            {ctaCopy}
        </Link>
    );
}