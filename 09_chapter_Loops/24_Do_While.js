let retry = 0;
do{
    console.log("Executing do while loop", retry);
    console.log("Retrying...........", retry);
    retry++;
}while(retry<3);