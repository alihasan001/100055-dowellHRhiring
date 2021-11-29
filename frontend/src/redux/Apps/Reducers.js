import { PAGE_1,PAGE_2,PAGE_3,PAGE_4,PAGE_5,PAGE_6 } from "./Type";

const iniatialState = {
    page1 : localStorage.getItem('page1')===null ? false : true,
    page2 :  localStorage.getItem('page2')===null ? false : true,
    page3 :  localStorage.getItem('page3')===null ? false : true,
    page4 :  localStorage.getItem('page4')===null ? false : true,
    page5 :  localStorage.getItem('page5')===null ? false : true,
}

const PageReducers = (state = iniatialState, action) => {
    console.log(action.data)
    switch(action.type){
        case PAGE_1:
            localStorage.setItem('page1',JSON.stringify(action.data))
            return {...state,page1:true}

        case PAGE_2:
            localStorage.setItem('page2','filled')
            return {...state,page2:true}
        case PAGE_3:
            localStorage.setItem('page3','filled')
            return {...state,page3:true}
        case PAGE_4:
            localStorage.setItem('page4','filled')
            return {...state,page4:true}
        case PAGE_5:
            localStorage.setItem('page5','filled')
            return {...state,page5:true}

        case PAGE_6:
            localStorage.removeItem('page1')
            localStorage.removeItem('page2')
            localStorage.removeItem('page3')
            localStorage.removeItem('page4')
            localStorage.removeItem('page5')
            return {...state}
        default: return state
    
    }
}

export default PageReducers