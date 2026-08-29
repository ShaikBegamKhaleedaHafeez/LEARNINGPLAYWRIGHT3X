class BaseTest{
    constructor(){
        console.log("Parent");
    }
    setup(){
        console.log("Base: open browser");
    }
    teardown(){
        console.log("Base: close browser");
    }
}
class UITest extends BaseTest{
    constructor(){
        super();
    }
    setup(){
        super.setup();
        console.log("UI: maximize window");
    }
    teardown(){
        super.teardown();
        console.log("UI: take screenshot")
    }
}
let ui = new UITest();
ui.setup();
ui.teardown();