
let p1Arr = [];
let p2Arr = [];
let p3Arr = [];
let p4Arr = [];

// this is the add players function which when "continue" is pressed it initiates it
function addPlayers() {
    let numbPlayers = $("#numberPlayers").val();
    if (numbPlayers == '') {
        alert('enter players please')
    }else {
        $(".modal").fadeOut();

        // add players
        for (let i = 1; i <= numbPlayers; i++) {
            $(".in-score").append(`<div class='score-container ' id="player${[i]}"><div class='player-container'>player${[i]}</div></div>`);
            $('.out-score').append("<div class='os-score-container'></div>")
        // adds the hole count at the top
        }
        for (let i = 1; i <= 9; i++) {
            $('.hole-container').append('<div class="hole">' + i + '</div>');
        }


        $('.hole-container').append('<div class="hole">Out</div>');



        // this will append to the players
        for (let i = 0; i <= 8; i++) {
            $('#player1').append('<input class="input-hole player1-input" type="text" oninput="calculateTotal(1,this.value)">')
            $('#player2').append('<input class="input-hole player2-input" type="text" oninput="calculateTotal(2,this.value)">')
            $('#player3').append('<input class="input-hole player3-input" type="text" oninput="calculateTotal(3,this.value)">')
            $('#player4').append('<input class="input-hole player4-input" type="text" oninput="calculateTotal(4,this.value)">')

        }

        $('.score-container').append('<div class="hole totalScore"></div>');





        for (let i = 10; i <= 20; i++) {
            $('.os-score-container').append('<input class="input-hole" type="text" name="' + i  +'">')
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
            document.getElementById('banner-img').src = mycourse.data.thumbnail;
            document.getElementById('address1').innerHTML = mycourse.data.addr1;
            document.getElementById('city').innerHTML = mycourse.data.city;
            document.getElementById('state').innerHTML = mycourse.data.stateOrProvince;


            console.log(mycourse);

            // adding the yards to the golf card depending on the type of tee
            let yardTotal = 0;
            let parTotal = 0;
            for (let i = 0; i <= 8; i++) {
                $('.yards-container').append('<div class= info-space>' + mycourse.data.holes[i].teeBoxes[document.getElementById('tee-type').value].yards + '</div>');
                yardTotal += mycourse.data.holes[i].teeBoxes[document.getElementById('tee-type').value].yards
            }

            $('.yards-container').append('<div class="info-space">' + yardTotal + '</div>');
            let osYardTotal = yardTotal;

            for (let i = 9; i <= 17; i++) {
                $('.os-yards-container').append('<div class= info-space>' + mycourse.data.holes[i].teeBoxes[document.getElementById('tee-type').value].yards + '</div>');
                osYardTotal += mycourse.data.holes[i].teeBoxes[document.getElementById('tee-type').value].yards
            }

            $('.os-yards-container').append('<div class="info-space">' + osYardTotal + '</div>');


            for (let i = 0; i <= 8; i++) {
                $('.par-container').append('<div class= info-space>' + mycourse.data.holes[i].teeBoxes[document.getElementById('tee-type').value].par + '</div>')
                parTotal += mycourse.data.holes[i].teeBoxes[document.getElementById('tee-type').value].par;

            }
            $('.par-container').append('<div class="info-space">' + parTotal + '</div>');
            let osParTotal = parTotal;


            for (let i = 9; i <= 17; i++) {
                $('.os-par-container').append('<div class= info-space>' + mycourse.data.holes[i].teeBoxes[document.getElementById('tee-type').value].par + '</div>');
                osParTotal += mycourse.data.holes[i].teeBoxes[document.getElementById('tee-type').value].par

            }
            $('.os-par-container').append('<div class="info-space">' + osParTotal + '</div>');



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



function calculateTotal(id, value) {
    let total = 0;
    switch (id) {
        case 1:
            p1Arr.push(Number(value));

            break;

        case 2:
            p2Arr.push(Number(value));
            break;

        case 3:
            p3Arr.push(Number(value));
            break;

        case 4:
            p4Arr.push(Number(value));

        default
    }
    console.log(playerArr1);
    for (let i = 0; i < arr.length; i++) {
        total += playerArr1[i];
        $('.totalScore').text(total);
    }


}



// function addScore(myid) {
//     let myscore = 0;
//     parse the player number out of the id, make that p
//     for (let i = 0; i < arguments.length; i++) {
//         myscore += scoreitem;
//     }
//     return myscores;
// }