import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import useStyles2 from "../src/utilStyles";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { CardActionArea, CardActions } from "@material-ui/core";
import useStyles from "../src/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePostsContext } from "../context/PostsContext";
import IPost from "../interfaces/IPost";
import Author from "../components/author";

export default function Home(props: { filteredPosts: IPost[] }) {
  const posts = usePostsContext().posts;

  const authors = usePostsContext().authors;
  const images = usePostsContext().images;

  const classes = useStyles();
  const classesUtil = useStyles2();

  const name = "Iva";

  const router = useRouter();
  const ROUTE_POST_ID = "posts/[id]";

  const [value, setValue] = React.useState(0);
  const [, setSelectedAuthor] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState<Array<IPost>>();

  const navigate = (id: number) =>
    router.push({
      pathname: ROUTE_POST_ID,
      query: { id },
    });

  function getFilteredPosts(value: number) {
    const newPosts = posts?.filter(
      (post: { userId: number }) => value === post.userId
    );
    value === 0 ? setFilteredPosts(posts) : setFilteredPosts(newPosts);
  }

  useEffect(() => {
    getFilteredPosts(value);
  }, [posts, value]);

  function getImage(id: number) {
    const image = images?.find((i: { id: number }) => id === i.id);
    return image?.url;
  }

  function radioBClicked(id: number) {
    setSelectedAuthor(id);
    setValue(id);
  }

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
        <Typography variant="h4" className={classesUtil.heading2Xl}>
          {name}
        </Typography>
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
        <FormControl component="fieldset">
          <FormLabel component="legend">Filter by author:</FormLabel>
          <RadioGroup
            row
            className={classes.group}
            aria-label="author"
            name="row-radio-buttons-group"
          >
            {authors?.map((author) => (
              <FormControlLabel
                key={author.id}
                value={author.id.toString()}
                checked={value === author.id}
                control={<Radio />}
                label={author.username}
                onClick={() => radioBClicked(author.id)}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Grid container spacing={4}>
          {filteredPosts?.map((post: IPost) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={getImage(post.id)}
                    alt="image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.id}. {post.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      color="primary"
                      variant="body1"
                      component="div"
                    >
                      <Author userId={post.userId} />
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {post.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate(post.id)}
                  >
                    View
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
