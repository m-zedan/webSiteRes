
var toatlprice=0;
        function  selection(i){
            if(i.value=="0"){
            document.getElementById("plz").innerHTML="bitte PLZ eingeben";}
            if (i.value=='1') {
                
               window.location.replace("Categery.html");}
                if (i.value=='2') {
                    
                    exportt(PLZ);
                    window.location.replace("Categery.html");  }
                    if (i.value=='3') {
                    
                       window.location.replace("Categery.html");
                    }
       
        }}
      
        const extra={};
            extra.doner=false;
            extra.scampi=false;
            extra.dimari=false;
            extra.knoblauch=false;
            extra.scharfe=false;
            extra.price=0;
            extra.zutatPrice=0;
            var itemscount=0;
  
        const size={};
        size.klein=false;
        size.normal=false;
        size.party=false;
        var cocsize='';
        function Cocktailsize(v){
            cocsize=v;
        }
        function cocktailWrite(){
          if(cocsize!='')return '('+cocsize+')';
            else return '';
        }
        (function(){
                      const addToCart=document.querySelectorAll(".btn-success");
                    addToCart.forEach(function(btn){
                btn.addEventListener("click",function(event){
                    const name=event.target.parentElement.parentElement.children[1].innerHTML;
                    const description=event.target.parentElement.parentElement.children[2].innerHTML;
                    const price=event.target.innerHTML;
             //  console.log(PLZ);
          var type=event.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.textContent;
                const items={};
                let itemName=event.target.parentElement.parentElement.children[1].textContent;
               items.name=itemName.trim();
  items.price=priceConvert(event.target.textContent.trim());
               toatlprice+=items.price;
               let cartItem=document.createElement('tr');
               cartItem.innerHTML='<td>'+type.trim()+'</td><td>'+items.name+cocktailWrite()+'<p class="small">'+description+'</p></td><td>Ohne</td>  <td>'+DecPoint(items.price.toFixed(2)+'€')+"€"+'</td> <td > <span class="fas fa-trash" style="cursor: pointer;" onclick="deleteItem(this)"></span></td></tr> ';	
             
               const cart=document.getElementById('cartitem');
               
               itemscount+=1;
              document.querySelector('.badge-danger').textContent=itemscount;
              
              var totalcart=document.getElementById('total');
              
              totalcart.children[3].textContent=toatlprice.toFixed(2)+'€';
              
              cart.insertBefore(cartItem,totalcart);
          document.getElementById('totalcheckout').textContent=toatlprice.toFixed(2)+'€';
          if(toatlprice>0){
            $('#checkout').removeAttr('disabled');
           
        }else{
           $('#checkout').attr('disabled','disabled');
           
        }
              
              Cocktailsize('');
             
              /*
                const items={};
                let itemName=event.target.parentElement.parentElement.previousElementSibling.children[1].textContent;
                items.name=itemName.trim();
              
              items.price=priceConvert(event.target.textContent.trim());
              //console.log(event.target.textContent);
              //console.log(items.price);
              toatlprice+=items.price;
              
           */
              });
            });
        
        })();
  
  
        function doner(v){
        extra.zutatPrice=priceConvert(v.parentElement.children[0].textContent.trim());
            if(v.checked){
        extra.doner=true;
          extra.price+=priceConvert(v.parentElement.children[0].textContent.trim());
        //console.log(extra.price);
        v.parentElement.parentElement.children[5].children[1].textContent=DecPoint(extra.price.toFixed(2)+'€')+"€";
    }
         else{extra.doner=false;
          extra.price-= priceConvert(v.parentElement.children[0].textContent.trim());
          v.parentElement.parentElement.children[5].children[1].textContent=DecPoint(extra.price.toFixed(2)+'€')+"€";
        }
        //console.log(extra.doner);
        }
        function scampi(v){
            extra.zutatPrice=priceConvert(v.parentElement.children[0].textContent.trim());
            if(v.checked){
    extra.scampi=true;
    extra.price+=priceConvert(v.parentElement.children[0].textContent.trim());
        //console.log(extra.price);
        v.parentElement.parentElement.children[5].children[1].textContent=DecPoint(extra.price.toFixed(2)+'€')+"€";
    }
         else{extra.scampi=false;
            extra.price-= priceConvert(v.parentElement.children[0].textContent.trim());
          v.parentElement.parentElement.children[5].children[1].textContent=DecPoint(extra.price.toFixed(2)+'€')+"€";
        }
        }
        function dimari(v){
        if(v.checked){
            extra.zutatPrice=priceConvert(v.parentElement.children[0].textContent.trim());
        extra.dimari=true;
        extra.price+=priceConvert(v.parentElement.children[0].textContent.trim());
        //console.log(extra.price);
        v.parentElement.parentElement.children[5].children[1].textContent=DecPoint(extra.price.toFixed(2)+'€')+"€";
    }
         else{
             extra.dimari=false;
             extra.price-= priceConvert(v.parentElement.children[0].textContent.trim());
          v.parentElement.parentElement.children[5].children[1].textContent=DecPoint(extra.price.toFixed(2)+'€')+"€";
         }
        }
        function knoblauch(v){
            extra.zutatPrice=priceConvert(v.parentElement.children[0].textContent.trim());
            if(v.checked){
        extra.knoblauch=true;
        extra.price+=priceConvert(v.parentElement.children[0].textContent.trim());
        //console.log(extra.price);
        v.parentElement.parentElement.children[5].children[1].textContent=DecPoint(extra.price.toFixed(2)+'€')+"€";
    }
         else{extra.knoblauch=false;
            extra.price-= priceConvert(v.parentElement.children[0].textContent.trim());
          v.parentElement.parentElement.children[5].children[1].textContent=DecPoint(extra.price.toFixed(2)+'€')+"€";
        }
        }
        function scharfe(v){
            extra.zutatPrice=priceConvert(v.parentElement.children[0].textContent.trim());
  
            if(v.checked){
        extra.scharfe=true;
        extra.price+=priceConvert(v.parentElement.children[0].textContent.trim());
        //console.log(extra.price);
        v.parentElement.parentElement.children[5].children[1].textContent=DecPoint(extra.price.toFixed(2)+'€')+"€";
        }
         else{
             extra.scharfe=false;
             extra.price-= priceConvert(v.parentElement.children[0].textContent.trim());
          v.parentElement.parentElement.children[5].children[1].textContent=DecPoint(extra.price.toFixed(2)+'€')+"€";
            }
        }
  (function(){
  const small=document.querySelectorAll('.info-small');
  small.forEach(function(btn){
    btn.addEventListener('click',function(event){
  document.querySelectorAll('.collapse').hide;
  extra.price=priceConvert(event.target.textContent);
  extra.scampi=false;
            extra.dimari=false;
            extra.knoblauch=false;
            extra.scharfe=false;
            extra.doner=false;
            extra.zutatPrice=0;
            size.klein=true;
            size.normal=false;
            size.party=false;
        $(event.target.parentElement.parentElement.nextElementSibling).collapse('show');
        event.target.parentElement.parentElement.nextElementSibling.innerHTML=' <td> Dönerfleisch <p>0,90€ </p><input type="checkbox"  onclick="doner(this)"></td><td>Scampi &nbsp; &nbsp; &nbsp; <p>0,90€</p><input  type="checkbox" name="" onclick="scampi(this)"></td><td>Frutti di mari<p> 0,90€ </p><input class="fruttis" type="checkbox" name="" onclick="dimari(this)"></td><td>Knoblauch <p> 0€</p><input class="knobs" type="checkbox" name="" onclick="knoblauch(this)"></td><td>scharfe Sauce<p> 0€</p> <input class="scarfes" type="checkbox" name="" onclick="scharfe(this)"></td><td><p>Einfügen</p><button class="btn btn-warning" onclick="addPizzatoCart(this)">'+DecPoint(extra.price.toFixed(2))+'€'+'</button></td>';
    })
  })
  
  const large=document.querySelectorAll('.info-large');
  const party=document.querySelectorAll('.info-party');
  large.forEach(function(btn){
    btn.addEventListener('click',function(event){
        document.querySelectorAll('.collapse').hide;
        extra.price=priceConvert(event.target.textContent.trim());
        extra.doner=false;
            extra.scampi=false;
            extra.dimari=false;
            extra.knoblauch=false;
            extra.scharfe=false;
            extra.zutatPrice=0;
            size.klein=false;
            size.normal=true;
            size.party=false;
            
        $(event.target.parentElement.parentElement.nextElementSibling).collapse('show');
        event.target.parentElement.parentElement.nextElementSibling.innerHTML='	<td id="doner">Dönerfleisch <p> 1,20€</p> <input type="checkbox" name=""  onclick="doner(this)" ></td><td>Scampi  &nbsp; &nbsp; &nbsp;<p> 1,20€</p>   <input type="checkbox" name=""  onclick="scampi(this)"></td><td>Frutti di mari <p>1,20€</p> <input type="checkbox" name="" onclick="dimari(this)"></td><td>Knoblauch  <p>0€</p><input type="checkbox" name="" onclick="knoblauch(this)"></td><td>scharfe Sauce <p>0€</p> <input type="checkbox" name="" onclick="scharfe(this)"></td><td><p>Einfügen</P><button class="btn btn-warning" onclick="addPizzatoCart(this)">'+DecPoint(extra.price.toFixed(2))+'€'+'</button></td>';	})
        });
  party.forEach(function(btn){
  
    btn.addEventListener('click',function(event){
        document.querySelectorAll('.collapse').hide;
        extra.price=priceConvert(event.target.textContent.trim());
       // console.log(extra.price);
    extra.doner=false;
            extra.scampi=false;
            extra.dimari=false;
            extra.knoblauch=false;
            extra.scharfe=false;
            extra.zutatPrice=0;
            size.klein=false;
            size.normal=false;
            size.party=true;
            
         $(event.target.parentElement.parentElement.nextElementSibling).collapse('show');
        event.target.parentElement.parentElement.nextElementSibling.innerHTML='	<td id="doner">Dönerfleisch <p>4,50€</p> <input type="checkbox" name=""  onclick="doner(this)"></td><td>Scampi  &nbsp; &nbsp; &nbsp; <p>4,50€ </p>  <input type="checkbox" name=""  onclick="scampi(this)"></td><td>Frutti di mari <p>4,50€ </p><input type="checkbox" name="" onclick="dimari(this)"></td><td>Knoblauch <p> 0€</p><input type="checkbox" name="" onclick="knoblauch(this)"></td><td>scharfe Sauce <p>0€</p> <input type="checkbox" name="" onclick="scharfe(this)"></td><td><p>Einfügen</p><button class="btn btn-warning" onclick="addPizzatoCart(this)">'+DecPoint(extra.price.toFixed(2))+'€'+'</button></td>';	
        })
  });
  
  })();
  function priceConvert(v){
    var itemprice=v;
      if(itemprice[1]==','){
               var intPrice=parseInt(itemprice[0]);
               var decprice=parseFloat("0."+(itemprice)[2]+(itemprice)[3]);}
               else{ var intPrice=parseInt(itemprice[0]+itemprice[1]);
               var decprice=parseFloat("0."+(itemprice)[3]+(itemprice)[4]);}
               var priceNO=intPrice+decprice;
               return priceNO;
  }
  function DecPoint(v){
    var itemprice=v;
      if(itemprice[1]=='.'){
               var intPrice=parseInt(itemprice[0]);
               var decprice=parseFloat("0."+(itemprice)[2]+(itemprice)[3]);
               return intPrice+','+itemprice[2]+itemprice[3];
            }
              if(itemprice[2]=='.'){
                   var intPrice=parseInt(itemprice[0]+itemprice[1]);
               var decprice=parseFloat("0."+(itemprice)[3]+(itemprice)[4]);
               return intPrice+','+itemprice[3]+itemprice[4];
              }
               if(itemprice[3]=='.'){
                  var intPrice=parseInt(itemprice[0]+itemprice[1]+itemprice[2]);
               var decprice=parseFloat("0."+(itemprice)[4]+(itemprice)[5]);
               return intPrice+','+itemprice[4]+itemprice[5];
               }
  
  }
  function zutaten(){
  var content="";
  if(extra.doner){
  content+="<p>Dönerfleisch &nbsp;"+DecPoint(extra.zutatPrice.toFixed(2))+'€</p>';
  }
  if(extra.scampi){
    content+="<p>Scampi &nbsp;"+DecPoint(extra.zutatPrice.toFixed(2))+'€</p>';
  }
  if(extra.dimari){
    content+="<p>Frutti di Mari &nbsp;"+DecPoint(extra.zutatPrice.toFixed(2))+'€</p>';
  }
  if(extra.knoblauch){
    content+="<p>Knoblauch &nbsp;"+'0,00€</p>';
  }
  if(extra.scharfe){
    content+="<p>Scharefe Sauce &nbsp;"+'0,00€</p>';
  }
  if(!extra.doner&&!extra.dimari&&!extra.knoblauch&&!extra.scampi&&!extra.scharfe){	content+="<p>Ohne<p>";
  }
  
  
  return  content;
  }
  function pizzatype(){
    if(size.klein){return 'klein';}
    if(size.normal){return 'mittlere';}
    if(size.party){return 'party';}
  }
  function addPizzatoCart(v){
    const items={};
                let itemName=v.parentElement.parentElement.previousElementSibling.children[1].textContent;
                items.name=itemName.trim();
                const description=v.parentElement.parentElement.previousElementSibling.children[2].innerHTML;
                
                var type=v.parentElement.parentElement.parentElement.parentElement.previousElementSibling.textContent;
              items.price=priceConvert(v.textContent.trim());
              //console.log(event.target.textContent);
              //console.log(items.price);
              toatlprice+=items.price;
              
              let cartItem=document.createElement('tr');
               cartItem.innerHTML=  '<td>'+type+'</td><td>'+items.name+'('+pizzatype()+')'+'<p class="small">'+description+'</p></td><td>'+zutaten()+'</td>  <td>'+DecPoint(items.price.toFixed(2)+'€')+"€"+'</td> <td > <span class="fas fa-trash" style="cursor: pointer;" onclick="deleteItem(this)"></span></td></tr> ';	
               itemscount+=1;
              document.querySelector('.badge-danger').textContent=itemscount;
              
               const cart=document.getElementById('cartitem');
            
              var totalcart=document.getElementById('total');
              totalcart.children[3].textContent=DecPoint(toatlprice.toFixed(2))+'€';
              cart.insertBefore(cartItem,totalcart); 
              document.getElementById('totalcheckout').textContent=toatlprice.toFixed(2)+'€';
              if(toatlprice>0){
                $('#checkout').removeAttr('disabled');
               
            }else{
               $('#checkout').attr('disabled','disabled');
               
            }              
 
            }
  function deleteItem(v){
  
  var price=priceConvert(v.parentElement.previousElementSibling.textContent);
  toatlprice-=price;
  itemscount-=1;
              document.querySelector('.badge-danger').textContent=itemscount;
              
  var totalcart=document.getElementById('total');
              totalcart.children[3].textContent=toatlprice.toFixed(2)+'€';
              v.parentNode.parentNode.parentNode.removeChild(v.parentNode.parentNode);
              document.getElementById('totalcheckout').textContent=toatlprice.toFixed(2)+'€';
              if(toatlprice>0){
                $('#checkout').removeAttr('disabled');
               
            }else{
               $('#checkout').attr('disabled','disabled');
               
            }
            }

    