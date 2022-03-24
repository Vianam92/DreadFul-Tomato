const getApi = () => {
  return fetch("./data/data.json")
    .then((res) => res.json())
    .then((data) => {
      const results = data.entries.map((item, index) => {
         return {
          id:index,
          title:item.title,
          description:item.description,
          programType: item.programType,
          releaseYear:item.releaseYear,
          images:item.images.Poster_Art.url,
        }
      });
      return results;
    })
    .catch((err) => {
      // Do something for an error here
      console.log("Error Reading data " + err);
    });
};

export default getApi;
