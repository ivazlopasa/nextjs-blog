import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import useStyles2 from "../src/utilStyles";
import Link from "next/link";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button, Container, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { CardActionArea, CardActions } from "@material-ui/core";
import useStyles from "../src/styles";
import Image from "next/image";
import { Post } from "../interfaces/TPost";

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await res.json();
    if (!posts) {
      return { notFound: true };
    }
    return {
      props: {
        posts,
      },
    };
  } catch {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}

function handleClick(event: { preventDefault: () => void }) {
  event.preventDefault();
}

export default function Home({ posts }: { posts: Post[] }) {
  const classes = useStyles();
  const classesUtil = useStyles2();
  const name = "Iva";

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className={classes.header}>
        <Image
          priority
          src="/images/profile.jpg"
          className={classesUtil.borderCircle}
          height={140}
          width={140}
          alt={name}
        />
        <h1 className={classesUtil.heading2Xl}>{name}</h1>
      </header>
      <Container className={classes.about}>
        <Typography variant="body1" gutterBottom className={classes.aboutText}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
        <Link href="posts/profile">
          <Button variant="outlined" color="primary">
            See my profile page
          </Button>
        </Link>
      </Container>
      <Container className={classes.cardGrid}>
        <h2 className={classesUtil.headingLg}>Blog</h2>
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.id}. {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {post.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href={"posts/" + `${post.id}`}>View</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
