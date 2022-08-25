import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTutorial } from "../../applicationActions/tutorialActions";

const AddTutorial = () => {
  const [initialState, setInitialState] = useState({
    id: null,
    title: "",
    description: "",
    published: false
  });

  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  function handleInputChange(event) {
    setInitialState({ ...initialState, [event.target.name]: event.target.value });
  };

  function saveTutorial() {
    const { title, description } = initialState;

    dispatch(createTutorial(title, description)).then(data => {
      setInitialState({
        id: data.id,
        title: data.title,
        description: data.description,
        published: data.published
      });
      setSubmitted(true);
      console.log(data);
    })
      .catch(e => {
        console.log(e);
      });
  };

  function newTutorial() {
    setInitialState({
      id: null,
      title: "",
      description: "",
      published: false
    });
    setSubmitted(false);
  };

  return (
    <div className="submit-form-tutorial">
      {submitted === true ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>Add</button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={initialState.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={initialState.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>
          <button onClick={saveTutorial} className="btn btn-success">Submit</button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;
