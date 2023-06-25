var MobileNumber="1234567890";
var UserMobileNumberRegex =/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
console.log(UserMobileNumberRegex.test(MobileNumber) ?`Mobile Number is valid`: `Mobile Number is invalid`);
