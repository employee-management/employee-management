<?php
	require_once('model/Employee.php');
	require_once('model/EmployeeManager.php');
	require_once('../connection/connection.php');

	global $conn;
	$type =  $_POST['type'];
	//echo ($type);
		if($type == 1){

			$emp = new Employee([
			'name'=>$_POST['name'],
			'email'=>$_POST['email'],
			'phone'=>$_POST['phone'],
			'city'=>$_POST['city']
		]);
		
		$manager = new EmployeeManager($conn);
		$response = $manager->add($emp);
			
			//echo ($name.'=>'.$email.'=>'.$phone.'=>'.$city);
	}

	if($type == 2){
		$emp = new Employee([
			'id'=>$_POST['id'],
			'name'=>$_POST['name'],
			'email'=>$_POST['email'],
			'phone'=>$_POST['phone'],
			'city'=>$_POST['city']
		]);

		$manager = new EmployeeManager($conn);
		$manager->update($emp);
	}

	if($type == 3){
		$id = $_POST['id'];
		$manager = new EmployeeManager($conn);
		$manager->delete($id);
	}

	if($type == 4){
		$manager = new EmployeeManager($conn);
		$manager->getList();
	}
	/*$emp = new Employee([
		'id'=>3,
		'name'=>'Albert-Mary',
		'email'=>'dorce',
		'phone'=>3566778,
		'city'=>'delmas'
	]);
	$emp1 = new Employee([
		'id'=>3,
		'name'=>'Albert',
		'email'=>'dorce',
		'phone'=>3566778,
		'city'=>'PV'
	]);
	$manager = new EmployeeManager($conn);
	//$manager->add($emp);
	//$manager->add($emp1);	
	//$manager->get(3);
	//$manager->update($emp);
	//$manager->delete(3);
	$manager->getList();*/
?>