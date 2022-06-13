"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MetadataKeys_1 = require("./MetadataKeys");
require("reflect-metadata");
function bodyValidator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.validator, keys, target, key);
    };
}
exports.bodyValidator = bodyValidator;
