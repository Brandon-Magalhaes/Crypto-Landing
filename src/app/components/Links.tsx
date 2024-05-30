import Link from "next/link";

interface linksProps {
  title: string;
  linkOne: string;
  linkTwo: string;
  linkThree: string;
  linkFour: string;
  linkFive?: string;
}

export default function Links(props: linksProps) {
  return (
    <div className="flex flex-col items-start mb-7">
      <div className="flex flex-col gap-2">
        <h3 className="font-inter font-semibold text-lg mb-2">{props.title}</h3>
        <Link href="#" passHref>
          <span className="text-sm font-inter font-normal text-textFotterGray">
            {props.linkOne}
          </span>
        </Link>
        <Link href="#" passHref>
          <span className="text-sm font-inter font-normal text-textFotterGray">
            {props.linkTwo}
          </span>
        </Link>
        <Link href="#" passHref>
          <span className="text-sm font-inter font-normal text-textFotterGray">
            {props.linkThree}
          </span>
        </Link>
        <Link href="#" passHref>
          <span className="text-sm font-inter font-normal text-textFotterGray">
            {props.linkFour}
          </span>
        </Link>
        <Link href="#" passHref>
          <span className="text-sm font-inter font-normal text-textFotterGray">
            {props.linkFive}
          </span>
        </Link>
      </div>
    </div>
  );
}
