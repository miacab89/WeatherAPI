$(".button").on("click", function() {
  
  
  
  const cityName = $('#cityName').val();
  const apiCall = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=b90f0a2df5530a6351811dc2f1beabd0&units=imperial';
  
  $.ajax({
    url: apiCall,
    method: "GET",
    
  })
    .then(function(response) {
       //let results = response.data;
      
      var date= response.list[0].dt_txt;
      $(".Day0").html("<h5>"+date+"</h5>")

      var date= response.list[9].dt_txt;
      $(".Day1").html("<h5>"+date+"</h5>")

      var date= response.list[18].dt_txt;
      $(".Day2").html("<h5>"+date+"</h5>")

      var date= response.list[27].dt_txt;
      $(".Day3").html("<h5>"+date+"</h5>")

      var date= response.list[36].dt_txt;
      $(".Day4").html("<h5>"+date+"</h5>")

      var icon= response.list[0].weather[0].icon;
      $(".Icon0").html("<img src= http://openweathermap.org/img/wn/"+ icon + ".png>");

      var icon= response.list[1].weather[0].icon;
      $(".Icon1").html("<img src= http://openweathermap.org/img/wn/"+ icon + ".png>");

      var icon= response.list[2].weather[0].icon;
      $(".Icon2").html("<img src= http://openweathermap.org/img/wn/"+ icon + ".png>");

      var icon= response.list[3].weather[0].icon;
      $(".Icon3").html("<img src= http://openweathermap.org/img/wn/"+ icon + ".png>");

      var icon= response.list[4].weather[0].icon;
      $(".Icon4").html("<img src= http://openweathermap.org/img/wn/"+ icon + ".png>");
      
      
      var temperature= response.list[0].main.temp;
      $(".ShowWeatherForecast0").html("<h2>"+temperature+"&deg"+"</h2>")

      var temperature= response.list[1].main.temp; 
      $(".ShowWeatherForecast1").html("<h2>"+temperature+"&deg"+"</h2>")

      var temperature= response.list[2].main.temp;
      $(".ShowWeatherForecast2").html("<h2>"+temperature+"&deg"+"</h2>")

      var temperature= response.list[3].main.temp; 
      $(".ShowWeatherForecast3").html("<h2>"+temperature+"&deg"+"</h2>")
      
      var temperature= response.list[4].main.temp; 
      $(".ShowWeatherForecast4").html("<h2>"+temperature+"&deg"+"</h2>")
      
    

      //console.log(response.list[2].main.temp);
      //console.log(response.list[3].main.temp);
      //console.log(response.list[4].main.temp);
      
     /* $.getJSON(apiCall, function(data){
        console.log(data);
      }); */

      //let tempMin= response.list[2].main.temp; 
      //$(".ShowWeatherForecast").html("<h1>"+tempMin+"</h1>")

      var humidity= response.list[0].main.humidity; 
      $(".ShowHumidity0").html("<h5>"+"Humidity:"+humidity+"%"+"</h5>")
      
      var humidity= response.list[1].main.humidity; 
      $(".ShowHumidity1").html("<h5>"+"Humidity:"+humidity+"%"+"</h5>")

      var humidity= response.list[2].main.humidity; 
      $(".ShowHumidity2").html("<h5>"+"Humidity:"+humidity+"%"+"</h5>")

      var humidity= response.list[3].main.humidity; 
      $(".ShowHumidity3").html("<h5>"+"Humidity:"+humidity+"%"+"</h5>")

      var humidity= response.list[4].main.humidity; 
      $(".ShowHumidity4").html("<h5>"+"Humidity:"+humidity+"%"+"</h5>")

      var description= response.list[0].weather[0].main;
      $(".Description0").html("<h5>"+description+"</h5>") 

      var description= response.list[1].weather[0].main;
      $(".Description1").html("<h5>"+description+"</h5>") 

      var description= response.list[2].weather[0].main;
      $(".Description2").html("<h5>"+description+"</h5>") 

      var description= response.list[3].weather[0].main;
      $(".Description3").html("<h5>"+description+"</h5>") 

      var description= response.list[4].weather[0].main;
      $(".Description4").html("<h5>"+description+"</h5>") 

    })
  })

  
  
