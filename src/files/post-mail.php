<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8'; //кодировка письма
$mail->setLanguage('ru', 'PHPMailer/language/'); //задать язык для отображения ошибок
$mail->isHTML(true); // включить html теги в письме

// от кого письмо
$mail->setFrom('admin@automaster.one', 'Автопомощь');

// кому письмо
$recipients = [
  'alexx4891@mail.ru' => 'Person One',
  'alexx4891@yandex.ru' => 'Person Two',
];

foreach ($recipients as $email => $name) {
  $mail->addAddress($email, $name);
}

// $mail->addAddress('alexx4891@mail.ru');
// $mail->addAddress('alexx4891@yandex.ru');


//Добавляет адрес кому отправится скрытая копия:
// $mailer->AddBCC('Ящик 3'); 


// тема письма
$mail->Subject = 'Заявка с automaster.one';

// текст письма
$body = '<h1>Уведомление с сайта automaster.one:</h1><br/><br/>';

if (trim(!empty($_POST['name']))) {
  $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p><br/>';
}

if (trim(!empty($_POST['phone']))) {
  $body .= '<p><strong>Телефон:</strong> ' . $_POST['phone'] . '</p><br/>';
}

if (trim(!empty($_POST['message']))) {
  $body .= '<p><strong>Сообщение:</strong> ' . $_POST['message'] . '</p><br/>';
}

//------------прикрепить файл:
// if (!empty($_FILES['myfile']['tmp_name'])) {
//   //путь загрузки файла:
//   $filePath = __DIR__ . "/files/" . $_FILES['myfile']['name'];
//   //загрузить файл:
//   if (copy($_FILES['myfile']['tmp_name'], $filePath)) {
//     $fileAttach = $filePath;
//     $body .= '<p><strong>Файл в прлижоении</strong> <a href="' . $fileAttach . '">' . $_FILES['myfile']['name'] . '</a></p><br/>';
//     $mail->addAttachment($fileAttach);
//   }
//   // $mail->addAttachment($_FILES['myfile']['tmp_name'], $_FILES['myfile']['name']);
//   // $body .= '<p><strong>Прикреплен файл:</strong> <a href="' . $_FILES['myfile']['tmp_name'] . '">' . $_FILES['myfile']['name'] . '</a></p><br/>';

// }

$mail->Body = $body;

// Отправляем
if (!$mail->send()) {
  $message = 'Ошибка';
} else {
  $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

// if (isset($_POST['name'])) {
//   $body .= 'Имя: ' . $_POST['name'] . '<br />';
// }
// $body .= 'Имя: ' . $_POST['name'] . '<br />';
// $body .= 'Email: ' . $_POST['email'] . '<br />';
// $body .= 'Телефон: ' . $_POST['phone'] . '<br />';
// $body .= 'Сообщение: ' . $_POST['message'] . '<br />';
// $body .= 'Интересует проект: ' . $_POST['project'] . '<br />';
// $mail->Body = $body;