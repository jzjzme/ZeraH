angular.module('app.controllers', [])
  
.controller('requestTestCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('testResultsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('permissionShareCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.myFunc=function(){
        var endpoint = '############';
        var appkey = '############';

        var client = new RTM(endpoint, appkey);

        client.on('enter-connected', function () {
          console.log('Connected to Satori RTM!');

          var channelName = 'emaildoc';
          var message = {
            who: '%s'%inputx,
          };
          client.publish(channelName, message , function (pdu) {
            if (pdu.action === 'rtm/publish/ok') {
              console.log('Publish confirmed');
            } else {
              console.log('Failed to publish. RTM replied with the error ' +
                  pdu.body.error + ': ' + pdu.body.reason);
            }
          });
        });

        client.on('error', function (error) {
          console.log('Failed to connect', error);
        });

        client.start();
    }
            
    };

}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 