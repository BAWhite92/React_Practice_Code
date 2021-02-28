class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    //need to bind 'this' to the toggleVisibility method (function belonging to MyComponent class)
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility(){
    this.setState(state =>{
      if(state.visibility === true){
        return{visibility : false};
      } else{
        return{visibility: true};
      }
    })};
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
