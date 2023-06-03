// code for managing local storage:

const addToDb = (breakTimeElementId, breakTime) => {
    // const BreakTimeAndId = {id:breakTimeElementId, time: breakTime};

    let breakTimeCart = {};
    breakTimeCart[breakTimeElementId] = breakTime;
    // code for getting the storedBreakTimeCart from the localStorage:
    const storedBreakTimeCart = localStorage.getItem("breakTimeCart"); 

    // Code for checking Is it exist or not.
    if(storedBreakTimeCart) {
       const parsedBreakTimeCart = JSON.parse(storedBreakTimeCart);
       const newBreakTimeCart = {...parsedBreakTimeCart, ...breakTimeCart}
       localStorage.setItem("breakTimeCart", JSON.stringify(newBreakTimeCart));
    }
    else{
      localStorage.setItem('breakTimeCart', JSON.stringify(breakTimeCart));
    } 
}


const getStoredBreakTimeCart = () => {
    const storedBreakTimeCart = localStorage.getItem('breakTimeCart');
    const parsedStoredBreakTimeCart = JSON.parse(storedBreakTimeCart);
    return parsedStoredBreakTimeCart ;
}

export {addToDb, getStoredBreakTimeCart}