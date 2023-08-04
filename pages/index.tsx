import Head from 'next/head'
import {Inter} from 'next/font/google'
import StatPreviewCard from "@/components/StatPreviewCard";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap"
              rel="stylesheet" />
      </Head>

      <StatPreviewCard/>
    </>
  )
}
