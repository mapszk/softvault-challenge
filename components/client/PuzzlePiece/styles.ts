import { css, SerializedStyles } from "@emotion/react";

const base = css`
  height: 223px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  text-align: center;
`;
const piece1 = css`
  ${base}
  background-image: url("/puzzle-pieces/bg-1.png");
  background-repeat: no-repeat;
  background-position: center;
  width: 376px;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    background-image: url("/puzzle-pieces/border-1.png");
    background-position: top;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    color: gray;
    max-width: 250px;
  }
  img {
    position: absolute;
    top: 0;
    transform: translate(-8px, -50%);
  }
`;
const piece2 = css`
  ${base}
  background-image: url("/puzzle-pieces/bg-2.png");
  background-repeat: no-repeat;
  background-position: center;
  width: 398px;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    background-image: url("/puzzle-pieces/border-2.png");
    background-position: top;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    max-width: 200px;
    margin-left: 30px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    color: gray;
    max-width: 300px;
    margin-left: 60px;
  }
  img {
    position: absolute;
    top: 0;
    transform: translate(22px, -50%);
  }
`;
const piece3 = css`
  ${base}
  background-image: url("/puzzle-pieces/bg-3.png");
  background-repeat: no-repeat;
  background-position: center;
  width: 398px;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    background-image: url("/puzzle-pieces/border-3.png");
    background-position: top;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    max-width: 250px;
    margin-left: 15px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    color: gray;
    max-width: 300px;
    margin-left: 25px;
  }
  img {
    position: absolute;
    top: 0;
    transform: translate(12px, -50%);
  }
`;

export const containerStyles: { [key: number]: SerializedStyles } = {
  1: piece1,
  2: piece2,
  3: piece3,
};
