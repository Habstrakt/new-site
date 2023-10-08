import React, { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "../types.ts";
import Spinner from "../components/Spinner.tsx";
import { Link } from "react-router-dom";

const Blog: React.FC = () => {
  const postsUrl = "https://63b30db9ea89e3e3db3cb777.mockapi.io/posts";

  const [posts, setPosts] = useState<Array<Post>>([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get<Array<Post>>(postsUrl);
      const allPosts = response.data;
      const reversedPosts = allPosts.reverse();

      setPosts(reversedPosts);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [setPosts]);

  if (!posts.length) {
    return <Spinner />;
  }

  return (
    <main>
      <div className="blog-container">
        {posts.map((post) => (
          <article key={post.id.toString()} className="blog-post">
            <h3 className="blog-title">
              <Link className="blog-post-link" to={`/blog/post/${post.id}`}>
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
        ))}
      </div>
    </main>
  );
};

export default Blog;
