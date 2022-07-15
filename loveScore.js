prompt('Enter your Name');
prompt('Enter secondperson Name');

var loveScore = Math.random();
loveScore=Math.floor(loveScore*100)+1;
if(loveScore>70){
    alert('Your love Score is :' + loveScore +'%! ' + 'Your an Ideal Couple');
}
else{
    alert('Your love Score is :' + loveScore +'%');
}
