"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by cristianolaya on 24/03/18.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
var HotelService = /** @class */ (function () {
    function HotelService(http) {
        this.http = http;
        //private baseUrl:string = 'http://localhost:4500';
        this.baseUrl = 'http://ec2-34-211-160-79.us-west-2.compute.amazonaws.com:4500';
        this.data = [];
    }
    ;
    /**
     * get hotels by stars service
     * @params:
     *  name: string
     *  stars: number
     * */
    HotelService.prototype.getHotelsByStars = function (name, one, two, three, four, five, all) {
        var url = this.baseUrl + '/get-hotels-by-stars';
        var params = new http_1.URLSearchParams();
        params.set('name', name);
        params.set('one', one);
        params.set('two', two);
        params.set('three', three);
        params.set('four', four);
        params.set('five', five);
        params.set('all', all);
        return this.http.get(url, { params: params })
            .toPromise()
            .then(this.extractData)
            .then(function (response) { return response; });
    };
    /**
     * get hotels by name
     * */
    HotelService.prototype.getHotels = function (name, one, two, three, four, five, all) {
        var url = this.baseUrl + '/get-hotels';
        var params = new http_1.URLSearchParams();
        params.set('name', name);
        params.set('one', one);
        params.set('two', two);
        params.set('three', three);
        params.set('four', four);
        params.set('five', five);
        params.set('all', all);
        return this.http.get(url, { params: params })
            .toPromise()
            .then(this.extractData)
            .then(function (response) { return response; });
    };
    HotelService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ;
    HotelService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], HotelService);
    return HotelService;
}());
exports.HotelService = HotelService;
//# sourceMappingURL=hotel.service.js.map