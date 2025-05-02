import { ImgHTMLAttributes } from "react"

type WixImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "width" | "height" | "alt"
> & {
  mediaIdentifier: string | undefined
  placeholder?: string
  alt?: string | null | undefined
} & (
    | {
        scaleToFill?: true
        width: number
        height: number
      }
    | {
        scaleToFill: false
      }
  )
export default function WixImage() {}
