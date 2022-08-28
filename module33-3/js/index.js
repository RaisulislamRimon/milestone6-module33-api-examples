const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all  ")
    .then((response) => response.json())
    .then((data) => displayCountries(data))
    .catch((error) => console.log(error));
};

const displayCountries = (countries) => {
  const countryContainer = document.getElementById("countries-container");
  // for (const country of countries) {
  //   console.log(country);
  // }
  // countries.forEach((country) => {
  //   console.log(country);
  // });
  for (let i = 0; i < countries.length; i++) {
    // console.log(countries[i]);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
      <div class="flag">
        <img src="${countries[i].flags.png}" alt="${countries[i].name.common}">
      </div>
      <div class="info">
        <h2>Country name: ${countries[i].name.common}</h2>
        <p>Capital: ${countries[i].capital}</p>
        <p>Capital: ${
          countries[i].capital.length ? countries[i].capital : "No capital"
        }</p>
        <p>Population: ${countries[i].population}</p>
        <p>Region: ${countries[i].region}</p> 
      </div>
    `;
    countryContainer.appendChild(countryDiv);
  }
};

loadCountries();
