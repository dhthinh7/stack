'use client'

import React from "react";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";

const LeftSidebar = () => {
  const pathname = usePathname()

  return <section className="background-light900_dark200 light-border light-border-sticky left-0 top-0 flex min-h-[100dvh] flex-col overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
    <div className="flex flex-col gap-6">
      {sidebarLinks.map((item) => {
        const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;
        return (
          <div key={item.route}>
            <Link
              href={item.route}
              className={`${isActive
                ? 'primary-gradient rounded-lg text-light-900'
                : 'text-dark300_light900'
                } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`max-lg:hidden ${isActive ? 'base-bold' : 'base-medium'}`}>{item.label}</p>
            </Link>
          </div>
        )
      })}
    </div>
    <SignedOut>
      <div className="flex flex-col gap-3 mt-20">
        <Link href="/sign-in">
          <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
            <Image src="/assets/icons/account.svg" alt="icon" width={20} height={20} className="invert-colors lg:hidden" />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Button>
        </Link>

        <Link href="/sign-up">
          <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none'>
            <Image src="/assets/icons/sign-up.svg" alt="icon" width={20} height={20} className="invert-colors lg:hidden" />
            <span className="max-lg:hidden">Sign up</span>
          </Button>
        </Link>
      </div>
    </SignedOut>
  </section>;
};

export default LeftSidebar;
