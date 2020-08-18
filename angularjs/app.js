/*
	This test is meant to evaluate your creativity with user interfaces. You are 
	encouraged to be as creative as possible with the aesthetics of the page.

	Create a roster page that displays a list of NFL players. Make the list sortable 
	by team and position, using elements of AngularJS.  Include a button that reverses 
  the sort direction, and a filter for the range of jersey numbers shown.
  
  Feel free to express yourself and your creative abilities on this test.
*/
(function(ng){
    var app = ng.module("TestApp", []);
    
    app.controller("TestCtrl", ["$scope", function($scope){
        
        $scope.players = [{
        	Id: 1,
          Name: "Cam Newton",
          Number: 1,
          Position: "QB",
          Team: "Carolina Panthers"
        },{
        	Id: 2,
          Name: "Luke Kuechly",
          Number: 59,
          Position: "MLB",
          Team: "Carolina Panthers"
        },{
        	Id: 3,
          Name: "Aaron Rodgers",
          Number: 12,
          Position: "QB",
          Team: "Green Bay Packers"
        },{
        	Id: 4,
          Name: "JJ Watt",
          Number: 99,
          Position: "DE",
          Team: "Houston Texans"
        },
        {
        	Id: 5,
          Name: "Josh Norman",
          Number: 24,
          Position: "CB",
          Team: "Washington Redskins"
        }
        ,{
        	Id: 6,
          Name: "Jordy Nelson",
          Number: 87,
          Position: "WR",
          Team: "Green Bay Packers"
        },
        {
        	Id: 7,
          Name: "Matt Ryan",
          Number: 2,
          Position: "QB",
          Team: "Atlanta Falcons"
        },
        {
        	Id: 8,
          Name: "Julio Jones",
          Number: 11,
          Position: "WR",
          Team: "Atlanta Falcons"
        },
        {
        	Id: 9,
          Name: "Devonta Freeman",
          Number: 24,
          Position: "RB",
          Team: "Atlanta Falcons"
        },
        {
        	Id: 10,
          Name: "Kelvin Benjamin",
          Number: 13,
          Position: "WR",
          Team: "Carolina Panthers"
        },
        {
        	Id: 11,
          Name: "Von Miller",
          Number: 58,
          Position: "OLB",
          Team: "Denver Broncos"
        },
        {
        	Id: 12,
          Name: "Thomas Davis",
          Number: 58,
          Position: "OLB",
          Team: "Carolina Panthers"
        },{
        	Id: 13,
          Name: "Drew Brees",
          Number: 9,
          Position: "QB",
          Team: "New Orleans Saints"
        },{
        	Id: 14,
          Name: "Tom Brady",
          Number: 12,
          Position: "QB",
          Team: "New England Patriots"
        },{
        	Id: 15,
          Name: "Rob Gronkowski",
          Number: 87,
          Position: "TE",
          Team: "New England Patriots"
        },{
        	Id: 16,
          Name: "Greg Olsen",
          Number: 88,
          Position: "TE",
          Team: "Carolina Panthers"
        },{
        	Id: 17,
          Name: "Leveon Bell",
          Number: 26,
          Position: "RB",
          Team: "Pittsburgh Steelers"
        },{
        	Id: 18,
          Name: "Antonio Brown",
          Number: 84,
          Position: "WR",
          Team: "Pittsburgh Steelers"
        },{
        	Id: 19,
          Name: "Dak Prescott",
          Number: 4,
          Position: "QB",
          Team: "Dallas Cowboys"
        },{
        	Id: 20,
          Name: "Ezekiel Elliot",
          Number: 21,
          Position: "RB",
          Team: "Dallas Cowboys"
        }
        ];
        
        //|////////////////////|/
        //|/put your code here/|/
        //V////////////////////V/
        $scope.sortMode = "Team";
        $scope.sortDesc = false;
        $scope.minNumber = 0;
        $scope.maxNumber = 100;
        
        const filterPlayers = function(player) {
        	return player.Number >= $scope.minNumber && player.Number <= $scope.maxNumber;
        };
        
        const sortPlayers = function (a, b) {
       		var sortProp = $scope.sortMode;
        	if (a[sortProp] < b[sortProp])
            return -1;
          if (a[sortProp] > b[sortProp])
            return 1;
          return 0;
        };
        
        const refreshPlayers = function () {
        	var results = $scope.players.filter(filterPlayers);
          
          results = results.sort(sortPlayers);
          
          if ($scope.sortDesc)
          	results = results.reverse();
            
          $scope.results = results;
        };
        
        refreshPlayers();
        
        $scope.changeSortMode = function (mode) {
        	$scope.sortMode = mode;
          refreshPlayers();
        };
        
        $scope.toggleSortDir = function () {
        	$scope.sortDesc = !$scope.sortDesc;
          refreshPlayers();
        };
        
        $scope.changeMin = function () {
        	if ($scope.minNumber >= $scope.maxNumber)
          	$scope.minNumber = $scope.maxNumber - 1;
          else if ($scope.minNumber > 99)
          	$scope.minNumber = 99;
          else if ($scope.minNumber < 0)
          	$scope.minNumber = 0;
            
          refreshPlayers();
        };
        
        $scope.changeMax = function () {
        	if ($scope.maxNumber <= $scope.minNumber)
          	$scope.maxNumber = $scope.maxNumber + 1;
          else if ($scope.maxNumber < 1)
          	$scope.maxNumber = 1;
          else if ($scope.maxNumber > 100)
          	$scope.maxNumber = 100;
            
          refreshPlayers();
        };
        //^////////////////////^/
        //|////////////////////|/
        //|////////////////////|/        
        
    }]);
    
})(window.angular);
/*
When you are done, press the Update button at the top to save your work. Send us the link to your finished jsFiddle
*/