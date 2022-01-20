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
} from "@material-ui/core";
import React from "react";
import { useRouter } from "next/router";
import { usePostsContext } from "../../context/PostsContext";
import Author from "../../components/author";

export default function Profile() {
  const posts = usePostsContext().posts;
  const authors = usePostsContext().authors;
  const images = usePostsContext().images;

  const router = useRouter();
  let id = router.query.id;

  const utilClasses = useStyles();
  const postClasses = useStyles3();

  const currentPost = posts?.find((p) => p.id.toString() === id);

  function getImage(id: number | undefined) {
    const image = images?.find((i: { id: number }) => id === i.id);
    return image?.url;
  }

  return (
    <>
      <Container className={utilClasses.container}>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={postClasses.grid}
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
              <Typography variant="h6" gutterBottom color="primary">
                Author:
              </Typography>
              <Typography variant="body1" gutterBottom>
                <Author userId={currentPost?.userId} />
              </Typography>
            </>
            <ButtonBase className={postClasses.image}>
              <img
                alt="random"
                src={getImage(currentPost?.id)}
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
