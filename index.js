import SocialNewsProgram from "./components/SocialNewsProgram.js";

let program = new SocialNewsProgram();
let option;

do {
    option = program.showMenu();

    switch (option) {
        case "1":
            program.showLinks();
            break;
        case "2":
            program.addLink();
            break;
        case "3":
            program.removeLink();
            break;
    }

} while (option !== "0" && option !== null);

