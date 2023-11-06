import { CustomLinkProps } from "@/src/types";
import Link from "next/link";
import React from "react";

const CustomLink = ({ title, href, containerStyles }: CustomLinkProps) => {
  return (
    <Link href={href} className={containerStyles}>
      {title}
    </Link>
  );
};

export default CustomLink;
