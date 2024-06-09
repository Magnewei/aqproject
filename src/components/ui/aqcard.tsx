/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/RVhuuSu79Su
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import React from "react";

export function AQCard() {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <Link className="block" href="#">
        <img
          alt="Game Screenshot"
          className="w-full h-48 object-cover"
          height="200"
          src="/placeholder.svg"
          style={{
            aspectRatio: "400/200",
            objectFit: "cover",
          }}
          width="400"
        />
      </Link>
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-2">
          <Link className="text-lg font-bold hover:underline" href="#">
            Cyberpunk 2077
          </Link>
          <div className="flex items-center gap-1 text-yellow-500">
            <StarIcon className="w-5 h-5" />
            <span className="font-medium">4.5</span>
          </div>
        </div>
        <div className="text-gray-500 dark:text-gray-400 mb-4">
          <div>Release Date: Releasetext</div>
          <div>Genre: Genretext</div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
          Text
        </p>
      </CardContent>
    </Card>
  )
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}