import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

export default function Events() {
  const data = useLoaderData();
  const navigation = useNavigation();

  console.log("Events", data);
  console.log("navigation", navigation.state);

  //Loading spinnder

  // {navigation.state === "loading" && <Loading />}

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {navigation.state === "loading" && <Loading />}
        {data.map((event) => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      <h1 className="ml-3 text-gray-900">Loading...</h1>
    </div>
  );
};
