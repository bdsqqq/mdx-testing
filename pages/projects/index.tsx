import { useRouter } from "next/router";
import Link from "next/link";
import { allProjects } from ".contentlayer/data";

import { GetStaticPropsContext } from "next";
import type { Project } from ".contentlayer/types";

const Projects = ({ projects }: { projects: Project[] }) => {
  const { pathname, locale } = useRouter();

  return (
    <div>
      <Link href={`/${pathname}`} locale={locale == "en" ? "pt" : "en"}>
        <a>change lang</a>
      </Link>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const projects = allProjects.filter((project) => project.lang == locale);

  return {
    props: {
      projects,
    },
  };
}

export default Projects;
