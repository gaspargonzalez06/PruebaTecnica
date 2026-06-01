import React, {useState} from 'react';

import { usePost } from './Hooks/UsePost';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Pagination } from './Components/Pagination';
import { Filters } from './Components/Filters';
import {PostCard} from './Components/PostCard';
import{PostModal} from './Components/PostModal';


function App() {

  const { post, loading, error, currentPage, totalPages, filteredPosts, uniqueAuthors, setSearchTerm, setSelectedAuthor, setCurrentPage } = usePost();
  const [selectedPost, setSelectedPost] = useState(null);

  const handleViewDetail = (post) => {
    setSelectedPost(post);
  };
  
  const handleCloseModal = () => {
    setSelectedPost(null);
  };  
  const totalPosts = filteredPosts.length;

  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  if(loading) {
    return <div className="container mt-4"><h2>Loading...</h2></div>;
  } 


  return (
    <div className="container mt-4">
      <h1 className="mb-4">Posts Blog</h1>
      <p className="mb-4">Total Posts: {totalPosts}</p>

      <Filters authors={uniqueAuthors} onSearch={setSearchTerm} onAuthorSelect={setSelectedAuthor} />     

      <div className="row"> 
        {currentPosts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <PostCard post={post} onViewDetail={handleViewDetail} />
          </div>
        ))}
      </div>
      
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

      <PostModal post={selectedPost} onClose={handleCloseModal} />
    </div>
  );  
}

export default App; 