$(document).ready(function(){
    var loadingAnimation = document.getElementById("Lanimation");
    var loading = document.getElementById("loading");
    $.get('https://sk1er.club/guild/name/HelloTaiwan').then(function (html) {
    // Success response
    var $table = $(html).find('.table-striped');
    $("#player_table").html('<table class="table table-striped" id="dark_table">'+$table.html()+'<table/>')
    $('#player_table a').contents().unwrap();
    var darkSwitch = document.getElementById("darkSwitch");
    var table_dark = document.getElementById("dark_table");
    if(darkSwitch.checked) {
        table_dark.classList.add('table-dark');
    }
    else {
        table_dark.classList.remove('table-dark');
    }
    }, function () {
        // Error response
        console.log('error')
    });

    $.get('https://sk1er.club/guild/name/HelloTaiwan').then(function (html) {
        // Success response
        var $guildInfo = $(html).find('.module-content-inner');
        $("#guild_status").html($guildInfo.html())
        g = document.getElementById('guild_status').getElementsByTagName("a");
        var iii;
        for (iii = 0; iii < g.length; iii++) {
        g[iii].removeAttribute("href");
        }
        $("#guild_status h1").replaceWith('');
    }, function () {
        // Error response
        console.log('error')
    });

    $.get('https://sk1er.club/guild/name/HelloTaiwan').then(function (html) {
        // Success response
        var $gguildInfo = $(html).find('.module-content-inner');
        $("#gguild_status").html($gguildInfo.html())
        loading.classList.add('display');
        loadingAnimation.style.display = "none";
    }, function () {
        // Error response
        console.log('error')
    });
    
});