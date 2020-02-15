/**
 * 将Date转化为指定的格式
 * @param  date 
 * @param  fmt 
 */
function dateFormat(date,fmt){
    date = date instanceof Date ? date : new Date(parseInt(date))


}


export {
    dateFormat
}