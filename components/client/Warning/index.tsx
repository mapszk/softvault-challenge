/** @jsxRuntime classic */
/** @jsx jsx */
"use client";

import Image from "next/image";
import { jsx } from "@emotion/react";
import { warningStyles } from "./styles";

interface Props {
  /**
   * Text to show in the warning
   */
  text: string;
}

export default function Warning({ text }: Props) {
  return (
    <div css={warningStyles}>
      <div className="circle">
        <div></div>
      </div>
      <Image
        className="decor left"
        alt="Decor"
        width={9}
        height={37}
        src="/warning-decor.svg"
      />
      <Image
        className="decor right"
        alt="Decor"
        width={9}
        height={37}
        src="/warning-decor.svg"
      />
      <p>{text}</p>
    </div>
  );
}
