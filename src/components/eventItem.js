import React from "react";
import { useLoaderData, Link, useSubmit } from "react-router-dom";

export default function EventItem() {
  const data = useLoaderData();
  const submit = useSubmit();
  const { id, title, description, year } = data;

  const deleteHandler = () => {
    console.log("Delete");

    const proceed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (proceed) {
      console.log("Delete confirmed");
      submit(null, {
        method: "delete",
        url: `/api/events/${id}`,
      });
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{year}</p>
      <Link to={`/events/edit/${id}`} params={{ id }}>
        Edit
      </Link>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export async function action({ params, fetch }) {
  const data = await fetch(`/api/events/${params.id}`).then((res) =>
    res.json()
  );

  return {
    title: "Event",
    component: <EventItem />,
    data,
  };
}
