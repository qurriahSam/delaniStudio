$(document).ready(function () {
  let whatWeDo = ["design", "development", "product"];
  let portfolio = [
    "projectOne",
    "projectTwo",
    "projectThree",
    "projectFour",
    "projectFive",
    "projectSix",
    "projectSeven",
    "projectEight",
  ];

  whatWeDo.map((elem) => {
    $(`#${elem}`).click(function () {
      $(`#${elem}Text`).toggleClass("d-none");
      $(`#${elem}Img`).toggleClass("d-none");
    });
  });

  portfolio.map((elem) => {
    $(`#${elem}Container`).click(function () {
      $(`#${elem}Bg`).toggleClass("d-none");
      $(`#${elem}Text`).fadeToggle();
    });
  });
});
