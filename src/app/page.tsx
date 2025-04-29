import Image from "next/image"
import banner from "@/assets/banner.jpg"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { delay } from "@/lib/utils"
import { Suspense } from "react"
import { getWixClient } from "@/lib/wix-client-base"

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
              Shot Now <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
        <div className="relative hidden md:block w-1/2 h-full">
          <Image
            src={banner}
            className="h-full object-cover"
            alt="Flow Shop banner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent"></div>
        </div>
      </div>
      <Suspense fallback={"Loading"}>
        <FeaturedProducts />
      </Suspense>
    </main>
  )
}

async function FeaturedProducts() {
  await delay(1000)

  const wixClient = getWixClient()
  const { collection } =
    await wixClient.collections.getCollectionBySlug("featured-products")

  if (!collection?._id) {
    return null
  }

  const featuredProducts = await wixClient.products
    .queryProducts()
    .hasSome("collectionIds", [collection._id])
    .descending("lastUpdated")
    .find()

  if (!featuredProducts.items.length) {
    return null
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold">Featured Products</h2>
      <div className="flex sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div>
    </div>
  )
}
