import { CustomLinkProps } from "@/types";
import Link from "next/link";
import React from "react";

const CustomLink = ({ href, children, containerStyles }: CustomLinkProps) => {
  return (
    <Link href={href} className={`custom-btn ${containerStyles}`}>
      {children}
    </Link>
  );
};

export default CustomLink;
