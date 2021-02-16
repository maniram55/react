import React, { Component } from "react";
import './App.css';

export default class TagList extends Component {

        handleClick = (currentItem) => {
          const items = this.props.items.filter(item => item.value !== currentItem.value);
          this.props.onChildSelectMember(items,currentItem); 
          }

        renderMemberList = () => {
        const listItems = this.props.items.map((currentItem) => {
           return <div>
           <div className="content-wrapper">
           <div className="list" onClick={() => this.handleClick(currentItem)} >
               <img src={currentItem.avatar} alt= {currentItem.name}  width="35" height="35"></img>
              <span className="item-name-cont"> 
              {currentItem.name}
             </span>
             <span className="item-mail-cont"> 
              {currentItem.email}
             </span>
              </div>
              </div>
              </div>
          })
        return listItems;
      }

  render(){
  return  (
        <div className="cont-wrapper"> 
           <div>{this.renderMemberList()}</div>
          </div>
        );
   
  }
}