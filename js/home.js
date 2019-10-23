$(function() {
    var div = $(".partePessoas");
    var txt = '<div class="blocoPessoa">\
    <div class="boxIcone" style="justify-content: flex-start;">\
        <div class="icone" id="pessoa';
    var txt2 = '"></div>\
</div>\
<div class="boxIcone" style="justify-content: flex-end;">\
<div class="icone" id="evolucao"></div>\
    <div class="icone" id="alterar"></div>\
    <div class="icone" id="apagar"></div>\
</div>\
</div>';
    var td;

    for (var i = 0; i < 3; i++) {
        if (i % 2 == 0) {
            td = txt + '1' + txt2;
        } else td = txt + '2' + txt2;
        div.append(td);
    }

});


{
    /* <div class="avatardh">
        <div class="avatarh">
            <div class="avatarh2"style="flex-direction: row; align-content: center;">
                <div class="botao" id="pessoa1"></div>
            </div>
            <div class="avatarh2">
                <div class="botao" id="evolucao"></div>
                <div class="botao" id="alterar"></div>
                <div class="botao" id="apagar"></div>
            </div>
        </div>
    </div> */
}