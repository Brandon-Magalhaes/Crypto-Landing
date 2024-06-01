import Image from "next/image";
import calendario from "../../../public/Images/Icons/calendarioIcon.svg";
import timer from "../../../public/Images/Icons/TimerIcon.svg";

interface CardProps {
  src: string;
  alt: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="bg-white rounded-b-xl mb-7 max-w-xs">
      <div className="flex justify-center relative">
        <Image
          src={props.src}
          alt={props.alt}
          width={343}
          height={207}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
      <div className="px-2 mb-4">
        <h2 className="font-poppins font-medium text-base pt-3">
          New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange
        </h2>
        <h2 className="font-openSans font-normal text-sm text-textDescriptionCard my-3">
          We urge everyone adopt good cybersecurity habits, and to have unique
          passwords on every site they use...
        </h2>
        <div className="flex justify-between items-center pt-4 gap-1">
          <span className="text-textDataCard text-xs font-openSans font-normal">
            By: Jennia Peris
          </span>
          <span className="text-textDataCard text-xs font-openSans font-normal flex">
            <Image
              src={calendario}
              alt="Calendario"
              width={10}
              height={10}
              style={{ marginRight: 4 }}
              sizes="100vw"
              className="w-full h-auto"
            />
            15/07/2021
          </span>
          <span className="text-textDataCard text-xs font-openSans font-normal flex">
            <Image
              src={timer}
              alt="Timer"
              width={10}
              height={10}
              style={{ marginRight: 2 }}
              sizes="100vw"
              className="w-full max-w-[10px] h-auto"
            />
            5 Min to read
          </span>
        </div>
      </div>
    </div>
  );
}
