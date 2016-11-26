//counter code
var button= document.getElementById("counter");



$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
});




button.onclick=function(){
    //create a request object
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange= function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //take new acion
          if(request.status===200){
              var counter=request.responseText;
              var span=document.getElementById('count');
                span.innerHTML = counter.toString();
          }
      }  
    };
    request.open('GET','http://deepakgoyal468.imad.hasura-app.io/counter');
    request.send(null);
};

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
  //make a request to the server and send the name
   var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange= function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //take new acion
          if(request.status===200){
             //capture a list of names and render it as a list
            var names=request.responseText;
            names=JSON.parse(names);
            var list='';
            for(var i=0;i<names.length;i++){
                list+= '<li>' + names[i] + '</li>';
             }
            var ul=document.getElementById('namelist');
            ul.innerHTML=list; 
          }
      }  
    };
    var nameInput=document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://deepakgoyal468.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
  //capture a list of names and render it as a list
  var names=['name1','name2','name3','name4'];
  var list='';
  for(var i=0;i<names.length;i++){
      list+= '<li>' + names[i] + '</li>';
  }
  var ul=document.getElementById('namelist');
  ul.innerHTML=list;
};
$(".proBtn").on('click', function()
{
  $('.projectDisplay').fadeToggle("slow", "linear");
  $('.about').fadeToggle("fast", "linear");
});
$(".skillsBtn").on('click', function()
{
  $(".techDisplay").fadeToggle("slow", "linear");
});
