(function($){
	insert_record();
	/*view_record();
    get_record();
    update_record();
    delete_record();*/
})(jQuery)

function tr_factory(data){
	let tr = '<tr';
}

function view_record(){

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
