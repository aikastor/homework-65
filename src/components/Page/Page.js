import React, {Component} from 'react';
import axiosApi from "../../axios-api";
import Spinner from "../UI/Spinner/Spinner";

class Page extends Component {
  state = {
    page: null,
    loading: false,
  };

  getCurrentPostLink = () => {
    const category = this.props.match.params.category;
    return `/pages/${category}.json`;
  };

  getData = async () => {
    this.setState({loading: true});
    const response = await axiosApi.get(this.getCurrentPostLink());
    this.setState({page: response.data, loading: false})
  };

  async componentDidMount() {
    this.getData();
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      this.getData();
    }
  }

  render() {

    return (
        !this.state.loading ? (
            this.state.page && (
                <div>
                  <h1>{this.state.page.title}</h1>
                  <p>{this.state.page.description}</p>
                </div>
            ))
            :
            <Spinner/>
    )
  }
}
export default Page;