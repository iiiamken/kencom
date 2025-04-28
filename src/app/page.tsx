import Image from "next/image"
import banner from "@/assets/banner.jpg"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl space-y-10 px-5 py-10">
      <div className="flex items-center bg-secondary md:h-96">
        <div className="space-y-7 p-10 text-center md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Fill the void in your heart
          </h1>
          <p>Tough day? Buy some expensive stuff and become happy again!</p>
          <Button asChild>
            <Link href="/shop">
              {" "}
              Shot Now <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
          <div className="hidden md:block w-1/2 h-full">
            <Image
              src={banner}
              className="h-full object-cover"
              alt="Flow Shop banner"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
