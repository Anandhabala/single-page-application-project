import "./styles.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <div className="App">
        <Button
          onClick={() => {
            async function loadPage(page) {
              const res = await fetch(page);
              const content = await res.text();
              const element = document.getElementById("content");
              element.innerHTML = content;
              return element.innerHTML;
            }
            loadPage("About.html");
          }}
        >
          {" "}
          About-us{" "}
        </Button>

        <Button
          onClick={() => {
            async function loadPage(page) {
              const res = await fetch(page);
              const content = await res.text();
              const element = document.getElementById("content");
              element.innerHTML = content;
              return element.innerHTML;
            }
            loadPage("products.html");
          }}
        >
          Blog
        </Button>

        <Button
          onClick={() => {
            async function loadPage(page) {
              const res = await fetch(page);
              const content = await res.text();
              const element = document.getElementById("content");
              element.innerHTML = content;
              return element.innerHTML;
            }
            loadPage("checkout.html");
          }}
        >
          checkout
        </Button>
      </div>
      <div id="content"></div>
    </>
  );
}
