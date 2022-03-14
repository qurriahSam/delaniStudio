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

  const emailCheck = (email) => {
    let testReg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let result = true;

    if (!testReg.test(email)) {
      result = false;
    }
    return result;
  };

  $("#btn").click(function (e) {
    e.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();

    if (!nameCheck(name) || name.length <= 2) {
      if (name.length == 0) {
        $("#nameWarn").text("Name is required");
      } else {
        $("#nameWarn").text("Enter Valid Name");
      }
    }

    if (!emailCheck(email)) {
      if (email.length == 0) {
        $("#emailWarn").text("Email is required");
      } else {
        $("#emailWarn").text("Enter valid email");
      }
    }
  });
});
