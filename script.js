var Array=[2,3,4,5,6,7,8,9];

for(var i=2;i<=9;i++){
  $(".number#no_"+i).text(Array[i-2]);
}//打印標題數字
 
function table(id){
  $(".box#no_"+id+">.chart").each(function(index){
    // console.log(index);
    for(var j=1;j<=9;j++){
      $(".box#no_"+id+">.chart#no_"+(index+1)).text(id+" × "+(index+1)+" ＝"+id*(index+1));
    }
  }); 
}//建立算式
//p.s JQuery在使用兩層以上的for迴圈時，內層迴圈的值會被外層迴圈的值給取代;需要將for替換成each使用。
for(var n=2;n<=9;n++){
  table(n);
}//遍歷