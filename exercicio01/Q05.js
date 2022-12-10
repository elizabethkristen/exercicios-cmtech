var usuarios = [{nome: "Diego", habilidades: ["Javascript","ReactJS", "Redux"]},{nome: "Gabriel", habilidades: ["VueJS", "Ruby on Rails", "Elixir"]}];
let language = "JavaScript";

let text = "";
for (let x of usuarios) {
(text += "O " + x.nome + " possui as habilidades: " + x.habilidades.join() + "<br>");
}

document.getElementById("demo").innerHTML = text;