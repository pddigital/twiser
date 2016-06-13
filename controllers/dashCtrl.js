angular.module('twiser').controller('dashCtrl', function($scope, twitterService, twitterUserShow, twitterAuthUser, $q, $rootScope){

  twitterService.initialize();

  $scope.usersDataArray = [];

  $scope.getUserError = false;


  $scope.deleteCard = function (user) {
    var index = $scope.users.indexOf(user);
    if (index != -1) {
        $scope.users.splice(index, 1);
    }
}

  $scope.getUserData = function() {
      twitterService.getTwitterRequest(twitterUserShow.requestUrl + $scope.userInput).then(function(data) {
            if (data) {
              $scope.getUserError = false;
              data.profile_image_url = data.profile_image_url.replace("_normal", '');
              data.created_at = new Date(Date.parse(data.created_at.replace(/( \+)/, ' UTC$1')));
              $scope.usersDataArray.push(data);
              console.log($scope.usersDataArray);
              $scope.data = data;
              console.log($scope.data);
              $scope.userInput = "";
              $scope.numCards = $scope.usersDataArray.length;
            }
            else if (!data){
              $scope.getUserError = true;
            }
    })}


  $scope.getAuthUser = function() {
        twitterService.getTwitterRequest(twitterAuthUser.requestUrl).then(function(data) {
            if (data) {
              $scope.authData = data;
              console.log($scope.authData.screen_name);
            }
            else if (!data){
              console.log('Error on auth user get');
            }
    })}

})
