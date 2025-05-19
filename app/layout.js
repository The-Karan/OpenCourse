import { ClerkProvider } from "@clerk/nextjs";
import { Outfit } from "next/font/google";
import Head from "next/head";
import "./globals.css";
const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "OpenCourse | Free Open and Personalized Learning",
  description: "Unlock quality education with OpenCourse. Generate personalized AI-driven courses and customize your learning journey, all in one platform.",
  keywords: "Open learning, personalized courses, AI education, open access, custom learning paths, online education, Next.js, React.js",
  author: "Aryan Inguz",
  openGraph: {
    title: "OpenCourse | Open and Personalized Learning",
    description: "Join OpenCourse and revolutionize your education. AI-powered tools for personalized learning experiences.",
    url: "https://opencourse.in", 
    image: "/assets/opencourse-cover.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenCourse | Personalized AI-Driven Learning",
    description: "Explore OpenCourse and create your tailored learning path with ease.",
    image: "/assets/opencourse-cover.jpg",
  },
};



export default function RootLayout({ children }) {
  return (
    <>
    
    <ClerkProvider>
    <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta name="author" content={metadata.author} />

          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:image" content={metadata.openGraph.image} />
          <meta property="og:type" content={metadata.openGraph.type} />

          <meta name="twitter:card" content={metadata.twitter.card} />
          <meta name="google-adsense-account" content="ca-pub-1034833348897670" />
          <meta name="twitter:title" content={metadata.twitter.title} />
          <meta name="twitter:description" content={metadata.twitter.description} />
          <meta name="twitter:image" content={metadata.twitter.image} />

          <script
            data-ad-client={process.env.NEXT_PUBLIC_AD_CLIENT_ID} 
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        </Head>
    <html lang="en">
      <body className={inter.className}>{children}
    
      </body>
    </html>
    </ClerkProvider>
    </>
  );
}
