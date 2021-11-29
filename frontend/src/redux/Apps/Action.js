import { PAGE_1,PAGE_2,PAGE_3,PAGE_4,PAGE_5,PAGE_6, } from "./Type";

export const Page1Filled = (payload) =>{
    console.log("action1")
    return({
        type:PAGE_1,
        data : payload
    })
}

export const Page2Filled = () =>{
    return({
        type:PAGE_2,
    })
}

export const Page3Filled = () =>{
    return({
        type:PAGE_3,
    })
}

export const Page4Filled = () =>{
    return({
        type:PAGE_4
    })
}

export const Page5Filled = () =>{
    return({
        type:PAGE_5,
    })
}

export const Page6Filled = () =>{
    return({
        type:PAGE_6,
    })
}