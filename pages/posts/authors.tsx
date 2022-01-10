import useStyles4 from "../../src/authorsStyle";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  useTheme,
} from "@material-ui/core";
import React from "react";
import Layout from "../../components/layout";
import { useQuery } from "react-query";
import { Author } from "../../interfaces/TAuthors";

/**
 * Getting authors initials for avatars
 */
function stringAvatar(name: any) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

/**
 * Getting users(authors) data from json
 * @returns authors
 */
const fetchAuthors = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const authors: Author[] = await res.json();
  return {
    props: {
      authors,
    },
  };
};

export default function Authors({
  authors,
}: {
  authors: Author[] | undefined;
}) {
  const { data } = useQuery("authors", fetchAuthors);
  authors = data?.props.authors;
  const authorsClasses = useStyles4();
  const theme = useTheme();

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
