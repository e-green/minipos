var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var CustomOrderByPipe = (function () {
    function CustomOrderByPipe() {
    }
    CustomOrderByPipe.prototype.transform = function (value, args) {
        var params = Array.isArray(args[0]) ? args[0] : args;
        if (!value) {
            return value;
        }
        value.sort(this.dynamicSortMultiple.apply(this, params));
        return value;
    };
    CustomOrderByPipe.prototype.dynamicSort = function (prop) {
        var sortOrder = 1;
        if (prop[0] === '-') {
            sortOrder = -1;
            prop = prop.slice(1);
        }
        return function (a, b) {
            var propA = typeof a[prop] === 'string' ? a[prop].toLowerCase() : a[prop];
            var propB = typeof b[prop] === 'string' ? b[prop].toLowerCase() : b[prop];
            var result = propA < propB ? -1 : (propA > propB ? 1 : 0);
            return result * sortOrder;
        };
    };
    CustomOrderByPipe.prototype.dynamicSortMultiple = function () {
        var _this = this;
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i - 0] = arguments[_i];
        }
        return function (obj1, obj2) {
            var i = 0;
            var result = 0;
            while (result === 0 && i < props.length) {
                result = _this.dynamicSort(props[i])(obj1, obj2);
                i++;
            }
            return result;
        };
    };
    CustomOrderByPipe = __decorate([
        core_1.Pipe({
            name: 'customOrderBy'
        }), 
        __metadata('design:paramtypes', [])
    ], CustomOrderByPipe);
    return CustomOrderByPipe;
})();
exports.CustomOrderByPipe = CustomOrderByPipe;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL0N1c3RvbU9yZGVyQnlQaXBlLnRzIl0sIm5hbWVzIjpbIkN1c3RvbU9yZGVyQnlQaXBlIiwiQ3VzdG9tT3JkZXJCeVBpcGUuY29uc3RydWN0b3IiLCJDdXN0b21PcmRlckJ5UGlwZS50cmFuc2Zvcm0iLCJDdXN0b21PcmRlckJ5UGlwZS5keW5hbWljU29ydCIsIkN1c3RvbU9yZGVyQnlQaXBlLmR5bmFtaWNTb3J0TXVsdGlwbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUdsRDtJQUFBQTtJQXNEQUMsQ0FBQ0E7SUFqRENELHFDQUFTQSxHQUFUQSxVQUFVQSxLQUFlQSxFQUFFQSxJQUFjQTtRQUV2Q0UsSUFBTUEsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFFdkRBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO1lBQ1hBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO1FBQ2ZBLENBQUNBO1FBRURBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFekRBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQ2ZBLENBQUNBO0lBRURGLHVDQUFXQSxHQUFYQSxVQUFZQSxJQUFZQTtRQUV0QkcsSUFBSUEsU0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFFbEJBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO1lBQ3BCQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNmQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN2QkEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsVUFBQ0EsQ0FBU0EsRUFBRUEsQ0FBU0E7WUFDMUJBLElBQU1BLEtBQUtBLEdBQUdBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLFFBQVFBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLFdBQVdBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQzVFQSxJQUFNQSxLQUFLQSxHQUFHQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxRQUFRQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxXQUFXQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUM1RUEsSUFBTUEsTUFBTUEsR0FBR0EsS0FBS0EsR0FBR0EsS0FBS0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDNURBLE1BQU1BLENBQUNBLE1BQU1BLEdBQUdBLFNBQVNBLENBQUNBO1FBQzVCQSxDQUFDQSxDQUFDQTtJQUNKQSxDQUFDQTtJQUVESCwrQ0FBbUJBLEdBQW5CQTtRQUFBSSxpQkFpQkNBO1FBakJtQkEsZUFBa0JBO2FBQWxCQSxXQUFrQkEsQ0FBbEJBLHNCQUFrQkEsQ0FBbEJBLElBQWtCQTtZQUFsQkEsOEJBQWtCQTs7UUFFcENBLE1BQU1BLENBQUNBLFVBQUNBLElBQVlBLEVBQUVBLElBQVlBO1lBRWhDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNWQSxJQUFJQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUtmQSxPQUFPQSxNQUFNQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtnQkFDeENBLE1BQU1BLEdBQUdBLEtBQUlBLENBQUNBLFdBQVdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO2dCQUNoREEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7WUFDTkEsQ0FBQ0E7WUFFREEsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7UUFDaEJBLENBQUNBLENBQUNBO0lBQ0pBLENBQUNBO0lBcERISjtRQUFDQSxXQUFJQSxDQUFDQTtZQUNKQSxJQUFJQSxFQUFFQSxlQUFlQTtTQUN0QkEsQ0FBQ0E7OzBCQW9EREE7SUFBREEsd0JBQUNBO0FBQURBLENBdERBLEFBc0RDQSxJQUFBO0FBbkRZLHlCQUFpQixvQkFtRDdCLENBQUEiLCJmaWxlIjoicGlwZXMvQ3VzdG9tT3JkZXJCeVBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbkBQaXBlKHtcbiAgbmFtZTogJ2N1c3RvbU9yZGVyQnknXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbU9yZGVyQnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBPYmplY3RbXSwgYXJnczogc3RyaW5nW10pIHtcblxuICAgIGNvbnN0IHBhcmFtcyA9IEFycmF5LmlzQXJyYXkoYXJnc1swXSkgPyBhcmdzWzBdIDogYXJncztcblxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICB2YWx1ZS5zb3J0KHRoaXMuZHluYW1pY1NvcnRNdWx0aXBsZS5hcHBseSh0aGlzLCBwYXJhbXMpKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGR5bmFtaWNTb3J0KHByb3A6IHN0cmluZyk6IEZ1bmN0aW9uIHtcblxuICAgIGxldCBzb3J0T3JkZXIgPSAxO1xuXG4gICAgaWYgKHByb3BbMF0gPT09ICctJykge1xuICAgICAgc29ydE9yZGVyID0gLTE7XG4gICAgICBwcm9wID0gcHJvcC5zbGljZSgxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGE6IE9iamVjdCwgYjogT2JqZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9wQSA9IHR5cGVvZiBhW3Byb3BdID09PSAnc3RyaW5nJyA/IGFbcHJvcF0udG9Mb3dlckNhc2UoKSA6IGFbcHJvcF07XG4gICAgICBjb25zdCBwcm9wQiA9IHR5cGVvZiBiW3Byb3BdID09PSAnc3RyaW5nJyA/IGJbcHJvcF0udG9Mb3dlckNhc2UoKSA6IGJbcHJvcF07XG4gICAgICBjb25zdCByZXN1bHQgPSBwcm9wQSA8IHByb3BCID8gLTEgOiAocHJvcEEgPiBwcm9wQiA/IDEgOiAwKTtcbiAgICAgIHJldHVybiByZXN1bHQgKiBzb3J0T3JkZXI7XG4gICAgfTtcbiAgfVxuXG4gIGR5bmFtaWNTb3J0TXVsdGlwbGUoLi4ucHJvcHM6IHN0cmluZ1tdKTogRnVuY3Rpb24ge1xuXG4gICAgcmV0dXJuIChvYmoxOiBPYmplY3QsIG9iajI6IE9iamVjdCkgPT4ge1xuXG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBsZXQgcmVzdWx0ID0gMDtcblxuICAgICAgLyogdHJ5IGdldHRpbmcgYSBkaWZmZXJlbnQgcmVzdWx0IGZyb20gMCAoZXF1YWwpXG4gICAgICAgKiBhcyBsb25nIGFzIHdlIGhhdmUgZXh0cmEgcHJvcGVydGllcyB0byBjb21wYXJlXG4gICAgICAgKi9cbiAgICAgIHdoaWxlIChyZXN1bHQgPT09IDAgJiYgaSA8IHByb3BzLmxlbmd0aCkge1xuICAgICAgICByZXN1bHQgPSB0aGlzLmR5bmFtaWNTb3J0KHByb3BzW2ldKShvYmoxLCBvYmoyKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
