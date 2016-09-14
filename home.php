<?php 

class Home extends Controller {

	protected $user;

	public function __construct(){
		$this->user = $this->model('User');
	}


	public function index($name = '', $otherName = ''){
		
		//refers to user model
		//we can do $this->model becuase this class extends Controller, and ->model is incliuded in controller
		
		//creates the user
		$user = $this->model('User');
		$user->name = $name;
		echo "\n echoing user name " . $user->name;


		//directory path
		$this->view('home/index', ['name' => $user->name]);
	}

	public function test($param){
		echo " : " . $param . " : ";
	}

	public function create($username = '', $email = ''){
		//$this->user->create([
		User::create([
			'username' => $username,
			'email' => $email
		]);
	}


}

?>