
//the main function to reverse the text
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


//cosmetic function. just capitilize the message
function lol(s)
{
       var q = s[0].toUpperCase();
       var r =   s.substring(1).toLowerCase();
       var S = q + r;
       return S;

}

//function to copy the final output
function copy() {
  var copyText = document.querySelector("#out");

  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  document.execCommand("copy");
  alert( copyText.value + " :deipoC ");
}


const In= document.querySelector("#in");
const Out = document.querySelector("#out");
const copyButton = document.querySelector("#copyButton");

//hide the copybutton at start
 copyButton.style.display = "none";
//update the output
In.addEventListener("keyup", () => {
   //if the value becomes empty, it cant find the first
   //index, thus return an error. so we only call the function
   //if the text isnt empty
  if(In.value != "") {
      var cap =   reverseString(In.value);
    Out.value= lol(cap);
    copyButton.style.display = "initial";
    }
    else
    {
      Out.value= "";
      copyButton.style.display = "none";
      }
      
      //chnaging the height of the textbixes
      In.style.height = calcHeight(In.value) + "px";
      Out.style.height = In.style.height;
});

// dealing with txtarea height
function calcHeight(value) {
  let numberOfLineBreaks = (value.match(/\n/g) || []).length;
  
  let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
  return newHeight;
}
