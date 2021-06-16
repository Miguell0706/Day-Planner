$(document).ready(function () {
  //add day of the week on the page
  $("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

  // button click does something
  $(".btn").on("click", function () {
    var text = $(this).siblings(".text").val();
    var hour = $(this).parent().attr("id");
    //save info in local storage
    localStorage.setItem(hour,text);

  });
  //Load any saved data from local storage
  $('#hour-9 .text').val(localStorage.getItem('hour-9'));
  $('#hour-10 .text').val(localStorage.getItem('hour-10'));
  $('#hour-11 .text').val(localStorage.getItem('hour-11'));
  $('#hour-12 .text').val(localStorage.getItem('hour-12'));
  $('#hour-13 .text').val(localStorage.getItem('hour-13'));
  $('#hour-14 .text').val(localStorage.getItem('hour-14'));
  $('#hour-15 .text').val(localStorage.getItem('hour-15'));
  $('#hour-16 .text').val(localStorage.getItem('hour-16'));
  $('#hour-17.text').val(localStorage.getItem('hour-17'));

  function test(){
    var currentHour = moment().hour();
      $('.time-block').each(function( ) {
          //current block of time
    var block =parseInt($(this).attr('id').split('-')[1])

    if( currentHour > block ){
        //if currentHour is less than real time hour then color is equal to gray
        $(this).addClass('past');

    }else if( currentHour === block){
//if currentHour is equal to real time hour then color is red
        $(this).removeClass('past');
        $(this).addClass('present');

}else{
 //if currentHour is greater than current time then color is green
        $(this).removeClass('past');
        $(this).removeClass('present')
        $(this).addClass('future');

        }

       
      
      

     
      });
      

  }
  test();

  
});
