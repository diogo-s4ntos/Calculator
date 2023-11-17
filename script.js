var display = document.getElementById('display');
        
        var zero = document.getElementById('zero');
            zero.addEventListener('click', () => {
                display.value = display.value + zero.value;
            });
        var um = document.getElementById('um');
            um.addEventListener('click', () => {
                display.value = display.value + um.value;
            });
        var dois = document.getElementById('dois');
            dois.addEventListener('click', () => {
                display.value = display.value + dois.value;
            });
        var tres = document.getElementById('tres');
            tres.addEventListener('click', () => {
                display.value = display.value + tres.value;
            });
        var quatro = document.getElementById('quatro');
            quatro.addEventListener('click', () => {
                display.value = display.value + quatro.value;
            });
        var cinco = document.getElementById('cinco');
            cinco.addEventListener('click', () => {
                display.value = display.value + cinco.value;
            });
        var seis = document.getElementById('seis');
            seis.addEventListener('click', () => {
                display.value = display.value + seis.value;
            });    
        var sete = document.getElementById('sete');
            sete.addEventListener('click', () => {
                display.value = display.value + sete.value;
            });
        var oito = document.getElementById('oito');
            oito.addEventListener('click', () => {
                display.value = display.value + oito.value;
            });
        var nove = document.getElementById('nove');
            nove.addEventListener('click', () => {
                display.value = display.value + nove.value;
            });
        var vir = document.getElementById('vir');
            vir.addEventListener('click', () => {
                display.value = display.value + vir.value;
            });
        var del = document.getElementById('del');
            del.addEventListener('click', () => {
                display.value = display.value.slice(0, -1);
            });
    
        var soma = document.getElementById('soma');
            soma.addEventListener('click', () => {
                display.value = display.value + soma.value;
            });
        var sub = document.getElementById('sub');
            sub.addEventListener('click', () => {
                display.value = display.value + sub.value;
            });
        var multi = document.getElementById('multi');
            multi.addEventListener('click', () => {
                display.value = display.value + multi.value;
            });
        var div = document.getElementById('div');
            div.addEventListener('click', () => {
                display.value = display.value + div.value;
            });
        var porc = document.getElementById('porc');
            porc.addEventListener('click', () => {
                var ultimoSinal = display.value.lastIndexOf(" ");
                var numbAposSinal = display.value.slice(ultimoSinal + 1);
                var numbFinal = eval(numbAposSinal) / 100;
                display.value = numbFinal;
            });
        var par = document.getElementById('par');
        var contarClicks = 0;
            par.addEventListener('click', () => {
                contarClicks++;
    
                if(contarClicks === 1){
                    display.value = display.value + '(';
                }else if(contarClicks === 2){
                    display.value = display.value + ')';
                }else if(contarClicks > 2){
                    contarClicks = 0;
                }
            });
        
        var clean = document.getElementById('clean');
            clean.addEventListener('click', () => {
              display.value = '';
              contarClicks = 0;
            });
    
        var rst = document.getElementById('rst');
            rst.addEventListener('click', () => {
                var result = eval(display.value);
                display.value = result;
            });