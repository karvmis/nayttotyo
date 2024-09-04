$(document).ready(function () {
    // Väri vasemmalle suorakulmiolle
    $("#leftPalette .color").click(function () {
        let selectedColor = $(this).data("color");
        if (selectedColor) {
            $("#rectangle1").css("fill", selectedColor);
        }
    });

    // Väri oikealle suorakulmiolle
    $("#rightPalette .color").click(function () {
        let selectedColor = $(this).data("color");
        if (selectedColor) {
            $("#rectangle2").css("fill", selectedColor);
        }
    });
});