
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Welcome to next.js</h1>
      <Button variant="destructive">Subscribe</Button>
      
      <UserButton />
    </>
  );
}
