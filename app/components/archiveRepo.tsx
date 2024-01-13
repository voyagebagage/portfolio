// pages/index.js
import React from "react";

const ArchiveRepo = ({ repos }) => {
  return (
    <div>
      <h1>My GitHub Repositories</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch("https://api.github.com/user/repos", {
    headers: {
      Authorization: `token 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`,
    },
  });
  const repos = await response.json();

  return {
    props: {
      repos,
    },
  };
}

export default ArchiveRepo;
