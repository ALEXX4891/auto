<?php
$inputData = file_get_contents('php://input');

if (!$inputData) {
  die('No data');
}

if ($inputData) {
  $data = json_decode($inputData, true);
  $arrKeys = array_keys($data);
  $arrData = [];

  foreach ($arrKeys as $key) {

    if ($key == 'name') {
      // $arrData['function'] = $data[$key];
      $name = $data[$key];
    }
    if ($key == 'phone') {
      // $arrData['all'] = $data[$key];
      $phone = $data[$key];
    }
    if ($key == 'email') {
      // $arrData['table'] = $data[$key];
      $email = $data[$key];
    }
    if ($key == 'message') {
      // $arrData['id'] = $data[$key];
      $message = $data[$key];
    }
    if ($key == 'project') {
      // $arrData['function'] = $data[$key];
      $project = $data[$key];
    }
    if ($key == 'numbers_of_rooms') {
      // $arrData['all'] = $data[$key];
      $numbers_of_rooms = $data[$key];
    }
    if ($key == 'area') {
      // $arrData['area'] = $data[$key];
      $area = $data[$key];
    }
    if ($key == 'balcony') {
      // $arrData['id'] = $data[$key];
      $balcony = $data[$key];
    }
    if ($key == 'dressing_room') {
      // $arrData['dressing_room'] = $data[$key];
      $dressing_room = $data[$key];
    }
    if ($key == 'taxNumber') {
      // $arrData['taxNumber'] = $data[$key];
      $taxNumber = $data[$key];
    }
    if ($key == 'side_2') {
      // $arrData['side_2'] = $data[$key];
      $side_2 = $data[$key];
    }
    if ($key == 'side_3') {
      // $arrData['side_3'] = $data[$key];
      $side_3 = $data[$key];
    }
    if ($key == 'guest_bathroom') {
      // $arrData['guest_bathroom'] = $data[$key];
      $guest_bathroom = $data[$key];
    }
    if ($key == 'kitchen_living_room') {
      // $arrData['kitchen_living_room'] = $data[$key];
      $kitchen_living_room = $data[$key];
    }
  }
}

// несколько получателей
$contacts = [
  // "info@sibir.com",
  "alexx4891@mail.ru",
  // more emails
];

$to = implode(", ", $contacts);
$from = 'info@sibir.com';

// тема письма
$subject = 'Заказ звонка с siberia-dev.ru';

// текст письма
// $message = 'Пользователь' . $_POST['name'] . ' отправил вам письмо:<br />' . $_POST['message'] . '<br />
// Связяться с ним можно по email <a href="mailto:' . $_POST['email'] . '">' . $_POST['email'] . '</a>';
$message = "{$name} заказал звонок на номер:<br />{$phone}.<br />
Связяться с ним можно по email <a href=\"mailto:{$email}\">{$email}</a>.";

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: {$from}\r\n";
$headers .= "Bcc: {$to}\r\n";
$headers .= "Date: " . date(DATE_RFC2822);

// Отправляем
mail($to, $subject, $message, $headers);
echo json_encode('OK!');


// header('Location: ' . index.html);
