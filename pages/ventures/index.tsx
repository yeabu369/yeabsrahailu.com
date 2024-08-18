import Page from "components/pages/ventures/base";
import { getAllVentures } from "lib/get-ventures-data";
import { NextPage } from "next";
import Head from "next/head";

const ProjectsIndexPage: NextPage = () => {
  const ventures = getAllVentures();

  return (
    <>
      <Head>
        <title>Ventures</title>
      </Head>
      <Page ventures={ventures} />
    </>
  );
};

export const config = {
  unstable_runtimeJS: false,
};

export default ProjectsIndexPage;
