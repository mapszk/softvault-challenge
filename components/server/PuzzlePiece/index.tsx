import Image from "next/image";

const baseClasses =
  "h-[223px] flex flex-col justify-center items-center relative text-white text-center bg-no-repeat bg-center";
const baseTitleClasses = "font-bold text-xl mb-4";
const baseImageClasses = "absolute top-0 -translate-y-1/2";
const baseDescriptionClasses = "text-gray-400";

const piece1Classes = `${baseClasses} w-[376px] bg-[url("/puzzle-pieces/bg-1.png")] after:bg-[url("/puzzle-pieces/border-1.png")] after:bg-top after:absolute after:bg-no-repeat after:w-full after:h-full`;
const image1Classes = `${baseImageClasses} -translate-x-[8px]`;
const title1Classes = `${baseTitleClasses}`;
const description1Classes = `${baseDescriptionClasses} max-w-[250px]`;

const piece2Classes = `${baseClasses} w-[398px] bg-[url("/puzzle-pieces/bg-2.png")] after:bg-[url("/puzzle-pieces/border-2.png")] after:bg-top after:absolute after:bg-no-repeat after:w-full after:h-full`;
const image2Classes = `${baseImageClasses} translate-x-[22px]`;
const title2Classes = `${baseTitleClasses} max-w-[250px] ml-[60px]`;
const description2Classes = `${baseDescriptionClasses} max-w-[300px] ml-[60px]`;

const piece3Classes = `${baseClasses} w-[398px] bg-[url("/puzzle-pieces/bg-3.png")] after:bg-[url("/puzzle-pieces/border-3.png")] after:bg-top after:absolute after:bg-no-repeat after:w-full after:h-full`;
const image3Classes = `${baseImageClasses} translate-x-[12px]`;
const title3Classes = `${baseTitleClasses} max-w-[250px] ml-6`;
const description3Classes = `${baseDescriptionClasses} max-w-[300px] ml-5`;

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
  const pieceClasses: { [key: number]: string } = {
    1: piece1Classes,
    2: piece2Classes,
    3: piece3Classes,
  };
  const imageClasses: { [key: number]: string } = {
    1: image1Classes,
    2: image2Classes,
    3: image3Classes,
  };
  const descriptionClasses: { [key: number]: string } = {
    1: description1Classes,
    2: description2Classes,
    3: description3Classes,
  };
  const titleClasses: { [key: number]: string } = {
    1: title1Classes,
    2: title2Classes,
    3: title3Classes,
  };

  return (
    <div className={pieceClasses[pieceNumber]}>
      <Image
        className={imageClasses[pieceNumber]}
        width={40}
        height={40}
        alt="Icon"
        src={iconUrl}
      />
      <h3 className={titleClasses[pieceNumber]}>{title}</h3>
      <p className={descriptionClasses[pieceNumber]}>{description}</p>
    </div>
  );
}
