// Fake movie data
const fakeMovies = [
  {
    id: 1,
    title: "Movie 1",
    description: "This is the first movie",
    year: 2021,
  },
  {
    id: 2,
    title: "Movie 2",
    description: "This is the second movie",
    year: 2022,
  },
  {
    id: 3,
    title: "Movie 3",
    description: "This is the third movie",
    year: 2023,
  },
  {
    id: 4,
    title: "Movie 4",
    description: "This is the fourth movie",
    year: 2024,
  },
  {
    id: 5,
    title: "Movie 5",
    description: "This is the fifth movie",
    year: 2025,
  },
];

// Simulate a fake movie list API
export const eventList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeMovies);
    }, 1000);
  });
};
