const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
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
          countries[i].capital ? countries[i].capital[0] : "No capital"
        }</p>
        <p>Population: ${countries[i].population}</p>
        <p>Region: ${countries[i].region}</p> 
        <button onclick="loadCountryDetails('${
          countries[i].cca2
        }')" class="show-details-btn">Show details</button>
      </div>
    `;
    countryContainer.appendChild(countryDiv);
  }
};

const loadCountryDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  // console.log("Loading countries...", code);
  // console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCountryDetails(data[0]))
    .catch((error) => console.log(error));
};

const displayCountryDetails = (country) => {
  const countryDetails = document.getElementById("country-details");
  countryDetails.innerHTML = `
  <div class="flag">
  <img src="${country.flags.png}" alt="${country.name.common}">
</div>
<div class="info">
  <h2>Country name: ${country.name.common}</h2>
  <p>Capital: ${country.capital}</p>
  <p>Capital: ${country.capital ? country.capital[0] : "No capital"}</p>
  <p>Population: ${country.population}</p>
  <p>Region: ${country.region}</p>
</div>
  `;
};

loadCountries();
