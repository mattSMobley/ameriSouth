angular.module("app")
  .controller('MainController', [MainController])

function MainController($scope) {
  var vm = this;
  vm.properties = [{
    name: "Good Haven",
    address: "1810 High Hill Blvd.",
    city: "Dallas",
    state: "Texas",
    zipcode: "75203",
    img: "img/Good Haven - Drone shot 2.jpg"
  }, {
    name: "Huntington Meadows",
    address: "7000 Decker Ln.",
    city: "Austin",
    state: "Texas",
    zipcode: "78724",
    img: "http://www.amerisouthrealty.com/images/propertyImages/Huntington/hunt001.jpg"
  }, {
    name: "Park Creek Manor Apartments",
    address: "2520 Coombs Creek St.",
    city: "Dallas",
    state: "Texas",
    zipcode: "75211",
    img: "http://www.amerisouthrealty.com/images/propertyImages/Park-Creek-Manor-Apartments/pcm_1_fit.jpg"
  }, {
    name: "Prairie Ridge Apartments",
    address: "313 Freetown Rd.",
    city: "Grand Prairie",
    state: "Texas",
    zipcode: "75051",
    img: "http://www.amerisouthrealty.com/images/propertyImages/Prairie-Ridge-Apartments/pr_2_fit.jpg"
  }, {
    name: "Prince Hall II",
    address: "4820 E. Berry St.",
    city: "Ft. Worth",
    state: "Texas",
    zipcode: "76105",
    img: "http://www.fillmurray.com/200/300"
  }, {
    name: "Pythian Manor",
    address: "2719 E. Illinois Ave. #100",
    city: "Dallas",
    state: "Texas",
    zipcode: "75216",
    img: "http://www.amerisouthrealty.com/images/propertyImages/Pythian-Manor/pm_1_fit.jpg"
  }, {
    name: "Raible Place",
    address: "1216 N. Britain Rd.",
    city: "Irving",
    state: "Texas",
    zipcode: "75061",
    img: "http://www.fillmurray.com/200/300"
  }, {
    name: "Royal Crest",
    address: "3558 Wilhurt Ave.",
    city: "Dallas",
    state: "Texas",
    zipcode: "75216",
    img: "http://www.fillmurray.com/200/300"
  }, {
    name: "Southern Oaks Apartments",
    address: "3424 Southern Oaks Blvd. #13",
    city: "Dallas",
    state: "Texas",
    zipcode: "75216",
    img: "http://www.fillmurray.com/200/300"
  }, {
    name: "Springdale Apartments",
    address: "1901 Higgins Ln.",
    city: "Ft. Worth",
    state: "Texas",
    zipcode: "76111",
    img: "http://www.fillmurray.com/200/300"
  }, {
    name: "Springdale Estates",
    address: "1050 Springdale Rd.",
    city: "Austin",
    state: "Texas",
    zipcode: "78721",
    img: "http://www.fillmurray.com/200/300"
  }, {
    name: "Terrace View Apartments",
    address: "417 W. Tarrant Road",
    city: "Grand Prairie",
    state: "Texas",
    zipcode: "75050",
    img: "http://www.fillmurray.com/200/300"
  }, {
    name: "Westmount Place Apartments",
    address: "1441 Westmount Dr.",
    city: "Dallas",
    state: "Texas",
    zipcode: "75211",
    img: "http://www.fillmurray.com/200/300"
  }, {
    name: "Winfield Estates",
    address: "3535 South Lake Dr.",
    city: "Texarkana",
    state: "Texas",
    zipcode: "75501",
    img: "http://www.fillmurray.com/200/300"
  }];


}
