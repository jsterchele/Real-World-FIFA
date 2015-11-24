$( document ).ready(function() {
  createTable();

  function addPlayer(){
    i = aRoster.length;
    aRoster.push($('#name').val());
    htmlStr = "<tr><td>" + $('#name').val() + "</td>";
    htmlStr += "<td>" + "<select id=" + "'" + i +"positionQ1' class='form-control q-1 q'><option class='q1'>---</option></select>" + "</td>";
    htmlStr += "<td>" + "<select id=" + "'" + i +"positionQ2' class='form-control q-2 q'><option class='q2'>---</option></select>" + "</td>";
    htmlStr += "<td>" + "<select id=" + "'" + i +"positionQ3' class='form-control q-3 q'><option class='q3'>---</option></select>" + "</td>";
    htmlStr += "<td>" + "<select id=" + "'" + i +"positionQ4' class='form-control q-4 q'><option class='q4'>---</option></select>" + "</td>";
    htmlStr += "</tr>";


    $('#roster-table .rows').append(htmlStr);

    $('#name').val('');

    populatePositions();

  };

  function createRoster(){
    var htmlStr = "<table class='table-bordered'><thread><tr><th class='col-xs-10'>Name</th></tr></thread><tbody>";

    for(var i=0; i < aRoster.length; ++i) 
    {

      htmlStr += "<tr>";
      htmlStr += "<td draggable='true'>" + aRoster[i] + "</td>";
      htmlStr += "</tr>";
    }
    htmlStr += "</tbody></table>";
    $('#roster').html(htmlStr);
  };

  function createTable(){
    var htmlStr = "<table class='table-bordered'><thread><tr><th class='col-xs-4'>Name</th><th class='col-xs-2'>Q1</th><th class='col-xs-2'>Q2</th><th class='col-xs-2'>Q3</th><th class='col-xs-2'>Q4</th></tr></thread><tbody class='rows'>";


    for(var i=0; i < aRoster.length; ++i) 
    {

      htmlStr += "<tr>";
      htmlStr += "<td>" + aRoster[i] + "</td>";
      htmlStr += "<td>" + "<select id=" + "'" + i +"positionQ1' class='form-control q-1 q'><option class='q1'>---</option></select>" + "</td>";
      htmlStr += "<td>" + "<select id=" + "'" + i +"positionQ2' class='form-control q-2 q'><option class='q2'>---</option></select>" + "</td>";
      htmlStr += "<td>" + "<select id=" + "'" + i +"positionQ3' class='form-control q-3 q'><option class='q3'>---</option></select>" + "</td>";
      htmlStr += "<td>" + "<select id=" + "'" + i +"positionQ4' class='form-control q-4 q'><option class='q4'>---</option></select>" + "</td>";
      htmlStr += "</tr>";
    }
    htmlStr += "</tbody></table>";
    $('#roster-table').html(htmlStr);
//For each of the player's selectors, populate it with each positon
populatePositions();
};

function populatePositions(){
/*var aPositions = ["--", "LF", "RF", "LM", "LCM", "RCM", "RM", "CB", "LB", "SW", "RB", "K"];
//select is any players dropdown
var select = $( ".q1"); 
console.log(select);
console.log(aPositions);

for(var i = 0; i < aPositions.length; i++) {
  console.log("good");
  var opt = aPositions[i];
  if (sPositions.indexOf(opt) == -1 )
  {
   var el = $( "option" );
   el.textContent = opt;
   el.value = opt;
   select.html(el);
 }
}
*/
console.log(1);
}

});