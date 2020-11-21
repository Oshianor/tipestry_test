import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { List, ListItemText, ListItem } from "@material-ui/core/"
// import tipcoin from "../../../assets/tipcoin.png"
import Image from "next/image"
import CreateIcon from "@material-ui/core/Icon"

const navbarStyles = makeStyles({
  backgroundColor: `#3A6DC5`,
  displayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  spaceAroundCenter: {
    display: `flex`,
    justifyContent: `space-around`,
  },
  linkText: {
    textDecoration: `none`,
    color: `white`,
    textTransform: `uppercase`,
  },
})

const navLinks = [
  { title: "Login", path: "/login" },
  { title: "Join us", path: "/join" },
]

const Navbar = () => {
  const classes = navbarStyles()
  return (
    <AppBar position="static" className={classes.backgroundColor}>
      <Toolbar className={classes.spaceAroundCenter}>
        <Image
          src="/tipcoin.png"
          alt="Tipestry clone logo"
          width={60}
          height={60}
        />
        <List
          component="nav"
          aria-labelledby="navigation bar"
          className={classes.displayFlex}
          edge="end"
        >
          <CreateIcon fontSize="small" />
          {navLinks.map(navLink => {
            return (
              <a
                href={navLink.path}
                key={navLink.title}
                className={classes.linkText}
              >
                <ListItem>
                  <ListItemText primary={navLink.title} />
                </ListItem>
              </a>
            )
          })}
        </List>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
