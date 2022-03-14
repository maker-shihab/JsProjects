const loadCountrys = () => {
  fetch('https://restcountries.com/v2/all')
  .then(res => res.json())
  .then(data => displayCountrys(data));
}

const displayCountrys = countrys =>{
  const countryHtml = countrys.map(country => getCountryHtml(country));
  const showCountrys = document.getElementById('countris');
  showCountrys.innerHTML = countryHtml.join(' ');
}

const getCountryHtml = country => {
  return `
  <div class="country">
    <h2 class="county-title">${country.name}</h2>
    <img src="${country.flags.png}" alt="country-falg" class="country-falg">
  </div>
  `
}

loadCountrys();