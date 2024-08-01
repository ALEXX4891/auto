<?php


// переключение режима работы:
// $mode = 'dev'; // режим разработки
$mode = 'prod'; // режим продакшн


if ($mode == 'dev') {
  $str = '{"function":"getAll","table":"apartments","all":"*"}';
  // $str = '{"function":"goActive","table":"contractor","idContractor":2,"isActive":"1"}';
  // $str = '{"table":"contractor","idContractor":2,"name":"ООО « Жизнь большое название 2»","taxNumber":978777112,"address":"г. Тюмень. ул. Фармана Салманова, д. 2","telephone":"+7 987 333 31-12","email":"email2@example.com","function":"update"}';
  $inputData = $str;
} else if ($mode == 'prod') {
  $inputData = file_get_contents('php://input');
}


// блокировка получения данныех, если не переданы параметры:

if (!$inputData) {
  die('No data');
}
// echo $inputData;


if ($inputData) {
  $data = json_decode($inputData, true);
  // var_dump($data);
  // echo '<pre>';
  // print_r($data);
  // echo '</pre>';
  $arrKeys = array_keys($data);
  $arrData = [];

  foreach ($arrKeys as $key) {
    if ($key == 'function') {
      $arrData['function'] = $data[$key];
      $function = $data[$key];
    }
    if ($key == 'all') {
      $arrData['all'] = $data[$key];
      $all = $data[$key];
    }
    if ($key == 'table') {
      $arrData['table'] = $data[$key];
      $table = $data[$key];
    }
    if ($key == 'idContractor') {
      $arrData['id'] = $data[$key];
      $id = $data[$key];
    }
    if ($key == 'name') {
      $arrData['name'] = $data[$key];
      $name = $data[$key];
    }
    if ($key == 'taxNumber') {
      $arrData['taxNumber'] = $data[$key];
      $taxNumber = $data[$key];
    }
    if ($key == 'address') {
      $arrData['address'] = $data[$key];
      $address = $data[$key];
    }
    if ($key == 'telephone') {
      $arrData['telephone'] = $data[$key];
      $telephone = $data[$key];
    }
    if ($key == 'email') {
      $arrData['email'] = $data[$key];
      $email = $data[$key];
    }
    if ($key == 'isActive') {
      $arrData['isActive'] = $data[$key];
      $isActive = $data[$key];
    }
    if ($key == 'idCarton') {
      $arrData['id'] = $data[$key];
      $id = $data[$key];
    }
    if ($key == 'date') {
      $arrData['date'] = $data[$key];
      $date = $data[$key];
    }
    if ($key == 'widthCarton') {
      $arrData['widthCarton'] = $data[$key];
      $widthCarton = $data[$key];
    }
    if ($key == 'lengthCarton') {
      $arrData['lengthCarton'] = $data[$key];
      $lengthCarton = $data[$key];
    }
    if ($key == 'typeCarton') {
      $arrData['typeCarton'] = $data[$key];
      $typeCarton = $data[$key];
    }
    if ($key == 'coming') {
      $arrData['coming'] = $data[$key];
      $coming = $data[$key];
    }
    if ($key == 'expense') {
      $arrData['expense'] = $data[$key];
      $expense = $data[$key];
    }
    if ($key == 'price') {
      $arrData['price'] = $data[$key];
      $price = $data[$key];
    }
    if ($key == 'nameContractor') {
      $arrData['nameContractor'] = $data[$key];
      $nameContractor = $data[$key];
    }

  }

  // if ($operation == 'UPDATE') {
  //   $sql = $arrData['operation'];
  // }
  // if ($operation == 'DELETE') {
  //   $sql = $arrData['operation'];
  // }
  // if ($operation == 'INSERT') {
  //   $sql = $arrData['operation'];
  // }

  // print_r($data);
  // print_r($idContractor);
  // print_r($arr);
  // echo '<pre>';
  // print_r($arrData);
  // echo '</pre>';


  // if ($idContractor) {
  //   $sql = "UPDATE `contractor` SET `name` = '$name', `taxNumber` = '$taxNumber', `address` = '$address', `telephone` = '$telephone', `email` = '$email' WHERE `idContractor` = $idContractor";
  // } else {
  //   $sql = "INSERT INTO `contractor` (`name`, `taxNumber`, `address`, `telephone`, `email`) VALUES ('$name', '$taxNumber', '$address', '$telephone', '$email')";
  // }
  // $res = json_encode($arrData, true);
  // echo $res;
}

