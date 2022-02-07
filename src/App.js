import React,{ Component }  from "react";
import Todoitems from "./Components/Todoitems/Todoitem";
import Additem from "./Components/Additems/Additem";

class App extends Component{
  state = {
    items:[
      {id:1,name:"Salma",age:28},
      {id:2,name:"Mohamed",age:24},
      {id:3,name:"Yoousef",age:26}
    ]
  }
  deleteItem = (id) => {
  let items = this.state.items.filter(item =>{
    return item.id !== id ; 
  })
  this.setState({items})
  }
  additem = (item) => {
    item.id = Math.random()
    let items = this.state.items;
    items.push(item);
    this.setState({items})

  }

  render(){
    return(
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <Todoitems items={this.state.items} deleteItem={this.deleteItem}/>
        <Additem additem={this.additem}/>
      </div>
      
    )
  }
}
export default App;