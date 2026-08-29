class BaseTest{
    setup(){
        console.log("Base: open browser");
    }
}
class APITest extends BaseTest{
    setup(){
        console.log("API Test: open browser")
    }
}

let test = new APITest();
test.setup();