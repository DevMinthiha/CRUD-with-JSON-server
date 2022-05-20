import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

class PostDetail extends Component {
  render() {
    let post = this.props.state.state.post;
    return (
      <div>
        <Link to="/"><button className="btn btn-danger btn-sm my-3">back</button></Link> 
        <br />
        <img
          src="https://i.pinimg.com/236x/79/97/a1/7997a1690e92349f32d858cdd56c95cd.jpg"
          alt=""
          className="rounded-circle d-block mx-auto mb-5"
        />
        <h2 className="my-3">{post.title}</h2>
        <p>{post.desc}</p>
      </div>
    );
  }
}

export default (props) => {
  let state = useLocation();
  return <PostDetail {...props} state={state} />
}
