import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Post } from "../types.ts";
import axios from "axios";
import Spinner from "../components/Spinner.tsx";

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<Post | null>(null);

  const fetchPost = async () => {
    if (!id) return;

    try {
      const postUrl = `https://63b30db9ea89e3e3db3cb777.mockapi.io/posts/${id}`;

      const response = await axios.get<Post>(postUrl);

      const postData: Post = response.data;

      setPost(postData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (post === null) {
    return <Spinner />;
  }

  return (
    <main>
      <div className="blog-container">
        <article className="blog-post">
          <h3 className="blog-title">
            <Link className="blog-post-link" to="/blog">
              {post.title}
            </Link>
          </h3>
          <div className="blog-img">
            {/*<img*/}
            {/*  src="https://dodopizza-a.akamaihd.net/static/Img/Products/f8bcc0d18f5a4817a720a159f0f8c37c_138x138.jpeg"*/}
            {/*  alt="Blog post thumbnail"*/}
            {/*/>*/}
          </div>
          <p>{post.body}</p>
          <hr />
        </article>
      </div>
    </main>
  );
};

export default Post;
