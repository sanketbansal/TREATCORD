
app.controller('dialogs',['$scope','$mdDialog','appServe',function($scope,$mdDialog,appServe)
{
  $scope.maindata=appServe.data;
$scope.open_button=function(){
  $mdDialog.show({
    common:$mdDialog.preset(),
    templateUrl:'/views/html/dialog.tmpl.html',
    controller:"open_data",
    clickOutsideToClose:true
  })
}

$scope.update_button=function(){

   $mdDialog.show({
     templateUrl:'/views/html/dialog.tmpl.html',
     controller:"update_data",
     clickOutsideToClose:true
  })
}

$scope.add_button=function(){
       $mdDialog.show({
          templateUrl:'/views/html/dialog.tmpl.html',
          controller:"add_data",
          clickOutsideToClose:true
   })
 }

}])

app.controller('add_data',function($scope,appServe){
  $scope.route=['/#/add/personaldetail','/#/add/diagnosis','/#/add/medicines']
  $scope.data={'personalDetail':[
        {'fields':'Name','value':''},
        {'fields':'Age','value':''},
        {'fields':'Sex','value':''},
        {'fields':'Contact','value':''},
        {'fields':'Address','value':''},
        {'fields':'City','value':''},
        {'fields':'State','value':''},
        {'fields':'Country','value':''}
        ],
        'diagnosis':[
            {'fields':'Disease','value':''}
        ],
        'medicine':[
            {'fields':'','value':''},
        ]}
  $scope.done=false;
  $scope.next_button=function() {appServe.data=$scope.data; $scope.done=true; }
})

app.controller('open_data',function($scope,appServe){
  $scope.route=['/#/open/personaldetail','/#/open/diagnosis','/#/open/medicines']
  $scope.check="hellew";
})

app.controller('update_data',function($scope,appserve){
    $scope.route=['/#/update/personaldetail','/#/update/diagnosis','/#/update/medicines']
    $scope.check="oh,yeah!";
})