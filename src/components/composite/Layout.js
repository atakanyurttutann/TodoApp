import Head from "next/head";
import React from "react";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Todo List</title>
      </Head>
      <div className="p-4">{props.children}</div>
    </>
  );
};

export default Layout;
