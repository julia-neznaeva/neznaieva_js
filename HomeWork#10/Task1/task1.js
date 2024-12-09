var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function display(strOrArray) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var res = "";
    if (Array.isArray(strOrArray)) {
        strOrArray.forEach(function (element) {
            res += element + "\n";
        });
    }
    else {
        __spreadArray([strOrArray], rest, true).forEach(function (element) {
            res += element + "\n";
        });
    }
    console.log(res);
}
display("Hello, World!");
display("Hello", "World!");
display(["Hello", "World", "!"]);
