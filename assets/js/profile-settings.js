/*
Author       : Dreamguys
Template Name: Rocket Medecin - Bootstrap Template
Version      : 1.0
*/
var educationCounter = 1;
function saveEducationInfo(){
	/*	Post:
		{"DoctorNo":"4","Degree":"Degree 1","CollegeName":"College 1","Completedyear":"2012","orderby":"1"},
		{"DoctorNo":"4","Degree":"Degree 2","CollegeName":"College 2","Completedyear":"2008","orderby":"2"},
		{"DoctorNo":"4","Degree":"Degree 3","CollegeName":"College 3","Completedyear":"2006","orderby":"3"}
		
		PUT:
		{"DoctorEduId":"6","Degree":"Degree 20","CollegeName":"College 20","Completedyear":"2010","orderby":"4"}
		DoctorNo:"4",Degree:"Degree 2",CollegeName:"College 2",Completedyear:"2008",orderby:"2",
			DoctorNo:"4",Degree:"Degree 3",CollegeName:"College 3","Completedyear":"2006","orderby":"3"
		*/
		alert(educationCounter);
		var degreeID = document.getElementById("degreeID").value;
		var collegeID = document.getElementById("collegeID").value;
		var yocID = document.getElementById("yocID").value;
	
			//alert("docID"+docIDGlobal);
		let data3={
			DoctorNo:docIDGlobal,Degree:degreeID,CollegeName:collegeID,Completedyear:yocID,orderby:"1"
		};
		var d1=JSON.stringify(data3);
		var d2;
		//console.log(JSON.stringify(data3));
		if(educationCounter >= 2)
		{	var i;
			for( i=1;i<educationCounter;i++)
			{	
				var degreeID = document.getElementById("degreeID"+i).value;
				var collegeID = document.getElementById("collegeID"+i).value;
				var yocID = document.getElementById("yocID"+i).value;
				d2  = {DoctorNo:docIDGlobal,Degree:degreeID,CollegeName:collegeID,Completedyear:yocID,orderby:educationCounter};
				
				d1 += ","+ JSON.stringify(d2) ;
				alert(d1.toString());
			}
		}
		console.log("data3: "+d1)
		//alert(data3);
		//alert(JSON.stringify(data3));
		
			$.ajax({
					url: "http://localhost/rocketmed/api/DocEdu/",
					method:"POST",
					async: false,
					contentType: 'application/json; charset=utf-8',
					data:"["+d1+"]",
					timeout: 36000, 
					error: function(xhr, status, error) {
						  var err = eval("(" + xhr.responseText + ")");
						  console.log("Error Message"+err.Message);		
						alert("Error saving Clinic Info. Pease Try Again");
						
					},
					success: function(response1){
							console.log(response1);
							console.log("Educcation Info Updated : ");
							alert('Education Info Updated Successfully !!');
							}
				});
				
	}	
