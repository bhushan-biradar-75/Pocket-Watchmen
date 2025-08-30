import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       <h1 className="text-center border-8">Bhola</h1>
       <Button className="border-8 p-4 bg-background:red">Submit bappa</Button>
       <Card/>
          </main>       
    </div>
  );
}
