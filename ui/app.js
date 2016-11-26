$(".proBtn").on('click', function()
{
  $('.projectDisplay').fadeToggle("slow", "linear");
  $('.about').fadeToggle("fast", "linear");
});
$(".skillsBtn").on('click', function()
{
  $(".techDisplay").fadeToggle("slow", "linear");
});
