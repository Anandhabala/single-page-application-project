import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  //

  var routes = {
    "#/About": "About.html",
    "#/products": "products.html",
    "#/checkout": "checkout.html"
  };

  async function router() {
    console.log("location.hash", location.hash);

    // get requested page
    var link = window.location.hash;
    console.log("link", link);
    // get path (route) for page
    var route = routes[link];
    console.log("route", route);
    // if route exists, load page
    if (route) loadPage(route);
  }

  async function loadPage(url) {
    // load page
    const res = await fetch(url);
    const content = await res.text();
    const element = document.getElementById("content");
    element.innerHTML = content;
  }

  window.addEventListener("hashchange", router);
  return (
    <>
      <h3 id="tanand">ANAND SINGLE PAGE APPLICATION </h3>
      <nav class="navbar navbar-dark bg-dark">
        <a href="#/About" class="navbar-brand">
          About-us
        </a>
        <a href="#/products" class="navbar-brand">
          Products
        </a>
        <a href="#/checkout" class="navbar-brand">
          checkout
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav"></div>
        </div>
      </nav>
      <div id="content"></div>
    </>
  );
}
