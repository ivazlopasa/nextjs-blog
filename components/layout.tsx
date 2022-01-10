import Head from "next/head";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import React from "react";
import NextLink from "next/link";
import { Link as MUILink } from "@material-ui/core";
import useStyles from "../src/styles";
import useStyles2 from "../src/utilStyles";

function handleClick(event: any) {
  //event.preventDefault();
}
export const siteTitle = "Iva's Blog";

export default function Layout({
  children,
  home,
}: {
  children: any;
  home: any;
}) {
  const classes = useStyles();
  const classesUtil = useStyles2();

  return (
    <div className={classes.containerLayout}>
      <Breadcrumbs aria-label="breadcrumb">
        <MUILink color="inherit" href="/" onClick={handleClick}>
          Home
        </MUILink>
        <MUILink color="inherit" href="/posts/profile" onClick={handleClick}>
          Profile Page
        </MUILink>
        <MUILink color="inherit" href="/posts/authors" onClick={handleClick}>
          Authors
        </MUILink>
        <Typography color="primary">Blog</Typography>
      </Breadcrumbs>
      <main>{children}</main>
      {!home && (
        <div className={classes.backToHome}>
          <NextLink href="/">
            <a>← Back to home</a>
          </NextLink>
        </div>
      )}
    </div>
  );
}
