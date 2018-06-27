export function moviesList() {
  return {
    type: "MOVIES_LIST",
    payload: [
      {
        id: 1,
        name: "pulpfiction"
      },
      {
        id: 2,
        name: "pacific rim"
      },
      {
        id: 3,
        name: "Rambo"
      }
    ]
  };
}
