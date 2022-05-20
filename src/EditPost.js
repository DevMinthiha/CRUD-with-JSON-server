import React, { Component } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

class EditPost extends Component {
  constructor(props) {
    super(props);
    const post = this.props.state.state.post;
    this.state = {
      id: post.id,
      title: post.title,
      desc: post.desc,
    };
  }
  updatePost(e) {
    e.preventDefault();
    this.props.updatePostHandler(this.state);
    this.props.navigate("/");
  }
  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <Link to="/">
          <button className="btn btn-outline-danger my-3">Back To Posts</button>
        </Link>
        <form
          onSubmit={this.updatePost.bind(this)}
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
          <button type="submit" className="btn btn-success">
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default (props) => {
  const navigate = useNavigate();
  const state = useLocation();
  return <EditPost {...props} navigate={navigate} state={state} />;
};
