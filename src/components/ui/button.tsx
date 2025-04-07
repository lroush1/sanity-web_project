import Link from "next/link";

export default function Button({
                                   ctaURL = "/",
                                   ctaCopy = "Button",
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
            className={`${padding} ${borderRadius} leading-3 transition ${bgColor} ${textColor} dark:${darkBgColor} dark:${darkTextColor} hover:shadow-lg text-sm font-[525] transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-200`}
        >
            {ctaCopy}
        </Link>
    );
}