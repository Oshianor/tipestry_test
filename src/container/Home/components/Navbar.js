import React from "react"
import AppBar from "@material-ui/core/AppBar"
import makeStyles from "@material-ui/core/styles"
import { List, ListItemText, ListItem } from "@material-ui/core/"
// import tipcoin from "../../../assets/tipcoin.png"

// const NavbarStyles = makeStyles((theme) => {

// })

const navLinks = [
  { title: "Login", path: "/login" },
  { title: "Join us", path: "/join" },
]

const Navbar = () => {
  return (
    <AppBar position="static">
      <List component="nav" aria-labelledby="navigation bar">
        {navLinks.map(navLink => {
          return (
            <a href={navLink.path} key={navLink.title}>
              <ListItem>
                <ListItemText primary={navLink.title} />
              </ListItem>
            </a>
          )
        })}
      </List>
    </AppBar>
  )
}

export default Navbar
