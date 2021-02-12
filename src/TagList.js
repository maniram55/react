import React, { Component } from "react";
import './App.css';

const memberList = [
    {
        "value": 1,
        "name": "Justinian Hattersley",
        "avatar": "https://i.pravatar.cc/80?img=1",
        "email": "jhattersley0@ucsd.edu"
    },
    {
        "value": 2,
        "name": "Antons Esson",
        "avatar": "https://i.pravatar.cc/80?img=2",
        "email": "aesson1@ning.com"
    },
    {
        "value": 3,
        "name": "Ardeen Batisse",
        "avatar": "https://i.pravatar.cc/80?img=3",
        "email": "abatisse2@nih.gov"
    },
    {
        "value": 4,
        "name": "Graeme Yellowley",
        "avatar": "https://i.pravatar.cc/80?img=4",
        "email": "gyellowley3@behance.net"
    },
    {
        "value": 5,
        "name": "Dido Wilford",
        "avatar": "https://i.pravatar.cc/80?img=5",
        "email": "dwilford4@jugem.jp"
    },
    {
        "value": 6,
        "name": "Celesta Orwin",
        "avatar": "https://i.pravatar.cc/80?img=6",
        "email": "corwin5@meetup.com"
    },
    {
        "value": 7,
        "name": "Sally Main",
        "avatar": "https://i.pravatar.cc/80?img=7",
        "email": "smain6@techcrunch.com"
    },
    {
        "value": 8,
        "name": "Grethel Haysman",
        "avatar": "https://i.pravatar.cc/80?img=8",
        "email": "ghaysman7@mashable.com"
    },
    {
        "value": 9,
        "name": "Marvin Mandrake",
        "avatar": "https://i.pravatar.cc/80?img=9",
        "email": "mmandrake8@sourceforge.net"
    },
    {
        "value": 10,
        "name": "Corrie Tidey",
        "avatar": "https://i.pravatar.cc/80?img=10",
        "email": "ctidey9@youtube.com"
    },
    {
        "value": 11,
        "name": "foo",
        "avatar": "https://i.pravatar.cc/80?img=11",
        "email": "foo@bar.com"
    },
    {
        "value": 12,
        "name": "foo",
        "avatar": "https://i.pravatar.cc/80?img=12",
        "email": "foo.aaa@foo.com"
    },
];
export default class TagList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: memberList
          };
        }

        handleClick = (currentItem,index) =>{
          var array = [...this.state.items]; // make a separate copy of the array
               array.forEach((data) => {
               if(data.value == currentItem.value){
                var index = array.indexOf(data)
                    array.splice(index, 1);
                    this.setState({items: array});
               }
             });    
             this.props.onChildSelectMember(currentItem); 
          }

        renderMemberList = () => {
        const listItems = this.state.items.map((currentItem,index) => {
           return <div>
           <div className="content-wrapper">
           <div className="list" onClick={() => this.handleClick(currentItem,index)} >
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