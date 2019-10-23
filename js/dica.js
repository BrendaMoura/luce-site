$(function(){
    var div = $(".avatardh");
    var txt = '<a onmouseover="aumentar(this.id)" onmouseout="diminuir(this)" id="';
    var txt2 = '" href="';
    // Configuracao dos links das divs
    var link=['http://www.movimentodown.org.br/2019/01/protocolo-do-livro-digital-acessivel/',
    'https://diversa.org.br/sindrome-de-down-escola-dicas-praticas-inclusao/',
    'http://www.movimentodown.org.br/2017/01/criando-uma-sala-de-aula-inclusiva/','d','e','f','g','h','i'];
    // Configuracao das imagens das divs
    var img=['dica1.jpg','dica2.png'];
    var config='style="background-image: url(imagem/'
    for(var i=0;i<9;i++){
        var imgs;
        if(i%2==0){
            imgs=config+img[0]+');"';
        }
        else imgs=config+img[1]+');"';
        var eita=txt+i+txt2+link[i]+'"><div class="avatard" '+imgs+'></div></a>';
        div.append(eita);
    }
});
// Tem que fzr aumentar o tamanho da div quando o mouse passar por cima da div
function aumentar(x){
    document.getElementById(x).addClass("aumentar");
}

function diminuir(x){
    x.removeClass("aumentar");
}