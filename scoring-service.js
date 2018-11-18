



let p1Arr = [];
let p2Arr = [];
let p3Arr = [];
let p4Arr = [];


let osP1Arr = [];
let osP2Arr = [];
let osP3Arr = [];
let osP4Arr = [];

let p1totalAr = [];
let p2totalAr = [];
let p3totalAr = [];
let p4totalAr = [];
// this is the add players function which when "continue" is pressed it initiates it
function addPlayers() {
    let numbPlayers = $("#numberPlayers").val();
    if (numbPlayers == '') {
        alert('enter players please')
    }else {
        $(".modal").fadeOut();

        // add players
        for (let i = 1; i <= numbPlayers; i++) {
            $(".in-score").append(`<div class='score-container player${[i]}'><div class='player-container'>player${[i]}</div></div>`);
            $('.out-score').append(`<div class='os-score-container os-player${[i]}'></div>`)
        // adds the hole count at the top
        }
        for (let i = 1; i <= 9; i++) {
            $('.hole-container').append('<div class="hole">' + i + '</div>');
        }


        $('.hole-container').append('<div class="hole">Out</div>');



        // this will append to the players
        for (let i = 0; i <= 8; i++) {
            $('.player1').append('<input class="input-hole" type="text" oninput="calculateTotal(1,this.value)">');
            $('.player2').append('<input class="input-hole" type="text" oninput="calculateTotal(2,this.value)">');
            $('.player3').append('<input class="input-hole" type="text" oninput="calculateTotal(3,this.value)">');
            $('.player4').append('<input class="input-hole" type="text" oninput="calculateTotal(4,this.value)">')

        }

        $('.player1').append('<div class="hole player1-Ts"></div>');
        $('.player2').append('<div class="hole player2-Ts"></div>');
        $('.player3').append('<div class="hole player3-Ts"></div>');
        $('.player4').append('<div class="hole player4-Ts"></div>');





        for (let i = 10; i <= 18; i++) {
            $('.os-player1').append('<input class="input-hole " type="text" oninput="calculateTotal(5,this.value)">');
            $('.os-player2').append('<input class="input-hole" type="text" oninput="calculateTotal(6,this.value)">');
            $('.os-player3').append('<input class="input-hole" type="text" oninput="calculateTotal(7,this.value)">');
            $('.os-player4').append('<input class="input-hole" type="text" oninput="calculateTotal(8,this.value)">')


        }
        $('.os-player1').append('<div class="hole player1-os"></div>');
        $('.os-player2').append('<div class="hole player2-os"></div>');
        $('.os-player3').append('<div class="hole player3-os"></div>');
        $('.os-player4').append('<div class="hole player4-os"></div>');

        $('.os-player1').append('<div class="hole player1-FS"></div>');
        $('.os-player2').append('<div class="hole player2-FS"></div>');
        $('.os-player3').append('<div class="hole player3-FS"></div>');
        $('.os-player4').append('<div class="hole player4-FS"></div>');



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


function calculateTotal(id, value) {
    let outscore = 0;
    let inscore = 0;
    let totalScore = 0;
    if (isNaN(Number(value))) {
        alert('please enter a number');

    }
    else  {
        switch (id) {
            case 1:
                p1Arr.push(Number(value));
                p1totalAr.push(Number(value));
                for (let i = 0; i < p1Arr.length; i++) {
                    outscore += p1Arr[i];
                    $('.player1-Ts').text(outscore);

                }
                for (let i = 0; i < p1totalAr.length; i++) {
                    totalScore += p1totalAr[i];
                    $('.player1-FS').text(totalScore);

                }
                break;

            case 2:
                p2Arr.push(Number(value));
                p2totalAr.push(Number(value));
                for (let i = 0; i < p2Arr.length; i++) {
                    outscore += p2Arr[i];
                    $('.player2-Ts').text(outscore);
                }
                for (let i = 0; i < p2totalAr.length; i++) {
                    totalScore += p2totalAr[i];
                    $('.player2-FS').text(totalScore);
                }
                break;

            case 3:
                p3Arr.push(Number(value));
                p3totalAr.push(Number(value));

                for (let i = 0; i < p3Arr.length; i++) {
                    outscore += p3Arr[i];
                    $('.player3-Ts').text(outscore);
                }
                for (let i = 0; i < p3totalAr.length; i++) {
                    totalScore += p3totalAr[i];
                    $('.player3-FS').text(totalScore);

                }
                break;

            case 4:
                p4Arr.push(Number(value));
                p4totalAr.push(Number(value));

                for (let i = 0; i < p4Arr.length; i++) {
                    outscore += p4Arr[i];
                    $('.player4-Ts').text(outscore);
                }
                for (let i = 0; i < p4totalAr.length; i++) {
                    totalScore += p4totalAr[i];
                    $('.player4-FS').text(totalScore);

                }
                break;
            case 5:
                osP1Arr.push(Number(value));
                p1totalAr.push(Number(value));

                for (let i = 0; i < osP1Arr.length; i++) {
                    inscore += osP1Arr[i];
                    $('.player1-os').text(inscore);


                }
                for (let i = 0; i < p1totalAr.length; i++) {
                    totalScore += p1totalAr[i];
                    $('.player1-FS').text(totalScore);
                }
                break;
            case 6:
                osP2Arr.push(Number(value));
                p2totalAr.push(Number(value));

                for (let i = 0; i < osP2Arr.length; i++) {
                    inscore += osP2Arr[i];
                    $('.player2-os').text(inscore);


                }
                for (let i = 0; i < p2totalAr.length; i++) {
                    totalScore += p2totalAr[i];
                    $('.player2-FS').text(totalScore);
                }
                break;
            case 7:
                osP3Arr.push(Number(value));
                p3totalAr.push(Number(value));

                for (let i = 0; i < osP3Arr.length; i++) {
                    inscore += osP3Arr[i];
                    $('.player3-os').text(inscore);


                }
                for (let i = 0; i < p3totalAr.length; i++) {
                    totalScore += p3totalAr[i];
                    $('.player3-FS').text(totalScore);

                }

                break;
            case 8:
                osP4Arr.push(Number(value));
                p4totalAr.push(Number(value));

                for (let i = 0; i < osP4Arr.length; i++) {
                    inscore += osP4Arr[i];
                    $('.player4-os').text(inscore);
                }
                for (let i = 0; i < p4totalAr.length; i++) {
                    totalScore += p4totalAr[i];
                    $('.player4-FS').text(totalScore);
                }
                break;
            default:
                console.log('how did you even do this?');
                break;


        }
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








// function addScore(myid) {
//     let myscore = 0;
//     parse the player number out of the id, make that p
//     for (let i = 0; i < arguments.length; i++) {
//         myscore += scoreitem;
//     }
//     return myscores;
// }