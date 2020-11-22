import React, { useState } from "react";
import "./Result.css";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import ReactCardFlip from "react-card-flip";

function Result({ url, name, rating1, rating2, desc, solution }) {
  document.body.style = "background:#2f4454 ";
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="result">
      <div className="v_desc">
        <OfflineBoltIcon className="icon" />
        <h1>Vulnerability: Injection</h1>
        <p className="result_rating">
          <strong>Vulnerability: 4.2</strong>
          <strong>Trust Factor: 8.7</strong>
        </p>
      </div>
      <div className="result_info">
        <h3>Description</h3>
        <p>
          Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur
          when untrusted data is sent to an interpreter as part of a command or
          query. The attacker’s hostile data can trick the interpreter into
          executing unintended commands or accessing data without proper
          authorization.
        </p>
      </div>
      <div className="v_sol">
        Restrictions on what authenticated users are allowed to do are often not
        properly enforced. Attackers can exploit these flaws to access
        unauthorized functionality and/or data, such as access other users’
        accounts, view sensitive files, modify other users’ data, change access
        rights, etc.
      </div>
    </div>
  );
}

export default Result;
