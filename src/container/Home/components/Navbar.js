import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { List, ListItemText, ListItem } from "@material-ui/core/"
// import tipcoin from "../../../assets/tipcoin.png"
import { Typography } from "@material-ui/core"

const navbarStyles = makeStyles({
  backgroundColor: `#3A6DC5`,
  displayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    color: `white`,
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
      <Toolbar>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <List
          component="nav"
          aria-labelledby="navigation bar"
          className={classes.displayFlex}
          edge="end"
        >
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
