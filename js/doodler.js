angular.module("Doodle", [])
	.controller('doodle-controller', ['$scope', function($scope) {
		var dataURL = canvas.toDataURL();
		$scope.doodles = [
			{'drawing':'img', 'selected':false}
		];
		$scope.addDoodle = function() {
			$scope.doodles.push({'drawing':$scope.newDoodle, 'selected':false})
			$scope.newDoodle = '';
		}
		$scope.clearSelected = function() {
			$scope.doodles = $scope.doodles.filter(function(item) {
				return !item.selected;
			})
		}
	}]);