"use client";
import React from "react";
import LineGraphics from "./components/LineGraphic";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import AllCoins from "./components/Coins/AllCoins";
import Cryptocurrency from "./components/Cryptocurrency";
import Money from "../../public/Images/Money.svg";
import Graphic from "../../public/Images/Graphic.svg";
import CelBitocin from "../../public/Images/CelulaBitcoin.svg";
import TwoCelGraphics from "../../public/Images/TwoCelGraphics.svg";
import AppStore from "../../public/Images/AppStore.svg";
import GooglePlay from "../../public/Images/GooglePlay.svg";
import Card from "../app/components/Card";
import Coins from "../../public/Images/Coins.svg";
import OneCelGraphic from "../../public/Images/OneCelGraphic.svg";
import Crypto from "../../public/Images/Crypto.svg";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="w-full">
      <div className="px-4">
        <Header />
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-poppins font-bold text-2xl">
            Make better businees with Cryptocurrency
          </h1>
          <p className="font-inter font-normal text-base mb-3  mt-3">
            We offers users a fully operational long-term rental platform. It
            plans to leverages blockchain technology.
          </p>
          <div className="mb-4">
            <Button padding="py-[7px] px-[14px]" describe="Get Whitelisted" />
          </div>
        </div>

        <div>
          <div className="font-poppins font-bold text-xl text-center">
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
      </div>
      <div className=" w-full text-center bg-backgroundWhite text-black pt-12 px-4">
        <h1 className="font-poppins font-bold text-xl mb-7">
          The most trusted cryptocurrency platform
        </h1>

        <div>
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

      <div className="px-4 mt-12 flex flex-col text-center justify-center items-center mb-12">
        <h1 className="font-poppins font-bold text-xl mb-2">
          Try the future, today. Download Crypto
        </h1>
        <h2 className="font-inter font-normal text-sm mb-7">
          Stay connected to the market with our mobile app. Featuring advanced
          order types and analytical tools for experienced traders, as well as a
          simple buy & sell interface for those just getting started.
        </h2>
        <Image
          src={TwoCelGraphics}
          width={202}
          height={215}
          alt="Two Phone with Graphics"
          sizes="100vw"
          className="w-full h-auto mb-7"
        />
        <div className="flex gap-5">
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
      </div>

      <div className=" w-full bg-backgroundWhite text-black pt-12 px-4">
        <h1 className="font-poppins font-semibold text-3xl mb-7 text-center">
          Learn to thrive
        </h1>

        <div className="w-full flex flex-col justify-center items-center">
          <Card src={Crypto} alt="Crypto" />
          <Card src={OneCelGraphic} alt="One Phone Graphic" />
          <Card src={Coins} alt="Coins" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
