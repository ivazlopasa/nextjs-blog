import useStyles from "../../src/utilStyles";
import useStyles3 from "../../src/postStyle";
import {
  Box,
  Button,
  ButtonBase,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchPeopleListFromAPI = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  return {
    props: {
      posts,
    },
  };
};

export default function Profile({ posts }: { posts: Post[] | undefined }) {
  const { data } = useQuery("posts", fetchPeopleListFromAPI);
  posts = data?.props.posts;

  const router = useRouter();
  let id = router.query.id;

  const utilClasses = useStyles();
  const postClasses = useStyles3();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  let activePost: Post | undefined;

  const currentPost = posts?.find((p) => p.id.toString() === id);

  return (
    <>
      <Container className={utilClasses.container}>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh", width: "100%" }}
        >
          <Grid item xs={12}>
            <>
              <Typography variant="h4" gutterBottom color="primary">
                {currentPost?.title}
              </Typography>
              <Typography variant="h6" gutterBottom color="primary">
                Body:
              </Typography>
              <Typography variant="body1" gutterBottom>
                {currentPost?.body}
              </Typography>
              <Typography variant="h6" gutterBottom color="primary">
                Post id:
              </Typography>
              <Typography variant="body1" gutterBottom>
                {currentPost?.id}
              </Typography>
            </>
            <ButtonBase className={postClasses.image}>
              <img
                alt="random"
                src="https://source.unsplash.com/random"
                className={postClasses.img}
              />
            </ButtonBase>
            <Box className={utilClasses.buttonBox}>
              <Link href="/">
                <Button
                  variant="outlined"
                  color="primary"
                  className={utilClasses.button}
                >
                  Go back
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
