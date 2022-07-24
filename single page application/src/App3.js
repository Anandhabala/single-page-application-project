import "./styles.css";
export default function App() {
  async function loadPage() {
    console.log(location.hash);
    let page = location.hash.replace("#", "");
    const res = await fetch(page);
    const content = await res.text();
    const element = document.getElementById("content");
    element.innerHTML = content;
  }

  window.addEventListener("hashchange", loadPage);
  return (
    <>
      <a href="#About.html" class="text-primary">
        About-us
      </a>
      ,
      <a href="#products.html" class="text-primary">
        Blog
      </a>
      ,
      <a href="#checkout.html" class="text-primary">
        Pricing
      </a>
      <div id="content"></div>
    </>
  );
}
