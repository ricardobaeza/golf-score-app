








function addPlayers() {
    let numbPlayers = $(".numberPlayers").val();
    if (numbPlayers == '') {
        alert('enter players please')
    }else {
        $(".modal").fadeOut();

        for (let i = 1; i <= numbPlayers; i++) {
            $(".content").append("<div class='score-container'><div class='player-container'>player" + i + "</div></div>");

        }
        for (let i = 0; i <= 18; i++) {
            $('.hole-container').append('<div class="hole">' + i + '</div>');
        }
        for (let i = 0; i < 19; i++) {
            $('.score-container').append('<div class="hole"></div>')

        }
        let value = document.getElementById('course-select').value;
        getCourseInfo(value);

    }

}



function getCourseInfo(value) {
    let xhttp = new  XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses/"+ value , true );
    xhttp.send();
}





// function addScore(myid) {
//     let myscore = 0;
//     parse the player number out of the id, make that p
//     for (let i = 0; i < arguments.length; i++) {
//         myscore += scoreitem;
//     }
//     return myscores;
// }