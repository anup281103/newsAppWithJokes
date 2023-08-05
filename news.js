// apiUrl=https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aceb93e3c93540bcbd58127f27048c04
// apiurl=https://newsapi.org/v2/everything?q=tesla&from=2023-07-01&sortBy=publishedAt&apiKey=aceb93e3c93540bcbd58127f27048c04
let urlIndiaNews = "./IndiaNews.json";
let urlSports = "./sports.json";
let urlPolitics = "./politics.json";
let urlTechnology = "./technology.json";
let headerShortcut = document.querySelector(".headerShortcut");

DataFetch = async () => {
  const response = await fetch(`${urlIndiaNews}`);
  const data = await response.json();
  bindData(data.articles);
};
window.addEventListener("load", DataFetch());
async function fetchIndianNews() {
  const response = await fetch(`${urlIndiaNews}`);
  const data = await response.json();
  bindData(data.articles);
}
async function fetchSportsNews() {
  const response = await fetch(`${urlSports}`);
  const data = await response.json();
  bindData(data.articles);
}
async function fetchTechnologyNews() {
  const response = await fetch(`${urlTechnology}`);
  const data = await response.json();
  bindData(data.articles);
}
async function fetchPoliticsNews() {
  const response = await fetch(`${urlPolitics}`);
  const data = await response.json();
  bindData(data.articles);
}
function bindData(articles) {
  const cardContainer = document.querySelector(".cardContainer");
  const cardTemplet = document.querySelector(".cardTemplet");
  cardContainer.innerHTML = "";
  articles.forEach((article) => {
    if (!article.urlToImage) return;
    const cloneTempletNode = cardTemplet.content.cloneNode(true);
    fillDataInCard(cloneTempletNode, article);
    cardContainer.appendChild(cloneTempletNode);
  });
}
function fillDataInCard(cloneTempletNode, article) {
  const newsImg = cloneTempletNode.querySelector("#cardImage");
  newsImg.src = article.urlToImage;
  const newsTitle = cloneTempletNode.querySelector(".title");
  newsTitle.innerHTML = article.title;
  const newsDate = cloneTempletNode.querySelector(".date");
  const date = new Date(article.publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });
  newsDate.innerHTML = date;
  goToLink = () => {
    window.location = `${article.url}`;
  };
}
