let login = "frederico davin @gmail .com";
//login = login.replace(/ /gi, "");
let vetLogin = login.split(" ");
vetLogin = vetLogin.filter(s => s !== " ");
login = vetLogin.join("");
console.log(login);