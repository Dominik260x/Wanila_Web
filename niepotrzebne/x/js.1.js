var $arrow = $("arrow a");

$("#arrow").on("click", function () {
  $("body").animate(
    {
      scrollTop: 400,
    },
    1000
  );
});
