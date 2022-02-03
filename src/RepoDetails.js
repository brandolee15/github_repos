function RepoDetails({ details, loading }) {
    if(loading) {
        return (
            <h1 className="loader">Loading...</h1>
        )
    }
    return (
        <div className="repo-details-container">
            <div className="details-row">
                <p>Name: {details.name}</p>
            </div>
            <div className="details-row">
                <p>Forks Count: {details.forks_count}</p>
            </div>
            <div className="details-row">
                <p>Stargazers: {details.stargazers_count}</p>
            </div>
            <div className="details-row">
                <p>Issues: {details.open_issues_count}</p>
            </div>
        </div>
    )
}

export default RepoDetails;