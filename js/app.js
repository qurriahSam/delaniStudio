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
    $(`#${elem}Container`).hover(function () {
      $(`#${elem}Bg`).toggleClass("d-none");
      $(`#${elem}Text`).fadeToggle();
    });
  });

  const nameCheck = (user) => {
    let testReg = /[a-z ]/i;
    let result = true;
    user.split("").map((letter) => {
      if (!testReg.test(letter)) {
        result = false;
      }
    });
    return result;
  };

  $("#btn").click(function (e) {
    e.preventDefault();
    let name = $("#name").val();

    if (!nameCheck(name) || name.length <= 2) {
      alert("enter valid name");
    }
  });
});
