const mian = document.getElementById('main');
const search = document.getElementById('search');
const form = document.getElementById('form');

const APIURL = "https://api.github.com/users/";
const getUser = (user) => {
  fetch(APIURL + user)
  .then(res=> res.json())
  .then(data => createUserCard(data));
}
function createUserCard(user){
  const createHtml = `
   <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${user.name}">
      </div>
   </div>
  `;
  main.innerHTML = createHtml;
}