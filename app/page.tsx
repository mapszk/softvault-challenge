import PuzzlePiece from "@/components/client/PuzzlePiece";
import PuzzlePieceServer from "@/components/server/PuzzlePiece";
import Warning from "@/components/client/Warning";
import WarningServer from "@/components/server/Warning";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex gap-4 mb-12">
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
        {/* <PuzzlePiece
          pieceNumber={3}
          title="Developing customized solutions"
          description="Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard..."
          iconUrl="/icon-1.svg"
        /> */}
        <Warning text="Below are some of the key technologies we use in our projects:" />
      </div>
      <div className="flex gap-4">
        <PuzzlePieceServer
          pieceNumber={1}
          title="Understanding needs"
          description="We identify who has the problem or need and provide a detailed description of what the problem entails."
          iconUrl="/icon-1.svg"
        />
        <PuzzlePieceServer
          pieceNumber={2}
          title="Identifying opportunities"
          description="Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard..."
          iconUrl="/icon-1.svg"
        />
        {/* <PuzzlePieceServer
          pieceNumber={3}
          title="Developing customized solutions"
          description="Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard..."
          iconUrl="/icon-1.svg"
        /> */}
        <WarningServer text="Below are some of the key technologies we use in our projects:" />
      </div>
    </main>
  );
}
