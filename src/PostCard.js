import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostCard extends Component {
  delete() {
    this.props.remove(this.props.post.id);
  }
  render() {
    let post = this.props.post;
    return (
      <div className="card w-75 py-3">
        <div className="d-flex align-items-center justify-content-around">
          <img
            src="https://i.pinimg.com/236x/79/97/a1/7997a1690e92349f32d858cdd56c95cd.jpg"
            width={"50px"}
            height={"50px"}
            className="rounded-circle"
            alt=""
          />
          <div className="">
            <h4>{post.title}</h4>
            <p>{post.desc.slice(0, 20)}</p>
          </div>
          <div className="d-flex gap-3">
            <Link to={`/post/${post.id}`} state={{ post }}>
              <button className="btn btn-primary btn-sm">Detail</button>
            </Link>
            <Link to={`/post/edit/${post.id}`} state={{ post: post }} >
              <button className="btn btn-success btn-sm">Edit</button>
            </Link>
            <button
              className="btn btn-danger btn-sm"
              onClick={this.delete.bind(this)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
