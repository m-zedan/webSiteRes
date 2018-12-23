    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message
        var newcart=document.getElementById('cartitem');
      var items=[];
      
        var i=0;
        
        
       
     
        // form submit event
        form.on('submit', function(e) {
            e.preventDefault();   // prevent default form submit
            while(newcart.children[i+1]){
                var item={};
                item.art=newcart.children[i].children[0].innerHTML;
                item.name=newcart.children[i].children[1].textContent;
                item.discription=newcart.children[i].children[2].innerHTML;
                item.price=newcart.children[i].children[3].innerHTML;
         items.push(item);
                 i++;
            }

            var tot=document.getElementById('totalcart').innerHTML;
            var json=JSON.stringify(items);
        
         var nm=document.getElementById('nam').value;
         var vnm=document.getElementById('vnam').value;
         var frm=document.getElementById('firm').value;
         var eml=document.getElementById('eil').value;
         var tele=document.getElementById('tel').value;
         var st=document.getElementById('str').value;
         var hs=document.getElementById('husn').value;
         var post=document.getElementById('postlz').value;
         var dt=document.getElementById('dtime').value;
         var pay= document.getElementsByName('d-pay').value;
         var mg=document.getElementById('mesg').value;
         if(document.getElementById('bar-d').checked){
             pay='bar';
         }else{ pay='Paypal';}
         
                     /*  $name = $_POST["name"];
    $vname = $_POST["vname"];
    $firma= $_POST["firma"];
    $email= $_POST["email"];
    $text= $_POST["message"];
    $street= $_POST["street"];   
    $telefon= $_POST["telefon"];
    $Haus= $_POST["Hausnr"];
    $Bezahl= $_POST["d-pay"];
    $dtime= $_POST["lieferzeit"];
     */   
         $.ajax({
                url: 'mail.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data:{name:nm,vname:vnm,firma:frm,email:eml,telefon:tele,street:st,Hausnr:hs,plz:post,d_pay:pay,lieferzeit:dt,message:mg,jso:json,total:tot}, // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });