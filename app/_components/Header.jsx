import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";
import { Button } from "../../components/ui/button";
import logo from "../../assets/logosaas.jpg"

const Header = () => {
  return (
    <>
     <Head>
        <title>OpenCourse - Create Personalized AI Courses</title>
        <meta name="description" content="Generate personalized AI courses with our easy-to-use tool. Explore various topics and create your own curriculum today!" />
        <meta name="keywords" content="AI, Course Generator, Online Learning, Educational Tool, Machine Learning, Deep Learning" />
        <meta property="og:title" content="OpenCourse" />
        <meta property="og:description" content="Create personalized AI courses tailored to your needs." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OpenCourse" />
        <meta name="twitter:description" content="Generate personalized AI courses with our easy-to-use tool." />
      </Head>
    <div className="flex justify-between p-5 shadow-sm items-center">
      <div className="flex items-center gap-2">
      <Link  href={'/'}  className="flex justify-center items-center gap-2">
      <Image src={logo} width={44} height={44} /> <span className="font-bold text-xl">OpenCourse.</span>
      </Link>
      </div>
      <div className="flex justify-center items-center gap-10 cursor-pointer">
       <Link href={"https://github.com/aryainguz/opencourse.in" }>
         <RxGithubLogo className="text-3xl"/>
       </Link>          
      <Link href={'/dashboard'} >

      <Button variant="startButton" > Get started</Button>
      </Link>
      </div>
    </div>
    </>
  );
};

export default Header;
