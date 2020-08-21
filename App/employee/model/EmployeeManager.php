<?php
class EmployeeManager
{
	private $_db;

	public function add(Employee $emp)
	{
		$q = $this->_db->prepare('INSERT INTO employee(name,email,phone,city) VALUES(:name,:email,:phone,:city)');

		$q->execute(array(':name'=>$emp->name(),':email'=>$emp->email(),':phone'=>$emp->phone(),':city'=>$emp->city()));
		if($q){
			return 'success';
		}else{
			return 'failed';
		}
	}

	public function get($id)
	{
		$id = (int) $id;
		$q = $this->_db->query('SELECT * FROM employee WHERE id = '.$id);

		$data = $q->fetch(PDO::FETCH_ASSOC);

		echo json_encode($data);
	}

	public function getList()
	{
		$emp = [];

		$q = $this->_db->query('SELECT * FROM employee ORDER BY name');

		while ($data = $q->fetch(PDO::FETCH_ASSOC))
		{
			$emp[] = $data;
		}

		echo json_encode($emp);
	}

	public function update(Employee $emp)
	{
		$q = $this->_db->prepare('UPDATE employee SET name = :name, email = :email, phone = :phone, city = :city WHERE id = :id');

		    $q->execute(array(':name'=>$emp->name(),':email'=>$emp->email(),':phone'=>$emp->phone(),':city'=>$emp->city(),
				':id'=>$emp->id()));
		    echo 'success';
	}

	public function delete($id)
	{
		$id = (int) $id;

		$q = $this->_db->query('DELETE FROM employee WHERE id = '.$id);
		if($q){
			echo 'success';
		}
	}

	public function setDb(PDO $db)
	{
		$this->_db = $db;
	}

	public function __construct($db)
	{
		$this->setDb($db);
	}
}
?>