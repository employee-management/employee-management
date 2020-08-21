<?php
class Employee
{
	private $_id;
	private $_name;
	private $_email;
	private $_phone;
	private $_city;

	public function id(){
		return $this->_id;
	}

	public function name(){
		return $this->_name;
	}

	public function email(){
		return $this->_email;
	}

	public function phone(){
		return $this->_phone;
	}

	public function city(){
		return $this->_city;
	}

	public function setId($id){
		$this->_id = $id;
	}

	public function setName($name){
		$this->_name = $name;
	}

	public function setEmail($email){
		$this->_email = $email;
	}

	public function setPhone($phone){
		$this->_phone = $phone;
	}

	public function setCity($city){
		$this->_city = $city;
	}

	public function hydrate(array $data){
		foreach($data as $key => $value){
			$method = 'set'.ucfirst($key);
			if(method_exists($this, $method)){
				$this->$method($value);
			}
		}
	}
	public function __construct(array $data){
		$this->hydrate($data);
	}
}
?>