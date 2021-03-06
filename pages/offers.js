import Head from "next/head";
import ShowLayout from "../components/layouts/ShowLayout";
import Offer1 from "../components/OfferBar/OfferBar1/OfferBar1";

export default function offers() {
  return (
    <ShowLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>All Offer Bars</h1>
      <div className="comp-space">
        <Offer1 />
      </div>
    </ShowLayout>
  );
}
