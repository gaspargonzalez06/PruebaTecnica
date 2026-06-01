


export const PostModal = ({ post, onClose }) => {

    if (!post) return null;

    return (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">{post.tittle}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>

                    <div className="modal-body">
                        <p><strong>Author:</strong> {post.author}</p>
                        <p><strong>Content:</strong> {post.body ? post.body : post.content}</p>
                        <hr />

                        <h6>Comments:</h6>
                        {(!post.comments || post.comments.length === 0) && <p>No comments available.</p>}
                        {(post.comments || []).map((comment, idx) => (
                            <div key={idx} className="border p-2 mb-2">
                                <div>
                                    <strong>{comment.name}</strong>
                                    <strong className="text-muted"> ({comment.email})</strong>
                                </div>
                                <p>{comment.body}</p>
                            </div>
                        ))}
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={onClose}>Close</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

