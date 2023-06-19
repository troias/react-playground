import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Events(props) {
  const data = useLoaderData();
  console.log("Events", data);
  return <div></div>;
}
