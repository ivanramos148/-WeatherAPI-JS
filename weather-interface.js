$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72e84175fa8424b15858bc79c8e6a0e0`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    }
    request.open("GET", url, true);
    request.send();

    getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});
