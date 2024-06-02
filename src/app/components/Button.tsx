import Link from "next/link";
import React from "react";

interface ButtonProps {
  padding?: string;
  describe: string;
}

export default function Button({ padding, describe }: ButtonProps) {
  return (
    <>
      <Link href="#">
        <div
          className={`bg-buttonOrange rounded-full text-center flex justify-center items-center text-sm font-medium font-poppins cursor-default cursor-pointer ${padding}`}
        >
          {describe}
        </div>
      </Link>
    </>
  );
}
