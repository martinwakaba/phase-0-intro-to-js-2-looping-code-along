let new_peep = [];
let peep = ["Guadalupe", "Ollie", "Aki"];
function writeCards(peep_name, event_name){
    for(let count = 0; count < peep_name.length; count++){
        new_peep.push(`Thank you, ${peep_name[count]}, for the wonderful ${event_name} gift!`);
    }
    return new_peep;

}

function countDown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }
}
countDown(10);
writeCards(peep, "surprise");