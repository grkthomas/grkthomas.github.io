
var cell_validator = function () 
{
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ctrl) 
        {
            var xy  = attr.cellvalidator.split(',');        
            console.log("y:"+xy[0]+" - x:",xy[1]);        
            var y = xy[0] , x = xy[1];
            function cellParser(v) 
            {
                var isValid = true;
                if( v == ' ' || ( v >= '0' && v <= '9' ) )
                    isValid = false;

                ctrl.$setValidity('cell_'+y+"_"+x,isValid);
                return  isValid ? v : undefined;
            }
            ctrl.$parsers.push(cellParser);
        }
    };
};


angular.module("app").directive("cellvalidator",cell_validator);
