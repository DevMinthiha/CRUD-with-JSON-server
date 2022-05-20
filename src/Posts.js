import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

export default class Post extends Component {
  remove(id) {
    this.props.postRemove(id);
  }
  render() {
    return (
      <div className="w-full d-flex flex-column align-items-center gap-3 justify-content-center">
        <Link to="/add">
          <button className="btn btn-primary my-3">Add New Post </button>
        </Link>
        {this.props.posts.map((post) => (
          <PostCard key={post.id} post={post} remove={this.remove.bind(this)} />
        ))}
      </div>
    );
  }
}
