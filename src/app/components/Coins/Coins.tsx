import Image from "next/image";

interface CoinsProps {
  name: string;
  sigla: string;
  valorTotal: string;
  valor: string;
}

interface ImageProps {
  alt: string;

  src: string;
}

export default function Coins(props: CoinsProps & ImageProps) {
  return (
    <div>
      <div className="w-full h-[1px] bg-white bg-opacity-50 rounded my-2"></div>

      <div className="w-full flex justify-between">
        <div className="flex justify-center items-center">
          <div className="min-w-6 relative">
            <Image
              src={props.src}
              alt={props.alt}
              width={24}
              height={24}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          <div className="mx-2 font-openSans font-normal text-xs">
            {props.name}
          </div>
          <div className="font-openSans font-normal text-[10px] text-textGray">
            {props.sigla}
          </div>
        </div>
        <div>
          <div className="text-sm font-inter font-medium">
            {props.valorTotal}
          </div>
          <div className="text-textGray font-inter font-semibold text-xs text-end">
            {props.valor} BTC
          </div>
        </div>
      </div>
    </div>
  );
}
