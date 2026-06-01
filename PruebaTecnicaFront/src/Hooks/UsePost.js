





import { useState, useEffect } from 'react';
import {api} from '../Services/api';    


export const usePost = () => {

const [post, setPost] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);   
const [retryCount, setRetryCount] = useState(0);
const [currentPage , setCurrentPage] = useState(1);
const [filteredPosts, setFilteredPosts] = useState([]); 
const [searchTerm, setSearchTerm] = useState('');   
const [selectedAuthor, setSelectedAuthor] = useState('');   
const [totalPages, setTotalPages] = useState(1);

useEffect(() => {

    const fetchPost = async () => {
        try {
            setLoading(true);   
            setError(null); 

            const data = await api.getPostWhitAllData();
            const posts = Array.isArray(data) ? data : (data.posts || []);
            setPost(posts);
            setFilteredPosts(posts); 
            setTotalPages(Math.ceil(posts.length / 10));
        }
        catch (error) {
            console.error('Error fetching post:', error);
            setError(error.message || 'Failed to fetch post');
        }
        finally {
            setLoading(false);  
        };
    };

    fetchPost();

    }, [] );

    useEffect (() => {

        let filtered =[...post];


        if (searchTerm) {
            filtered = filtered.filter(p => p.tittle.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        if (selectedAuthor) {
            filtered = filtered.filter(p => p.author.toLowerCase() === selectedAuthor.toLowerCase());
        }


        setFilteredPosts(filtered); 

        setCurrentPage(1);  

        }, [searchTerm, selectedAuthor, post]);

const uniqueAuthors = post ? [...new Set(post.map(p => p.author))] : [];

return {
    post:filteredPosts,
    currentPage,
    setCurrentPage,
    totalPages,
    selectedAuthor,
    setSelectedAuthor,
    uniqueAuthors,
    loading,
    error, 
    filteredPosts,
    searchTerm,
    setSearchTerm,  

    };


};