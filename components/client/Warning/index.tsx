import Image from "next/image";

interface Props {
  /**
   * Text to show in the warning
   */
  text: string;
}

export default function Warning({ text }: Props) {
  return (
    <div className="w-[472px] h-[112px] relative flex items-center text-center after:bg-[url('/warning-border.svg')] after:absolute after:w-full after:h-full">
      <div className="w-7 h-7 flex items-center justify-center rounded-full border-4 absolute bottom-[1px] left-[87px] translate-y-1/2 border-emerald-500">
        <div className="w-2 h-2 rounded-full bg-orange-400"></div>
      </div>
      <Image
        className="absolute top-1/2 -left-4 -translate-y-1/2"
        alt="Decor"
        width={9}
        height={37}
        src="/warning-decor.svg"
      />
      <Image
        className="absolute top-1/2 -right-4 -translate-y-1/2 rotate-180"
        alt="Decor"
        width={9}
        height={37}
        src="/warning-decor.svg"
      />
      <p className="text-emerald-300 font-semibold">{text}</p>
    </div>
  );
}
