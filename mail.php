</<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    
</head>
<?php
    $to = 'bestellung@aladdin-bgl.de';
    $to1 = 'najibflc@gmail.com';
    $name = $_POST["name"];
    $vname = $_POST["vname"];
    $firma= $_POST["firma"];
    $email= $_POST["email"];
    $text= $_POST["message"];
    $street= $_POST["street"];   
    $telefon= $_POST["telefon"];
    $Haus= $_POST["Hausnr"];
    $Bezahl= $_POST["d_pay"];
    $dtime= $_POST["lieferzeit"];
    $post= $_POST["plz"];
    

    


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=UTF-8 ' . "\r\n";

    $message ='<table style="width:100%; font-size:20px">
    <tr>
        <td>'.$name.'  '.$vname.'</td>
    </tr><hr>
    <tr><td>Firma: '.$firma.'</td></tr><hr>
    <tr><td>Rufnummer: '.$telefon.'</td></tr><hr>
    <tr><td>Email: '.$email.'</td></tr><hr>
    <tr><td>Straße: '.$street. ' '.$Haus.'</td>  </tr><hr>
    <tr><td>PLZ: '.$post. ' Bergisch Gladbach</td>  </tr><hr>
    <tr><td>Text: '.$text.'</td></tr><hr>
    <tr><td>Lieferzeit: '.$dtime.'</td></tr><hr>
    <tr><td>Bezahlung: '.$Bezahl.'</td></tr><hr>

    </table><br><table style="width:100%; font-size:20px">
    <tr><th>Art</th><th>Product</th><th>extra zutaten</th><th>Preis<th></tr>';
    $x=json_decode($_POST['jso']);
    $i=0;
    while($i < count($x)){
   $message.='<tr><td>'.$x[$i]->art.'</td><td>'.$x[$i]->name.'</td><td>'.$x[$i]->discription.'</td><td>'.$x[$i]->price.'</tr><hr>';
   $i++;
   }

   $message.='<tr><td>Gesamtbetrag</td><td></td><td></td><td>'.$_POST['total'].'</td> </table>';

   $headers1 = 'MIME-Version: 1.0' . "\r\n";
   $headers1 .= "From: " . $to . "\r\n"; // Sender's E-mail
   $headers1 .= 'Content-type: text/html; charset=iso-8859-1 ' . "\r\n";

   $message1 ='<table style="width:100%; font-size:20px">
   <tr>
       <td>Wir haben Ihre Bestellung bekommen und wird gleich zugestellt
       <br> Vielen Dank, unser Restaurant auszuwählen...... Aladdin Restaurant</td>
   </tr><hr>
   <tr>
       <td>'.$name.'  '.$vname.'</td>
   </tr><hr>
   <tr><td>Firma: '.$firma.'</td></tr><hr>
   <tr><td>Rufnummer: '.$telefon.'</td></tr><hr>
   <tr><td>Email: '.$email.'</td></tr><hr>
   <tr><td>Straße: '.$street. ' '.$Haus.'</td>  </tr><hr>
   <tr><td>PLZ: '.$post. ' Bergisch Gladbach</td>  </tr><hr>
   <tr><td>Text: '.$text.'</td></tr><hr>
   <tr><td>Lieferzeit: '.$dtime.'</td></tr><hr>
   <tr><td>Bezahlung: '.$Bezahl.'</td></tr><hr>

   </table><br><table style="width:100%; font-size:20px">
   <tr><th>Art</th><th>Product</th><th>extra zutaten</th><th>Preis<th></tr>';
   $x=json_decode($_POST['jso']);
   $i=0;
   while($i < count($x)){
  $message1.='<tr><td>'.$x[$i]->art.'</td><td>'.$x[$i]->name.'</td><td>'.$x[$i]->discription.'</td><td>'.$x[$i]->price.'</tr><hr>';
  $i++;
  }

  $message1.='<tr><td>Gesamtbetrag</td><td></td><td></td><td>'.$_POST['total'].'</td> </table>';

   if (@mail($to1, $email, $message, $headers) && @mail($email,$to, $message1, $headers1))
    {
        echo "<script> location.href='complete.html'; </script>";
        exit;
    }else{
        echo 'failed';
    }

?>


<body>
    
</body>
</html>