app.controller('MainController', 
	['$scope', function($scope) 
    { 
        $scope.title = 'Coin Jar';
        $scope.nickels = 0;
        $scope.dimes = 0;
        $scope.quarters = 0;    
        
        $scope.nickelUp = function()
        {
            $scope.nickels += 1;
        }
        $scope.dimeUp = function()
        {
            $scope.dimes += 1;
        }
        $scope.quarterUp = function()
        {
            $scope.quarters += 1;
        }
        $scope.nickelDown = function()
        {
            $scope.nickels -= 1;
        }
        $scope.dimeDown = function()
        {
            $scope.dimes -= 1;
        }
        $scope.quarterDown = function()
        {
            $scope.quarters -= 1;
        }
    }
]);
