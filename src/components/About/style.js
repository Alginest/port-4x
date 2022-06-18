import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  about: {
    height: 900,
    padding: "100px 0",
    borderTop: "3px solid #04c2c9",
  },
  title: {
    color: "#444649",
    textTransform: "uppercase",
    fontFamily: "Raleway",
    fontSize: 40,
    fontWeight: "bold",
  },
  center: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  underline: {
    width: "80px",
    height: 4,
    backgroundColor: "#444649",
  },
  /*hexBox*/
  hexBox: {
    width: "100%",
    margin: "30px 0",
    justifyContent: "space-around",
  },
  hexaDiv: {
    width: "120px",
    height: "110px",
    backgroundColor: "#04c2c9",
    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  itemBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  icon: {
    color: "white",
    fontSize: 60,
  },
}));
