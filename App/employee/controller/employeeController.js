(function($){
	insert_record();
	view_record();
   //get_record();
    update_record();
    delete_record();
})(jQuery)

function tr_factory(data, index){
	let tr = '<tr id = "'+data.id+'">';
	tr += '<td>'+index+'</td>';
	tr += '<td>'+data.name+'</td>';
	tr += '<td>'+data.email+'</td>';
	tr += '<td>'+data.phone+'</td>';
	tr += '<td>'+data.city+'</td>';

	tr += '<td><a href="#editEmployeeModal" class = "edit" data-toggle="modal">';
	tr += '<i class="material-icons update" data-toggle="tooltip"';
	tr += 'data-id="'+data.id+'"';
	tr += 'data-name="'+data.name+'"';
	tr += 'data-email="'+data.email+'"';
	tr += 'data-phone="'+data.phone+'"';
	tr += 'data-city="'+data.city+'"';
	tr += 'title="Edit"></i></a>';
	tr += '<a href="#deleteEmployeeModal" class="delete" data-id="'+data.id+'" data-toggle="modal"><i class="material-icons" data-toggle="tooltip"'; 
	tr += 'title="Delete"></i></a></td>';
	return tr;
}

function view_record(){
	$.ajax({
		data: {type:'4'},
		url : "http://localhost/jquery/employee-management-app/App/employee/employeeRouter.php",
		method: 'post',
		success: function(response)
		{
			response = $.parseJSON(response);
			if(response.length>0){
				response.forEach(function(data,index){
					let tr = tr_factory(data,index);
					$('#t_body').append(tr);
				})
			}else{

			}
		}
	});
}

function insert_record(){
	$(document).on('click','#btn-add',function(e) {
		var data = $("#user_form").serialize();
		$('#addEmployeeModal').modal('hide');
		$.ajax({
			data: data,
			type: "post",
			url: "http://localhost/jquery/employee-management-app/App/employee/employeeRouter.php",
			success: function(dataResult){
					//var dataResult = JSON.parse();
					//console.log(dataResult);
					if(dataResult == 'success'){
						$('#addEmployeeModal').modal('hide');
						alert('Data added successfully !'); 
                        location.reload();						
					}
					else {
					   alert(dataResult);
					}
			}
		});
	});
	}

	function update_record(){
		$(document).on('click','.update',function(e){
			var id=$(this).attr("data-id");
			var name=$(this).attr("data-name");
			var email=$(this).attr("data-email");
			var phone=$(this).attr("data-phone");
			var city=$(this).attr("data-city");
			$('#id_u').val(id);
			$('#name_u').val(name);
			$('#email_u').val(email);
			$('#phone_u').val(phone);
			$('#city_u').val(city);
		});

		$(document).on('click','#update',function(e){
			var data = $("#update_form").serialize();
			$.ajax({
				data:data,
				type:"post",
				url:"http://localhost/jquery/employee-management-app/App/employee/employeeRouter.php",
				success: function(dataResult){
					//var dataResult = $.parseJSON(dataResult);
					if(dataResult == 'success'){
						$('#editEmployeeModal').modal('hide');
						alert('Data updated successfully !'); 
                        location.reload();	

					}else{
						alert(dataResult);
					}
				}
			});
		});
	}

	function delete_record(){
		$(document).on("click", ".delete", function() { 
			var id=$(this).attr("data-id");
			$('#id_d').val(id);
		
		});

		$(document).on("click", "#delete", function() { 
		$.ajax({
			url: "http://localhost/jquery/employee-management-app/App/employee/employeeRouter.php",
			type: "POST",
			cache: false,
			data:{
				type:3,
				id: $("#id_d").val()
			},
			success: function(dataResult){
					if(dataResult == 'success'){
						$('#deleteEmployeeModal').modal('hide');
						var id = $("#id_d").val();
					$("#"+id).remove();
					}
			
			}
		});
	});
	}
