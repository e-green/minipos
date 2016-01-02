var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var common_1 = require('angular2/common');
var core_1 = require('angular2/core');
var contact_service_1 = require('./contact.service');
var contact_form_component_1 = require('./contact-form.component');
var CustomOrderByPipe_1 = require('../../pipes/CustomOrderByPipe');
var ContactComponent = (function () {
    function ContactComponent(contactService) {
        this.contactService = contactService;
        this.reset();
    }
    ContactComponent.prototype.remove = function (event, data) {
        var _this = this;
        event.stopPropagation();
        this.contactService.removeOneById(data._id)
            .subscribe(function (res) {
            _this.reset();
        });
    };
    ContactComponent.prototype.select = function (id) {
        var _this = this;
        this.contactService.findOneById(id)
            .subscribe(function (res) {
            _this.selectedContact = res;
        });
    };
    ContactComponent.prototype.reset = function () {
        this.selectedContact = {};
        this.find();
    };
    ContactComponent.prototype.find = function () {
        var _this = this;
        this.contactService.find().subscribe(function (res) {
            _this.contacts = res;
        });
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact',
            templateUrl: './components/contact/contact.component.html',
            directives: [contact_form_component_1.ContactFormComponent, common_1.COMMON_DIRECTIVES],
            pipes: [CustomOrderByPipe_1.CustomOrderByPipe, common_1.COMMON_PIPES],
            providers: []
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], ContactComponent);
    return ContactComponent;
})();
exports.ContactComponent = ContactComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJDb250YWN0Q29tcG9uZW50IiwiQ29udGFjdENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkNvbnRhY3RDb21wb25lbnQucmVtb3ZlIiwiQ29udGFjdENvbXBvbmVudC5zZWxlY3QiLCJDb250YWN0Q29tcG9uZW50LnJlc2V0IiwiQ29udGFjdENvbXBvbmVudC5maW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1QkFBOEMsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFLeEMsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFDakQsdUNBQW1DLDBCQUEwQixDQUFDLENBQUE7QUFDOUQsa0NBQWdDLCtCQUErQixDQUFDLENBQUE7QUFFaEU7SUFZRUEsMEJBQW9CQSxjQUE4QkE7UUFBOUJDLG1CQUFjQSxHQUFkQSxjQUFjQSxDQUFnQkE7UUFDaERBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO0lBQ2ZBLENBQUNBO0lBRURELGlDQUFNQSxHQUFOQSxVQUFPQSxLQUFZQSxFQUFFQSxJQUFhQTtRQUFsQ0UsaUJBUUNBO1FBTkNBLEtBQUtBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO1FBRXhCQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQTthQUN4Q0EsU0FBU0EsQ0FBQ0EsVUFBQ0EsR0FBWUE7WUFDdEJBLEtBQUlBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO1FBQ2ZBLENBQUNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBRURGLGlDQUFNQSxHQUFOQSxVQUFPQSxFQUFVQTtRQUFqQkcsaUJBS0NBO1FBSkNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFdBQVdBLENBQUNBLEVBQUVBLENBQUNBO2FBQ2hDQSxTQUFTQSxDQUFDQSxVQUFDQSxHQUFZQTtZQUN0QkEsS0FBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDN0JBLENBQUNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBRURILGdDQUFLQSxHQUFMQTtRQUNFSSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUMxQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUFFREosK0JBQUlBLEdBQUpBO1FBQUFLLGlCQUlDQTtRQUhDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFDQSxHQUFjQTtZQUNsREEsS0FBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQ0E7UUFDdEJBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBMUNITDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsU0FBU0E7WUFDbkJBLFdBQVdBLEVBQUVBLDZDQUE2Q0E7WUFDMURBLFVBQVVBLEVBQUVBLENBQUNBLDZDQUFvQkEsRUFBRUEsMEJBQWlCQSxDQUFDQTtZQUNyREEsS0FBS0EsRUFBRUEsQ0FBQ0EscUNBQWlCQSxFQUFFQSxxQkFBWUEsQ0FBQ0E7WUFDeENBLFNBQVNBLEVBQUVBLEVBQUVBO1NBQ2RBLENBQUNBOzt5QkFzQ0RBO0lBQURBLHVCQUFDQTtBQUFEQSxDQTVDQSxBQTRDQ0EsSUFBQTtBQXJDWSx3QkFBZ0IsbUJBcUM1QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09NTU9OX0RJUkVDVElWRVMsIENPTU1PTl9QSVBFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQge0NvbnRhY3R9IGZyb20gJy4uLy4uL2NvcmUvZHRvJztcbmltcG9ydCB7Q29udGFjdFNlcnZpY2V9IGZyb20gJy4vY29udGFjdC5zZXJ2aWNlJztcbmltcG9ydCB7Q29udGFjdEZvcm1Db21wb25lbnR9IGZyb20gJy4vY29udGFjdC1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQge0N1c3RvbU9yZGVyQnlQaXBlfSBmcm9tICcuLi8uLi9waXBlcy9DdXN0b21PcmRlckJ5UGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbnRhY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbQ29udGFjdEZvcm1Db21wb25lbnQsIENPTU1PTl9ESVJFQ1RJVkVTXSxcbiAgcGlwZXM6IFtDdXN0b21PcmRlckJ5UGlwZSwgQ09NTU9OX1BJUEVTXSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IHtcblxuICBjb250YWN0czogQ29udGFjdFtdO1xuICBzZWxlY3RlZENvbnRhY3Q6IENvbnRhY3Q7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWN0U2VydmljZTogQ29udGFjdFNlcnZpY2UpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cbiAgXG4gIHJlbW92ZShldmVudDogRXZlbnQsIGRhdGE6IENvbnRhY3QpIHtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5jb250YWN0U2VydmljZS5yZW1vdmVPbmVCeUlkKGRhdGEuX2lkKVxuICAgICAgLnN1YnNjcmliZSgocmVzOiBDb250YWN0KSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0KGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbnRhY3RTZXJ2aWNlLmZpbmRPbmVCeUlkKGlkKVxuICAgICAgLnN1YnNjcmliZSgocmVzOiBDb250YWN0KSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb250YWN0ID0gcmVzO1xuICAgICAgfSk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ29udGFjdCA9IHt9O1xuICAgIHRoaXMuZmluZCgpO1xuICB9XG5cbiAgZmluZCgpIHtcbiAgICB0aGlzLmNvbnRhY3RTZXJ2aWNlLmZpbmQoKS5zdWJzY3JpYmUoKHJlczogQ29udGFjdFtdKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhY3RzID0gcmVzO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
