app.controller('MainController', 
	['$scope', function($scope) 
    { 
        $scope.title = 'Coin Jar';
        $scope.nickels = 0;
        $scope.dimes = 0;
        $scope.quarters = 0;
        $scope.total = 0; 
        
        $scope.nickelUp = function()
        {
            $scope.nickels += 1;
            $scope.total = Math.floor($scope.sum() * 100) / 100;
            $scope.total =  $scope.parseTotal();
        }
        $scope.dimeUp = function()
        {
            $scope.dimes += 1;
            $scope.total = Math.floor($scope.sum() * 100) / 100;
            $scope.total = $scope.parseTotal();
        }
        $scope.quarterUp = function()
        {
            $scope.quarters += 1;
            $scope.total = Math.floor($scope.sum() * 100) / 100;
            $scope.total = $scope.parseTotal();
        }
        $scope.nickelDown = function()
        {
            $scope.nickels -= 1;
            $scope.total = Math.floor($scope.sum() * 100) / 100;
            $scope.total = $scope.parseTotal();
        }
        $scope.dimeDown = function()
        {
            $scope.dimes -= 1;
            $scope.total = Math.floor($scope.sum() * 100) / 100;
            $scope.total = $scope.parseTotal();
        }
        $scope.quarterDown = function()
        {
            $scope.quarters -= 1;
            $scope.total = Math.floor($scope.sum() * 100) / 100;
            $scope.total = $scope.parseTotal();
        }
        $scope.sum = function()
        {
            var total = ($scope.quarters * 0.25) + ($scope.dimes * 0.10) + ($scope.nickels * 0.05);
            return total;
        }
        $scope.parseTotal = function()
        {
            if ($scope.total % 1 == 0)
            {
                return $scope.total.toString() + ".00";
            }
            if (($scope.total * 100) % 10 === 0)
            {
                return $scope.total.toString() + "0";
            }
            else
            {
                return $scope.total.toString();
            }
        }
    }
]);
