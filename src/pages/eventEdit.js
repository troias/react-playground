import React from "react";

export default function eventEdit() {
  return (
    <div>
      {/* //Edit Event Form  */}
      <form>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" value="Title" />
        <br />
        <br />
        <label for="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value="Description"
        />
        <br />
        <br />
        <label for="year">Year:</label>
        <input type="text" id="year" name="year" value="Year" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
