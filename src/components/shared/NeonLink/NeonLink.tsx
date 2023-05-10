import { MouseEventHandler } from "react";
import styles from "./NeonLink.module.css";

const NeonLink = ({
  text,
  href,
  onClick,
}: {
  text: string;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) => {
  return (
    <a
      onClick={onClick}
      className={"text-stroke-slate p-4" + " " + styles["neon-light"]}
      rel="noopener"
      href={href}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </a>
  );
};
export default NeonLink;
