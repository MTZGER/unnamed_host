import React, { useEffect, useState } from 'react'
import "./Home.css"
import { db, auth, storage, provider } from "./firebase"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Input } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import Add from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import firebase from "firebase";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}
  
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: "black",
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Title(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = useState(false)
    const [openSignIn, setOpenSignIn] = useState(false)
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = auth
        .onAuthStateChanged((authUser) => {
            if(authUser) {
                // user logged in
                setUser(authUser);
            } else {
                // user logged out
                setUser(null);
            }
        })

        return () => {
            unsubscribe();
        }
    }, [user, username])

    const singUp = (e) => {
        e.preventDefault()

        auth
        .createUserWithEmailAndPassword(mail, password)
        .then((authUser) => {
            return authUser.user.updateProfile({
                displayName: username,
            })
        })
        .catch((error) => alert(error.message));
        setOpen(false);
    }

    //Login to a Account
    const singIn = (e) => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(mail, password)
        .catch((error) => alert(error.message))
        setOpenSignIn(false);
    }

    const haveAccount = (e) => {
        setOpen(false)
        setOpenSignIn(true)
    }
    const signInWithGoogle = () => {
        auth.signInWithPopup(provider)
        .catch((error) => alert(error.message))
        .then(() => {
            setOpenSignIn(false);
            setOpen(false);
        })
    }

    return (
        <div className="title">
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className="post__signUp">
                        <Input 
                            placeholder="username"
                            className="searchChats"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input 
                            placeholder="email"
                            className="searchChats"
                            type="text"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                        />
                        <Input 
                            placeholder="password"
                            className="searchChats"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button 
                            type="submit"
                            onClick={singUp}
                        >SIGN UP
                        </Button>
                        <Button
                            onClick={haveAccount}
                        >ALREADY HAVE AN ACCOUNT?
                        </Button>
                        <Button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</Button>
                    </form>
                </div>
            </Modal>

            <Modal
                open={openSignIn}
                onClose={() => setOpenSignIn(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className="post__signUp">
                        <Input 
                            placeholder="email"
                            className="searchChats"
                            type="text"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                        />
                        <Input 
                            placeholder="password"
                            className="searchChats"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button 
                            type="submit"
                            onClick={singIn}
                        >SIGN IN
                        </Button>
                        <Button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</Button>
                    </form>
                </div>
            </Modal>

            <div className="header">
                <h1>{ props.title }</h1>

                { props.children }

                <div>
                    {user ?  (
                        <div className="posts__loginContainer">
                            <Button>{ user.displayName }</Button>
                            <Button onClick={() => auth.signOut()}>LOGOUT</Button>
                        </div>
                    ) : (
                        <div className="posts__loginContainer">
                            <Button onClick={() => setOpen(true)}>SIGN UP</Button>
                            <Button onClick={() => setOpenSignIn(true)}>SIGN IN</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Title
