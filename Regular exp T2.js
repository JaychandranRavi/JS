var password="Jai3@";
var userPasswordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+-={}|;:'\",.<>?/]).{8,}$/;
console.log(userPasswordRegex.test(password) ?`password is valid`: `password is invalid`);

