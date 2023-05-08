import styles from "./NeonLink.module.css"

const NeonLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <a className={"text-stroke-slate p-4" + " " + styles["neon-light"]} href={href}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </a>
  );
};
export default NeonLink;
