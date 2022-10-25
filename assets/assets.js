export const IMAGES = {
    TRIPAPPBANNER : require('./images/banner.png'),
    EMPTYLIST: require('./images/empty-trip.png'),
    EMPTYEXPENSES: require('./images/empty-expenses.png'),
    ADDEXPENSE: require('./images/add-expenses.png')
};
export const ICONS = {
BACK: require("./icons/back-arrow.png"),
};
export const THUMBNAILS = {
    1: require('./images/trips-thumbails/1.png'),
    2: require('./images/trips-thumbails/2.png'),
    3: require('./images/trips-thumbails/3.png'),
    4: require('./images/trips-thumbails/4.png'),
    5: require('./images/trips-thumbails/5.png'),
    6: require('./images/trips-thumbails/6.png'),
    7: require('./images/trips-thumbails/7.png'),
    8: require('./images/trips-thumbails/8.png'),
    9: require('./images/trips-thumbails/9.png'),
    10: require('./images/trips-thumbails/10.png'),

}

export const RANDOMTHUMBNAIL = ()=>{
   const random =  Math.floor(Math.random() * 10)
   return THUMBNAILS[random];
}