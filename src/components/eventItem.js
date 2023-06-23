import React from "react";
import { useLoaderData, Link } from "react-router-dom";

export default function EventItem() {
  const data = useLoaderData();
  const { id, title, description, year } = data;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{year}</p>
      <Link to={`/events/edit/${id}`} params={{ id }}>
        Edit
      </Link>
    </div>
  );
}
