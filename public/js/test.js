var data;
function sendAjax()
{
    alert('hello');
    console.log("sending ajax request");
   /* $.ajax(
        {
        url:'localhost:9000/getData?callback=?',
        dataType: 'jsonp',
        jsonpCallback : 'saveData'
        }
     );*/
 $.getJSON("http://localhost:9000/getData?callback=?",function(json){
  console.log(json);
  saveData(json);
  displayData();
});
}


function saveData(dat3)
{
    data=dat3;
}
function displayData()
{
    console.log(data);
    alert(data.message);
}