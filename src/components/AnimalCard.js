import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import ToggleHeart from './ToggleHeart';


class AnimalCard  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExtended: false
    };
  }

  clickedButtonHandle = () => {
    this.setState({
      showExtended: this.props.card.descriptions.descriptionExtended
    });
  };

  clickedLikeButtonHandle = () => {
    this.setState({
    });
  };
render () {
return (
    <>
    <div className="animal-card">
      <div className="animal-card card">
        <img
          src={this.props.card.imageURL}
          // alt=""class
        />
        <div>
          <h2>{this.props.card.data.name}</h2>
          <h3>{this.props.card.data.age}</h3>
          <h4>{this.props.card.descriptions.descriptionBasic}</h4>
          <button  className = "animal-card-description-extended-button" onClick={this.clickedButtonHandle}>Pokaż więcej</button>
              {this.state.showExtended}
{/* 
          <p className="animal-card-description-extended" style={{ fontSize: "14px" }}>
            {this.props.card.descriptionExtended} */}
          {/* </p> */}
        </div>
      </div>
    </div>
    <ToggleHeart />
    </>
)
}
}

export default AnimalCard;

// class BookCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showExtended: false
//       // color: black,
//     };
//   }

//   clickedButtonHandle = () => {
//     this.setState({
//       showExtended: this.props.card.descriptionExtended
//     });
//   };

//   clickedLikeButtonHandle = () => {
//     this.setState({
//       // color: red,
//     });
//   };

//   render() {
//     return (
//       <>
//         <div className="book-card">
//           <div className="book-card card">
//             <img src={this.props.card.imageUrl} alt="" class />
//             <div>
//               <h2>{this.props.card.title}</h2>
//               <h3>{this.props.card.author}</h3>
//               <h4>{this.props.card.publisher}</h4>
//               <p className="book-card-description" style={{ fontSize: "14px" }}>
//                 {this.props.card.description}
//               </p>
//             </div>
//             <div className="description-extended">
//               <button onClick={this.clickedButtonHandle}>Pokaż więcej</button>
//               {this.state.showExtended}
//             </div>
//             {/* <button onClick={this.clickedButtonHandle}>Pokaż mniej</button>
//             {this.state.showExtended} */}
//             <div className="card-footer">
//               <div style={{ overflow: "hidden" }}>
//                 <div style={{ width: "99px" }}>
//                   <div style={{ width: "110px" }}>
//                     <Ranking />
//                     {/* <i className="fa fa-star fa-lg"></i>
//                     <i className="fa fa-star fa-lg"></i>
//                     <i className="fa fa-star fa-lg"></i>
//                     <i className="fa fa-star fa-lg"></i>
//                     <i className="fa fa-star-o fa-lg"></i> */}
//                   </div>
//                 </div>
//               </div>
//               <div className="card-footer-badge">{this.props.card.rating}</div>
//               {/* < i className="fa fa-heart" onClick = {this.clickedLikeButtonHandle}></i>
//              {this.state.color} */}
//               <ToggleHeart key={this.props.card.id} />
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default BookCard;
