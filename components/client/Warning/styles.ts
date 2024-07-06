import { css } from "@emotion/react";

export const warningStyles = css`
  width: 472px;
  height: 112px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    font-weight: 600;
    color: #00f4ac;
  }
  &:after {
    content: "";
    background: url("/warning-border.svg");
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .decor {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &.right {
      right: -15px;
      transform: translateY(-50%) rotate(180deg);
    }
    &.left {
      left: -15px;
    }
  }
  .circle {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid #00f4ac;
    position: absolute;
    bottom: 1px;
    left: 87px;
    transform: translateY(50%);
    div {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #ff9900;
    }
  }
`;
