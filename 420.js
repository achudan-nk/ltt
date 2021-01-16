const msperday = 1000*60*60*24;

var ndate = new Date();
var ntime = ndate.getTime();
var odate = new Date("2008-11-05");
var otime = odate.getTime();

var difference = diff(otime, ntime);

function diff(otime, ntime)
{
    return Math.ceil((ntime-otime)/msperday);
}

document.getElementById("tex").innerHTML = difference;