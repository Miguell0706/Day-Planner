# Day-Planner
The purpose of this homework assignment is to be able to develop a functioning day planner for the user using javascript

## Work Criteria
This work criteria was taken from the homework's readme.md file
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

![Screenshot (1733)](https://user-images.githubusercontent.com/82692900/122153889-bb30b300-ce18-11eb-8683-164e42990e32.png)

## Functionality of the Program 
The program fucntions with the help of javascript allowing the website to be able to save information to the local storage and be able to show the data that is being 
held in local storage back into the website even after the page refreshes. It uses Mment.js to be able to keep track of the time that the user's computer displays. 
It then uses for loops to colorize the blocks of time depending if they are before,during, or after the current time.

## Javascript sample 

``` Javascript

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
```
![Screenshot (1734)](https://user-images.githubusercontent.com/82692900/122154305-8a9d4900-ce19-11eb-8c89-cb088cf6a6c6.png)
<br></br>

[Link to the day calender](https://miguell0706.github.io/Day-Planner/)
