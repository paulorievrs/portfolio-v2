import Link from "next/link";
import { Button, buttonVariants } from "./button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function HomepageHeader() {
  return (
    <section className="bg-gradient-to-b from-primary/20 to-white pt-4 pb-8">
      <header className="flex justify-between items-center px-4 mb-8">
        <Image
          src="/tiny-logo.png"
          alt="Site logo"
          width={50}
          height={50}
          className="rounded-full transition-transform duration-100 hover:scale-110 hover:-rotate-12 cursor-pointer"
        />

        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "p-0 text-black"
                )}
                href="/"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "p-0 text-black"
                )}
                href="/"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <Image
          src={"/profile-pic.png"}
          alt="Paulo Rievrs Photo"
          className="rounded-full m-auto border-4 border-primary/50"
          height={240}
          width={240}
        />
        <h1 className="text-3xl font-bold mt-8 text-center">
          👋 Hi, I&apos;m Paulo Rievrs
        </h1>
        <p className="text-lg mt-2 text-center">
          I&apos;m a software engineer who loves to build applications.
        </p>
        <div className="flex flex-row items-center justify-center mt-4">
          <Button>See my work</Button>
        </div>
      </section>
    </section>
  );
}
