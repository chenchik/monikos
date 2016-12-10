var app = angular.module('myApp', []);
    app.controller('flashCtrl', function($scope, $http) {
   var nextIndex;
   $scope.select =[];
   $scope.names = [];
   $scope.finalList = [];
   $scope.front = "";
   $scope.back = "";
   $scope.percent;
   var index = 1;
   var tempFront = "";
   var tempBack = "";

    //dcedits
    $scope.firstLoad = true;
    $scope.getlid = function(lid){
    	console.log(lid);
      var config = {
      headers : {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
      };
      var data = $.param({
        lid: lid
      });

      var listurl = "/db/get_specific_list.php";
      $http.post(listurl, data, config)
      .then(function (response) {
          console.log(response.data.drugnames);
          console.log("ABOUT TO PRINT SCOPE SELECT");
          $scope.select = response.data.drugnames.split(",");
          console.log("SELCT " + $scope.select[0]);
          console.log("select list " + $scope.select.length);
          $scope.percent =  index + "/" + $scope.select.length;
          $scope.percentSign = Math.ceil((index/$scope.select.length)*100) + "%";
          document.getElementById("pb").style.width=$scope.percentSign;
          		console.log($scope.percentSign);

          $scope.getallTheDrugs();
      });
      $scope.firstLoad = false;



    }
    //end dcedits

    $scope.home = function(){
      window.location = window.location.origin + "/mvc/public/home/";
    }


  	$(document).ready(function() {
  		$('.flashcard').on('click', function() {
    		$('.flashcard').toggleClass('flipped');
  		});
	});

      $scope.getallTheDrugs = function(){



        var url = "/db/get_drugs.php";
        $http.get(url)
        .then(function (response) {
        	$scope.names = response;
        	$scope.allDrugs = response.data.records;
        	console.log($scope.allDrugs[0].Generic);
            console.log("IS SELECT STILL THE SAME " + $scope.select);


                for (d=0; d < $scope.select.length; d++){
                    for(var x = 0; x < $scope.allDrugs.length; x++) {
                        if ($scope.allDrugs[x].Generic == $scope.select[d]){
                            var a = $scope.allDrugs[x];
                            $scope.finalList.push($scope.allDrugs[x]);
                        }

                    }

                }




            console.log("final list " + $scope.finalList[0].Generic);

            $scope.names = $scope.finalList;

	nextCard = function(){
		console.log
// 		$('.flashcard').toggleClass('flipped');
		tempFront = "";
		tempBack = "";
		console.log($scope.finalList[index-1].Class);
		index++;


		if (document.getElementById('fBrand').checked){
			tempFront += "Brand: " + $scope.finalList[index-1].Brand + "<br />"
		}
		if (document.getElementById('fGeneric').checked){
			tempFront +=  "Generic: " + $scope.finalList[index-1].Generic + "<br />"

		}
		if (document.getElementById('fClass').checked){
			tempFront +=  "Class: " + $scope.finalList[index-1].Class + "<br />"
		}
		if (document.getElementById('fBlackBoxWarning').checked){
			tempFront +=  "BBW: " + $scope.finalList[index-1].BlackBoxWarning + "<br />"
		}
		if (document.getElementById('fIndication').checked){
			tempFront +=  "Indication: " + $scope.finalList[index-1].Indication + "<br />"
		}

		if (document.getElementById('bBrand').checked){
			tempBack += "Brand: " + $scope.finalList[index-1].Brand + "<br />"
		}
		if (document.getElementById('bGeneric').checked){
			tempBack +=  "Generic: " + $scope.finalList[index-1].Generic + "<br />"

		}
		if (document.getElementById('bClass').checked){
			tempBack +=  "Class: " + $scope.finalList[index-1].Class + "<br />"
		}
		if (document.getElementById('bBlackBoxWarning').checked){
			tempBack +=  "BBW: " + $scope.finalList[index-1].BlackBoxWarning + "<br />"
		}
		if (document.getElementById('bIndication').checked){
			tempBack +=  "Indication: " + $scope.finalList[index-1].Indication + "<br />"
		}

		document.getElementById("front").innerHTML=tempFront;
		document.getElementById("back").innerHTML= tempBack;
		$scope.percent = index + "/" + $scope.select.length;
        $scope.percentSign = Math.ceil((index/$scope.select.length)*100) + "%";
		document.getElementById("pb").style.width=$scope.percentSign;
		console.log($scope.percentSign);

		document.getElementById("percentpb").innerHTML=$scope.percent;

	}

	redo = function(){
	 index = 1;
	 tempBack ="";
	 tempFront = "";
	 $scope.percent =  index + "/" + $scope.select.length;
     $scope.percentSign = Math.ceil((index/$scope.select.length)*100) + "%";
	 
	 	document.getElementById("pb").style.width=$scope.percentSign;
		document.getElementById("percentpb").innerHTML=$scope.percent;
		if (document.getElementById('fBrand').checked){
			tempFront += "Brand: " + $scope.finalList[index-1].Brand + "<br />"
		}
		if (document.getElementById('fGeneric').checked){
			tempFront +=  "Generic: " + $scope.finalList[index-1].Generic + "<br />"

		}
		if (document.getElementById('fClass').checked){
			tempFront +=  "Class: " + $scope.finalList[index-1].Class + "<br />"
		}
		if (document.getElementById('fBlackBoxWarning').checked){
			tempFront +=  "BBW: " + $scope.finalList[index-1].BlackBoxWarning + "<br />"
		}
		if (document.getElementById('fIndication').checked){
			tempFront +=  "Indication: " + $scope.finalList[index-1].Indication + "<br />"
		}

		if (document.getElementById('bBrand').checked){
			tempBack += "Brand: " + $scope.finalList[index-1].Brand + "<br />"
		}
		if (document.getElementById('bGeneric').checked){
			tempBack +=  "Generic: " + $scope.finalList[index-1].Generic + "<br />"

		}
		if (document.getElementById('bClass').checked){
			tempBack +=  "Class: " + $scope.finalList[index-1].Class + "<br />"
		}
		if (document.getElementById('bBlackBoxWarning').checked){
			tempBack +=  "BBW: " + $scope.finalList[index-1].BlackBoxWarning + "<br />"
		}
		if (document.getElementById('bIndication').checked){
			tempBack +=  "Indication: " + $scope.finalList[index-1].Indication + "<br />"
		}

		document.getElementById("front").innerHTML=tempFront;
		document.getElementById("back").innerHTML= tempBack;
		
		document.getElementById("toggle").click(); 

	}

	prevCard = function(){
		if (index > 1){
		tempFront = "";
		tempBack = "";
		index--;

		if (document.getElementById('fBrand').checked){
			tempFront += "Brand: " + $scope.finalList[index-1].Brand + "<br />"
		}
		if (document.getElementById('fGeneric').checked){
			tempFront +=  "Generic: " + $scope.finalList[index-1].Generic + "<br />"

		}
		if (document.getElementById('fClass').checked){
			tempFront +=  "Class: " + $scope.finalList[index-1].Class + "<br />"
		}
		if (document.getElementById('fBlackBoxWarning').checked){
			tempFront +=  "BBW: " + $scope.finalList[index-1].BlackBoxWarning + "<br />"
		}
		if (document.getElementById('fIndication').checked){
			tempFront +=  "Indication: " + $scope.finalList[index-1].Indication + "<br />"
		}

		if (document.getElementById('bBrand').checked){
			tempBack += "Brand: " + $scope.finalList[index-1].Brand + "<br />"
		}
		if (document.getElementById('bGeneric').checked){
			tempBack +=  "Generic: " + $scope.finalList[index-1].Generic + "<br />"

		}
		if (document.getElementById('bClass').checked){
			tempBack +=  "Class: " + $scope.finalList[index-1].Class + "<br />"
		}
		if (document.getElementById('bBlackBoxWarning').checked){
			tempBack +=  "BBW: " + $scope.finalList[index-1].BlackBoxWarning + "<br />"
		}
		if (document.getElementById('bIndication').checked){
			tempBack +=  "Indication: " + $scope.finalList[index-1].Indication + "<br />"
		}


		document.getElementById("front").innerHTML=tempFront;
		document.getElementById("back").innerHTML= tempBack;
		$scope.percent =  index + "/" + $scope.select.length;
		$scope.percentSign = Math.ceil((index/$scope.select.length)*100) + "%";
		document.getElementById("pb").style.width=$scope.percentSign;
		console.log($scope.percentSign);
		document.getElementById("percentpb").innerHTML=$scope.percent;
	}
	}

		function makeIterator(array){

   		 return {
       		next: function(){
           		return nextIndex < array.length ?
               		{value: array[nextIndex++], done: false} :
               		{done: true};
       			}
    		}
		}

		var it = makeIterator($scope.finalList);
		var card = it.next().value;

		if (document.getElementById('fBrand').checked){
			tempFront += "Brand: " + $scope.finalList[index-1].Brand + "<br />"
		}
		if (document.getElementById('fGeneric').checked){
			tempFront +=  "Generic: " + $scope.finalList[index-1].Generic + "<br />"

		}
		if (document.getElementById('fClass').checked){
			tempFront +=  "Class: " + $scope.finalList[index-1].Class + "<br />"
		}
		if (document.getElementById('fBlackBoxWarning').checked){
			tempFront +=  "BBW: " + $scope.finalList[index-1].BlackBoxWarning + "<br />"
		}
		if (document.getElementById('fIndication').checked){
			tempFront +=  "Indication: " + $scope.finalList[index-1].Indication + "<br />"
		}

		if (document.getElementById('bBrand').checked){
			tempBack += "Brand: " + $scope.finalList[index-1].Brand + "<br />"
		}
		if (document.getElementById('bGeneric').checked){
			tempBack +=  "Generic: " + $scope.finalList[index-1].Generic + "<br />"

		}
		if (document.getElementById('bClass').checked){
			tempBack +=  "Class: " + $scope.finalList[index-1].Class + "<br />"
		}
		if (document.getElementById('bBlackBoxWarning').checked){
			tempBack +=  "BBW: " + $scope.finalList[index-1].BlackBoxWarning + "<br />"
		}
		if (document.getElementById('bIndication').checked){
			tempBack +=  "Indication: " + $scope.finalList[index-1].Indication + "<br />"
		}
		document.getElementById("front").innerHTML=tempFront;
		document.getElementById("back").innerHTML= tempBack;


	});

	}


	});
