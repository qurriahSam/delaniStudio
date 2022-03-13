$(document).ready(function () {
  let whatWeDo = ["design", "development", "product"];
  whatWeDo.map((elem) => {
    $(`#${elem}`).click(function () {
      $(`#${elem}Text`).toggleClass("d-none");
      $(`#${elem}Img`).toggleClass("d-none");
    });
  });
});
