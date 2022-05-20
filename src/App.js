import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import PostDetail from "./PostDetail";
import Posts from "./Posts";

const App = () => {
  const [posts, setPosts] = useState([]);
  const END_POINT = "http://localhost:9000/posts";

  const addNewPost = async (post) => {
    await fetch(END_POINT, {
      method: "POST",
      body: JSON.stringify({
        title: post.title,
        desc: post.desc,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    setPosts([post, ...posts]);
  };

  const fetchData = async () => {
    const response = await fetch(END_POINT);
    const posts = await response.json();
    setPosts(posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const postRemove = async (id) => {
    await fetch(END_POINT + "/" + id, {
      method: "DELETE",
    });
    setPosts(posts.filter((post) => post.id !== id));
  };

  const updatePostHandler = async (updatePost) => {
    await fetch(END_POINT + "/" + updatePost.id, {
      method: "PATCH",
      body: JSON.stringify(updatePost),
      headers: {
        "content-type": "application/json",
      },
    });
    setPosts(
      posts.map((post) => (post.id === updatePost.id ? updatePost : post))
    );
  };

  return (
    <div className="container">
      <h1 className="text-center text-primary mt-5">Posts</h1>
      <Routes>
        <Route
          path="/"
          element={<Posts posts={posts} postRemove={postRemove} />}
        />
        <Route path="add" element={<AddPost addNewPost={addNewPost} />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/post/edit/:id" element={<EditPost updatePostHandler={updatePostHandler} />}  />
      </Routes>
    </div>
  );
};

export default App;
