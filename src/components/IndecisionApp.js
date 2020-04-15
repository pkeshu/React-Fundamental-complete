import React, { Component } from "react";
import AddOptions from "./AddOption";
import Header from "./Header";
import Options from "./Options";
import Action from "./Action";
import OptionModal from "./OptionModal";

class IndecisionApp extends Component {
  state = {
    subtitle: "Put your life in the hands of computer",
    options: [],
    selectedOption: undefined,
  };
  //   constructor(props) {
  //     super(props);
  //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //     this.handlePick = this.handlePick.bind(this);
  //     this.handleAddOption = this.handleAddOption.bind(this);
  //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
  //   }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      console.log(e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      //   console.log("saving data!");
    }
  }
  componentWillUnmount() {}

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option,
    }));
    // alert(option);
  };
  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exist";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
    // console.log(option);
  };

  handleSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };

  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteoptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOptions handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleSelectedOption={this.handleSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
