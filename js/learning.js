// variable : Biến
// let, const
// int number = 1;
// char* str;

//int, char, double, boolean... ~ let(const)
// let! Kh ai báo biến cục bộ

// function sum(a,b) {
//     let total = a + b
//     return total
// }

// const~ big scope local variable, global variable  .-> global variable bien toan cuc
// const view
// const components
// const model


// Function
//     function sayHello(){
//         console.log("Hello")
//     }


// function loadimg(callback) {
//     let url = 'https://2.bp.blogspot.com/-fjf5yU5r1Jk/WE1VD1BBKpI/AAAAAAAAjgI/bXwGoigAPJYvScMPtzJtzbOJfoGQO2C_ACEw/s1600/15349541_533868826819201_3350340522319981193_n.jpg'
//     let image = new Image()
//     image.src = url
//     image.onload = imageLoadHandler
//     image.onerror = errorHandler


//     function imageLoadHandler() {
//         console.log('Loaded image!!!')
//         callback(null, image)
//     }

//     function errorHandler() {
//         callback(error);
//     }
// }

// function loadimg() {
//     return new Promise(function (resolve, reject) {
//         let urc = 'https://2.bp.blogspot.com/-fjf5yU5r1Jk/WE1VD1BBKpI/AAAAAAAAjgI/bXwGoigAPJYvScMPtzJtzbOJfoGQO2C_ACEw/s1600/15349541_533868826819201_3350340522319981193_n.jpg'
//         let image = new Image()
//         image.src = urc
//         image.onload = imageLoadHandler
//         image.onerror = errorHandler


//         function imageLoadHandler() {
//             console.log('Loaded image!!!')
//             //callback(null, image)
//             resolve(image)
//         }

//         function errorHandler() {
//             //callback(error);
//             reject(error)
//         }
//     })
// }


// function display() {
//     console.log('Hello user!!!')
// }

// function process() {
//     loadimg() // async -> loadimg
//     display() // Hello user
// }



// function process() {
//     loadimg(loadimgCallBack)

//     function loadimgCallBack(error, data) {
//         if (error) {
//             console.log('Error!')
//         }
//         else {
//             display()
//             console.log(data)
//         }
//     }
// }

// async function process() {
    // loadimg > return Promise
//     try {
//          let image = await loadimg()
//          display()
//          console.log(image)
//      }
//      catch(eror){
//      console.log('error')
//      }
// }

// process()


// function async : Hàm bất đồng bộ

// object
//attributes, methos
var obj = {
    firstname: "Mai Quang",
    lastname: "Khải",
    saySomething: function(){
        console.log(obj.firstname + " " + obj.lastname)
    }
}

var keys = Object.keys(obj)
var values = Object.values(obj)
var entries = Object.entries(obj)

// array
var array = [1,2,3,4, "aa", obj, true]
// map, filter, sort, concat, splaice

// string, number
// typeof


