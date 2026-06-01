

export const Filters = ({ authors, onSearch, onAuthorSelect }) => {



    return (

        <div className="mb-4">
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Search by title..."
                onChange={(e) => onSearch(e.target.value)}
            />  
            <select className="form-select" onChange={(e) => onAuthorSelect(e.target.value)}>
                <option value="">All Authors</option>
                {authors.map((author, idx) => (
                    <option key={idx} value={author}>{author}</option>
                ))}
            </select>
        </div>



    )

}