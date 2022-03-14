const loadCountrys = () => {
  fetch('https://restcountries.com/v2/all')
  .then(res => res.json())
  .then(data => displayCountrys(data));
}

const displayCountrys = countrys =>{
  console.log(countrys);
  const countryHtml = countrys.map(country => getCountryHtml(country));
  const showCountrys = document.getElementById('countris');
  showCountrys.innerHTML = countryHtml.join(' ');
}

const getCountryHtml = ({name, flags, capital}) => {
  return `
  <div class="country">
    <div class='flex'>
      <h2 class="county-title">${name}</h2>
      <h3 class="county-title">${capital}</h3>
    </div>
    <img src="${flags.png}" alt="country-falg" class="country-falg">
  </div>
  `
}

loadCountrys();