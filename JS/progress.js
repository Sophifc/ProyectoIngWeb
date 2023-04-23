$(document).ready(function(){

    $("#check1").click(function(){

        document.getElementById('check1');
        let carga = parseInt(document.getElementById('progress1').getAttribute('aria-valuenow'));

        if(carga<100){
            carga+=100;
            document.getElementById('progress1').setAttribute('style', 'width: ' + carga + '%');
        }

    });

    $("#check2").click(function(){

        document.getElementById('check2');
        let carga = parseInt(document.getElementById('progress2').getAttribute('aria-valuenow'));

        if(carga<100){
            carga+=100;
            document.getElementById('progress2').setAttribute('style', 'width: ' + carga + '%');
        }

    });

    $("#check3").click(function(){

        document.getElementById('check3');
        let carga = parseInt(document.getElementById('progress3').getAttribute('aria-valuenow'));

        if(carga<100){
            carga+=100;
            document.getElementById('progress3').setAttribute('style', 'width: ' + carga + '%');
        }

    });

    $("#check4").click(function(){

        document.getElementById('check4');
        let carga = parseInt(document.getElementById('progress4').getAttribute('aria-valuenow'));

        if(carga<100){
            carga+=100;
            document.getElementById('progress4').setAttribute('style', 'width: ' + carga + '%');
        }

    });

    $("#check5").click(function(){

        document.getElementById('check5');
        let carga = parseInt(document.getElementById('progress5').getAttribute('aria-valuenow'));

        if(carga<100){
            carga+=100;
            document.getElementById('progress5').setAttribute('style', 'width: ' + carga + '%');
        }

    });

});