(function($) {
    "use strict";
	
	// Pricing Options Show
	
	$('#pricing_select input[name="rating_option"]').on('click', function() {
		if ($(this).val() == 'price_free') {
			$('#custom_price_cont').hide();
		}
		if ($(this).val() == 'custom_price') {
			$('#custom_price_cont').show();
		}
		else {
		}
	});
	
	// Education Add More
	
    $(".education-info").on('click','.trash', function () {
		$(this).closest('.education-cont').remove();
		//educationCounter -= 1;
		return false;
    });
	
    $(".add-education").on('click', function () {
		
		var educationcontent = '<div class="row form-row education-cont">' +
			'<div class="col-12 col-md-10 col-lg-11">' +
				'<div class="row form-row">' +
					'<div class="col-12 col-md-6 col-lg-4">' +
						'<div class="form-group">' +
							'<label>Degree</label>' +
							'<input type="text" class="form-control" id="degreeID'+educationCounter+'">' +
						'</div>' +
					'</div>' +
					'<div class="col-12 col-md-6 col-lg-4">' +
						'<div class="form-group">' +
							'<label>College/Institute</label>' +
							'<input type="text" class="form-control" id="collegeID'+educationCounter+'">' +
						'</div>' +
					'</div>' +
					'<div class="col-12 col-md-6 col-lg-4">' +
						'<div class="form-group">' +
							'<label>Year of Completion</label>' +
							'<input type="text" class="form-control" id="yocID'+educationCounter+'">' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-2 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
		'</div>';
		educationCounter++;
		$(".education-info").append(educationcontent);
		
        return false;
    });
	
	// CLinic info - Add more
 $(".experience-info").on('click','.trash', function () {
		$(this).closest('.experience-cont').remove();
		return false;
    });
	
	// Experience Add More
	
    $(".experience-info").on('click','.trash', function () {
		$(this).closest('.experience-cont').remove();
		return false;
    });

    $(".add-experience").on('click', function () {
		
		var experiencecontent = '<div class="row form-row experience-cont">' +
			'<div class="col-12 col-md-10 col-lg-11">' +
				'<div class="row form-row">' +
					'<div class="col-12 col-md-6 col-lg-4">' +
						'<div class="form-group">' +
							'<label>Hospital Name</label>' +
							'<input type="text" class="form-control">' +
						'</div>' +
					'</div>' +
					'<div class="col-12 col-md-6 col-lg-4">' +
						'<div class="form-group">' +
							'<label>From</label>' +
							'<input type="text" class="form-control">' +
						'</div>' +
					'</div>' +
					'<div class="col-12 col-md-6 col-lg-4">' +
						'<div class="form-group">' +
							'<label>To</label>' +
							'<input type="text" class="form-control">' +
						'</div>' +
					'</div>' +
					'<div class="col-12 col-md-6 col-lg-4">' +
						'<div class="form-group">' +
							'<label>Designation</label>' +
							'<input type="text" class="form-control">' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-2 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
		'</div>';
		
        $(".experience-info").append(experiencecontent);
        return false;
    });
	
	
	// Awards Add More
	
    $(".awards-info").on('click','.trash', function () {
		$(this).closest('.awards-cont').remove();
		return false;
    });

    $(".add-award").on('click', function () {

        var regcontent = '<div class="row form-row awards-cont">' +
			'<div class="col-12 col-md-5">' +
				'<div class="form-group">' +
					'<label>Awards</label>' +
					'<input type="text" class="form-control">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-5">' +
				'<div class="form-group">' +
					'<label>Year</label>' +
					'<input type="text" class="form-control">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-2">' +
				'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
				'<a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a>' +
			'</div>' +
		'</div>';
		
        $(".awards-info").append(regcontent);
        return false;
    });
	
	// Membership Add More
	
    $(".membership-info").on('click','.trash', function () {
		$(this).closest('.membership-cont').remove();
		return false;
    });

    $(".add-membership").on('click', function () {

        var membershipcontent = '<div class="row form-row membership-cont">' +
			'<div class="col-12 col-md-10 col-lg-5">' +
				'<div class="form-group">' +
					'<label>Memberships</label>' +
					'<input type="text" class="form-control">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-2 col-lg-2">' +
				'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
				'<a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a>' +
			'</div>' +
		'</div>';
		
        $(".membership-info").append(membershipcontent);
        return false;
    });
	
	// Registration Add More
	
    $(".registrations-info").on('click','.trash', function () {
		$(this).closest('.reg-cont').remove();
		return false;
    });

    $(".add-reg").on('click', function () {

        var regcontent = '<div class="row form-row reg-cont">' +
			'<div class="col-12 col-md-5">' +
				'<div class="form-group">' +
					'<label>Registrations</label>' +
					'<input type="text" class="form-control">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-5">' +
				'<div class="form-group">' +
					'<label>Year</label>' +
					'<input type="text" class="form-control">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-2">' +
				'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
				'<a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a>' +
			'</div>' +
		'</div>';
		
        $(".registrations-info").append(regcontent);
        return false;
    });
	
})(jQuery);


