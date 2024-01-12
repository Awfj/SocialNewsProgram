import SocialNewsProgram from "./components/SocialNewsProgram.js";

let program = new SocialNewsProgram();

program.addLink("Hacker News", "https://news.ycombinator.com", "Baptiste");
program.addLink("Reddit", "https://reddit.com", "Thomas");
program.addLink("Boing Boing", "boingboing.net", "Daniel");

let linkForm = document.querySelector("#linkForm");
let newLinkButton = document.querySelector("#newLinkButton");

linkForm.addEventListener("submit", program.submitForm.bind(program));
newLinkButton.addEventListener("click", program.toggleLinkForm);

program.showLinks();