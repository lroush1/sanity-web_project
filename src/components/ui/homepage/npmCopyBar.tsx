"use client";

import { useState } from 'react';

interface NpmCopyBarProps {
    packageName?: string;
}

export default function NpmCopyBar({ packageName = "npm package@latest" }: NpmCopyBarProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(packageName);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy!', error);
        }
    };

    return (
        <div
            onClick={handleCopy}
            className="rounded border border-zinc-200 px-4 py-3 cursor-pointer inline-flex items-center space-x-2"
        >
            <p className="font-[525] text-[15px] leading-[13px] tracking-normal text-center align-bottom">
                {copied ? "Copied!" : packageName}
            </p>
            <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4.5 5.5H1.5V17.5H12.5V13.5M15.5 1.5H4.5V13.5H15.5V1.5Z"
                    stroke="#515870"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}