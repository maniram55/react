import './App.css';
import TagList from './TagList';
import React, { Component } from "react";

//move constant here
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
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isTagFocused: false,
      items: memberList,
      selectedItems: []
      };
    }

    onParantSelectMember = (items,slectedMember) => {
      this.setState({
        selectedItems: this.state.selectedItems.concat(slectedMember),
        items: items
      })
    this.toggleFocus();
  }

    toggleFocus = () => {
    const isTagFocused = !this.state.isTagFocused 
    this.setState({ isTagFocused });
    }

    renderSelectedMembers = () => {
      const listItems = this.state.selectedItems.map((currentItem) => {
         return <div>
         <div className="">
         <div className="" >
             <img src={currentItem.avatar} alt= {currentItem.name}  width="15" height="15"></img>
            <span className=""> 
            {currentItem.name}
           </span>
            </div>
            </div>
            </div>
        })
      return listItems;
    }


render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Tagify Elements</h1>
      </header>

      <div className="input-container">
      <div className='some_class_name' onFocus={this.toggleFocus} >
      <input name='input' placeholder='Add Some Tags....'
      onFocus={this.toggleFocus}/>
      </div>
    
      <div>{this.renderSelectedMembers()}</div>
      </div>
      {this.state.isTagFocused && this.state.items.length ? <TagList onChildSelectMember = {this.onParantSelectMember} {...this.state}/> : null}
    </div>
  );
}
}

