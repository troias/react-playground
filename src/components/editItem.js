import EventForm from "./forms/eventForm";

import { useRouteLoaderData } from "react-router-dom";

export default function EditItem() {
  const data = useRouteLoaderData("edit");
  console.log("useRouteLoaderData", data);
  const { id, title, description, year } = data;
  return (
    <div className="container mx-auto p-4">
      <EventForm
        id={id}
        title={title}
        description={description}
        year={year}
        type="edit"
      />
    </div>
  );
}
