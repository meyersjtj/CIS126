const validatePassword = (password) => {
    let pass_length = 0;
    let upper_case_count = 0;
    let lower_case_count = 0;
    let meets_reqs = false;
    lower_case_alpha = "abcdefghijklmnopqrstuvwxyz".split("");
    console.log(lower_case_alpha);
    upper_case_alpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    console.log(upper_case_alpha);
    
    const pass_array = password.split('');
    for (let n in pass_array){
        if (lower_case_alpha.includes(pass_array[n])){
            lower_case_count += 1;
        }
        else if (upper_case_alpha.includes(pass_array[n])){
            upper_case_count += 1;
        }
    }
    console.log("Lower case characters: ", lower_case_count);
    console.log("Upper case characters: ", upper_case_count);
    console.log("Password length: ", pass_array.length);

    if (pass_array.length >= 8 && upper_case_count > 0 && lower_case_count > 0) {
        meets_reqs = true
        document.write("Meets password requirements");
    }
    else {
        document.write("Does NOT meet password requirements");
    }
    return meets_reqs;
}
let password = "HeeeelllLLoooooo";
let pass_reqs_met = validatePassword(password);
console.log(pass_reqs_met);
