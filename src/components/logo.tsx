import Link from "next/link";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <LinkMark className={className} />
);

function LinkMark({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2", className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 shadow-sm shadow-blue-500/30">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 text-white"
          aria-hidden="true"
        >
          <path d="M13 2 4.5 13.5H11L9.5 22 19 9.5h-6.5L13 2z" />
        </svg>
      </span>
      <span className="text-xl font-bold tracking-tight text-navy">
        COSCI
        <span className="text-blue-500">Pay</span>
      </span>
    </Link>
  );
}