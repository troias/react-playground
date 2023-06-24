import React from "react";
import { Formik, Field } from "formik";
import { Form } from "react-router-dom";

export default function EventForm({
  id,
  title,
  description,
  year,
  type = "new",
}) {
  return (
    <div className="container mx-auto p-4">
      <Formik
        initialValues={{
          title: title,
          description: description,
          year: year,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="space-y-4" method="post">
            <div>
              <label htmlFor="title" className="block text-lg font-semibold">
                Title:
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-lg font-semibold"
              >
                Description:
              </label>
              <Field
                type="text"
                id="description"
                name="description"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="year" className="block text-lg font-semibold">
                Year:
              </label>
              <Field
                type="text"
                id="year"
                name="year"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
