import useStyles from "../../src/utilStyles";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import Layout from "../../components/layout";

export default function Profile() {
  const utilClasses = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout home>
      <Container maxWidth="lg" className={utilClasses.container}>
        <a>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilClasses.borderCircle}
            height={150}
            width={150}
          />
        </a>
        <Typography variant="h6" gutterBottom color="primary">
          Name:
        </Typography>
        <Typography variant="body1" gutterBottom>
          Iva Zlopasa
        </Typography>
        <Typography variant="h6" gutterBottom color="primary">
          About me:
        </Typography>
        <Typography variant="body1" gutterBottom>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </Typography>
        <Box className={utilClasses.buttonBox}>
          <Button variant="outlined" onClick={handleClickOpen} color="primary">
            Show me more
          </Button>
        </Box>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"More about me"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Box className={utilClasses.buttonBox}>
          <Link href="/">
            <Button variant="outlined" color="primary">
              Go back
            </Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
}
