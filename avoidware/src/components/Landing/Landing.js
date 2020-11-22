import React, { useState } from "react";
import "./Landing.css";
import backgroundImg from "../../img/cool-background.png";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Landing() {
  const history = useHistory();
  const [url, setUrl] = useState("");

  async function postData(urlurl = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(urlurl, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    const dataref = await response.json();
    return dataref; // parses JSON response into native JavaScript objects
  }

  const bodyData = {
    uri: url,
  };

  const sendData = (data) => {
    console.log("data is -->", data);

    fetch("http://127.0.0.1:3050/scan", {
      method: "post",
      body: JSON.stringify({ uri: data }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const sendUrl = (e) => {
    console.log("sendURL being called");
    try {
      sendData(url);
      //postData("http://localhost:3000/scan", { url: url }).then((data) => {
      //console.log("urlrurrrurlr", data); // JSON data parsed by `data.json()` call
      //});
    } catch (err) {
      console.log("err");
    }

    history.push("/results");
  };

  return (
    <div className="home">
      <div className="home_container">
        <div className="title_container">
          <h1 className="heading">Clear URL</h1>
          <p className="info">
            An automated malware scan tool for any web page
          </p>
          <div className="url_textField">
            <input
              placeholder="Paste your URL here"
              className="urlInput"
              type="text"
              onChange={(event) => setUrl(event.target.value)}
            />
            <button onClick={sendUrl}>Test</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
