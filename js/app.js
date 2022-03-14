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
    let message = $("#message").val();
    let count = 0;

    if (!nameCheck(name) || name.length <= 2) {
      if (name.length == 0) {
        $("#nameWarn").text("Name is required");
      } else {
        $("#nameWarn").text("Enter Valid Name");
      }
    } else {
      count++;
    }

    if (!emailCheck(email)) {
      if (email.length == 0) {
        $("#emailWarn").text("Email is required");
      } else {
        $("#emailWarn").text("Enter valid email");
      }
    } else {
      count++;
    }

    if (message.length == 0) {
      $("#messageWarn").text("Message is required");
    } else {
      count++;
    }

    if (count == 3) {
      alert(`${name} we have received your message`);
      $("#contactForm")[0].reset();
      $("#emailWarn").text("");
      $("#messageWarn").text("");
      $("#nameWarn").text("");
    }
  });
});
