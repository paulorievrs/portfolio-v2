import Link from "next/link";
import { buttonVariants } from "./button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-2 border-b">
      <div className="flex flex-row gap-2 items-center">
        <Image
          src="/tiny-logo.png"
          alt="Site logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h1 className="text-xl font-bold">Paulo Rievrs</h1>
      </div>

      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              className={cn(buttonVariants({ variant: "link" }), "p-0")}
              href="/"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={cn(buttonVariants({ variant: "link" }), "p-0")}
              href="/"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
