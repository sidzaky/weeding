<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Weeding extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	function __construct() {

		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
		header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
		$method = $_SERVER['REQUEST_METHOD'];
		if($method == "OPTIONS") {
			die();
		}
		parent::__construct();
	}
	
	public function index()
	{
		
		$this->load->library('user_agent');
		$mobile=$this->agent->is_mobile();
		if($mobile) {
			$this->load->view('header_mobile');	
			$this->load->view('Weedingmobile_v');
		}
		else {
			$this->load->view('header_desktop');	
			$this->load->view('Weeding_v');
		}
	}

	public function kehadiran(){
		$this->db->insert('kehadiran', $_POST);
		return true;
	}

	public function ucapan(){
		$this->db->insert('ucapan', $_POST);
		return true;
	}
}
