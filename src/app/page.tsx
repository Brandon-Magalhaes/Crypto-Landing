"use client";
import React from "react";
import LineGraphics from "./components/LineGraphic";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import AllCoins from "./components/Coins/AllCoins";
import Cryptocurrency from "./components/Cryptocurrency";
import Money from "../../public/Images/Money.svg";
import Graphic from "../../public/Images/Graphic.svg";
import CelBitocin from "../../public/Images/CelulaBitcoin.svg";
import TwoCelGraphics2 from "../../public/Images/TwoCelGraphics2.svg";
import AppStore from "../../public/Images/AppStore.svg";
import GooglePlay from "../../public/Images/GooglePlay.svg";
import Card from "../app/components/Card";
import Coins from "../../public/Images/Coins.svg";
import OneCelGraphic from "../../public/Images/OneCelGraphic.svg";
import Crypto from "../../public/Images/Crypto.svg";
import Button from "./components/Button";
import BitcoinIllustration from "../../public/Images/IllustrationBitcoin.svg";

const Store = () => (
  <div className="flex flex-1 gap-5">
    <Image
      src={AppStore}
      width={100}
      height={35}
      alt="AppStore"
      sizes="100vw"
      className="w-full h-auto"
    />

    <Image
      src={GooglePlay}
      width={100}
      height={35}
      alt="GooglePlay"
      sizes="100vw"
      className="w-full h-auto"
    />
  </div>
);

export default function Home() {
  return (
    <div className="w-full">
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 h-auto md:h-screen md:flex md:flex-col md:justify-center md:items-center md:bg-gradient-custom">
        <div className="md:absolute md:top-0 md:right-0 md:left-0 md:bottom-0 px-4 md:px-8 lg:px-16 xl:px-32 flex flex-col items-center">
          <Header />
        </div>

        <div className="flex justify-center items-center md:gap-5 z-50">
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-start flex-1">
            <h1 className="font-poppins font-bold text-2xl md:text-4xl 2xl:text-6xl">
              Make better businees with Cryptocurrency
            </h1>
            <p className="font-inter font-normal text-base my-3 md:my-6">
              We offers users a fully operational long-term rental platform. It
              plans to leverages blockchain technology.
            </p>
            <div className="mb-4">
              <Button
                padding="py-[7px] px-[14px] md:py-2 md:px-4"
                describe="Get Whitelisted"
              />
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center relative flex-1 ">
            <Image
              src={BitcoinIllustration}
              alt="Bitcoin Illustration"
              width={614}
              height={474}
              sizes="100vw"
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 m-20">
        <div className="font-poppins font-bold text-xl md:text-3xl text-center">
          Today is Cryptocurrency Prices
        </div>
        <div className="flex justify-between mt-4 mb-3 mr-4">
          <div className="text-sm font-inter font-medium">Name</div>
          <div className="text-sm font-inter font-medium">Volume(24h)</div>
        </div>

        <div className="pb-12">
          <AllCoins />
        </div>
      </div>
      <div className="w-full min-h-[500px] md:flex md:flex-col md:justify-center md:items-center text-center md:text-start bg-backgroundWhite text-black pt-12 md:pt-24 md:pb-16 px-4 md:px-8 lg:px-16 xl:px-32">
        <h1 className="font-poppins font-bold text-xl mb-7 md:mb-11 md:text-3xl">
          The most trusted cryptocurrency platform
        </h1>

        <div className="w-full md:flex md:justify-between gap-5 max-w-[1680px]">
          <Cryptocurrency
            src={Money.src}
            width={65}
            height={69}
            alt="Money"
            subTitle="Ease of Trading"
            textOne="Intuitive interface"
            textTwo="Instant deposit options"
            textThree="Cash out directly to your bank account"
          />
          <Cryptocurrency
            src={CelBitocin.src}
            width={62}
            height={69}
            alt="Graphic"
            subTitle="Institutional-grade Security"
            textOne="98% of assets stored safely offline"
            textTwo="Highly encrypted personal data"
            textThree="Whitelisting and transaction confirmations"
          />
          <Cryptocurrency
            src={Graphic.src}
            width={112}
            height={69}
            alt="Bitcoin Celular"
            subTitle="Proven Reliability"
            textOne="Exchanging bitcoin since 2011"
            textTwo="Industry-leading uptime"
            textThree="24/7 dedicated support"
          />
        </div>
      </div>

      <div className="w-full h-auto min-h-[500px] px-4 md:px-8 lg:px-16 xl:px-32 mt-12 flex flex-col md:flex-row justify-center items-center mb-12 md:gap-5">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start mb-8 md:mb-0 flex-1">
          <h1 className="font-poppins font-bold text-xl md:text-3xl mb-2">
            Try the future, today. Download Crypto
          </h1>
          <h2 className="font-inter font-normal text-sm md:text-base mb-7">
            Stay connected to the market with our mobile app. Featuring advanced
            order types and analytical tools for experienced traders, as well as
            a simple buy & sell interface for those just getting started.
          </h2>
          <div className="hidden md:block w-96">
            <Store />
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-center flex-1">
          <Image
            src={TwoCelGraphics2}
            width={202}
            height={215}
            alt="Two Phone with Graphics"
            sizes="100vw"
            className="md:w-auto md:h-auto mb-7"
          />
        </div>
        <div className="md:hidden">
          <Store />
        </div>
      </div>

      <div className=" w-full bg-backgroundWhite text-black pt-12 px-4 md:px-8 lg:px-16 xl:px-32 min-h-[500px] md:pb-10">
        <h1 className="font-poppins font-semibold text-3xl mb-7 text-center">
          Learn to thrive
        </h1>

        <div className="w-full flex flex-col justify-center items-center md:flex-row md:gap-8">
          <Card src={Crypto} alt="Crypto" />
          <Card src={OneCelGraphic} alt="One Phone Graphic" />
          <Card src={Coins} alt="Coins" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
