
let arrImg = [
    {
      url:'./anh1.jpg'
    },
    {
      url:'./anh2.jpg'
    },
    {
      url:'./anh3.jpg'
    },
    {
      url:'./anh4.jpg'
    },
    {
      url:'./anh13.jpg'
    },
    {
      url:'./anh6.jpg'
    },
    {
      url:'./anh7.jpg'
    },
    {
      url:'./anh8.jpg'
    },
    {
      url:'./anh9.jpg'
    },
    {
      url:'./anh10.jpg'
    }, 
    {
      url:'./anh11.jpg'
    }, 
    {
      url:'./anh12.jpg'
    },  
]

console.log (arrImg.length)
function render(arr) {
  let content = '';
  for (let i = 0; i < arr.length; i++) {
    console.log (arr.length)
      const imgItem = arr[i];
      content += `
      <div>
         <a href= ${imgItem.url}> 
            <img src=${imgItem.url} alt= ${imgItem.url}> 
         </a>
      </div>
              `
      $('#content').html(content)
  }
  // return $('#content').html(content)
}
render(arrImg)

let divCount = $('div')
console.log(divCount)

let twoImg = () => {
  for (let i = 2; i < divCount.length; i++) {
     divCount[i].remove();
  }
  let newdiv = $('div')
  console.log(newdiv.length)
  newdiv.addClass('divimgTwo');
}

function threeImg() {
  for (let i = 2; i < divCount.length - 1; i++) {
      divCount[i].remove();
  }
  let newdiv = $('div')
  newdiv.addClass('divimgTwo');
}

function fourImg() {
  for (let i = 4; i < divCount.length; i++) {
      divCount[i].remove();
  }
  let newdiv = $('div')
  newdiv.addClass('divimgTwo');
}

function reset() {
  location.reload();
}























































