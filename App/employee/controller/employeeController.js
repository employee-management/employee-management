(function($){
	insert_record();
	view_record();
    /*get_record();
    update_record();
    delete_record();*/
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
                       // location.reload();						
					}
					else {
					   alert(dataResult);
					}
			}
		});
	});
	}
