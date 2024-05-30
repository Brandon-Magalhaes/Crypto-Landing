import Image from "next/image";
import Button from "./Button";
import Links from "./Links";
import Facebook from "../../../public/Images/Icons/FacebookIcon.svg";
import Twitter from "../../../public/Images/Icons/TwitterIcon.svg";
import Linkedin from "../../../public/Images/Icons/LinkedinIcon.svg";
import Instagram from "../../../public/Images/Icons/InstagramIcon.svg";

export default function Footer() {
  return (
    <footer>
      <div className="my-12 flex flex-col text-center justify-center items-center px-4 ">
        <h1 className="font-poppins font-bold text-2xl">Never miss a drop</h1>
        <h2 className="font-inter font-normal text-sm pt-2 pb-6">
          Subscribe for the latest news, drops & collectibles
        </h2>
        <div className="flex rounded-full border-2 border-white justify-between">
          <input
            className="w-[60%] text-center pl-2 flex justify-center items-center flex-nowrap font-inter font-normal text-xs bg-transparent border-none outline-none placeholder-gray-400"
            placeholder="Enter Your email address"
          />
          <div className="w-[40%]">
            <Button describe="Subscribe" padding="py-2 px-6" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-custom ">
        <div className="w-full pt-7 px-4">
          <Links
            title="Company"
            linkOne="About us"
            linkTwo="Terms of use"
            linkThree="Privacy Policy"
            linkFour="Disclaimer"
          />
          <Links
            title="Businesses"
            linkOne="Prime"
            linkTwo="Custody"
            linkThree="Asset Hub"
            linkFour="Commerce"
          />
          <Links
            title="Exchange"
            linkOne="Exchange Home"
            linkTwo="Margin Trading"
            linkThree="Derivatives Trading"
            linkFour="Trading Arena"
          />
          <Links
            title="Blockchain"
            linkOne="Chain Explorer"
            linkTwo="The Syndicate"
            linkThree="Security"
            linkFour="Cryptous Credit"
          />
          <Links
            title="Resources"
            linkOne="Prices"
            linkTwo="Site Widgets"
            linkThree="Tax"
            linkFour="Blog"
            linkFive="Research"
          />
        </div>
        <div className="w-full h-[1px] bg-white bg-opacity-50 rounded my-2"></div>

        <div className="mt-7 pb-9 px-4 flex flex-col text-center justify-center items-center">
          <div className="flex gap-3 relative mb-7">
            <Image
              src={Facebook}
              alt="Facebook"
              width={30}
              height={32}
              sizes="100vw"
              className="w-full h-auto"
            />
            <Image
              src={Twitter}
              alt="Twitter"
              width={30}
              height={32}
              sizes="100vw"
              className="w-full h-auto"
            />
            <Image
              src={Linkedin}
              alt="Linkedin"
              width={30}
              height={32}
              sizes="100vw"
              className="w-full h-auto"
            />
            <Image
              src={Instagram}
              alt="Instagram"
              width={30}
              height={32}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          <span className="font-inter font-normal text-sm text-textCopy">
            Copyright 2021, Cryptous
          </span>
        </div>
      </div>
    </footer>
  );
}
