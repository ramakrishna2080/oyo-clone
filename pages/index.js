import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Head from "next/head";
import Image from "next/image";


const Home = () => {
  return (
    <div>
      <Head>
        <title>OYO : India's Best Online Hotel Booking Site for Sanitized Stay.</title>
        <link rel='icon' href="/icon.png"></link>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-20">
        <div className="my-14">
          <Image src={'/banner1.avif'} alt="banner1" width={200} height={200} className="w-full h-80" />
        </div>
        <div className="mb-14">
          <Image src={'/banner2.avif'} alt="banner1" width={200} height={200} className="w-full h-40" />
        </div>
      </div>
      <Header4 />
      <Footer />
    </div>
  )
}

export default Home;