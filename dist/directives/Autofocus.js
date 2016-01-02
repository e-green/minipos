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
var Autofocus = (function () {
    function Autofocus(el) {
        this.el = el;
        this.el.nativeElement.focus();
    }
    Autofocus = __decorate([
        core_1.Directive({
            selector: '[autofocus]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Autofocus);
    return Autofocus;
})();
exports.Autofocus = Autofocus;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvQXV0b2ZvY3VzLnRzIl0sIm5hbWVzIjpbIkF1dG9mb2N1cyIsIkF1dG9mb2N1cy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBRXBEO0lBSUVBLG1CQUFvQkEsRUFBY0E7UUFBZEMsT0FBRUEsR0FBRkEsRUFBRUEsQ0FBWUE7UUFFaENBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLGFBQWFBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO0lBQ2hDQSxDQUFDQTtJQVBIRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsYUFBYUE7U0FDeEJBLENBQUNBOztrQkFNREE7SUFBREEsZ0JBQUNBO0FBQURBLENBUkEsQUFRQ0EsSUFBQTtBQUxZLGlCQUFTLFlBS3JCLENBQUEiLCJmaWxlIjoiZGlyZWN0aXZlcy9BdXRvZm9jdXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4vLyBTaW1wbGUgZXhhbXBsZSBkaXJlY3RpdmUgdGhhdCBmaXhlcyBhdXRvZm9jdXMgcHJvYmxlbSB3aXRoIG11bHRpcGxlIHZpZXdzXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXV0b2ZvY3VzXScgLy8gdXNpbmcgWyBdIG1lYW5zIHNlbGVjdGluZyBhdHRyaWJ1dGVzXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9mb2N1cyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICAvLyBhdXRvZm9jdXMgZml4IGZvciBtdWx0aXBsZSB2aWV3c1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
