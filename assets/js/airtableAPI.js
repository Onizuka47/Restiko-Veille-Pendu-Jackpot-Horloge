//authentificationAirdtable
var Airtable = require('airtable');
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keyMEyhDS0BS2TiIA'
});
var base = Airtable.base('appoPVpw7khavg8iA');


var templateVeille =

  '<div class="border border-primary mt-3 mb-3" id="tempV"  style="border-radius: 1em;">' +

  '<div class="col">' +
  '<h2 class="mt-1">#ppp#</h2>' +
  '</div>' +

  '<div class="col">' +
  '<img src="assets/img/Setting.png" style="width: auto;" id="iconSetting">' +
  '<img src="assets/img/eye.png" style="width: auto;" onclick="showVeille(this)" class="iconEye1">' +
  '<img src="assets/img/eyeClose.png" style="width: auto;" onclick="hideVeille(this)" class="iconEye12">' +
  '</div>' +


  '<div class="resumeVeille" id="resumeVeille#id#">' +
  '<h3>Date</h3>' +
  '<p>##ppp##</p>' +
  '<h3>Coder</h3>' +
  '<p>Narii Teriipaia</p>' +
  '<h3>Subject</h3>' +
  '<p>#zzz#</p>' +
  '<h3>Links</h3>' +
  '<a href="#eee#">#eee#</a>' +
  '<h3>Synthesis</h3>' +
  '<p>#rrr#</p>' +
  '<h3>Comment</h3>' +
  '<p>#ttt#</p>' +
  '</div>' +
  '</div>'


base('Table 1').select({
  // Selecting the first 3 records in Grid view:
  maxRecords: 100,
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  records.forEach(function (record) {
    //console.log('Retrieved', record.get('Date'));
    var newTemplate1 = templateVeille.replace(/#ppp#/gi, record.get('Date'));
    newTemplate1 = newTemplate1.replace("#id#", record.id);
    //console.log("#id#", record.id)
    //newTemplate1 = newTemplate1.replace("#aaa#", record.get("Coder"));
    newTemplate1 = newTemplate1.replace("#zzz#", record.get("Subject"));
    newTemplate1 = newTemplate1.replace(/#eee#/gi, record.get("Links"));
    newTemplate1 = newTemplate1.replace("#rrr#", record.get("Synthesis"));
    newTemplate1 = newTemplate1.replace("#ttt#", record.get("Comment"));
    //console.log(newTemplate1)
    $("#templateVeille").append(newTemplate1)
  });

  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();

}, function done(err) {
  if (err) {
    console.error(err);
    return;
  }
});;

//authentificationAirtableRestiko
var Airtable = require('airtable');
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keyMEyhDS0BS2TiIA'
});
var base = Airtable.base('app7UZOFhJieu7XfC');

var templateRestiko =
  '<div class="border border-danger mb-3" id="tempR" style="border-radius: 1em;">' +

  '<div class="col">' +
  '<h2 class="mt-1">#date#</h2>' +
  '</div>' +

  '<div class="col">' +
  '<img src="assets/img/Setting.png" style="width: auto;" id="iconSetting">' +
  '<img src="assets/img/eye.png" style="width: auto;" class="iconEye" onclick="showRestiko(this)">' +
  '<img src="assets/img/eyeClose.png" style="width: auto;" onclick="hideRestiko(this)" class="iconEye22">' +

  '</div>' +
  '<div class="list-item resumeRestiko" id="resumeRestiko#id#">' +
  '<h3>Date</h3>' +
  "<p>#date#</p>" +

  '<h3>Name</h3>' +
  '<p>Narii Teriipaia</p>' +

  "<h3>Ce que j'ai fais</h3>" +
  '<p>#001#</p>' +

  "<h3>Ce que j'ai appris</h3>" +
  '<p>#002#</p>' +

  "<h3>Ce que j'ai aimé</h3>" +
  '<p>#003#</p>' +

  "<h3>Ce que j'ai utilisé de nouveaux</h3>" +
  '<p>#004#</p>' +

  '<h3>Problématique</h3>' +
  '<p>#005#</p>' +

  '<h3>Objectifs</h3>' +
  '<p>#006#</p>' +

  "<h3>Qu'est-ce qui m'a manqué</h3>" +
  '<p>#007#</p>' +

  '<h3>Que ferai tu à la place du formateur</h3>' +
  '<p>#008#</p>' +

  '<h3>Objectif atteind ou non</h3>' +
  '<p>#009#</p>' +

  '<h3>Note /5</h3>' +
  '<p>#010#/5</p>' +
  '</div>'
