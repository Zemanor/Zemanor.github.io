//addy requies crossorigin.me atm
let address = "https://crossorigin.me/https://en.wikipedia.org/w/api.php";
//bind the input field TO the form field
var inputVal;
var state;
var stateSplit;
$('#searchbox5 #search').on('input', function() {
    inputVal = $("#search").val();
});


//run every 1s
window.setInterval(function() {
    //save current search input
    function saveState() {
        state = inputVal;
        stateSplit = state.split(' ').join('%');
    }
    if (state !== inputVal) {
        saveState();
        //api call & li replace
        $.get(address + "?action=opensearch&search=" + stateSplit + "&namespace=0&format=json", function(data) {
            let titles = data[1];
            let description = data[2];
            let links = data[3];
          $(".list").html("");
            for (let idx in titles) {
              insert(titles[idx], description[idx], links[idx]);
            }
        });
    }
}, 250);


function insert(titleOf, descriptionOf, linkTo) {
    organize(titleOf, descriptionOf, linkTo);

    function organize(titleOf, descriptionOf, linkTo) {
        var item = "<a href='" + linkTo + "' target='_blank'><li class='listItem'><p class='li-title'>" + titleOf + "</p> <p class='li-content'>" + descriptionOf + "</p></li></a>";
        push(item);
    }

    function push(listItem) {
        $(".list").append(listItem);
    }
}
