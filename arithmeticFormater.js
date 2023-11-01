const operation = ["32 + 68", "3801 - 2", "45 + 43", "123 + 49j", "100 * 40"];

const arithmetic_arranger = (ope) => {
  let lineOneItems = "";
  let lineTwoItems = "";
  let dashedLines = "";
  let resultLine = "";

  if (ope.length > 5) {
    console.log("Error: Too many problems.");
  } else {
    for (let i = 0; i < ope.length; i++) {
      let singleOpe = ope[i].split(" ");
      if (singleOpe[1] != "+" && singleOpe[1] != "-") {
        console.log(`Error: Operator must be '+' or '-'. [${singleOpe}]`);
      } else {
        if (isNaN(Number(singleOpe[0])) | isNaN(Number(singleOpe[2]))) {
          console.log(
            `Error: Numbers must only contain digits. [${singleOpe}]`
          );
        } else {
          if ((singleOpe[0].length > 4) | (singleOpe[2].length > 4)) {
            console.log(
              `Error: Numbers cannot be more than four digits. [${singleOpe}]`
            );
          } else {
            console.log(singleOpe);
            let opeResult = (
              Number(singleOpe[0]) + Number(singleOpe[2])
            ).toString();
            lineTwoItems += singleOpe[1] + " ";
            let maxLength = 0;

            // calculating the max
            for (let z = 0; z < singleOpe.length; z++) {
              if (singleOpe[z].length > maxLength) {
                maxLength = singleOpe[z].length;
              }
            }
            //adding dashes = maxlenght + one space and symbol
            for (let d = 0; d < maxLength + 2; d++) {
              dashedLines += "-";
            }

            // calculating difference between lenght max and the currrent +1
            // si el numero 2 es mas largo
            if (maxLength > singleOpe[0].length) {
              let diference = maxLength + 2 - singleOpe[0].length;

              // adding the spaces
              for (let s = 0; s < diference; s++) {
                lineOneItems += " ";
              }
            }

            let diference = maxLength + 2 - singleOpe[2].length;

            // if the number is > 1
            if (maxLength > singleOpe[2].length) {
              // adding the spaces
              for (let s = 0; s < 2; s++) {
                lineOneItems += " ";
              }
              for (let s = 0; s < diference - 2; s++) {
                lineTwoItems += " ";
              }
            }

            // if the numbers are the same
            // + 2 is due to the symbol +/- plus the space
            if (
              maxLength == singleOpe[0].length &&
              maxLength == singleOpe[2].length
            ) {
              // adding the spaces
              for (let s = 0; s < diference; s++) {
                lineOneItems += " ";
              }
            }
            // adding the spaces to the result
            let diferenceResult = maxLength + 2 - opeResult.length;
            for (let s = 0; s < diferenceResult; s++) {
              resultLine += " ";
            }

            lineOneItems += singleOpe[0];
            lineTwoItems += singleOpe[2];
            lineOneItems += "    ";
            lineTwoItems += "    ";
            dashedLines += "    ";
            resultLine += opeResult;
            resultLine += "    ";
          }
        }
      }
    }

    console.log(lineOneItems);
    console.log(lineTwoItems);
    console.log(dashedLines);
    console.log(resultLine);
  }
};

arithmetic_arranger(operation);
