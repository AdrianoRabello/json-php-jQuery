
$(document).ready(function(){

		var json = 'json';
        var itens = "";

        $.ajax({
		url: 		"../php/NovaConexao.php",
		cache: false,		
		dataType: 	"json",	
		timeout: 2000,	
		type:'POST',
		data: {
			'json': 'json'
		},
		beforeSend: function (){
			$('#retorno').html("<div class='alert alert-success alert-dismissible fade show' role='alert'>"+
				"<i class='fa fa-refresh rotation'  aria-hidden='true'></i> Porcessando...  " +
				"<button type='button' class='close' data-dismiss='alert' aria-label='Close'>"+
				"<span aria-hidden='true'>&times;</span></button></div>");			
		},
		error: function(){
			$('#retorno').html("<div class='alert alert-danger alert-dismissible fade show' role='alert'>"+
				"<i class='fa fa-refresh rotation'  aria-hidden='true'></i>  Erro na solicitação dos dados...  " +
				"<button type='button' class='close' data-dismiss='alert' aria-label='Close'>"+
				"<span aria-hidden='true'>&times;</span></button></div>");			
							
		},
		success: function(e){
			$('h2').html("");
			if (e[0].erro) {
				$('#h2').html(e[0].erro);
			}else{
				for(var i = 0; i<e.length; i++){
					itens += "<tr>";
					itens += "<td>" + e[i].id + "</td>";
					itens += "<td>" + e[i].nome + "</td>";
					itens += "<td>" + e[i].cargo + "</td>";	
					itens += "<td>" + e[i].login + "</td>";				
					itens += "</tr>";				
				}
				$('tbody').slideDown("slow",function(){
					$('tbody').html(itens)

				});
				
			}
		}

	}).done(function(){
		esconderRetorno();
	});


      function esconderRetorno(){
        setTimeout(function(){
             $('#retorno').slideUp();
        },2000);
    }
   
});