import { useState, useEffect } from 'react';

import axios from 'axios';

const useTable = (callback) => {
  const [posts, setPosts] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  //Get current posts...
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const paginatePosts = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return {
    posts,
    currentPage,
    postsPerPage,
    currentPosts,
    paginatePosts,
  };
};
export default useTable;
