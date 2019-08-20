$(document).ready(function() {
  $("form#origPuzz").submit(function(event) {
    var sentence = $("input#puzzle").val();

    var newArray = sentence.split("");

    for (var index = 0; index <= newArray.length; index += 1) {
      if (newArray[index] === "a" || newArray[index] === "e" || newArray[index] === "i" || newArray[index] === "o" || newArray[index] === "u") {
        newArray[index] = "-";
      } else {
      }
     }

     output = newArray.join("");

    $("p#puzzDash").text(output);

     event.preventDefault();
  });
});
