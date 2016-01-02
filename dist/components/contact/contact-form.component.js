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
var web_util_1 = require('../../core/web.util');
var contact_service_1 = require('./contact.service');
var Autofocus_1 = require('../../directives/Autofocus');
var ContactFormComponent = (function () {
    function ContactFormComponent(contactService) {
        this.contactService = contactService;
        this.saved = new core_1.EventEmitter();
        this.clear();
        this.form = new common_1.ControlGroup({
            _id: new common_1.Control(''),
            name: new common_1.Control('', common_1.Validators.required),
            email: new common_1.Control('', web_util_1.validateEmail)
        });
    }
    ContactFormComponent.prototype.save = function () {
        var _this = this;
        this.contactService.saveOne(this.contact)
            .subscribe(function (res) {
            _this.clear();
            _this.saved.emit(res);
        });
    };
    ContactFormComponent.prototype.clear = function () {
        this.contact = {};
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ContactFormComponent.prototype, "contact", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ContactFormComponent.prototype, "saved", void 0);
    ContactFormComponent = __decorate([
        core_1.Component({
            selector: 'contact-form',
            templateUrl: './components/contact/contact-form.component.html',
            directives: [Autofocus_1.Autofocus, common_1.COMMON_DIRECTIVES],
            pipes: [common_1.COMMON_PIPES],
            providers: []
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], ContactFormComponent);
    return ContactFormComponent;
})();
exports.ContactFormComponent = ContactFormComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGFjdC9jb250YWN0LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkNvbnRhY3RGb3JtQ29tcG9uZW50IiwiQ29udGFjdEZvcm1Db21wb25lbnQuY29uc3RydWN0b3IiLCJDb250YWN0Rm9ybUNvbXBvbmVudC5zYXZlIiwiQ29udGFjdEZvcm1Db21wb25lbnQuY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVCQUFpRixpQkFBaUIsQ0FBQyxDQUFBO0FBQ25HLHFCQUFxRCxlQUFlLENBQUMsQ0FBQTtBQUtyRSx5QkFBNEIscUJBQXFCLENBQUMsQ0FBQTtBQUVsRCxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCwwQkFBd0IsNEJBQTRCLENBQUMsQ0FBQTtBQUVyRDtJQWlCRUEsOEJBQW9CQSxjQUE4QkE7UUFBOUJDLG1CQUFjQSxHQUFkQSxjQUFjQSxDQUFnQkE7UUFGbERBLFVBQUtBLEdBQUdBLElBQUlBLG1CQUFZQSxFQUFXQSxDQUFDQTtRQUdsQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7UUFDYkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEscUJBQVlBLENBQUNBO1lBQzNCQSxHQUFHQSxFQUFFQSxJQUFJQSxnQkFBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7WUFDcEJBLElBQUlBLEVBQUVBLElBQUlBLGdCQUFPQSxDQUFDQSxFQUFFQSxFQUFFQSxtQkFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDMUNBLEtBQUtBLEVBQUVBLElBQUlBLGdCQUFPQSxDQUFDQSxFQUFFQSxFQUFFQSx3QkFBYUEsQ0FBQ0E7U0FDdENBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBRURELG1DQUFJQSxHQUFKQTtRQUFBRSxpQkFNQ0E7UUFMQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7YUFDdENBLFNBQVNBLENBQUNBLFVBQUNBLEdBQVlBO1lBQ3RCQSxLQUFJQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTtZQUNiQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN2QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFFREYsb0NBQUtBLEdBQUxBO1FBQ0VHLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEVBQUVBLENBQUNBO0lBQ3BCQSxDQUFDQTtJQXpCREg7UUFBQ0EsWUFBS0EsRUFBRUE7O09BQ1JBLHlDQUFPQSxVQUFVQTtJQUVqQkE7UUFBQ0EsYUFBTUEsRUFBRUE7O09BQ1RBLHVDQUFLQSxVQUErQkE7SUFmdENBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxjQUFjQTtZQUN4QkEsV0FBV0EsRUFBRUEsa0RBQWtEQTtZQUMvREEsVUFBVUEsRUFBRUEsQ0FBQ0EscUJBQVNBLEVBQUVBLDBCQUFpQkEsQ0FBQ0E7WUFDMUNBLEtBQUtBLEVBQUVBLENBQUNBLHFCQUFZQSxDQUFDQTtZQUNyQkEsU0FBU0EsRUFBRUEsRUFBRUE7U0FDZEEsQ0FBQ0E7OzZCQStCREE7SUFBREEsMkJBQUNBO0FBQURBLENBckNBLEFBcUNDQSxJQUFBO0FBOUJZLDRCQUFvQix1QkE4QmhDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NPTU1PTl9ESVJFQ1RJVkVTLCBDT01NT05fUElQRVMsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgQ29udHJvbH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuaW1wb3J0IHt2YWxpZGF0ZUVtYWlsfSBmcm9tICcuLi8uLi9jb3JlL3dlYi51dGlsJztcbmltcG9ydCB7Q29udGFjdH0gZnJvbSAnLi4vLi4vY29yZS9kdG8nO1xuaW1wb3J0IHtDb250YWN0U2VydmljZX0gZnJvbSAnLi9jb250YWN0LnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRvZm9jdXN9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvQXV0b2ZvY3VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29udGFjdC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbQXV0b2ZvY3VzLCBDT01NT05fRElSRUNUSVZFU10sXG4gIHBpcGVzOiBbQ09NTU9OX1BJUEVTXSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0Rm9ybUNvbXBvbmVudCB7XG5cbiAgZm9ybTogQ29udHJvbEdyb3VwO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnRhY3Q6IENvbnRhY3Q7XG5cbiAgQE91dHB1dCgpXG4gIHNhdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxDb250YWN0PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFjdFNlcnZpY2U6IENvbnRhY3RTZXJ2aWNlKSB7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuZm9ybSA9IG5ldyBDb250cm9sR3JvdXAoe1xuICAgICAgX2lkOiBuZXcgQ29udHJvbCgnJyksXG4gICAgICBuYW1lOiBuZXcgQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICBlbWFpbDogbmV3IENvbnRyb2woJycsIHZhbGlkYXRlRW1haWwpXG4gICAgfSk7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIHRoaXMuY29udGFjdFNlcnZpY2Uuc2F2ZU9uZSh0aGlzLmNvbnRhY3QpXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IENvbnRhY3QpID0+IHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnNhdmVkLmVtaXQocmVzKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jb250YWN0ID0ge307XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
