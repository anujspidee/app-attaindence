"use client"
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";



export default function Home() {


  return (
    <div className="flex justify-center my-4" >
      <LoginLink>Sign in</LoginLink>

<RegisterLink>Sign up</RegisterLink>
    </div>
  );
}
