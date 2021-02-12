import './App.css';
import TagList from './TagList';
import React, { Component } from "react";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isTagFocused: false,
      selectedItems: []
      };
    }

    onParantSelectMember = (slectedMember) => {
      this.setState({
        selectedItems: this.state.selectedItems.concat(slectedMember)
      })
    this.toggleFocus();
  }

    toggleFocus = () => {
    const isTagFocused = !this.state.isTagFocused 
    this.setState({ isTagFocused });
    }

    selectedMembers = () => {
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
      <div>{this.selectedMembers()}</div>
      <input name='input' className='some_class_name' placeholder='Add Some Tags....'
      onFocus={this.toggleFocus}/> 
      </div>
      {this.state.isTagFocused ? <TagList onChildSelectMember= {this.onParantSelectMember}/> : null}
    </div>
  );
}
}