'</div>' +



base('RESTIKO').select({
  // Selecting the first 3 records in Grid view:
  maxRecords: 100,
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  records.forEach(function (record) {
    var newTemplate = templateRestiko;
    newTemplate = newTemplate.replace(/#date#/gi, record.get("Date"));
    newTemplate = newTemplate.replace("#id#", record.id);
    //console.log(record.id)
    //newTemplate = newTemplate.replace("#Name#", record.get("Name"));
    newTemplate = newTemplate.replace("#001#", record.get("Ce que j'ai fais"));
    newTemplate = newTemplate.replace("#002#", record.get("Ce que j'ai appris"));
    newTemplate = newTemplate.replace("#003#", record.get("Ce que j'ai aimé"));
    newTemplate = newTemplate.replace("#004#", record.get("Ce que j'ai utilisé de nouveaux"));
    newTemplate = newTemplate.replace("#005#", record.get("Problématique"));
    newTemplate = newTemplate.replace("#006#", record.get("Objectifs"));
    newTemplate = newTemplate.replace("#007#", record.get("Qu'est-ce qui m'a manqué"));
    newTemplate = newTemplate.replace("#008#", record.get("que ferais tu à place du formateur"));
    newTemplate = newTemplate.replace("#009#", record.get("Objectif atteind ou pas"));
    newTemplate = newTemplate.replace("#010#", record.get("note /5"));


    $("#templateRestiko").append(newTemplate)
  });

  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();

}, function done(err) {
  if (err) {
    console.error(err);
    return;
  }
});


//create restiko
function createRestiko() {
  var Airtable = require('airtable');
  var base = new Airtable({
    apiKey: 'keyMEyhDS0BS2TiIA'
  }).base('app7UZOFhJieu7XfC');

  base('RESTIKO').create([{
    "fields": {
      "Date": $("#formGroupExampleInput1").val(),
      "Name": {
        "id": "usrCrN7uMbGRVm9jZ",
        "email": "nariiteriipaia47@gmail.com",
        "name": "Narii Teriipaia"
      },
      "Ce que j'ai fais": $("#formGroupExampleInput3").val(),
      "Ce que j'ai appris": $("#formGroupExampleInput4").val(),
      "Ce que j'ai aimé": $("#formGroupExampleInput5").val(),
      "Ce que j'ai utilisé de nouveaux": $("#formGroupExampleInput6").val(),
      "Problématique": $("#formGroupExampleInput7").val(),
      "Objectifs": $("#formGroupExampleInput8").val(),
      "Qu'est-ce qui m'a manqué": $("#formGroupExampleInput9").val(),
      "que ferais tu à place du formateur": $("#formGroupExampleInput10").val(),
      "Objectif atteind ou pas": $("#formGroupExampleInput11").val(),
      "note /5": $("#formGroupExampleInput12").val()
    }
  }, ], function (err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });
}


//creer veille

function createVeille(){
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyMEyhDS0BS2TiIA'}).base('appoPVpw7khavg8iA');
  
  base('Table 1').create({
    "Coder": {
      "id": "usrCrN7uMbGRVm9jZ",
      "email": "nariiteriipaia47@gmail.com",
      "name": "Narii Teriipaia"
    },
    "Subject": $("#formGroupExampleInput03").val(),
    "Links": $("#formGroupExampleInput04").val(),
    "Synthesis":$("#formGroupExampleInput05").val(),
    "Comment":$("#formGroupExampleInput06").val(),
  }, function(err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.getId());
  });
};