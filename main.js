$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay:true,
        arrows: false
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(00) 00000-0000'
    });

    $('form').validate ({
        rules: {
            nome: {
                required: true
                
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: false
            },
            veiculoInteresse: {
                required: true
            }
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos  =validador.numberOfInvalids();
            console.log(camposIncorretos);
            
            if(camposIncorretos){
              alert(`Existem ${camposIncorretos} Campos Incorretos`)
            }
        }
    });

    $('.lista-veiculos button').on('click', function(){
        const destino = $('#contato');

        const car = $(this).parent().find('h3').text();
        $('#veiculo-interesse').val(car);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    });
   
})