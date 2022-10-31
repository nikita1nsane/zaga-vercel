<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

function debuger($data, $title)
{
	if (!empty($data["tildaspec-tildacaptcha"])) { return false; }
	$log = "\n------------------------\n";
	$log .= date("Y.m.d G:i:s") . "\n";
	$log .= (strlen($title) > 0 ? $title : 'DEBUG') . "\n";
	$log .= print_r($data, 1);
	$log .= "\n------------------------\n";
	file_put_contents(dirname(getcwd()) . '/bitrix24/logs/' . $title . '_' . date('d-m-y') . '.log', $log, FILE_APPEND);
	return true;
}

// debuger($_POST, 'tilda');

function curl($url, $data)
{
	$data = json_encode($data);
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_TIMEOUT, 10);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	return json_decode(curl_exec($ch));
}

function dphone($ph)
{
	$phone = preg_replace("/[^0-9]/", '', $ph);
	if (substr($phone, 0, 1) == "7") {
		$phone = substr($phone, 1);
	} elseif (substr($phone, 0, 1) == "8") {
		$phone = substr($phone, 1);
	}
	return $phone;
}



function phoneFormat($phone)
{
	return preg_replace('/^(\d{1})(\d{3})(\d{3})(\d{2})(\d+)$/iu', '+$1 $2 $3-$4-$5', preg_replace('/[^0-9]/', null, $phone)); // формат телефона +7 999 999-99-99
}

