$(document).ready(function() {

});
$('#Submit-total').on('click',function(){
    var fighter1Total, fighter2Total;
    var f1round1 = parseInt($('#F1R1').html());
    var f1round2 = parseInt($('#F1R2').html());
    var f1round3 = parseInt($('#F1R3').html());
    var f1round4 = parseInt($('#F1R4').html());
    var f1round5 = parseInt($('#F1R5').html());
    fighter1Total = f1round5+f1round4+f1round3+f1round2+f1round1;

    var f2round1 = parseInt($('#F2R1').html());
    var f2round2 = parseInt($('#F2R2').html());
    var f2round3 = parseInt($('#F2R3').html());
    var f2round4 = parseInt($('#F2R4').html());
    var f2round5 = parseInt($('#F2R5').html());

    fighter2Total = f2round5+f2round4+f2round3+f2round2+f2round1;
    console.log('fighter2 '+ fighter2Total,'fighter1 '+ fighter1Total);
    $('#total').html("<h1>"+'fighter 2: '+ fighter2Total+'fighter 1: '+fighter1Total+"</h1>");
    return fighter2Total + fighter1Total;
});

    var fighter1Total = 0, fighter2Total = 0;
    var fighter1 = $('.fighter1').each(function(index,fighter1button) {
        console.log('fighter1 total',fighter1Total);
        fighter1Total += fighter1button;
        console.log('fighter1total',fighter1Total);
      });
    var fighter2 = $('.fighter2').each(function(index, fighter2button) {
        console.log('fighter2button',fighter2button);
        fighter2Total += fighter2button;
        console.log('fighter2total',fighter2Total);
  });



function fighter1Score() {
  var fighter1=0;
$(".dropdown-menu li a").click(function(event){
            $(this).parents(".btn-group1").find('.selection').val($(this).text());
event.fighter1 += +$(this).parents(".btn-group1").find('.selection').text($(this).text());
              console.log(fighter1);
              event.preventDefault();
            });
          }

function fighter2Score(){
  var fighter2=0;
  $(".dropdown-menu li a").click(function(event){
            $(this).parents(".btn-group2").find('.selection').val($(this).text());
event.fighter2 += +$(this).parents(".btn-group2").find('.selection').text($(this).text());
              event.preventDefault();
              console.log(fighter2);
            });
          }
