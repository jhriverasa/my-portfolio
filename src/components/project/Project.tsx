import ExternalLinkIcon from "../svg/ExternalLinkIcon";
import FolderIcon from "../svg/FolderIcon";
import GithubIcon from "../svg/GithubIcon";

import styles from "./Project.module.css";

export interface ProjectProps {
  title: string;
  url: string;
  isExternalLink: boolean;
  children: React.ReactNode;
  techList: Array<{
    techName: string;
  }>;
}

const Project = (props: ProjectProps) => {
  return (
    <div
      className={
        styles["project-container"] +
        " lg:w-[31%] md:w-[46%] cursor-pointer rounded-lg shadow-2xl p-6 mt-4 mx-2"
      }
    >
      <a target="_blank" href={props.url} rel="noopener noreferrer">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-start relative w-1/2 ">
            <div className="flex flex-auto w-12 h-12">
              <FolderIcon stroke="#9fc4f8" />
            </div>
          </div>
          <div className="flex justify-end relative w-1/2">
            <div className="flex lg:w-12 lg:h-12 md:w-12 md:h-12  w-8 h-8">
              {props.isExternalLink ? (
                <ExternalLinkIcon fill="#9fc4f8" />
              ) : (
                <GithubIcon fill="#9fc4f8" />
              )}
            </div>
          </div>
        </div>
        <div className="title flex w-full mt-4 mb-1 text-aquamarine font-title">
          {props.title}
        </div>
        <div className="description mb-4 font-body_alt text-justify text-teal-small text-sm">
          {props.children}
        </div>

        <div className="flex flex-wrap w-full font-body">
          {props.techList.map((tech, i, a) => {
            return (
              <div
                key={`techlist-${i}`}
                className={`text-slate-500 italic text-sm font-light ${
                  i != a.length - 1 ? "mr-2" : ""
                }`}
              >
                {tech.techName}
              </div>
            );
          })}
        </div>
      </a>
    </div>
  );
};

export default Project;
