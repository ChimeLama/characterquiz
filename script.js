
$(".find").click(function() {
   //Puts name from input field to "k"
    let k= $(".name").val();
    console.log(k);
    if (k!=="" || m!=="" ) {
       $(".nameans").text("   Hello " + k + "! " + " Thank you for taking the quiz! Please rate my website 5 stars. Now here is your character result for Spirit of justice an Ace attorney game.");
    }
    //Puts option from input field to "m"
    let m= $(".option").val();
    console.log(m);
   //Makes sure there aren't empty input fields when button submitted
   if (m == "" || k=="") {
    alert("Please input both answers");
     $(".right-result").hide();
  }
  //The character results are placed here and makes sure only number 1-4 is entered here
  if (m == "1") {
    $(".character").append("You are <b>Rayfa</b> initially came across as rather haughty and aloof but actually very nice and loyal.<br>");
  } else if (m == "2") {
    $(".character").append("You are <b> Apollo </b> energetic, cheerful, wise, honest and kind, but sometimes he could be jealous.<br>");
  } else if (m == "3"){
    $(".character").append("You are<b> Dhurke</b>.You are a good person who cares for his friends, family, and comrades being willing to put his life just to save those he loves.<br>");
  } else if (m == "4"){
    $(".character").append("You are <b> Paul</b> a politician who only likes thing that benefits him.<br>");
  } else {
    alert("Please put the correct number for Q2")
    $(".character").text("");
     $(".right-result").hide();

  }
  });

//The count each time button pressed is here also makes sure that empty spaces in input field doesn't count.

$(function() {
  var count = 0;
  $('.find').on('click', function() {
    let k= $(".name").val();
    let m= $(".option").val();
    if (m !== "" && k !=="") {
      count++;
    }
if (m == "" || k =="") {
  $(".count").text("");  
  $(".right-result").hide();
}
if (m !== "" && k !=="") {
  $(".count").text("This is how many times you have done the quiz "+count);    
  $(".right-result").show();
}
  });
$(".retake").click(function() {
  $(".right-result").hide();
   count = 0;
  $(".nameans").text("");   
  $(".character").text("");  
  $('input').val('');
});
});

$(".right-result").hide();

