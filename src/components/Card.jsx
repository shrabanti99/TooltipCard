import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import music from "../assets/music.jpg";
import styles from "./card.module.css";

export default function TooltipCard() {
  return (
    <>
      <div className={styles.cardContainer}>
        <Tooltip
          title={
            <h3
              style={{
                color: "white",
                width: "80px",
                // height: "4px",
              }}
            >
              42 songs
            </h3>
          }
          //   title="42 songs"
          arrow
          placement="top"
          className={styles.tooltip}
        >
          <IconButton>
            <Card sx={{ maxWidth: 345 }} style={{ borderRadius: "14px" }}>
              <CardActionArea style={{ height: "300px" }}>
                <CardMedia
                  style={{ height: "225px", width: "220px" }}
                  component="img"
                  height="140"
                  image={music}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className={styles.follows}
                  >
                    12417 Follows
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </IconButton>
        </Tooltip>
        <div className={styles.remarks}>Lighthearted Childhood</div>
      </div>
    </>
  );
}