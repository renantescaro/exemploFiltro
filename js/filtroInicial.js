$(document).on('click', ".escolha", function ()
{

  var escolha = $(this).val();

  if(escolha == "sistemasCompletos")
  {
    $("#filtro").load("sistemasCompletos.html");
  }
  else if(escolha == "cameras")
  {
    $("#filtro").load("cameras.html");
  }
  else if(escolha == "dvrs")
  {
    $("#filtro").load("dvrs.html");
  }
});
