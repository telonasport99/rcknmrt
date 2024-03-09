import { PropsWithChildren, ReactElement } from "react";

import { Navbar } from "@/components/Navbar/Navbar";
import { NextPage } from "next";

import styles from "@/styles/Home.module.css";

export const Layout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <main className={styles.main}>
      <Navbar />
      {children}
    </main>
  );
};
export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
