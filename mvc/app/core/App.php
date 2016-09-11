<?php

class App {

	//define('INC_ROOT', dirname(__DIR__));

	protected $controller = "home";

	protected $method = "index";

	protected $params = [];

	public function __construct(){
		
		//print_r($this->parseUrl());
		$url = $this->parseUrl();
		//check to see if controller exists
		if(file_exists( INC_ROOT . '/app/controllers/' . $url[0] . '.php')){
//			turn this controller into the controller mentioned in the url.
			$this->controller = $url[0];
			unset($url[0]);
		}
//		require once connects to the contrller
		require_once(INC_ROOT . '/app/controllers/'. $this->controller .'.php');
		//echo "echoing controller " . $this->controller;

		$this->controller = new $this->controller;

		//var_dump($this->controller);

		//handling method, method points to home.php or whatever you want as a controller
		if(isset($url[1])){
			if(method_exists($this->controller, $url[1])){
				$this->method = $url[1];
				unset($url[1]);
			}
		}

		//handling parameter, 
		$this->params = $url ? array_values($url) : [];
		//print_r($this->params);

		//echo "controller is : "; 
		//var_dump($this->controller);
		//echo "method is : " . $this->method . " ";
		//echo "params is : " . $this->params . " ";

		//calls method in first paramater and sets paramters for called array in second paramater
		//calls the method in the declared controller, which is set by url;
		call_user_func_array([$this->controller, $this->method], $this->params);
	}

	public function parseUrl(){
		if(isset($_GET['url'])){
		//	echo $_GET['url'];

			return $url = explode('/',filter_var(rtrim($_GET['url'], '/'), FILTER_SANITIZE_URL));
		}
	}

}

?>