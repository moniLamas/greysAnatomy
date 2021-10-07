function callToApi() {
  return fetch(`https://api.tvmaze.com/shows/67/cast`).then((response) =>
    response.json().then((json) => {
      return json.results.map((character) => {
        return {
          id: character.character.id,
          name: character.character.name,
          image: character.character.image.medium,
          url: character.character.url,
          namePerson: character.person.name,
          urlPerson: character.person.url,
          country: character.person.country.name,
        };
      });
    })
  );
}

export default callToApi;