function b24SendLead($jsData)
{
	$url = "https://tochka360.bitrix24.ru/rest/3854/lks5d4ibptq1vp92/";

	$data = [
		'title' => "Заголовок с нового сайта zaga-game.ru",
		'name' => $jsData["name"],
		'email' => $jsData["mail"],
		'phone' => $jsData["phone"],
		'mw_u_source'    => htmlspecialchars(trim($jsData['t_src'])),
		'mw_u_medium'    => htmlspecialchars(trim($jsData['t_mdm'])),
		'mw_u_campaign'    => htmlspecialchars(trim($jsData['t_cmp'])),
		'mw_u_content'    => htmlspecialchars(trim($jsData['t_cnt'])),
		'mw_u_term'    => htmlspecialchars(trim($jsData['t_trm'])),
		'mw_u_yid'    => htmlspecialchars(trim($jsData['yid'])),
		'mw_u_roistat'    => htmlspecialchars(trim($jsData['roistat'])),
		// 'city_ip'    => htmlspecialchars(trim($jsData['city_ip'])),
		// 'region_ip'    => htmlspecialchars(trim($jsData['region_ip'])),
		// 'country_ip'    => htmlspecialchars(trim($jsData['country_ip'])),
		'from_page'    => htmlspecialchars(trim($jsData['t_aep'])),
		'mw_u_gid'    => htmlspecialchars(trim($jsData['gid'])),
		'dialer_region'    => htmlspecialchars(trim($jsData['place'])),
		'client_type' => htmlspecialchars(trim($jsData['Type'])),
		'link' => htmlspecialchars(trim($jsData['from_page'])),
		'good'    => htmlspecialchars(trim($jsData['good'])),
		// 'city'    => htmlspecialchars(trim($jsData['city'])),
		// 'comment' => (!empty($jsData["where_will_they_stand"])) ? $jsData["where_will_they_stand"] . "<br>" . $jsData["square"] . "<br>" . $jsData["ceiling_height"] . "<br>" . $jsData["room_temperature"] : "",
		// 'adress' => (!empty($jsData["country_ip"])) ? $jsData["country_ip"]."<br>".$jsData["region_ip"]."<br>".$jsData["city_ip"] : "",
		'site' => "zaga-osnova.vercel.app",
	];

	// if ($data['title'] == "КДК | Квиз корзины")
	// {
	// 	$data['comment'] = "Какая продукция вас интересует? ".$_POST["Production"]."<br>"."Укажите размер кондиционера (длина х ширина х глубина; мм) ".$_POST["Size"]."<br>"."На какой тип фасада нужно установить? ".$_POST["Facade"]."<br>"."Какой декор предпочитаете? ".$_POST["Decor"];
	// }

	// if (!empty($data["comment"]))
	// {
	// 	$data['comment'] = explode("&lt;br&gt;", $data['comment']);
	// 	$html = "";
		
	// 	for ($i = 0; $i < count($data['comment']); $i++) {
	// 		$html .= htmlspecialchars(trim($data['comment'][$i])) . "<br>";
	// 	}
		
	// 	$data["comment"] = $html;
	// }

	$phone = phoneFormat($data['phone']); // формат телефона +7 999 999-99-99

	$idcontact = null;

	if (!empty($phone))
	{
		$queryData = array(
			"entity_type" => "CONTACT",
			"type" => "PHONE",
			"values" => ['7' . dphone($phone)]
		);
	}
	else
	{
		$queryData = array(
			"entity_type" => "CONTACT",
			"type" => "PHONE",
			"values" => [$data["email"]]
		);
	}
	$qp = curl($url . 'crm.duplicate.findbycomm/', $queryData);
	if (isset($qp->result->CONTACT)) $idcontact = array_pop($qp->result->CONTACT);

	if (!$idcontact) {
		$queryData = array(
			'fields' => [
				'NAME' => $data['name'] ? $data['name'] : 'NONAME',
				'PHONE' => [['VALUE' => $phone, 'VALUE_TYPE' => 'WORK']],
				'EMAIL' => [['VALUE' => $data['email'], 'VALUE_TYPE' => 'WORK']],
				'UF_CRM_5C0F91D34B759' => 'rotado.ru',
				'UF_CRM_5C08BBB611343' => $data['mw_u_yid'],
				'UF_CRM_5C08BBB5B9F7D' => $data['mw_u_gid'],
				'UF_CRM_57457E8BC2CA5' => $data['title'],
				'UF_CRM_5845017E2144D' => $data['mw_u_roistat'],
				'UF_CRM_1464171769' => $data['from_page'],
				'UF_CRM_5735750901169' => $data['city'] ? $data['city'] : $data['region_ip'] . ', ' . $data['city_ip'],
				'TYPE_ID' => "CLIENT",
				'SOURCE_ID' => 'SELF',
				'ASSIGNED_BY_ID' => 3330,
			],
			'params' => array("REGISTER_SONET_EVENT" => "Y")
		);

		$result = curl($url . 'crm.contact.add/', $queryData);
		$idcontact = $result->result;
	}

	$queryData = array(
		'fields' => [
			'TITLE' => $data['title'],
			"CONTACT_ID" => $idcontact,
			'TYPE_ID' => "GOODS",
			'STAGE_ID' => "NEW",
			'OPENED' => "Y",
			'UF_CRM_1464171769' => $data["link"],
			'UF_CRM_1464171698' => $data['mw_u_source'],
			'UF_CRM_1464171675' => $data['mw_u_medium'],
			'UF_CRM_1464171733' => $data['mw_u_campaign'],
			'UF_CRM_1464171719' => $data['mw_u_content'],
			'UF_CRM_1464171749' => $data['mw_u_term'],
			'UF_CRM_1544025002' => $data['mw_u_yid'],
			'UF_CRM_1633960761099' => $data['client_type'],
			'UF_CRM_5834F3EE9CA7A' => $data['mw_u_roistat'],
			'UF_CRM_1463090993' => $data['city'] ? $data['city'] : $data['region_ip'] . ', ' . $data['city_ip'],
			'UF_CRM_57457E8B4F32F' => $data['title'],
			'UF_CRM_5C0F9A8C4787E' => $data['site'],
			'UF_CRM_1600684846935' => $data['good'],
			'UF_CRM_1603367319495' => $data['comment'],
			'UF_CRM_1544024966' => $data['mw_u_gid'],
			'UF_CRM_57457E8B573F8' => $data['from_page'],
			'UTM_SOURCE' => $data['mw_u_source'],
			'UTM_MEDIUM' => $data['mw_u_medium'],
			'UTM_CAMPAIGN' => $data['mw_u_campaign'],
			'UTM_CONTENT' => $data['mw_u_content'],
			'UTM_TERM' => $data['mw_u_term'],
			'UF_CRM_1544520483' => $data['site'],
			'UF_CRM_1660119895491' => $data["good"],
			'UF_CRM_1491954147' => $data["adress"],
		],
		'params' => [
			'REGISTER_SONET_EVENT' => 'Y' // уведомление ответственному
		]
	);

	echo json_encode(curl($url . 'crm.lead.add/', $queryData));
}
?>