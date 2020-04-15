class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleRestBtn = this.handleRestBtn.bind(this);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    try {
      const stringCount = localStorage.getItem("count");
      const count=parseInt(stringCount,10);
      if(!isNaN(count)){
        this.setState(() => ({ count: count}));
      }
    } catch (e) {
      console.log(e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count, 10 !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
    // this.state.count = this.state.count + 1;
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
    // this.state.count = this.state.count - 1;
  }

  handleRestBtn() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
    // console.log("HandleReset");
    // this.setState({
    //   count: 0,
    // });

    // this.setState({
    //   count: this.state.count + 1,
    // });
  }

  render() {
    return (
      <div>
        <h1>Count::{this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleRestBtn}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;

// const minusOne = () => {
//   count--;
//   //   if (count > 0) renderCounterApp();
//   renderCounterApp();
//   console.log("minus one");
// };

// const addOne = () => {
//   count++;
//   renderCounterApp();
//   console.log("add one");
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
//   console.log("reset");
// };

// const rootApp = document.getElementById("app");

// const renderCounterApp = () => {
//   const templateThree = (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <br />
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateThree, rootApp);
// };

// renderCounterApp();
