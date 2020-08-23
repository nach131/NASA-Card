import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import Avatar from "@material-ui/core/Avatar";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
    paddingTop: "4rem",
    paddingBottom: "20px",
  },
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
  gridList: {
    width: "100%",
    height: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    "&:hover": {
      cursor: "pointer",
    },
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
  profile: {
    position: "absolute",
    top: "5px",
    right: "15px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: "1rem",
  },
}));

export default function Gallery() {
  const classes = useStyles();
  const [tileData, setTiledData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [photoImg, setPhotoImg] = React.useState("");
  const [photoUser, setPhotoUser] = React.useState("");
  const [photoAvatar, setPhotoAvatar] = React.useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  fetch(
    "https://api.unsplash.com/photos/?client_id=3bf8d40569267ba2a37d1270433ee9f5745a4a39e911b8ac97c87e26485c9d78&per_page=42"
    // "https://api.nasa.gov/planetary/apod?api_key=EUDrgZhfxHUUr5GwtaCDh0FjiAxQsboz8BoR7MCY&start_date=2020-05-01&end_date=2020-05-30"
  )
    .then((res) => res.json())
    .then((data) => setTiledData(data));

  return (
    <div className={classes.root}>
      <GridList
        cols={4}
        cellHeight={400}
        spacing={7}
        className={classes.gridList}
      >
        {tileData.map((tile, index) => (
          <GridListTile
            onClick={() => {
              // setPhotoImg(tile.url);
              setPhotoImg(tile.urls.regular);
              // setPhotoUser(tile.copyright);
              setPhotoUser(tile.user.name);
              // setPhotoAvatar(tile.user.profile_image.small);
            }}
            key={index}
            cols={1}
            rows={1}
          >
            {/* <img onClick={handleOpen} src={tile.url} alt={tile.title} /> */}
            <img
              onClick={handleOpen}
              src={tile.urls.regular}
              alt={tile.title}
            />
            <GridListTileBar
              // title={tile.copyright}
              title={tile.user.username}
              titlePosition="top"
              actionIcon={
                <React.Fragment>
                  <IconButton
                    aria-label={`star ${tile.user.username}`}
                    // aria-label={`star ${tile.copyright}`}
                    // className={classes.icon}
                  >
                    <StarBorderIcon />
                  </IconButton>
                  {/* <Avatar
                    alt="Remy Sharp"
                    // src={tile.user.profile_image.small}
                    className={classes.profile}
                  /> */}
                </React.Fragment>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div id="transition-modal-title">
              {" "}
              <img
                style={{ height: "85vh", borderRadius: "2px" }}
                src={photoImg}
                alt="images"
              />
              <p className="descripcion">What planets are those behind that unusual rock spire? Saturn (lower left) and Jupiter.  This month, after sunset, the bright planetary duo are quite prominent toward the southeast.  Now your view.</p>
              <a
                className="descarga float-right"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                href={photoImg}
                download
                title="ImageName"
              >
                {/* <Button variant="contained" size="medium" color="secondary"> */}
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  class="bi bi-arrow-down-circle-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"
                  />
                </svg>
                {/* </Button> */}
              </a>
            </div>

            <Box
              style={{ marginTop: "15px" }}
              display="flex"
              justifyContent="space-between"
              id="transition-modal-description"
            >
              <Box display="flex" justifyContent="space-between">
                {/* <Avatar alt="avatar" src={photoAvatar} /> */}
                <Typography
                  style={{ marginLeft: "5px", marginTop: "5px" }}
                  variant="body1"
                  component="h3"
                >
                  {photoUser}
                </Typography>
              </Box>
              <div />
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  href={photoImg}
                  download
                  title="ImageName"
                >
                  {/* <Button variant="contained" size="medium" color="secondary">
                    Free Download
                  </Button> */}
                </a>
              </div>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
