import useStyles4 from "../../src/authorsStyle";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import React from "react";
import Layout from "../../components/layout";
import IAuthor from "../../interfaces/IAuthors";
import { usePostsContext } from "../../context/PostsContext";

/**
 * Getting authors initials for avatars
 */
function stringAvatar(name: string) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function Authors({
  authors,
}: {
  authors: IAuthor[] | undefined;
}) {
  authors = usePostsContext().authors;
  const authorsClasses = useStyles4();

  return (
    <Layout home>
      <Container className={authorsClasses.containerLayout}>
        <Typography variant="h5" gutterBottom color="primary">
          Authors:
        </Typography>
        {authors &&
          authors.map((author) => (
            <Box className={authorsClasses.box} key={author.id}>
              <Card variant="outlined" className={authorsClasses.card}>
                <React.Fragment>
                  <CardContent>
                    <Avatar {...stringAvatar(author.name)} />
                    <Typography variant="body1" color="primary" gutterBottom>
                      {author.name} - {author.username}
                    </Typography>
                    <Typography variant="body2">
                      Mail: {author.email}
                    </Typography>
                    <Typography variant="body2">
                      Website: {author.website}
                    </Typography>
                    <Typography variant="body2">
                      Company: {author.company.name}
                    </Typography>
                    <Typography variant="body2">
                      Address: {author.address.street}, {author.address.suite},{" "}
                      {author.address.city}
                    </Typography>
                  </CardContent>
                </React.Fragment>
              </Card>
            </Box>
          ))}
      </Container>
    </Layout>
  );
}
