import React, {Component} from 'react';
import axiosApi from "../../axios-api";

class Page extends Component {
  state = {
    page: null,
  };

  getCurrentPostLink = () => {

    const category = this.props.match.params.category;

    return `/pages/${category}.json`;
  };

  async componentDidMount (prevProps) {
      const response = await axiosApi.get(this.getCurrentPostLink());
      this.setState({page: response.data})
  };

  render() {
    return this.state.page && (
        <div>
          <h1>{this.state.page.title}</h1>
          <p>{this.state.page.description}</p>
        </div>
    );
  }
}

export default Page;