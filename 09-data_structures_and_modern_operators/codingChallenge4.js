/**
 * Write a program that receives a list of variable names written in
 * underscore_case and convert them to camelCase.
 * The input will come from a textarea inserted into the DOM (see code below),
 * and conversion will happen when the button is pressed.
 * THIS TEST DATA (pasted to textarea):
 *      underscore_case
 *      first_name
 *      Some_Variable
 *      calculate_AGE
 *      delayed_departure
 *
 * SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
 *      underscoreCase      ✅
 *      firstName           ✅✅
 *      someVariable        ✅✅✅
 *      calculateAge        ✅✅✅✅
 *      delayedDeparture    ✅✅✅✅✅
 *
 * HINT 1: Remember which character defines a new line in the textarea 😉
 *
 * HINT 2: The solution only needs to work for a variable made out of 2 words,
 * like a_b
 *
 * HINT 3: Start without worrying about the ✅. Tackle that only after you have
 * the variable name conversion working 😉
 *
 * HINT 4: This challenge is difficult on purpose, so start watching the
 * solution in case you're stuck. Then pause and continue!
 *
 * Afterwards, test with your own test data!
 */

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", (e) => {
    const text = document.querySelector("textarea").value;
    let checks = "✅";

    const modifyStr = (str) => {
        const splitStr = str.split("\n");
        return splitStr;
    };

    const convertToCamelCase = (word) => {
        let [firstVar, secondVar] = word.toLowerCase().split("_");
        secondVar = secondVar[0].toUpperCase() + secondVar.slice(1);
        const finalVar = firstVar + secondVar;
        return finalVar;
    };

    const dataMod = modifyStr(text);

    for (const str of dataMod) {
        const variable = convertToCamelCase(str);
        console.log(`${variable.padEnd(20, " ")}${checks}`);
        checks += "✅";
    }
});

// data =
//     "underscore_case\nfirst_name\nSome_Variable\ncalculate_AGE\ndelayed_departure";




// convertToCamelCase("underscore_case");
// convertToCamelCase("first_name");
// convertToCamelCase("Some_Variable");
// convertToCamelCase("calculate_AGE");
// convertToCamelCase("delayed_departure");
// convertToCamelCase("HELLO_WORLD");
// convertToCamelCase("jaCK_RabbIT");