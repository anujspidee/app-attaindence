"use client"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";


export default function Home() {
 //useTheme('light');

  return (
    <div className="flex justify-center my-4" >
      main
        <Button onClick={() => window.location.href = "/dashboard"}>Click me</Button>
        
    </div>
  );
}
