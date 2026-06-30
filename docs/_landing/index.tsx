import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import { Ecosystem } from "./_sections/Ecosystem/Ecosystem";
import { HomePageHeader } from "./_sections/HomePageHeader";
import { InstallOpenvino } from "./_sections/InstallOpenvino";
import { Performance } from "./_sections/Performance";
import { Frameworks } from "./_sections/Frameworks";

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={`${siteConfig.title} — documentation for the OpenVINO ecosystem.`}
    >
      <HomePageHeader />
      <InstallOpenvino />
      <Performance />
      <Ecosystem />
      <Frameworks />
    </Layout>
  );
}
