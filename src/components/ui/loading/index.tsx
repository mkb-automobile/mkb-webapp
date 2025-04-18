"use client";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`;

export const Loader = styled.div`
  padding: 10px;
  border: 10px solid #ff9f1c;
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s linear infinite;
  height: 0;
  width: 0;
`;
