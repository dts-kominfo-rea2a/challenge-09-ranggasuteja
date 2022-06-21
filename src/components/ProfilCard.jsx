import React from "react";

class ProfilCard extends React.Component{

    render(){
       return <img className="avatar" src={this.props.photo} alt={this.props.avatar}></img>
    }
}

export default ProfilCard;