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
var core_1 = require("@angular/core");
/**
 * Services
 * */
var hotel_service_1 = require("../../services/hotel.service");
var FiltersComponent = /** @class */ (function () {
    function FiltersComponent(hotel) {
        this.hotel = hotel;
        this.sectionSearch = true;
        this.sectionStars = true;
        this.sectionAll = true;
        this.allElements = false;
        this.fiveElements = false;
        this.fourElements = false;
        this.threeElements = false;
        this.twoElements = false;
        this.oneElements = false;
        this.hotelName = '';
    }
    ;
    /**
     * in order to expand and collapse pannels
     * @params:
     *  section:string name of the section to collapse/expand
     * */
    FiltersComponent.prototype.collapseExpandElement = function (section) {
        if (section === 'search') {
            this.sectionSearch = !this.sectionSearch;
        }
        if (section === 'stars') {
            this.sectionStars = !this.sectionStars;
        }
        if (section === 'all') {
            this.sectionAll = !this.sectionAll;
        }
    };
    /**
     * in order to prepare the data to search
     * @params:
     *  filterType:number number of the stars
     *  actionType:string type of action value of the model
     * */
    FiltersComponent.prototype.applyFilters = function (filterType, actionType) {
        if (filterType != -1) {
            this.allElements = false;
        }
        else {
            if (actionType) {
                this.allElements = this.oneElements = this.twoElements = this.threeElements = this.fourElements = this.fiveElements = true;
            }
            else {
                this.allElements = this.oneElements = this.twoElements = this.threeElements = this.fourElements = this.fiveElements = false;
            }
        }
        if (this.oneElements && this.twoElements && this.threeElements && this.fourElements && this.fiveElements) {
            this.allElements = true;
        }
        this.applyCurrentFilters();
    };
    /**
     * validate the model data and apply the filters
     * */
    FiltersComponent.prototype.applyCurrentFilters = function () {
        var self = this;
        var one, two, three, four, five, all;
        one = this.oneElements ? "1" : "0";
        two = this.twoElements ? "2" : "0";
        three = this.threeElements ? "3" : "0";
        four = this.fourElements ? "4" : "0";
        five = this.fiveElements ? "5" : "0";
        all = this.allElements ? "1" : "0";
        this.hotel.getHotelsByStars(this.hotelName.toLowerCase(), one, two, three, four, five, all).then(function (data) {
            self.hotel.data = data.hotels;
        });
    };
    /**
     * search by name
    * */
    FiltersComponent.prototype.searchHotels = function () {
        var self = this;
        var one, two, three, four, five, all;
        one = this.oneElements ? "1" : "0";
        two = this.twoElements ? "2" : "0";
        three = this.threeElements ? "3" : "0";
        four = this.fourElements ? "4" : "0";
        five = this.fiveElements ? "5" : "0";
        all = this.allElements ? "1" : "0";
        this.hotel.getHotels(this.hotelName.toLowerCase(), one, two, three, four, five, all).then(function (data) {
            self.hotel.data = data.hotels;
        });
    };
    FiltersComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.searchHotels();
        }
    };
    FiltersComponent = __decorate([
        core_1.Component({
            selector: 'filters',
            templateUrl: './filters.component.html',
            styles: [require('./filters.component.less')]
        }),
        __metadata("design:paramtypes", [hotel_service_1.HotelService])
    ], FiltersComponent);
    return FiltersComponent;
}());
exports.FiltersComponent = FiltersComponent;
//# sourceMappingURL=filters.component.js.map