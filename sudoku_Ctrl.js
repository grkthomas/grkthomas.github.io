/* global angular */
var init_vars = { cell:[], type:[], size:0, indexes:[] };

var sudoku_Ctrl = function($q,$scope,$state,$sessionStorage)
{
    $scope.$storage = $sessionStorage.$default(init_vars);
    
    //$scope.cell=[];//$scope.type=[];//$scope.size=0;//$scope.indexes=[];
    var box_l = [],box_s = 0;
   
    
    // VARIABLES MANAGEMENT //////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    var init_arrays = function(s)
    {
        var d = $q.defer();   
        
        $scope.$storage.size = s;
        box_s = Math.sqrt(s);
        for(var i=0; i<s; i++) 
        {
            $scope.$storage.type[i] = [];
            $scope.$storage.cell[i] = [];
            for(var j=0; j<s; j++)
            {
                $scope.$storage.type[i][j] = false;
                $scope.$storage.cell[i][j] = ' ';//0;//(i*s)+j;
            }    
        }  
        
        for(var k=0,i=0; i<s; i+=box_s)
            for(j=0; j<s; j+=box_s,k++)
                box_l[k] = [i,i+box_s,j,j+box_s];
                
        for(i=0; i<s; i++) $scope.$storage.indexes[i] = i; 
        
       d.resolve();
       
       return d.promise;
    };
    
     init_arrays(9);
    
    //////////////////////////////////////////////////////////////////////////
        
    // STYLE /////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    
    $scope.cellstyle = function(x,y)
    {
        var bl,br,bu,bd,s="dashed ",b="solid ",n="none ";
        
        if( x === 0 || x%box_s === 0 ) bl = b; else bl = s;                
        if(        (x+1)%box_s === 0 ) br = b; else br = n;              
        if( y === 0 || y%box_s === 0 ) bu = b; else bu = s;               
        if(        (y+1)%box_s === 0 ) bd = b; else bd = n;
                
        return {           
            "border-top-style" : bu, "border-bottom-style" : bd, 
            "border-left-style" : bl, "border-right-style" : br
        };
    };
          
    // BUTTONS ///////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////   
    $scope.goto_setnumbers = function(s) {
        init_arrays(s).then(function(r){$state.go("sudoku.choose_numbers");});
    };
    
    $scope.clear  = function(){init_arrays($scope.$storage.size).then(); };   
};

angular.module("app").controller("sudokuCtrl",sudoku_Ctrl);
