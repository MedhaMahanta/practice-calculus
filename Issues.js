import React, { useState } from 'react';

const NavbarProblems = () => {
  const [problems, setProblems] = useState([
    "Localhost is being used as the server address in the axios requests. This will not work when the code is deployed to a production environment.",
    "The google object is being reassigned on every render, which is unnecessary and could cause performance issues.",
    "The same component is being imported twice, `import { useEffect } from 'react';` and `import {useNavigate} from 'react-router-dom';`",
    "The userObject is being saved in an object in local storage, which is not ideal. It would be better to just save the userObject directly.",
    "There is no error handling for the axios requests. If there is an error the only thing being done is console.error(err) which may not be enough.",
    "The google object is being accessed via the window object, which is not a best practice.",
    "The google sign-in client_id is hard-coded in the component, which is not secure. It would be better to use environment variables or a separate config file to store this information.",
    "The google sign-in button is being rendered on every render, which is unnecessary and could cause performance issues.",
    "The google sign-in callback function is not being unmounted when the component is unmounted.",
    "The google sign-in button is not being rendered when user is logged in."
  ]);

  return (
    <div>
      <h2>Problems with Navbar component:</h2>
      <ul>
        {problems.map((problem, index) => (
          <li key={index}>{problem}</li>
        ))}
      </ul>
    </div>
  );
}

export default NavbarProblems;
