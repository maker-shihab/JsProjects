const getApi = 'https://api.github.com/repositories/215335/issues/132';
const showData = () => {
  fetch(getApi)
  .then(res=> res.json())
  .then(data => console.log(data));
}
showData();