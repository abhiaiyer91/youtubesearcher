'use strict';

angular.module('youtubeAppApp')
  .controller('MainCtrl', function($scope, $http, $sce) {
    
    $scope.embedUrl = "http://www.youtube.com/embed/";
    
    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    };

    $scope.searchYouTube = function(keyword) {
      
      $scope.keyword = keyword;

      var url = "https://www.googleapis.com/youtube/v3/search";
      var request = {
        key: "AIzaSyCWx8epSrJ8dvlLn7YutD5qB2y_FBrEaRg",
        part: "snippet",
        maxResults: 8,
        order: "viewCount",
        q: keyword,
        type: "video",
        videoEmbeddable: true,
      };

      $http({
        method: 'GET',
        url: url,
        params: request
      }).
      success(function(data) {
        $scope.results = data.items;
      }).
      error(function() {
        alert('error');
      });
    };

  });
