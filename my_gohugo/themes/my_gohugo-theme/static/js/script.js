$(document).ready(function(){
  $(".elementOnOver1").hover(function(){
    $(".elementCache").show();
  }, function(){
    $(".elementCache").hide();
  });
  if($.getUrlVar('filter') == 'future'){
    $(".PastEvents").hide(150);
    $(".UpcomingEvents").show(150);
  };
  if($.getUrlVar('filter') == 'past'){
    $(".PastEvents").show(150);
    $(".UpcomingEvents").hide(150);
  };
  $(".content").hide();
  $(".associationQuery").show();
  var query = $.getUrlVar('query');
  query = "*" + query + "*";

  $("#Test").click(function(){
    var json = new Object();
    json.type = ["Car", "frag"];
    alert(json.type);
  });
  $("#evenementsHide").click(function(){
    $(".pastInAsso").toggle(function(){$("#changetxt").text($("#changetxt").text() == 'Display old events' ? 'Hide old events' : 'Display old events');});
  });
  $("#tb8").click(function(){
    $("#navBar").toggle('slide');
  });
});
