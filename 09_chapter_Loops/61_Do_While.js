let retry = 0;
do{
    console.log("Execute a model");
    console.log("Retrying...", retry)
    retry ++
}while(retry<3)