function hideinfo() {
    document.getElementById('holdframe').style.filter = 'brightness(50%)';
    document.getElementById('chandlernametag').style.visibility = 'hidden';
    document.getElementById('monicanametag').style.visibility = 'hidden';
    document.getElementById('phoebenametag').style.visibility = 'hidden';
    document.getElementById('rachelnametag').style.visibility = 'hidden';
    document.getElementById('rossnametag').style.visibility = 'hidden';
    document.getElementById('joeynametag').style.visibility = 'hidden';

}

function showinfo(a) {
    document.getElementById('holdframe').style.filter = 'brightness(100%)';
    document.getElementById(a).style.visibility = 'visible';
}


let amt = 0;

function clicktvbutton() {
    amt = amt + 1;
    document.getElementById('turnbutton').style.transitionDuration = '1s';
    document.getElementById('turnbutton').style.transform = 'rotate(' + 120 * amt + 'deg)';
    switch (120 * amt % 360) { // switch不要忘記break 講100遍!!!

        case 0:
            document.getElementById('showpic').src = '_image/tv_screen_s1.jpg';
            document.getElementById('seasontitle').innerHTML = 'Season 1';
            document.getElementById('seasondes').innerHTML = 'Run away bride Rachel rushing into the Central Park Cafe, surprised all the people.';

            break;
        case 120:
            document.getElementById('showpic').src = '_image/tv_screen_s2.jpg';
            document.getElementById('seasontitle').innerHTML = 'Season 2';
            document.getElementById('seasondes').innerHTML = 'Thanksgiving is coming. Comparing to turkey, they are more interested in football.';

            break;

        case 240:
            document.getElementById('showpic').src = '_image/tv_screen_s3.jpg';
            document.getElementById('seasontitle').innerHTML = 'Season 3';
            document.getElementById('seasondes').innerHTML = 'It is Christmas, as a father, Ross want to rent a Santa costume but they were all running out.';

            break;
    }
}