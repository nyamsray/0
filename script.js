var total='';
var cache='';
function fetch(){
    names = document.getElementById("names").value;
    school = document.getElementById("school").value;
    index = document.getElementById("index").value;
 
    var html = `
    The result for your student whose name is:`+names+`
    &Index No:`+index+`
    &School:`+school+`
    & are as follows:&
    Maths:`+guess()+` Grade:`+Rank(cache)+`&
    English:`+guess()+` Grade:`+Rank(cache)+`&
    Kiswahili:`+guess()+` Grade:`+Rank(cache)+`&
    Integrated science:`+guess()+` Grade:`+Rank(cache)+`&
    Home science:`+guess()+` Grade:`+Rank(cache)+`&
    Art and Craft:`+guess()+` Grade:`+Rank(cache)+`&
    Total:`+total+` Grade:`+Rank(total/6)+`&
    &Other matching results were also found. View
    them by verifying results.
    `;
    document.getElementById('result').style="display:block;";
    Type(html)
}

function Type(text)
{
document.getElementById("txt").innerHTML="";
   var i = 0;
   var texta="";
   texta.length=0;
     texta=text;
            function type() {
                if (i < texta.length) {
                    if(texta.charAt(i)=="&"){
                    document.getElementById("txt").innerHTML += "<br>";
                    }else{
                    document.getElementById("txt").innerHTML += texta.charAt(i);
                    }
                    i++;
                    setTimeout(type, 12.5);
                }
            }
            type();
}
function guess() {
    var no = Math.round(Math.random(1)*100)
    cache = no;
    var value = eval(total+no);
    total=value;
    return no;
}
function Rank(a){
if(a<30){
    return "E";
}else if(a<50){
    return "D";
}else if(a<65){
    return "C";
}else if(a<80){
    return "B";
}else {
    return "A"
}
}
function redir(){
    window.location.href="https://papasmurf-tv.github.io/0";
}