// $dbh = new PDO('mysql:host=localhost;dbname=plant', 'root', '');
// $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// $sth = $dbh->prepare($sql);
if ($function == 'getAll') {
  $sql = 'SELECT ' . $all . ' FROM ' . $table;

  if ($mode == 'dev') {
    echo $sql;
    echo '<br>';
  } 
}

if ($function == 'noActive' || $function == 'goActive') { // не работает
  $sql = 'UPDATE ' . $table . ' SET ' . 'isActive = ' . $isActive . ' WHERE ' . 'idContractor = ' . $idContractor;

  if ($mode == 'dev') {
    echo $sql;
    echo '<br>';
  } 
}
if ($function == 'update' && $table == 'contractor') { //работает
  $sql = "UPDATE `contractor` SET 
  `name` = '$name', 
  `taxNumber` = '$taxNumber', 
  `address` = '$address', 
  `telephone` = '$telephone', 
  `email` = '$email' 
  WHERE `idContractor` = $id";

  if ($mode == 'dev') {
    echo $sql;
    echo '<br>';
  } 
}

if ($function == 'update' && $table == 'carton') { // не работает
  $sql = "UPDATE `carton` SET 
  `date` = '$date',
  `name` = '$name',
  `widthCarton` = '$widthCarton',
  `lengthCarton` = '$lengthCarton',
  `typeCarton` = '$typeCarton',
  `coming` = '$coming',
  `expense` = '$expense',
  `price` = '$price',
  `nameContractor` = '$nameContractor'
  WHERE `idCarton` = $idCarton";

  if ($mode == 'dev') {
    echo $sql;
    echo '<br>';
  } 
}

// if ($function == 'delete') {
//   $sql = "DELETE FROM $table WHERE `idCarton` = $idCarton";
//   if ($mode == 'dev') {
//     echo $sql;
//     echo '<br>';
//   }
// }

 
if ($function == 'create') {
  $sql = "INSERT INTO `contractor` (`name`, `taxNumber`, `address`, `telephone`, `email`, `idContractor`) VALUES ('$name', '$taxNumber', '$address', '$telephone', '$email', '$idContractor')";
  if ($mode == 'dev') {
    echo $sql;
    echo '<br>';
  }
}



// $sth->execute();



//   $data = json_decode($inputData, true);
//   print_r($data);
//   $idContractor = $data['idContractor'] ? $data['idContractor'] : '';
//   $name = $data['name'] ? $data['name'] : '';
//   $taxNumber = $data['taxNumber']  ? $data['taxNumber'] : '';
//   $address = $data['address'] ? $data['address'] : '';
//   $telephone = $data['telephone'] ? $data['telephone'] : '';
//   $email = $data['email'] ? $data['email'] : '';
// }
// print_r($data);

// die('STOP');
function getData($sql)
{

  // конфигурация подключения к БД:
  $servername = "localhost";
  $username = "wwserver_siberia";
  $password = "n1WbPE%u";
  $dbname = "wwserver_siberia";
  $contractor = [];
  $limit = '';
  $offset = '';


  try {
    $dbh = new PDO('mysql:host=' . $servername . ';dbname=' . $dbname, $username, $password); // подключение к базе данных
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // установка атрибута ошибок
  } catch (PDOException $e) { // обработка исключения
    echo "Connection failed: " . $e->getMessage(); // вывод сообщения об ошибке
  }

  // $sql = $operation . ' ' . $all . ' FROM ' . $table;
  // "SELECT * FROM Contractor"
  // echo $sql;
  $sth = $dbh->prepare($sql); // подготовка запроса
  $sth->execute(); // выполнение запроса
  $array = $sth->fetchAll(PDO::FETCH_ASSOC); // получение всех данных

  //преобразование полученного массива в JSON:
  $json = json_encode($array, JSON_UNESCAPED_UNICODE);
  //вывод JSON:
  echo $json;

  //закрытие подключения:
  $sth = null;
  $dbh = null;
}

if ($mode == 'prod') {
  getData($sql);
}
