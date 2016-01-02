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
var router_1 = require('angular2/router');
var home_component_1 = require('../home/home.component');
var contact_component_1 = require('../contact/contact.component');
var http_util_1 = require('../../core/http.util');
var AppComponent = (function () {
    function AppComponent(httpUtil) {
        var _this = this;
        this.httpUtil = httpUtil;
        var numReqStarted = 0;
        var numReqCompleted = numReqStarted;
        this.httpUtil.requestNotifier.subscribe(function (notification) {
            if (notification.type === 'start') {
                ++numReqStarted;
            }
            else if (notification.type === 'complete') {
                ++numReqCompleted;
            }
            _this.loading = numReqStarted > numReqCompleted;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './components/app/app.component.html',
            styleUrls: ['./components/app/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        router_1.RouteConfig([
            { path: '/', component: home_component_1.HomeComponent, as: 'Home' },
            { path: '/contact', component: contact_component_1.ContactComponent, as: 'Contact' }
        ]), 
        __metadata('design:paramtypes', [http_util_1.HttpUtil])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBR08saUJBQWlCLENBQUMsQ0FBQTtBQUV6QiwrQkFBNEIsd0JBQXdCLENBQUMsQ0FBQTtBQUNyRCxrQ0FBK0IsOEJBQThCLENBQUMsQ0FBQTtBQUM5RCwwQkFBdUIsc0JBQXNCLENBQUMsQ0FBQTtBQUk5QztJQWVFQSxzQkFBb0JBLFFBQWtCQTtRQWZ4Q0MsaUJBK0JDQTtRQWhCcUJBLGFBQVFBLEdBQVJBLFFBQVFBLENBQVVBO1FBRXBDQSxJQUFJQSxhQUFhQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN0QkEsSUFBSUEsZUFBZUEsR0FBR0EsYUFBYUEsQ0FBQ0E7UUFFcENBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLGVBQWVBLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLFlBQTBCQTtZQUVqRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsS0FBS0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xDQSxFQUFFQSxhQUFhQSxDQUFDQTtZQUNsQkEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsS0FBS0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzVDQSxFQUFFQSxlQUFlQSxDQUFDQTtZQUNwQkEsQ0FBQ0E7WUFFREEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsYUFBYUEsR0FBR0EsZUFBZUEsQ0FBQ0E7UUFDakRBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBOUJIRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsS0FBS0E7WUFDZkEsV0FBV0EsRUFBRUEscUNBQXFDQTtZQUNsREEsU0FBU0EsRUFBRUEsQ0FBQ0Esb0NBQW9DQSxDQUFDQTtZQUNqREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxDQUFDQTtZQUMvQkEsYUFBYUEsRUFBRUEsd0JBQWlCQSxDQUFDQSxJQUFJQTtTQUN0Q0EsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1hBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFNBQVNBLEVBQUVBLDhCQUFhQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQTtZQUNuREEsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsU0FBU0EsRUFBRUEsb0NBQWdCQSxFQUFFQSxFQUFFQSxFQUFFQSxTQUFTQSxFQUFFQTtTQUNqRUEsQ0FBQ0E7O3FCQXFCREE7SUFBREEsbUJBQUNBO0FBQURBLENBL0JBLEFBK0JDQSxJQUFBO0FBcEJZLG9CQUFZLGVBb0J4QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUm91dGVDb25maWcsXG4gIFJPVVRFUl9ESVJFQ1RJVkVTXG59IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbnRhY3RDb21wb25lbnR9IGZyb20gJy4uL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtIdHRwVXRpbH0gZnJvbSAnLi4vLi4vY29yZS9odHRwLnV0aWwnO1xuaW1wb3J0IHtOb3RpZmljYXRpb259IGZyb20gJy4uLy4uL2NvcmUvZHRvJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MnXSxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIGFzOiAnSG9tZScgfSxcbiAgeyBwYXRoOiAnL2NvbnRhY3QnLCBjb21wb25lbnQ6IENvbnRhY3RDb21wb25lbnQsIGFzOiAnQ29udGFjdCcgfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBVdGlsOiBIdHRwVXRpbCkge1xuICAgIFxuICAgIGxldCBudW1SZXFTdGFydGVkID0gMDtcbiAgICBsZXQgbnVtUmVxQ29tcGxldGVkID0gbnVtUmVxU3RhcnRlZDtcbiAgICBcbiAgICB0aGlzLmh0dHBVdGlsLnJlcXVlc3ROb3RpZmllci5zdWJzY3JpYmUoKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKSA9PiB7XG4gICAgICBcbiAgICAgIGlmIChub3RpZmljYXRpb24udHlwZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICArK251bVJlcVN0YXJ0ZWQ7XG4gICAgICB9IGVsc2UgaWYgKG5vdGlmaWNhdGlvbi50eXBlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICsrbnVtUmVxQ29tcGxldGVkO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLmxvYWRpbmcgPSBudW1SZXFTdGFydGVkID4gbnVtUmVxQ29tcGxldGVkOyAgICAgICAgICAgIFxuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
