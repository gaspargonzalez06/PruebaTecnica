



export const PostCard = ({ post,onViewDetail }) => {

    return (


<div className="card h-100 shadow-sm">
    <div className="card-body">
        <h5 className="card-title">{post.tittle}</h5>

        <h6 className="card-subtitle mb-2 text-muted">By {post.author}</h6>

        <p className="card-text">
            {post.body ? post.body.substring(0, 100) + '...' : post.content.substring(0, 100) + '...'}</p>
    </div>

    <button className="btn btn-primary" onClick={() => onViewDetail(post)}>View Details</button>
</div>

    );

}