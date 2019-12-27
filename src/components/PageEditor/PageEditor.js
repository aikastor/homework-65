import React, {Component} from 'react';
import axiosApi from "../../axios-api";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import Spinner from "../UI/Spinner/Spinner";
const categories = ['about', 'contacts', 'info', 'photos', 'videos'];

class PageEditor extends Component {
  state = {
    loading: false,
    title: '',
    description: '',
    currentCategory: categories[0],
  };
  inputChangeHandler = async (e)=> {
    const val = e.target.value;
    this.setState({loading: true});

    const response = await axiosApi.get(`/pages/${val}.json`);
    this.setState({title: response.data.title, description: response.data.description, currentCategory: val, loading: false});
  };
  formSubmitHandler = async (e)=> {
    e.preventDefault();
    const data = {title: this.state.title, description: this.state.description};
    const  category = this.state.currentCategory;
    await axiosApi.patch(`/pages/${category}.json`,data);
    this.props.history.push(`/pages/${category}`);
  };
  textChangeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  async componentDidMount () {

    this.setState({loading: true});
    const response = await axiosApi.get(`/pages/${this.state.currentCategory}.json`);
    this.setState({title: response.data.title, description: response.data.description, loading: false});
  };

  render() {
    let form = (<Form onSubmit={this.formSubmitHandler}>
      <FormGroup>
        <Label for="category">Select category</Label>
        <Input type="select" name="category" id="category" value={this.state.currentCategory}
               onChange={this.inputChangeHandler}>
          {categories.map(c=>(<option key={c} value={c}>{c}</option>))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input type="text" name="title" id="title" placeholder="Enter Post Title"
               value={this.state.title}
               onChange={this.textChangeHandler}/>
      </FormGroup>
      <FormGroup>
        <Label for="post">Page content</Label>
        <Input type="textarea" name='description' id='text' placeholder="Enter Post Text"
               value={this.state.description}
               onChange={this.textChangeHandler}/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>);

    let data = this.state.title && this.state.description && this.state.currentCategory;

    return (
        !this.state.loading ? (
            data && (
                form
            ))
            :
            <Spinner/>
    );
  }
}

export default PageEditor;