function check_upper_case(name) {
  if (name.charAt(0) === name.charAt(0).toUpperCase()) {
    console.log(name);
  } else {
    let originalname = name.charAt(0).toLowerCase() + name.slice(1);
    console.log(originalname);
  }
}

check_upper_case("abhishek");
