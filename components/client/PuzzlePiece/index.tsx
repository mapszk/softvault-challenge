/** @jsxRuntime classic */
/** @jsx jsx */
"use client";

import { jsx } from "@emotion/react";
import Image from "next/image";
import { containerStyles } from "./styles";

interface Props {
  title: string;
  description: string;
  iconUrl: string;
  pieceNumber: number;
}

export default function PuzzlePiece({
  title,
  description,
  iconUrl,
  pieceNumber,
}: Props) {
  return (
    <div css={containerStyles[pieceNumber]}>
      <Image width={40} height={40} alt="Icon" src={iconUrl} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
