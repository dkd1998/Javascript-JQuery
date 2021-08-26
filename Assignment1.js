//INPUT IS HARDCODED IN THIS FILE

conversation = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`

let arr = conversation.split(" ");

for (element in arr){
    if( ! isNaN( Number(arr[element]) ) ) 
        arr[element] = 'XXXXXXXXXX';
      
}
arr = arr.join(' ');

conversationProcessed = arr.split('? ').join('. ');
conversationProcessedAgain = conversationProcessed.split('. ');

let i=0;
conversationProcessedAgain.forEach(element => {
    if ((element.split(" ").length) > 3){
        i++;
        console.log(i + ". "+ element );
    }
});