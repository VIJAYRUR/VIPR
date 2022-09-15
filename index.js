var temp = "";
var output = ``;
function oncha(val) {
  console.log(val);
  temp = val;
  console.log(temp);
}

function oncli() {
  var buttonText = document.getElementById("copyButton").innerText = "Copy";

  document.getElementById("OutputContainer").innerHTML = `<Textarea></Textarea>`;
  output = "";
  removeComment();
}

function lines(text) {
  return text.split('\n');
}

//Function to removeComments
function removeComment() {
  var strings = temp.split('\n');
  console.log(temp.split('\n'));
  strings.forEach(element => {
    var n = element.length;
    if (element.includes("//")) {
      n = element.indexOf("//");
    }
    if (element.includes("#include<") == false && element.includes("#") && element.includes("import") == false) {
      n = element.indexOf("#");
    }


    output += element.substring(0, n);
    output += "\n";
  }
  );
  strings = output.split('\n');
  output = "";
  var result = [];
  var check = false;
  var count = 0;
  var multipy = 0;
  strings.forEach(element => {
    if (element.includes("\"\"\"") || element.includes("\'\'\'")) {
      multipy = multipy + 1;
      if (multipy == 1) {
        check = true;
      }
      else {
        check = false;
        count = 1;
        multipy = 0;
      }
    }
    if (element.includes("/*")) {
      check = true;

    }
    if (element.includes("*/")) {
      check = false;
      count = 1
    }

    if (check == false && count == 0) {
      result.push(element);
      output += element;
      output += "\n";

    }
    else {
      count = 0;
    }
  }
  );
  document.getElementById("OutputContainer").innerHTML = `<Textarea class="form-control container" rows = "10">${output}</Textarea>`;
}

function copy() {

  navigator.clipboard.writeText(output);
  console.log("Done!");
  var buttonText = document.getElementById("copyButton").innerText = "Copied to clipboard!";
}

        // function removeMultComment() {
        //     var strings = lines(temp);
        //     var result = []
        //     var check = false;
        //     var count = 0;
        //     strings.forEach(element => {
        //         if (element.includes("/*")) {
        //             check = true;
        //         }
        //         if (element.includes("*/")) {
        //             check = false;
        //             count = 1
        //         }

        //         if (check == false && count == 0) {
        //             result.push(element);
        //             output += element;
        //             output += "\n";

        //         }
        //         else {
        //             count = 0;
        //         }
        //     }
        //     );
        //     document.getElementById("OutputContainer").innerHTML = `<Textarea class="form-control container" rows = "10">${output}</Textarea>`;


        // }

