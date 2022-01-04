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
const name = "Iva";
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
      <Head>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Breadcrumbs aria-label="breadcrumb">
        <MUILink color="inherit" href="/" onClick={handleClick}>
          Home
        </MUILink>
        <MUILink color="inherit" href="/posts/profile" onClick={handleClick}>
          Profile Page
        </MUILink>
        <Typography color="primary">Blog</Typography>
      </Breadcrumbs>
      <header className={classes.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={classesUtil.borderCircle}
              height={140}
              width={140}
              alt={name}
            />
            <h1 className={classesUtil.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <NextLink href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={classesUtil.borderCircle}
                  height={140}
                  width={140}
                  alt={name}
                />
              </a>
            </NextLink>
            <h2 className={classesUtil.headingLg}>
              <NextLink href="/">
                <a className={classesUtil.colorInherit}>{name}</a>
              </NextLink>
            </h2>
          </>
        )}
      </header>
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
