import React from "react";
import { useParams } from "react-router-dom";
import EventItem from "../components/eventItem";

export default function EventDetail() {
  return (
    <div>
      Event Detail
      <EventItem />
    </div>
  );
}
