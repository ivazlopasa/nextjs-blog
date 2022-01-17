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
import { TPost } from "../interfaces/TPost";

export default function Home(props: { filteredPosts: TPost[] }) {
  const posts: any = usePostsContext().posts;
  const authors = usePostsContext().authors;
  const images = usePostsContext().images;

  const classes = useStyles();
  const classesUtil = useStyles2();

  const name = "Iva";

  const router = useRouter();
  const ROUTE_POST_ID = "posts/[id]";

  const [value, setValue] = React.useState(0);
  const [selectedAuthor, setSelectedAuthor] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState<Array<TPost>>([]);

  const navigate = (id: any) =>
    router.push({
      pathname: ROUTE_POST_ID,
      query: { id },
    });

  function getAuthor(userId: number) {
    const user = authors?.find((user: { id: number }) => userId === user.id);
    return user ? `${user.username}, ${user.name}` : "No user";
  }

  function getFilteredPosts(value: number | undefined) {
    const newPosts: any = posts?.filter(
      (post: { userId: number }) => value === post.userId
    );
    return setFilteredPosts(newPosts);
  }

  useEffect(() => {
    if (value === 0) {
      setFilteredPosts(posts);
    } else {
      getFilteredPosts(value);
    }
  }, [posts, value]);

  function getImage(id: number) {
    const image = images?.find((i: { id: number }) => id === i.id);
    return image?.url;
  }

  function radioBClicked(id: any) {
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
        <FormControl component="fieldset">
          <FormLabel component="legend">Filter by author:</FormLabel>
          {authors?.map((author) => (
            <div key={author.id}>
              <RadioGroup
                row
                aria-label="author"
                name="row-radio-buttons-group"
                onClick={() => radioBClicked(author.id)}
              >
                <FormControlLabel
                  value={author.id.toString()}
                  checked={value === author.id}
                  control={<Radio />}
                  label={author.username}
                />
              </RadioGroup>
            </div>
          ))}
        </FormControl>
        <Grid container spacing={4}>
          {filteredPosts?.map((post: TPost) => (
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
                      {getAuthor(post.userId)}
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
