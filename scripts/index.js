window.onload=function(){
    var sc=document.getElementById('screen');
	  var sc1=document.getElementById('screen1');
    var nums=document.getElementsByClassName('num');
	  var nums1=document.getElementsByClassName('num1');
    var dian=document.getElementsByClassName('dian')
    var ops=document.getElementsByClassName('oprator');//运算符加class oprator
	  var ops1=document.getElementsByClassName('oprator1');
    var equal=document.getElementById('denghao');
	  var equal1=document.getElementById('denghao1');
	  var firstnumber='', secondnumber='',yunSuanFu='';
    var f='',s='',fh='',m='';
	//给等号添加onclick;
	  // for(var i=0;i<nums.length;i++){
	  //   nums[i].onclick=function(){
   //      if(this.innerHTML!=='.'||firstnumber.indexOf('.')==-1){
   //          if(yunSuanFu==''){
   //            if(firstnumber=='.'){firstnumber=0+firstnumber;sc.innerHTML=firstnumber;}
   //              firstnumber=firstnumber+this.innerHTML;
   //              sc.innerHTML=firstnumber;
   //              this.style.background='red';
   //            }
   //              else{
   //                  secondnumber=secondnumber+this.innerHTML;
   //                  sc.innerHTML=secondnumber;
   //                  this.style.background='red';
   //              }
   //          }
   //        }
   //      }
		
   //       for(var i=0;i<nums.length;i++){
   //              nums[i].onmouseout=function(){
   //              this.style.background='white';
   //               }
   //          }
     
   //      for(var i=0;i<ops.length;i++){

   //          ops[i].onclick=function(){
   //             yunSuanFu=this.textContent.trim();

              
   //          }
   //      }

   //      equal.onclick=function(){
   //       if (yunSuanFu=='+') {sc.innerHTML=Number(firstnumber)+Number(secondnumber);}; 
   //        if (yunSuanFu=='-') {sc.innerHTML=Number(firstnumber)-Number(secondnumber);}; 
   //        if (yunSuanFu=='*') {sc.innerHTML=Number(firstnumber)*Number(secondnumber);}; 
	  //     if (yunSuanFu=='/') {sc.innerHTML=Number(firstnumber)/Number(secondnumber);}
   //        firstnumber='';secondnumber='';yunSuanFu='';
   //    }

// ---------------------大计算器------------------------
    var jiyi = document.getElementsByClassName('jiyi');
    var re = document.getElementById('rember');
    var kong  =document.getElementById('kong');
    
    for(i=0;i<nums1.length;i++){
      nums1[i].onclick = function(){
        if(this.innerHTML !== '.' || sc1.innerHTML.indexOf('.') ==-1){
          if(this.innerHTML !=='(-)'){
             if(fh ==''){
                // f= '';
                if(f=='.'){f=0+f;sc.innerHTML=f;}
                  f = f+this.innerHTML;
                  sc1.innerHTML = f;
              }
              else{
                    s = s+this.innerHTML;
                    sc1.innerHTML = s;
              }
        }
                else{
                    if(sc1.innerHTML.indexOf('-') !== -1){
                        if(fh ==''){
                        f = Math.abs(Number(f));
                        sc1.innerHTML = f;
                    }
                        else{
                            s = Math.abs(Number(s));
                            sc1.innerHTML = s;

                        }
                    }
                    else{
                        if(fh ==''){
                            f = '-' +f
                            sc1.innerHTML = f;
                    }
                        else{
                            s = '-' +s;
                            sc1.innerHTML = s;

                        }
                    }
                
                }
            }
        }
    }
   
          
            for(i=0;i<jiyi.length;i++){
                jiyi[i].onclick = function(){
                    if(this.innerHTML =='m+'){ re.style.display ='block';m =''+(Number(m)+Number(sc1.innerHTML))};
                    if(this.innerHTML =='m-'){ re.style.display ='none'; m = ''};
                    if(this.innerHTML =='mr'){  sc1.innerHTML = m;f=m;};
                    if(this.innerHTML == 'mc'){ re.style.display ='none';}
                }
            }
            kong.onclick = function(){
                sc1.innerHTML = 0;

                f = '';
                s = '';
                fh='';
                
            }

            var jiecheng=function(f){
                     if(f==0){
                         return 1;
                     }else{
                         return f*jiecheng(f-1);
                     }
            }
                    
     
        for(var i=0;i<ops1.length;i++){

        ops1[i].onclick=function(){
              fh=this.textContent.trim();
              if(fh=='sin'){sc1.innerHTML=Math.sin(Math.PI/(180/Number(f)));}
              if(fh=='cos'){sc1.innerHTML=Math.cos(Math.PI/(180/Number(f)));}
              if(fh=='tan'){sc1.innerHTML=Math.tan(Math.PI/(180/Number(f)));}
              if(fh=='sinh'){sc1.innerHTML=Math.sinh(Math.tan(Math.PI/(180/Number(f))));}
              if(fh=='cosh'){sc1.innerHTML=Math.cosh(Math.tan(Math.PI/(180/Number(f))));}
              if(fh=='tanh'){sc1.innerHTML=Math.tanh(Math.tan(Math.PI/(180/Number(f))));}
              if(fh=='%'){sc1.innerHTML=Number(f)/100;}
              if(fh=='x²'){sc1.innerHTML=Number(f)*Number(f);}
              if(fh=='x³'){sc1.innerHTML=Number(f)*Number(f)*Number(f);}
              if(fh=='π'){sc1.innerHTML=Math.PI;}
              if(fh=='x!'){sc1.innerHTML=jiecheng(f);}
              if(fh=='e'){sc1.innerHTML=Math.E;}
              if(fh=='In'){sc1.innerHTML=Math.log(f);if(sc1.innerHTML=='-Infinity'){sc1.innerHTML='-∞';}}
              if(fh=='log'){sc1.innerHTML=Math.log10(f);if(sc1.innerHTML=='-Infinity'){sc1.innerHTML='-∞';}}
              if(fh=='1/x'){sc1.innerHTML=1/f;if(sc1.innerHTML=='Infinity'){sc1.innerHTML='错误';}}
              if(fh=='Rand'){sc1.innerHTML=Math.random();}
              }
            

            
        
    }
      equal1.onclick=function(){
              if (fh=='+') {sc1.innerHTML=Number(f)+Number(s);}; 
              if (fh=='-') {sc1.innerHTML=Number(f)-Number(s);}; 
              if (fh=='*') {sc1.innerHTML=Number(f)*Number(s);}; 
              if (fh=='/') {sc1.innerHTML=Number(f)/Number(s);}
              if(fh=='%'){sc1.innerHTML=Number(f)/100;}
              if(fh=='sin'){sc1.innerHTML=Math.sin(Math.PI/(180/Number(f)));}
              if(fh=='cos'){sc1.innerHTML=Math.cos(Math.PI/(180/Number(f)));}
              if(fh=='tan'){sc1.innerHTML=Math.tan(Math.PI/(180/Number(f)));}
              if(fh=='sinh'){sc1.innerHTML=Math.sinh(Math.tan(Math.PI/(180/Number(f))));}
              if(fh=='cosh'){sc1.innerHTML=Math.cosh(Math.tan(Math.PI/(180/Number(f))));}
              if(fh=='tanh'){sc1.innerHTML=Math.tanh(Math.tan(Math.PI/(180/Number(f))));}
              if(fh=='x²'){sc1.innerHTML=Number(f)*Number(f);}
              if(fh=='x³'){sc1.innerHTML=Number(f)*Number(f)*Number(f);}
              f=sc1.innerHTML;s='';fh='';


          }

};
