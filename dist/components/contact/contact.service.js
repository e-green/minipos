var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_util_1 = require('../../core/http.util');
var base_service_1 = require('../../core/base.service');
var ContactService = (function (_super) {
    __extends(ContactService, _super);
    function ContactService(httpUtil) {
        _super.call(this, httpUtil, 'contact');
    }
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_util_1.HttpUtil])
    ], ContactService);
    return ContactService;
})(base_service_1.BaseResourceService);
exports.ContactService = ContactService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGFjdC9jb250YWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOlsiQ29udGFjdFNlcnZpY2UiLCJDb250YWN0U2VydmljZS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekMsMEJBQXVCLHNCQUFzQixDQUFDLENBQUE7QUFDOUMsNkJBQWtDLHlCQUF5QixDQUFDLENBQUE7QUFHNUQ7SUFDb0NBLGtDQUE0QkE7SUFFOURBLHdCQUFZQSxRQUFrQkE7UUFDNUJDLGtCQUFNQSxRQUFRQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtJQUM3QkEsQ0FBQ0E7SUFMSEQ7UUFBQ0EsaUJBQVVBLEVBQUVBOzt1QkFPWkE7SUFBREEscUJBQUNBO0FBQURBLENBUEEsQUFPQ0EsRUFObUMsa0NBQW1CLEVBTXREO0FBTlksc0JBQWMsaUJBTTFCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7Q29udGFjdH0gZnJvbSAnLi4vLi4vY29yZS9kdG8nO1xuaW1wb3J0IHtIdHRwVXRpbH0gZnJvbSAnLi4vLi4vY29yZS9odHRwLnV0aWwnO1xuaW1wb3J0IHtCYXNlUmVzb3VyY2VTZXJ2aWNlfSBmcm9tICcuLi8uLi9jb3JlL2Jhc2Uuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnRhY3RTZXJ2aWNlIGV4dGVuZHMgQmFzZVJlc291cmNlU2VydmljZTxDb250YWN0PiB7XG5cbiAgY29uc3RydWN0b3IoaHR0cFV0aWw6IEh0dHBVdGlsKSB7XG4gICAgc3VwZXIoaHR0cFV0aWwsICdjb250YWN0Jyk7XG4gIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
