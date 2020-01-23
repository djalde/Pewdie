// Áreas de inserção do JavaScript
let r1=document.getElementById("row1")
let r2=document.getElementById("row2")

//Coloca relógio no <nav>
function relogio() {
  var d = new Date();
  var t = d.toLocaleTimeString();
 document.getElementById("relogio").innerHTML=t;
 }
setInterval(relogio,1000);


// Criar tabelas mysql
fetch('../api/inicia-mysql.php')

// Gera DashBoard Principal
fetch('../api/geradash1.php').
then(servicos => servicos.json())
.then(servicos => {
for(let s of servicos) {
if (s.status === "off") {

let div1 = document.createElement('div');
div1.setAttribute("class","m-4")
let card = document.createElement("div");
card.setAttribute("class","card");
card.style.width = "20rem";
let bod = document.createElement("div");
bod.setAttribute("class","card-body");
let serv = document.createElement("h1");
serv.setAttribute("class","card-title");
card.style.textAlign="center";
serv.textContent=s.name.toUpperCase();
let stat = document.createElement("h2");
stat.setAttribute("class","card-title");
stat.style.textAlign="center";
let botao = document.createElement("span");
botao.setAttribute("id",s.name+"1")
botao.setAttribute("class","badge")
botao.setAttribute("class","badge-danger");
botao.textContent=s.status.toUpperCase();
botao.style.padding="5px";
botao.style.borderRadius="7px";
stat.appendChild(botao)
bod.appendChild(serv);
bod.appendChild(stat);
card.appendChild(bod)
div1.appendChild(card);
r1.appendChild(div1);
} else {
  let div1 = document.createElement('div');
div1.setAttribute("class","m-4")
let card = document.createElement("div");
card.setAttribute("class","card");
card.style.width = "20rem";
let bod = document.createElement("div");
bod.setAttribute("class","card-body");
let serv = document.createElement("h1");
serv.setAttribute("class","card-title");
card.style.textAlign="center";
serv.textContent=s.name.toUpperCase();
let stat = document.createElement("h2");
stat.setAttribute("class","card-title");
stat.style.textAlign="center";
let botao = document.createElement("span");
botao.setAttribute("class","badge")
botao.setAttribute("class","badge-success");
botao.setAttribute("id",s.name+"1");
botao.textContent=s.status.toUpperCase();
botao.style.padding="5px";
botao.style.borderRadius="7px";
stat.appendChild(botao)
bod.appendChild(serv);
bod.appendChild(stat);
card.appendChild(bod);
div1.appendChild(card);
r1.appendChild(div1);
}
}
})



// GeraDashBoard secundario, informações do Pc
fetch(`../api/`)
.then(result => result.json())
.then(json => gerar(json));
function gerar(message) {
let carta=document.createElement("div");
carta.setAttribute("class","card")
carta.style.width = "22rem";
imag_pc=document.createElement("img");
imag_pc.setAttribute("src","https://thumbs.dreamstime.com/b/graphs-charts-computer-screen-technical-analysis-financial-data-analyzing-workspace-concept-freelance-135106208.jpg");
imag_pc.setAttribute("class","card-img-top");
imag_pc.setAttribute("alt","...");
carta.appendChild(imag_pc);
let corpo=document.createElement("div");
corpo.setAttribute("class","card-body");
carta.appendChild(corpo);
let p1=document.createElement("p");
p1.setAttribute("class","card-text");
p1.style.marginBottom = "2rem";
carta.appendChild(p1);
let tab=document.createElement("table");
p1.appendChild(tab)
tab.setAttribute("class","table-info");
tab.setAttribute("id","tabela")
let trp=document.createElement("tr");
tab.appendChild(trp);
let tp1=document.createElement("td");
let tp2=document.createElement("td");
let tp3=document.createElement("td");
let tp4=document.createElement("td");
tp1.textContent="ITEM";
tp2.textContent="VALUE";
tp3.textContent="USED";
tp4.textContent="FREE";
trp.appendChild(tp1);
trp.appendChild(tp2);
trp.appendChild(tp3);
trp.appendChild(tp4);
for(const i of message) {
  if (i.nome==="ram" || i.nome==="disk" || i.nome==="cpu") {
let tr1=document.createElement("tr");
tab.appendChild(tr1);
let th11=document.createElement("td");
th11.textContent=i.nome;
let th12=document.createElement("td");
let th13=document.createElement("td");
let th14=document.createElement("td");
th13.textContent=i.used;
th14.textContent=i.free;
tr1.appendChild(th11);
tr1.appendChild(th12);
tr1.appendChild(th13);
tr1.appendChild(th14);
  } else {
  
let tr1=document.createElement("tr");
tab.appendChild(tr1);
let th11=document.createElement("td");
th11.textContent=i.nome;
let th12=document.createElement("td");
th12.textContent=i.valor;
let th13=document.createElement("td");
let th14=document.createElement("td");
tr1.appendChild(th11);
tr1.appendChild(th12);
tr1.appendChild(th13);
tr1.appendChild(th14);
}
r2.appendChild(carta)
}
}



