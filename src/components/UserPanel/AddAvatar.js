// import React, { Component } from "react";
// import {
//   Paper,
//   Grid,
//   Avatar,
//   Typography,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Button,
//   Input
// } from "@material-ui/core";
// import styles from "./UserPanel.module.css";
// import placeholder from "../ee11528c2192ed4402d96c564d38d05f.svg";
// import firebase from "firebase";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// class AddAvatar extends Component {
//   state = {
//     file: null,
//     url: "",
//     ref: null,
//     user: null,
//     open: false
//   };

//   componentDidMount() {
//     const ref = firebase.auth().onAuthStateChanged(user => {
//       this.setState({ user });
//       this.fetchAvatarUrl();
//     });

//     this.setState({ ref });
//   }

//   componentWillUnmount() {
//     this.state.ref();
//   }

//   handleOnChange = event => {
//     this.setState({
//       file: event.target.files[0]
//     });
//   };

//   handleOnClick = () => {
//     firebase
//       .storage()
//       .ref(`avatars/${this.state.user.uid}`)
//       .put(this.state.file)
//       .then(() => {
//         this.fetchAvatarUrl();
//       });
//   };
//   handleOpen = () => {
//     this.setState({
//       open: true
//     });
//   };
//   handleClose = () => {
//     this.setState({
//       open: false
//     });
//   };

//   fetchAvatarUrl = () => {
//     firebase
//       .storage()
//       .ref(`avatars/${this.state.user.uid}`)
//       .getDownloadURL()
//       .then(url => {
//         this.setState({
//           url
//         });
//       });
//   };

//   removeAvatar = () => {
//     this.setState({
//       url: ""
//     });
//   };

//   render() {
//     return (
//       this.state.user && (
//             <div className={styles.avatarContainer}>
//               <div className={styles.button}> 
//                 {this.state.url ? (
//                   <Button onClick={this.handleOpen}> Zmień zdjęcie</Button>
//                 ) : (
//                   <Button onClick={this.handleOpen}> Dodaj zdjęcie</Button>
//                 )}
//                 <Dialog
//                   open={this.state.open}
//                   keepMounted
//                   onClose={this.handleClose}
//                   aria-labelledby="alert-dialog-slide-title"
//                   aria-describedby="alert-dialog-slide-description"
//                 >
//                   <DialogTitle>Dodaj zdjęcie</DialogTitle>
//                   <DialogContent>
//                     <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
//                     <Input type="file" onChange={this.handleOnChange} />

//                     <Button onClick={this.handleOnClick}>Dodaj</Button>
//                   </DialogContent>
//                   <DialogTitle>Wybierz avatar</DialogTitle>
//                   <DialogContent className={styles.avatarsContainer}>
//                     <Avatar
//                       src="images/avatars/avatar5.png"
//                       className={styles.avatars}
//                     />
//                     <img
//                       src="images/avatars/avatar6.png"
//                       className={styles.avatars}
//                     />
//                     <img
//                       src="images/avatars/avatar7.png"
//                       className={styles.avatars}
//                     />
//                     <img
//                       src="images/avatars/avatar8.png"
//                       className={styles.avatars}
//                     />
//                     <img
//                       src="images/avatars/avatar9.png"
//                       className={styles.avatars}
//                     />
//                     <img
//                       src="images/avatars/avatar10.png"
//                       className={styles.avatars}
//                     />
//                     <Button onClick={this.handleOnClick}>Dodaj</Button>
//                   </DialogContent>
//                   <div>
//                     <DialogActions style = {{marginTop:'20px'}}>
//                       <Button onClick={this.removeAvatar} style={{color:'red'}}>Usuń zdjęcie</Button>

//                       <Button onClick={this.handleClose} style={{color:'black'}}>
//                         Wyjdź
//                       </Button>
//                     </DialogActions>
//                   </div>
//                 </Dialog>
//               </div>
//               <Avatar
//                 alt="avatar"
//                 src={this.state.url || placeholder}
//                 className={styles.avatar}
//                 style={{ height: "150px", width: "150px" }}
//                 onChange={this.handleOnChange}
//               />

//             </div>
         
//       )
//     );
//   }
// }

// export default AddAvatar;
