

// this is the add players function which when "continue" is pressed it initiates it
function addPlayers() {
    let numbPlayers = $(".numberPlayers").val();
    if (numbPlayers == '') {
        alert('enter players please')
    }else {
        $(".modal").fadeOut();

        // add players
        for (let i = 1; i <= numbPlayers; i++) {
            $(".in-score").append("<div class='score-container'><div class='player-container'>player" + i + "</div></div>");
            $('.out-score').append("<div class='os-score-container'></div>")
        // adds the hole count at the top
        }
        for (let i = 1; i <= 9; i++) {
            $('.hole-container').append('<div class="hole">' + i + '</div>');
        }


        $('.hole-container').append('<div class="hole">Out</div>');

        // adds the yardage, the par and the handicap to the golf card


        // this will append to the players
        for (let i = 0; i <= 9; i++) {
            $('.score-container').append('<input class="input-hole" type="text">')

        }
        for (let i = 10; i <= 20; i++) {
            $('.os-score-container').append('<input class="input-hole" type="text">')
        }



        for (let i = 10; i <= 18; i++) {
            $('.OS-hole-container').append('<div class="hole">' + i + '</div>');
        }

        $('.OS-hole-container').append('<div class="hole">In</div>');
        $('.OS-hole-container').append('<div class="hole">Total</div>');

        let coursevalue = document.getElementById('course-select').value;
        getCourseInfo(coursevalue);

    }

}



function teeCourseSelect() {
    $('.remove-tee').remove();
    switch (document.getElementById('course-select').value) {
        case '19002':
            $('#tee-type').append('<option class="remove-tee" value="0">champion</option>');
            $('#tee-type').append('<option class="remove-tee" value="1">mens</option>');
            $('#tee-type').append('<option class="remove-tee" value="2">womans</option>');
            break;
        case '11819':
            $('#tee-type').append('<option class="remove-tee" value="0">pro</option>');
            $('#tee-type').append('<option class="remove-tee" value="1">champion</option>');
            $('#tee-type').append('<option class="remove-tee" value="2">mens</option>');
            $('#tee-type').append('<option class="remove-tee" value="3">womans</option>');
            break;
        case '18300':
            $('#tee-type').append('<option class="remove-tee" value="0">pro</option>');
            $('#tee-type').append('<option class="remove-tee" value="1">champion</option>');
            $('#tee-type').append('<option class="remove-tee" value="2">mens</option>');
            $('#tee-type').append('<option class="remove-tee" value="3">womans</option>');
            break;

        default:
            console.log('you have not picked a course yet');
            break;
    }
}



function getCourseInfo(value) {
    let xhttp = new  XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            mycourse = JSON.parse(this.responseText);
            document.getElementById('blank').innerHTML = mycourse.data.name;
            console.log(mycourse);
            // adding the yards to the golf card depending on the type of tee

            for (let i = 0; i <= 8; i++) {
                $('.yards-container').append('<div class= info-space>' + mycourse.data.holes[i].teeBoxes[document.getElementById('tee-type').value].yards + '</div>')
            }

            for (let i = 9; i <= 17; i++) {
                $('.os-yards-container').append('<div class= info-space>' + mycourse.data.holes[i].teeBoxes[document.getElementById('tee-type').value].yards + '</div>')
            }

            for (let i = 0; i <= 8; i++) {
                $('.par-container').append('<div class= info-space>' + mycourse.data.holes[i].teeBoxes[document.getElementById('tee-type').value].par + '</div>')
            }

            for (let i = 9; i <= 17; i++) {
                $('.os-par-container').append('<div class= info-space>' + mycourse.data.holes[i].teeBoxes[document.getElementById('tee-type').value].par + '</div>')
            }

            for (let i = 0; i <= 8; i++) {
                $('.hcp-container').append('<div class= info-space>' + mycourse.data.holes[i].teeBoxes[document.getElementById('tee-type').value].hcp + '</div>')
            }
            for (let i = 9; i <= 17; i++) {
                $('.os-hcp-container').append('<div class= info-space>' + mycourse.data.holes[i].teeBoxes[document.getElementById('tee-type').value].hcp + '</div>')
            }

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