tuister.service('fileUpload', ['$http', function ($http) 
{
   this.uploadFileToUrl = function(file, uploadUrl, data) {
      var fd = new FormData();
      fd.append('imagen', file);
   
      $http.post(uploadUrl, fd, {
         transformRequest: angular.identity,
         headers: {'Content-Type': undefined, 'token': window.localStorage.getItem("token")},
         params : data
      }).then(function(response)
      {
         console.log(response);
      }), function(error)
      {
         console.log(error);
      }
   }
}]);