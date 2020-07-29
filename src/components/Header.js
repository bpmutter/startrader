import React, {useState, useContext} from 'react'
import { Header, Heading, Link, Frame, withStyles } from "arwes";
import { FaUserAstronaut } from 'react-icons/fa'
import appContext from './Context';
import Button from 'arwes/lib/Button';
import darkSideTheme from '../theme/darkTheme';

const styles = (theme) => ({
  navBar: {
    display: "flex",
    padding: ".75rem 1.5rem",
    justifyContent: "space-between",
    alignItems: "center",
    [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
      padding: "1rem",
    },
  },
  navLinks: {
    display: "inline-block",
  },
  mainTitle: {
    fontSize: "3rem",
    display: "inline-block",
    margin: 0,
    paddingRight: "1rem",
    [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
      fontSize: "1.5rem",
    },
  },
  secondary: {
    padding: " 0 .5rem",
    fontSize: "1.5rem",
    fontWeight: 600,
    [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
      display: "none",
    },
  },
  icon: {
    fontSize: "1.5rem",
    position: "relative",
    top: 5,
  },
  dropdown: {
    position: "absolute",
    zIndex: 5,
    right: 15,
    top: 50,
    ["& ul"]: {
      listStyleType: "none",
      margin: 0,
      padding: "1rem",
    },
  },
  modal: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 4,
  },
  button: {
    width: 100,
    textAlign: "center",
    [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
      display: "none",
    },
  },
  mobileLoginSignup: {
    display: 'none',
    [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
      display: "inline-block",
    },
  },
});

const TopHeader = ({classes}) => {

    const {logout, user} = useContext(appContext);
    const [showDropdown, changeDropdown] = useState(false);
    const [showLoginSignupDropdown, changeLoginSignupDropdown] = useState(false)
    const toggleDropdown = e => {
      changeDropdown(!showDropdown);
    }
    const toggleMobileLoginDropdown = e =>{
      changeLoginSignupDropdown(!showLoginSignupDropdown);
    }
    const logoutUser = () => {
      logout();
    }
    return (
      <Header animate layer="header">
        <nav className={classes.navBar}>
          <div className={classes.navLinks}>
            <Link href="/">
              <Heading
                node="h2"
                style={{ fontSize: "1.75rem" }}
                className={`${classes.mainTitle} title-style`}
              >
                StarTrader
              </Heading>
            </Link>
            <Link href="/" 
              className={classes.secondary}
              theme={darkSideTheme}
              >
              Marketplace
            </Link>
            <Link href="/sell-ship" 
              className={classes.secondary}
            >
              Sell Ship
            </Link>
          </div>

          {!user ? (
            <div className={classes.buttonWrapper}>
              <Link href="/login">
                <Button className={classes.button}>Login</Button>
              </Link>
              <Link href="/signup" layer="primary">
                <Button
                  layer="primary"
                  className={classes.button}>Sign Up</Button>
              </Link>
              <div>
                <div className={classes.mobileLoginSignup}>
                  <Link>
                    <FaUserAstronaut
                      className={classes.icon}
                      onClick={toggleMobileLoginDropdown}
                    />
                  </Link>
                  {showLoginSignupDropdown && (
                    <>
                      <div className={classes.dropdown}>
                        <Frame
                          animate
                          level={3}
                          corners={4}
                          onClick={toggleMobileLoginDropdown}
                        >
                          <ul>
                            <li>
                              <Link href="/login">Login</Link>
                            </li>
                            <li>
                              <Link href="/signup">Sign Up</Link>
                            </li>
                          </ul>
                        </Frame>
                      </div>
                      <div
                        className={classes.modal}
                        onClick={toggleMobileLoginDropdown}
                      ></div>{" "}
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Link>
                <FaUserAstronaut
                  className={classes.icon}
                  onClick={toggleDropdown}
                />
              </Link>
              {showDropdown ? (
                <>
                  <div className={classes.dropdown}>
                    <Frame
                      animate
                      level={3}
                      corners={4}
                      onClick={toggleDropdown}
                    >
                      <ul>
                        <li>
                          <Link href="/profile">Profile</Link>
                        </li>
                        <li>
                          <Link href="/sell-ship">Sell Ship</Link>
                        </li>
                        <li>
                          <Link href="/logout" onClick={logoutUser}>
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </Frame>
                  </div>
                  <div className={classes.modal} onClick={toggleDropdown}></div>
                </>
              ) : (
                ""
              )}
            </div>
          )}
        </nav>
      </Header>
    );
}

export default withStyles(styles)(TopHeader);