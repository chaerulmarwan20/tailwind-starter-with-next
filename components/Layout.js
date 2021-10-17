import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { title, children } = props;
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="mt-8">{children}</main>
    </>
  );
};

export default Layout;
