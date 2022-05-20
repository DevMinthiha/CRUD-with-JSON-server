import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

class AddPost extends Component {
  state = {
    title: "",
    desc: "",
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.addNewPost({ id: uuid(), ...this.state });
    this.setState({ title: "", desc: "" });
    this.props.navigate("/");
  };
  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <Link to="/">
          <button className="btn btn-outline-danger my-3">Back To Posts</button>
        </Link>
        <form
          onSubmit={this.onSubmitHandler}
          className="card w-50 mb-5 mx-auto p-4"
        >
          <h5 className="mb-2 text-primary">Create New Post</h5>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Post Title"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Post Description"
            value={this.state.desc}
            onChange={(e) => this.setState({ desc: e.target.value })}
          />
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default (props) => {
  const navigate = useNavigate();
  return <AddPost {...props} navigate={navigate} />
}
