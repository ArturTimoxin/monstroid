import React, { useState, useEffect } from "react";
import "../../../style/style.css";
import apiAxios from "../../../services/apiAxios";
export const PreMadeLayouts = props => {
  const [titleInput, setDataTitle] = useState();
  const [fileInput, setDataFile] = useState();
  const [nameFile, setNameFile] = useState();
  const [error, setError] = useState("");
  const [preMadeLayouts, setPreMadeLayouts] = useState([]);
  useEffect(() => {
    apiAxios.get("/home/premade").then(res => {
      setPreMadeLayouts(res.data.layouts);
    });
  });

  const changeInput = e => {
    switch (e.target.name) {
      case "title":
        setDataTitle(e.target.value);
        setError("");
        break;
      case "premadeImage":
        setDataFile(e.target.files[0]);
        setNameFile(e.target.files[0].name);
        setError("");
        break;
      default:
        return null;
    }
  };

  const sendLayout = e => {
    e.preventDefault();
    if (titleInput && fileInput) {
      if (titleInput.length <= 20) {
        let formData = new FormData();
        formData.append("title", titleInput);
        formData.append("premadeImage", fileInput);
        apiAxios.post("/home/premade", formData);
        setDataTitle("");
        setDataFile(null);
        setNameFile("");
        setError("");
      } else {
        setError("Title length must be no more than 20 characters");
      }
    } else {
      setError("Fill in all the fields");
    }
    //.then(data => { setPreMadeLayouts(preMadeLayouts.concat(data.newPreMadeLayout)); // можно не делать, т.к. useEffect всегда прослушивает массив на сервере});
  };
  return (
    <div className="preMadeLayouts">
      <h1>Pre-made layouts</h1>
      <p>Use these pre-made layouts with any page of Monstroid².</p>
      <div className="wrapper-pre-made-layouts">
        {preMadeLayouts.map((arr, i) => {
          return (
            <div className="pre-made-layout" key={i}>
              <img src={arr[0]} alt="" />
              <div>{arr[1]}</div>
            </div>
          );
        })}
      </div>
      <div className="uploadPreMadeLayout">
        <h4 className="titleUploadPreMadeLayout">Add your PreMade layout in our collection</h4>
        <form encType="multipart/form-data" onSubmit={sendLayout}>
          <input
            type="text"
            name="title"
            value={titleInput}
            onChange={changeInput}
            placeholder="Enter name of your layout"
          />
          <label htmlFor="input-premadeImage" value={fileInput} className="labelFileInput">
            Click here for choose file
          </label>
          <div className="nameFile">{nameFile}</div>
          <div className="error">{error}</div>
          <input type="file" id="input-premadeImage" name="premadeImage" onChange={changeInput} />
          <button className="send" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
