/** @jsxRuntime classic */
/** @jsx jsx */
"use client";

import PuzzlePiece from "@/components/client/PuzzlePiece";
import Warning from "@/components/client/Warning";
import { jsx, css } from "@emotion/react";

const mainStyles = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .row {
    margin-bottom: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function Home() {
  return (
    <main css={mainStyles}>
      <div className="row">
        <PuzzlePiece
          pieceNumber={1}
          title="Understanding needs"
          description="We identify who has the problem or need and provide a detailed description of what the problem entails."
          iconUrl="/icon-1.svg"
        />
        <PuzzlePiece
          pieceNumber={2}
          title="Identifying opportunities"
          description="Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard..."
          iconUrl="/icon-1.svg"
        />
        <PuzzlePiece
          pieceNumber={3}
          title="Developing customized solutions"
          description="Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard..."
          iconUrl="/icon-1.svg"
        />
      </div>
      <Warning text="Below are some of the key technologies we use in our projects:" />
    </main>
  );
}
