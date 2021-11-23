import "./Home.css";
import { useState } from "react";
import { getRepositories } from "../../services/repo.service";
import Repositoryframe from "../../component/RepositoryFrame/RepositoryFrame";
const Home = () => {
  const [input, setInput] = useState("");
  const [filter, setfilter] = useState("created");
  const [pages, setpages] = useState("10");
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(false);
  const handleForm = (e) => {
    getRepositories(input, pages, filter)
      .then((response) => {
        console.log(response.data);
        setError(false);
        setRepositories(response.data.result);
      })
      .catch((e) => {
        setError(true);
        setRepositories([]);
        console.log(e.response);
      });
    e.preventDefault();
  };
  return (
    <div className="homepage l-home">
      <form className="search-form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="github username"
          onChange={(e) => setInput(e.target.value)}
        />
        <select
          className="filter"
          onChange={(event) => setfilter(event.target.value)}
          value={filter}
        >
          <option value="created">created</option>
          <option value="updated">updated</option>
          <option value="pushed">pushed</option>
          <option value="full_name">full_name</option>
        </select>
        <select
          className="result"
          onChange={(event) => setpages(event.target.value)}
          value={pages}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <button type="submit">Search</button>
      </form>
      <div className="repositories">
        {error && (
          <h2
            className="error"
            style={{
              textAlign: "center",
            }}
          >
            No result found.
          </h2>
        )}
        {repositories.map((repo, index) => {
          return (
            <Repositoryframe
              key={index}
              owner={repo.owner.login}
              repositoryName={repo.name}
              openIssues={repo.open_issues}
              defaultBranch={repo.default_branch}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
