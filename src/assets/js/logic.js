const click = {
    array: [],
    score: 0,
    check: (num) => {

        if (!click.array[0]){
            click.array.push(parseInt(num))
            click.score += 1
        } else {
            for( var i = 0; i < click.array.length; i++){
                
                if (click.array[i] === num){
                    alert("Oops! \nYou've already clicked that one! :'( \nTry again!");
                    click.array = [];
                    click.score = 0;
                } else if ( click.array[i] !== num && i === ( click.array.length - 1 )){
                    click.array.push(parseInt(num));
                    click.score += 1;
                    break
                } else if (click.score === 12){
                    alert("Congratulations! \nYou won!")
                }
            }
        }

        console.log(click.array);
    }
}

export default click;