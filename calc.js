// SABOTAGEM 2 - codigo vulneravel para testar o Semgrep
// Executa como codigo JavaScript o que vier na URL (?expr=...)
const params = new URLSearchParams(window.location.search);
const expr = params.get("expr");
const resultado = eval(expr);
document.getElementById("resultado").textContent = resultado;
