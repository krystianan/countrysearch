var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';   
    $.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
  	countriesList.empty();
    
resp.forEach(function(item) {
var countryBox = $('<div>', {"class": "country-box"});

	countryBox.appendTo(countriesList);
	
   	$('<h1>').text(item.name).appendTo(countryBox);
   	$('<div>', {"class": "row"}).appendTo(countryBox);
   	
   	var countryBoxRow = $('<div>', {"class": "row"});
   	
   	countryBoxRow.appendTo(countryBox);
   	
   	createData("Region:", item.region);
    createData("Capital:", item.capital);
   	createData("Timezone:", item.timezones);
    createData("Population:", item.population);
    createData("Language:", item.languages);
   	createData("Currency:", item.currencies);
    createData("Borders:", item.borders);
    createData("Area (km^2):", item.area);
   	
   	
    function createData(info, data) {
	  	$('<p>', {"class": "head-text col-xs-2"}).text(info).appendTo(countryBoxRow);
	   	$('<p>', {"class": "body-text col-xs-8"}).text(data).appendTo(countryBoxRow);
  	}
})

}




