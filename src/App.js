import React from "react";
import Header from "./Components/Header/Header";
import Pages from "./Components/Pages/Pages";

class App extends React.Component {
  state = {
    page: "HOME",
  };
  handlePageChange = (newPage) => {
    this.setState({
      page: newPage,
    });
  };
  render() {
    let { page } = this.state;

    return (
      <div>
        <Header handlePageChange={this.handlePageChange} argument={page} />
        <Pages argument={page} />
      </div>
    );
  }
}

export default App;
