//default export -> Export one main thing
//Logger -> Logger is a file which help you to write logs to capture events and documents. It will help for debugging purpose as well
export default function log(message){
    console.log("[LOG]", message);
}
export function logBetter(message){
    console.log("------------");
    console.log("[LOGS]" + message);
    console.log("-------------")
}