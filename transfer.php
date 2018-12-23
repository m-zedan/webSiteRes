<?php
 $to = 'all4malek@gmail.com';
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
 
 

 


 $headers = 'MIME-Version: 1.0' . "\r\n";
 $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
 $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

 $message ='<table style="width:100%; font-size:20px">
     <tr>
         <td>'.$name.'  '.$vname.'</td>
     </tr><hr>
     <tr><td>Firma: '.$firma.'</td></tr><hr>
     <tr><td>Rufnummer: '.$telefon.'</td></tr><hr>
     <tr><td>Email: '.$email.'</td></tr><hr>
     <tr><td>Straße: '.$street. ' '.$Haus.'</td>  </tr><hr>
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
    print_r($message);

?>
