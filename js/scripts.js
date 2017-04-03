// BUSINESS LOGIC
function Place(city, date, landmark, notes) {
  this.cityName = city;
  this.date = date;
  this.landmark = landmark;
  this.notes = notes;
}

Place.prototype.cityDate = function() {
  return this.cityName + ", " + this.date;
}

function resetfields() {
  $("#new-city").val("");
  $("#new-date").val("");
  $("#new-landmark").val("");
  $("#new-notes").val("");
}

// UI LOGIC
$(function () {
  $("form#new-place").submit(function(e){
    e.preventDefault();

    var inputCity = $("#new-city").val();
    var inputDate = $("#new-date").val();
    var inputLandmark = $("#new-landmark").val();
    var inputNotes = $("#new-notes").val();

    var newPlace = new Place(inputCity, inputDate, inputLandmark, inputNotes);

    $("ul#places").append("<li><span class='places'>" + newPlace.cityDate() + "</span></li>");

    $(".places").last().click(function() {
      $("#show-places").toggle();
      $("#show-places h2").text(newPlace.cityName);
      $(".city").text(newPlace.cityName);
      $(".date").text(newPlace.date);
      $(".landmark").text(newPlace.landmark);
      $(".notes").text(newPlace.notes);
    });

    resetfields();

  });
});
