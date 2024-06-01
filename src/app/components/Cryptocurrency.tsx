import Image from "next/image";

interface CryptocurrencyProps {
  src: string;
  alt: string;
  textOne: string;
  textTwo: string;
  textThree: string;
  subTitle: string;
  width: number;
  height: number;
}

export default function Cryptocurrency(props: CryptocurrencyProps) {
  return (
    <div className="flex flex-col justify-center text-center items-center md:text-start">
      <div className="relative">
        <Image
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="font-inter font-semibold text-lg md:text-2xl mb-4 mt-7">
          {props.subTitle}
        </h2>
        <h3 className="font-inter font-normal text-sm md:text-base">
          {props.textOne}
        </h3>
        <h3 className="my-3 font-inter font-normal text-sm">{props.textTwo}</h3>
        <h3 className="mb-12 font-inter font-normal text-sm">
          {props.textThree}
        </h3>
      </div>
    </div>
  );
}
