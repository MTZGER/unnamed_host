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
import Title from './Title';

// branch: new_feature
// 2

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

function Home() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [chats, setChats] = useState([])
    const [searchedChats, setSearchedChats] = useState("")
    const [open, setOpen] = useState(false)
    const [openSignIn, setOpenSignIn] = useState(false)
    const [createNew, setCreateNew] = useState(false)
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)

    const [chatName, setChatName] = useState("")
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)

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

    useEffect(() => {
        reloadPage()
    }, [])
    
    //Create Account
    // const singUp = (e) => {
    //     e.preventDefault()

    //     auth
    //     .createUserWithEmailAndPassword(mail, password)
    //     .then((authUser) => {
    //         return authUser.user.updateProfile({
    //             displayName: username,
    //         })
    //     })
    //     .catch((error) => alert(error.message));
    //     setOpen(false);
    // }

    // //Login to a Account
    // const singIn = (e) => {
    //     e.preventDefault();

    //     auth
    //     .signInWithEmailAndPassword(mail, password)
    //     .catch((error) => alert(error.message))
    //     setOpenSignIn(false);
    // }

    // const haveAccount = (e) => {
    //     setOpen(false)
    //     setOpenSignIn(true)
    // }
    // const signInWithGoogle = () => {
    //     auth.signInWithPopup(provider)
    //     .catch((error) => alert(error.message))
    // }

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = (e) => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress)
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection("chats").add({
                        creator: user.displayName,
                        name: chatName,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        chatIcon: url
                    })

                    setProgress(0);
                    setChatName("");
                    setImage(null);
                })
            }
        )
    }

    function reloadPage() {
        var searchedChats = document.querySelector("#searchChats").value;
        db.collection("chats").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setChats(snapshot.docs.map(doc => ({ id: doc.id, chat: doc.data() })).filter(doc => (
                doc.chat.name.toLowerCase().search(searchedChats.toLowerCase()) !== -1
            )));
        })
    }

    return (
        <div className="home">
            <Title title="UNNAMED">
                <Input className="searchChats" id="searchChats" placeholder="Search Chat" onChange={ e => {
                    reloadPage()
                } } />
            </Title>

            {/* <Modal
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

            <Modal
                open={createNew}
                onClose={() => setCreateNew(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <div className="post__signUp">
                        <Input 
                            placeholder="Chat Name"
                            className="searchChats"
                            value={chatName}
                            onChange={(e) => setChatName(e.target.value)}
                        />
                        <div className="icon">
                            <h3>ICON:</h3>
                            <input 
                                type="file"
                                className="searchChats"
                                onChange={handleChange}
                            />
                        </div>
                        <Button 
                            onClick={handleUpload}
                        >Create
                        </Button>
                    </div>
                </div>
            </Modal> */}

            {/* <div className="header">
                <h1>UNNAMED</h1>

                <Input className="searchChats" id="searchChats" placeholder="Search Chat" onChange={ e => {
                    reloadPage()
                } } />

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
            </div> */}
            <Modal
                open={createNew}
                onClose={() => setCreateNew(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <div className="post__signUp">
                        <Input 
                            placeholder="Chat Name"
                            className="searchChats"
                            value={chatName}
                            onChange={(e) => setChatName(e.target.value)}
                        />
                        <div className="icon">
                            <h3>ICON:</h3>
                            <input 
                                type="file"
                                className="searchChats"
                                onChange={handleChange}
                            />
                        </div>
                        <Button 
                            onClick={handleUpload}
                        >Create
                        </Button>
                    </div>
                </div>
            </Modal>

            <div className="chats">
                {
                    user ? (
                        <div className="chat" onClick={() => setCreateNew(true)}>
                            <div className="createNewChat">
                                <AddIcon />
                            </div>
                        </div>
                    ) : (
                        <div className="chat" onClick={() => setOpenSignIn(true)}>
                            <div className="loginPopUp">
                                <h2 className="loginPopUp">LOGIN</h2>
                            </div>
                        </div>
                    )
                }
                
                {/* eventuell: display none, if searchChats is not nothing */}
                <Link to={`/unnamed_host/chat/public`} style={{textDecoration: "none"}}>
                    <div className="chat">
                        <h2>PUBLIC</h2>
                        <img alt="icon" src="https://webstockreview.net/images/family-icon-png-1.png" width="300"/>
                        <h4>A UNNAMED ORIGINAL</h4>
                    </div>
                </Link>

                <Link to={`/unnamed_host/chat/news`} style={{textDecoration: "none"}}>              
                    <div className="chat">
                        <h2>NEWS</h2>
                        <img alt="icon" src="https://th.bing.com/th/id/Rd48a28f46aa28fb834f41ae313eb190e?rik=%2f6c1CwY7Oz14Ow&riu=http%3a%2f%2fclipartmag.com%2fimages%2fnewspaper-png-8.png&ehk=JuvOKT0xsHpr%2biU%2bEvM4Idmdo33CwpIx1%2b4X0e4Lh54%3d&risl=&pid=ImgRaw" width="300"/>
                        <h4>A UNNAMED ORIGINAL</h4>
                    </div>
                </Link>

                {
                    chats.map(({id, chat}) => (
                        <Link to={`/unnamed_host/chat/${id}`} style={{textDecoration: "none"}}>
                            <div className="chat">
                                <h2>{chat.name}</h2>
                                <img alt="icon" src={chat.chatIcon} width="300"/>
                                <h4>{chat.creator}</h4>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
