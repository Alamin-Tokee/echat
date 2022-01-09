// var myCars = [{
//     "name" : "Axio 2018 WXB",
//     "priceLakh" : 22.5
// },
// {
//     "name" : "Premio 2015",
//     "priceLakh" : 26
// },
// {
//     "name" : "Rickshaw",
//     "priceLakh" : 0.5
// },
// {
//     "name" : "Civic 2019",
//     "priceLakh" : 34.5
// }]

// const totalPrice = myCars.filter(myCars => myCars.name!="Rickshaw").map(item => item.priceLakh).reduce((prev, curr) => prev + curr, 0);
// console.log(totalPrice);

// var baseSKU = 'kf1097';
// var variationOptions = [
//     {
//         name : 'size',
//         option: [40,41,42,43]
//     },
//     {
//         name: 'color',
//         option: ['black','brown','chocolate']
//     }
// ];
// function prepareCodes(baseSKU,variationOptions){
//     var result = []
//     for(var i=0;i<variationOptions[1].option.length; i++){
//         for(var j = 0; j<variationOptions[0].option.length;j++){
//             var value =baseSKU+"-"+variationOptions[1].option[i]+"-"+variationOptions[0].option[j];
//             result.push(value);
//         }
//     }
//     return result;
// }
// var productCodes = prepareCodes(baseSKU,variationOptions);

// console.log(productCodes);


function genrateCourseList(subject){
    var courseObject = {
        name: 'course-name',
        code: 'course-id'
    }

    var courseList = [];

    switch(subject){
        case 'nodejs':
            let nodejs1 =courseObject;
            nodejs1.name = 'NodeJS Beginner';
            nodejs1.code = 'N101',
            courseList.push(nodejs1);
            break;
        case 'html':
            let html = courseObject;
            html.name = 'HTML';
            html.code = 'N101',
            courseList.push(html);
            break;
        default:
            let noObject = courseObject;
            noObject.name = 'No Matchint Value Found';
            noObject.code = 'NOCOURSE101';
            courseList.push(noObject);
    }
    return courseList;
}

var myCourses = genrateCourseList('css');
console.log(myCourses);