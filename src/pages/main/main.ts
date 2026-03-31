import "@styles/_base.scss";

const appEl = document.querySelector<HTMLDivElement>("#app")!;
const html1 = `<section id="center">
  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/main.ts</code> and save to test <code>HMR</code></p>
  </div>
</section>`;

const div = document.createElement("div");
div.innerHTML = html1;

appEl.append(div);
