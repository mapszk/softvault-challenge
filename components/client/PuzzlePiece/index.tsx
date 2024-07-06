/** @jsxRuntime classic */
/** @jsx jsx */
"use client";

import { jsx } from "@emotion/react";
import Image from "next/image";
import { containerStyles } from "./styles";

interface Props {
  /**
   * Title to show on the piece
   */
  title: string;
  /**
   * Description to show on the piece
   */
  description: string;
  /**
   * Icon image URL, will show in the top of the piece
   */
  iconUrl: string;
  /**
   * This will change the shape of the piece, only shapes available at the moment: 1, 2 and 3
   */
  pieceNumber: 1 | 2 | 3;
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