// Gera Painel de operacoes (liga/desliga/reinicia)
fetch('../api/geradash1.php')
.then(servicos => servicos.json())
.then(servicos => {
let tabel=document.createElement("table");
tabel.setAttribute("class","table");
tabel.setAttribute("class","table-dark");
tabel.style.marginTop ="4rem"
tabel.setAttribute("id","operar1")
let thead1=document.createElement("thead");
tabel.appendChild(thead1);
let tr2=document.createElement("tr")
thead1.appendChild(tr2)
let th2=document.createElement("th");
th2.setAttribute("colspan","5");
th2.setAttribute("scope","col");
th2.style.textAlign="center";
let texto=document.createElement("h2")
texto.textContent="SERVICES";
th2.appendChild(texto);
tr2.appendChild(th2);
let corpot=document.createElement("tbody")
for(se of servicos) {
  let tr31=document.createElement("tr");
  let td21=document.createElement("td");
  let texto2=document.createElement("h2");
  texto2.textContent=se.name.toUpperCase();
  td21.appendChild(texto2);
  tr31.appendChild(td21)
  let tdbotao1=document.createElement("td");
  let botao1=document.createElement("button");
  tdbotao1.appendChild(botao1);
  botao1.setAttribute("type","button");
  botao1.setAttribute("class","btn");
  botao1.setAttribute("class","btn-outline-success");
  if (se.name == "apache") {
    botao1.setAttribute("disabled","disabled")
  }
  botao1.setAttribute("onclick","liga(this.id)")
  botao1.setAttribute("id",se.name)
  let texto21=document.createElement("h2");
  texto21.textContent="UP";
  botao1.appendChild(texto21);
  tr31.appendChild(tdbotao1);
  let tdbotao2=document.createElement("td");
  let botao2=document.createElement("button");
  tdbotao2.appendChild(botao2);
  botao2.setAttribute("type","button");
  botao2.setAttribute("class","btn");
  botao2.setAttribute("class","btn-outline-danger");
  if (se.name == "apache") {
    botao2.setAttribute("disabled","disabled")
  }
  botao2.setAttribute("onclick","desliga(this.id)")
  botao2.setAttribute("id",se.name);
  let texto22=document.createElement("h2");
  texto22.textContent="Down";
  botao2.appendChild(texto22);
  tr31.appendChild(tdbotao2);
  corpot.appendChild(tr31)
}
tabel.appendChild(corpot)
r2.appendChild(tabel)
})

function liga(id) {
  fetch(`/api/insere-liga-servico.php/?name=${id}`)
  let some=document.getElementById(id+'1')
  some.setAttribute("class","badge-success");
  some.innerHTML="ON"

}
function desliga(id) {
  fetch(`/api/insere-desliga-servico.php/?name=${id}`)
    let some=document.getElementById(id+'1')
    some.setAttribute("class","badge-danger");
    some.innerHTML="OFF"
  }
