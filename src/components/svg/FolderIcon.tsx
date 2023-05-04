import * as React from "react"
import { SVGProps } from "react"
const FolderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={props.stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-folder"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{"Folder"}</title>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
)
export default FolderIcon
