angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.requestTest', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/requestTest.html',
        controller: 'requestTestCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.testResults'
      2) Using $state.go programatically:
        $state.go('tabsController.testResults');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('tabsController.testResults', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/testResults.html',
        controller: 'testResultsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/testResults.html',
        controller: 'testResultsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.permissionShare'
      2) Using $state.go programatically:
        $state.go('tabsController.permissionShare');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page4
      /page1/tab2/page4
      /page1/tab3/page4
  */
  .state('tabsController.permissionShare', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/permissionShare.html',
        controller: 'permissionShareCtrl'
      },
      'tab2': {
        templateUrl: 'templates/permissionShare.html',
        controller: 'permissionShareCtrl'
      },
      'tab3': {
        templateUrl: 'templates/permissionShare.html',
        controller: 'permissionShareCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.page'
      2) Using $state.go programatically:
        $state.go('tabsController.page');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page6
      /page1/tab2/page6
  */
  .state('tabsController.page', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/page.html',
        controller: 'pageCtrl'
      },
      'tab2': {
        templateUrl: 'templates/page.html',
        controller: 'pageCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')


});