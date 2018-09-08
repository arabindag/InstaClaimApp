webpackJsonp([5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* unused harmony export Claim */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_claim_service_claim_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__result_result__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { FileChooser } from '@ionic-native/file-chooser';


//import { mobiscroll, MbscCalendarOptions,MbscDatetimeOptions  } from '@mobiscroll/angular';
// import { FilePath } from '@ionic-native/file-path';
/**
 * Generated class for the ClaimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// mobiscroll.settings = {
//   theme: 'ios'
// };
var now = new Date();
var UploadPage = /** @class */ (function () {
    function UploadPage(navCtrl, navParams, claimservice, formBuilder, camera, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.claimservice = claimservice;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.claim = new Claim();
        this.defaultimg = "../../assets/imgs/logo.png";
        this.time = now;
        this.h12 = now;
        this.h24 = now;
        this.hms = now;
        this.external = new Date();
        //   h12Settings: MbscDatetimeOptions = {
        //     timeFormat: 'hh:ii:ss A'
        // };
        //   externalSettings: MbscCalendarOptions = {
        //       showOnTap: false,
        //       showOnFocus: false
        //   };
        this.settings = {
            theme: 'ios'
        };
        this.vehicleOptions = [
            "2010 Suzuki Baleno",
            "Maruti Suzuki Dzire"
        ];
        this.causeOptions = [
            "Collision",
            "Third Party Liability",
            "Comprehensive"
        ];
        this.subCauseOptions = [
            "Hitting a car",
            "Hitting a pedestrian",
            "Hitting a lamp post",
            "Falling debris"
        ];
        this.bindData();
        this.claim.iscamera = true;
        this.claimForm = this.formBuilder.group({});
    }
    ;
    UploadPage.prototype.submitNext = function () {
        this.claim.leftimg = this.CheckDefault(document.getElementById("leftimg").getAttribute('src'));
        this.claim.rightimg = this.CheckDefault(document.getElementById("rightimg").getAttribute('src'));
        this.claim.frontimg = this.CheckDefault(document.getElementById("frontimg").getAttribute('src'));
        this.claim.backimg = this.CheckDefault(document.getElementById("backimg").getAttribute('src'));
        this.claim.leftimgper = document.getElementById("leftimg").getAttribute('val');
        this.claim.rightimgper = document.getElementById("rightimg").getAttribute('val');
        this.claim.frontimgper = document.getElementById("frontimg").getAttribute('val');
        this.claim.backimgper = document.getElementById("backimg").getAttribute('val');
        //  this.claim.leftimg="data:image/jpeg;base64,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";
        //  this.claim.leftimgper = "0.2010";
        //  this.claim.rightimg="data:image/jpeg;base64,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";
        //  this.claim.rightimgper = "0.2010";
        var claimData = JSON.stringify(this.claim);
        //this.XAlert(this.claim.rightimg.toString());   
        console.log(claimData);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__result_result__["a" /* ResultPage */], claimData);
    };
    UploadPage.prototype.CheckDefault = function (img) {
        if (img != this.defaultimg) {
            return img;
        }
        else {
            return "";
        }
    };
    UploadPage.prototype.bindData = function () {
        this.claimdata = { "imagepath": [this.defaultimg, this.defaultimg, this.defaultimg, this.defaultimg], "_id": "5b6f928d3d5c3b90ee479783", "policyid": "P001", "claimid": "C001", "model": "2010 Suzuki Baleno", "lossdate": "2018-08-12", "losstime": "", "losscause": "Collision", "sublosscause": "Hitting a car", "iscamera": true };
    };
    UploadPage.prototype.XAlert = function (body) {
        var alert = this.alertCtrl.create({
            title: "alert",
            subTitle: body,
            buttons: ['Ok']
        });
        alert.present();
    };
    UploadPage.prototype.openCameraOrFileChooser = function (ctrl, iscamera) {
        if (iscamera) {
            this.openCamera(ctrl);
        }
        else {
            this.openFileChooser(ctrl);
        }
    };
    UploadPage.prototype.openFileChooser = function (ctrl) {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.claimservice.postImage(imageData).then(function (data) {
                //this.XAlert(JSON.stringify(data));        
                var obj = JSON.parse(JSON.stringify(data));
                var cameraImageSelector = document.getElementById(ctrl);
                cameraImageSelector.setAttribute('val', obj.response);
                cameraImageSelector.setAttribute('src', _this.base64Image);
            });
        }, function (err) {
            console.log(err);
        });
    };
    UploadPage.prototype.openCamera = function (ctrl) {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            cameraDirection: this.camera.Direction.BACK,
            saveToPhotoAlbum: true,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.claimservice.postImage(imageData).then(function (data) {
                //this.XAlert(JSON.stringify(data));        
                var obj = JSON.parse(JSON.stringify(data));
                var cameraImageSelector = document.getElementById(ctrl);
                cameraImageSelector.setAttribute('val', obj.response);
                cameraImageSelector.setAttribute('src', _this.base64Image);
            });
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('inputtime'),
        __metadata("design:type", Object)
    ], UploadPage.prototype, "inputtime", void 0);
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-upload',template:/*ion-inline-start:"D:\Project\Proj\instaclaim\src\pages\upload\upload.html"*/'<!--\n  Generated template for the ClaimPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-7>\n          <ion-title>Upload Car Image</ion-title>\n        </ion-col>\n        <ion-col col-5 class="navImageCol">\n          <img class="navImage" src="../../assets/icon/icon-nav.jpg" width="40">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]="claimForm">\n    <ion-item>\n        <ion-label>Upload from Camera?{{testsrc}}</ion-label>\n        <ion-toggle [ngModelOptions]="{standalone: true}" [(ngModel)]="claimdata.iscamera"></ion-toggle>\n        \n    </ion-item>\n    <ion-item>\n      <ion-list>\n        <ion-item>\n          <ion-avatar item-start>\n            <img [src]="claimdata.imagepath[2]" id="frontimg" val="0">\n          </ion-avatar>\n          <!-- <ion-input id="frontimgper" ></ion-input> -->\n          <!-- <button ion-button round (click)="openCamera(\'frontimg\')" small width-25>Front Image</button> -->\n          <img src="../../assets/imgs/carfront.png" style="cursor: pointer;" (click)="openCameraOrFileChooser(\'frontimg\',claimdata.iscamera)">\n        </ion-item>\n        <ion-item>\n          <ion-avatar item-start>\n            <img [src]="claimdata.imagepath[3]" id="backimg" val="0">\n          </ion-avatar>\n          <!-- <ion-input id="backimgper" ></ion-input> -->\n          <!-- <button ion-button round (click)="openCamera(\'backimg\')" small width-25>Back Image</button> -->\n          <img src="../../assets/imgs/carback.png" style="cursor: pointer;" (click)="openCameraOrFileChooser(\'backimg\',claimdata.iscamera)">\n        </ion-item>\n        <ion-item>\n          <ion-avatar item-start>\n            <img [src]="claimdata.imagepath[0]" id="leftimg" val="0">\n          </ion-avatar>\n          <!-- <ion-input id="leftimgper"></ion-input> -->\n          <!-- <button ion-button round (click)="openCamera(\'leftimg\')" small width-25></button> -->\n           <img src="../../assets/imgs/carleft.png" style="cursor: pointer;" (click)="openCameraOrFileChooser(\'leftimg\',claimdata.iscamera)">\n        </ion-item>\n        <ion-item>\n          <ion-avatar item-start>\n            <img [src]="claimdata.imagepath[1]" id="rightimg" val="0">\n          </ion-avatar>\n          <!-- <ion-input id="rightimgper"></ion-input> -->\n          <!-- <button ion-button round (click)="openCamera(\'rightimg\')" small width-25>Right Image</button> -->\n          <img src="../../assets/imgs/carright.png" style="cursor: pointer;" (click)="openCameraOrFileChooser(\'rightimg\',claimdata.iscamera)">\n        </ion-item>\n      </ion-list>\n    </ion-item>\n    <button ion-button block  (click)=submitNext()>Next</button>\n    <!-- [disabled]="!claimForm.valid" -->\n  </form>\n</ion-content>'/*ion-inline-end:"D:\Project\Proj\instaclaim\src\pages\upload\upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_claim_service_claim_service__["a" /* ClaimServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UploadPage);
    return UploadPage;
}());

var Claim = /** @class */ (function () {
    function Claim() {
    }
    return Claim;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chooseservice_chooseservice__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_claim_service_claim_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
* Generated class for the ResultPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ResultPage = /** @class */ (function () {
    function ResultPage(navCtrl, navParams, alertCtrl, claimservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.claimservice = claimservice;
        this.damageToTimelineRatio = [
            2,
            4,
            10,
            15,
            25
        ];
        this.frontDamage = 0;
        this.leftDamage = 0;
        this.rightDamage = 0;
        this.rearDamage = 0;
        this.totalDamage = 0;
        this.frontDamageCostRatio = [
            200,
            600,
            1000,
            12000,
            15000
        ];
        this.leftDamageCostRatio = [
            50,
            100,
            180,
            260,
            500
        ];
        this.rightDamageCostRatio = [
            50,
            100,
            180,
            260,
            500
        ];
        this.rearDamageCostRatio = [
            100,
            250,
            500,
            800,
            1000
        ];
        this.timeType = "Days";
        this.damage = [{ imgbase64: "", damagePart: "", damagePer: 0, damageType: "", workType: "", partsCost: 0, prymaryCost: 0, repairTime: 0, labourCost: 0, totalCost: 0 }];
        this.data = JSON.parse(this.navParams.data);
        if (this.data.frontimgper > 0) {
            this.SAlert('Front', this.data.frontimgper.toString());
        }
        if (this.data.backimgper > 0) {
            this.SAlert('Back', this.data.backimgper.toString());
        }
        if (this.data.leftimgper > 0) {
            this.SAlert('Left', this.data.leftimgper.toString());
        }
        if (this.data.rightimgper > 0) {
            this.SAlert('Right', this.data.rightimgper.toString());
        }
        if (this.data.frontimg != "") {
            this.frontDamage = (100 - this.data.frontimgper * 100);
        }
        if (this.data.backimg != "") {
            this.rearDamage = (100 - this.data.backimgper * 100);
        }
        if (this.data.leftimg != "") {
            this.leftDamage = (100 - this.data.leftimgper * 100);
        }
        if (this.data.rightimg != "") {
            this.rightDamage = (100 - this.data.rightimgper * 100);
        }
        //  this.data.frontimg="data:image/jpeg;base64,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";
        //  this.frontDamage=5;
        //  this.data.backimg="data:image/jpeg;base64,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";
        //  this.rearDamage=10;
        //  this.data.leftimg="data:image/jpeg;base64,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";
        //  this.leftDamage=30;
        //  this.data.rightimg="data:image/jpeg;base64,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";
        //  this.rightDamage=60;
        this.Calculate();
    }
    //-------------------------------------------------------------------------------
    ResultPage.prototype.defineTypes = function (imgbase64, damagePart, percentage) {
        if (percentage > 0 && percentage <= 20) {
            this.damageType = "Minor";
            this.workType = "Repair";
            this.repairTime = 6;
            this.labourCost = 350;
            this.partsCost = 0;
            this.flatCharge = 1500;
        }
        else if (percentage > 20 && percentage <= 50) {
            this.damageType = "Medium";
            this.workType = "Repair";
            this.repairTime = 10;
            this.labourCost = 350;
            this.partsCost = 0;
            this.flatCharge = 1500;
        }
        else if (percentage > 20 && percentage <= 50) {
            this.damageType = "Major";
            this.workType = "Replace";
            this.repairTime = 12;
            this.labourCost = 350;
            this.partsCost = 35;
            this.flatCharge = 1500;
        }
        else {
            this.damageType = "No Damage";
            this.workType = "Nothing";
            this.repairTime = 0;
            this.labourCost = 0;
            this.partsCost = 0;
            this.flatCharge = 0;
        }
        this.prymaryCost = (this.flatCharge + (this.flatCharge * (this.frontDamage / 100)));
        this.totalLabourCost = (this.repairTime * this.labourCost);
        this.totalCost = (this.partsCost + this.prymaryCost + this.totalLabourCost);
        if (this.totalCost != 0) {
            this.damage.push({
                imgbase64: imgbase64,
                damagePart: damagePart,
                damegePer: percentage,
                damageType: this.damageType,
                workType: this.workType,
                partsCost: this.partsCost,
                prymaryCost: this.prymaryCost,
                repairTime: this.repairTime,
                labourCost: this.totalLabourCost,
                totalCost: this.totalCost
            });
        }
    };
    ResultPage.prototype.Calculate = function () {
        this.defineTypes(this.data.frontimg, "Front", this.frontDamage);
        this.defineTypes(this.data.backimg, "Back", this.rearDamage);
        this.defineTypes(this.data.leftimg, "Left", this.leftDamage);
        this.defineTypes(this.data.leftimg, "Right", this.rightDamage);
        this.damage.splice(0, 1);
        this.totalDamageCost = 0;
        this.damageTimeline = 0;
        this.allTotalPartsCost = 0;
        this.allTotalLabourCost = 0;
        var minordamageTimeline = 0;
        var mediumdamageTimeline = 0;
        var majordamageTimeline = 0;
        for (var _i = 0, _a = this.damage; _i < _a.length; _i++) {
            var item = _a[_i];
            this.totalDamageCost = this.totalDamageCost + item.totalCost;
            this.allTotalPartsCost = this.allTotalPartsCost + item.partsCost;
            this.allTotalLabourCost = this.allTotalLabourCost + item.labourCost;
            if (item.damageType == "Minor") {
                minordamageTimeline = minordamageTimeline + item.repairTime;
            }
            else if (item.damageType == "Medium") {
                mediumdamageTimeline = mediumdamageTimeline + item.repairTime;
            }
            else if (item.damageType == "Major") {
                majordamageTimeline = majordamageTimeline + item.repairTime;
            }
        }
        if (minordamageTimeline != 0) {
            this.damageTimeline = minordamageTimeline;
            this.timeType = "Days";
        }
        if (mediumdamageTimeline != 0) {
            this.damageTimeline = mediumdamageTimeline;
            this.timeType = "Weeks";
        }
        if (majordamageTimeline != 0) {
            this.damageTimeline = majordamageTimeline;
            this.timeType = "Weeks";
        }
        console.log(this.totalDamageCost);
    };
    //-------------------------------------------------------------------------------
    ResultPage.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () { return console.log("fired"); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultPage');
    };
    ResultPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Submission',
            message: 'Do you still want to submit the claim?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.XAlert("Claim Successfully Saved!!!", "Your Claim Id is CLM001");
                    }
                }
            ]
        });
        alert.present();
    };
    ResultPage.prototype.XAlert = function (title, subTitle) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chooseservice_chooseservice__["a" /* ChooseservicePage */]);
                    }
                }]
        });
        alert.present();
    };
    ResultPage.prototype.SAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [{
                    text: 'OK',
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    ResultPage.prototype.goToRepairTime = function () {
        this.presentConfirm();
    };
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"D:\Project\Proj\instaclaim\src\pages\result\result.html"*/'<!--\n  Generated template for the ResultPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-7>\n          <ion-title>Repair Estimate</ion-title>\n        </ion-col>\n        <ion-col col-5 class="navImageCol">\n          <img class="navImage" src="../../assets/icon/icon-nav.jpg" width="40">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card *ngIf="damage.length>1">\n    <ion-card-content>\n      <ion-card-header class="card-header">\n        <h2>Total Estimated Cost</h2>\n      </ion-card-header>\n      <hr>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <img src="../../assets/imgs/arrow.PNG">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <h1>{{(totalDamageCost*95)/100 | currency : "Rs."}}</h1>\n          </ion-col>\n          <ion-col style="text-align: right">\n            <h1>{{(totalDamageCost*105)/100 | currency : "Rs."}}</h1>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <div *ngFor="let item of damage">\n    <ion-card>\n      <ion-card-content>\n        <ion-card-header class="card-header">          \n        <ion-grid>\n            <ion-row>\n              <ion-col col-6>\n          <h2>{{item.damagePart}}</h2>\n          <h4>Needs {{item.workType}}</h4>   \n        </ion-col>\n      <ion-col  col-6>       \n          <ion-img width="112" height="92" [src]="item.imgbase64"></ion-img>\n        </ion-col>\n        </ion-row>\n        </ion-grid>\n        </ion-card-header>\n        <hr>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <img src="../../assets/imgs/arrow.PNG">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <h1>{{(item.totalCost*95)/100 | currency : "Rs."}}</h1>\n            </ion-col>\n            <ion-col style="text-align: right">\n              <h1>{{(item.totalCost*105)/100 | currency : "Rs."}}</h1>\n            </ion-col>\n          </ion-row>\n        <ion-row>\n          <ion-col>\n            <p>Estimates Include :</p>\n            <p *ngIf="item.partsCost!=0">Parts Cost : {{(item.partsCost*95)/100 | currency : "Rs."}} to {{(item.partsCost*105)/100 | currency : "Rs."}}</p>\n            <p *ngIf="item.prymaryCost!=0">Paint and Refinish Cost : {{(item.prymaryCost*95)/100 | currency : "Rs."}} to {{(item.prymaryCost*105)/100 | currency : "Rs."}}</p>\n            <p *ngIf="item.labourCost!=0">Labour : {{(item.labourCost*95)/100 | currency : "Rs."}} to {{(item.labourCost*105)/100 | currency : "Rs."}}</p>          \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-header class="card-header">\n        <h2>Approximate Repair Time</h2>\n      </ion-card-header>\n      <hr>\n      <ion-grid>\n        <ion-row center>\n          <ion-col>\n          </ion-col>\n          <ion-col>            \n          </ion-col>\n          <ion-col >\n            <ion-img width="60" height="60" src="../../assets/imgs/clock.png"></ion-img>\n          </ion-col>\n          <ion-col >            \n          </ion-col>\n          <ion-col >            \n          </ion-col>\n        </ion-row>\n        <ion-row center>\n          <ion-col>\n            <h1>{{((damageTimeline * 6 * 0.75)/12) | number:\'1.0-0\'}} {{timeType}}</h1>\n          </ion-col>\n          <ion-col>\n            <h1 style="text-align: center;">TO</h1>\n          </ion-col>\n          <ion-col style="text-align: right">\n            <h1>{{((damageTimeline * 6 * 1.25)/12) | number:\'1.0-0\'}} {{timeType}}</h1>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <button ion-button full (click)=goToRepairTime()>Submit</button>'/*ion-inline-end:"D:\Project\Proj\instaclaim\src\pages\result\result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_claim_service_claim_service__["a" /* ClaimServiceProvider */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__claim_claim__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_claim_service_claim_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import 'rxjs/Rx';
//import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/catch';
/**
 * Generated class for the PolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 
*/
var PolicyPage = /** @class */ (function () {
    function PolicyPage(navCtrl, navParams, claimservice, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.claimservice = claimservice;
        this.alertCtrl = alertCtrl;
        this.vehicle = new Vehicle();
        this.vehicle.name = "Maruti Suzuki Dzire";
        this.vehicle.image = "../../assets/imgs/maruti-suzuki-dzire-red.jpg";
        this.getPolicies();
    }
    PolicyPage.prototype.getPolicies = function () {
        //  this.claimservice.getPolicyList().then(data=>{
        //    this.policies = data;
        //    console.log(data);
        //  });
        //  this.claimservice.postImage("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").then(data=>{
        //    console.log(data);
        //    this.XAlert(data.response);
        //  });
    };
    PolicyPage.prototype.XAlert = function (body) {
        var alert = this.alertCtrl.create({
            title: "alert",
            subTitle: body,
            buttons: ['Ok']
        });
        alert.present();
    };
    PolicyPage.prototype.goToClaim = function (policyid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__claim_claim__["a" /* ClaimPage */], { vehicleName: this.vehicle.name });
        //this.navCtrl.push(ClaimDetailsPage);
    };
    PolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-policy',template:/*ion-inline-start:"D:\Project\Proj\instaclaim\src\pages\policy\policy.html"*/'<!--\n  Generated template for the PolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-8>\n            <!-- <ion-title>Report a loss</ion-title> -->\n        </ion-col>\n        <ion-col col-4 class="navImageCol">\n          <img class="navImage" src="../../assets/icon/icon-nav.jpg" >\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<!--<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        Policy\n      </ion-col>\n      <ion-col>\n        Action\n      </ion-col>\n    </ion-row>\n    <ion-row  *ngFor ="let data of policies">\n      <ion-col>\n        {{data.policyid}}\n      </ion-col>\n      <ion-col>\n        <button ion-button rounded (click)="goToClaim(data.policyid)">Claim</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>-->\n<ion-content padding>\n  <ion-card>\n    <img src={{vehicle.image}}/>\n    <ion-card-content>\n      <ion-card-title>\n        {{vehicle.name}}\n      </ion-card-title>\n      <p>\n        Registration Number: LA3215B\n      </p>\n    </ion-card-content>\n    <ion-row no-padding>\n      <ion-col>\n        <button block ion-button icon-start (click)=goToClaim()>\n          Report a loss\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\Project\Proj\instaclaim\src\pages\policy\policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_claim_service_claim_service__["a" /* ClaimServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PolicyPage);
    return PolicyPage;
}());

var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
//# sourceMappingURL=policy.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/claim/claim.module": [
		298,
		4
	],
	"../pages/policy/policy.module": [
		299,
		3
	],
	"../pages/result/result.module": [
		301,
		2
	],
	"../pages/timeline/timeline.module": [
		300,
		1
	],
	"../pages/upload/upload.module": [
		302,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocoderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the GeocoderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GeocoderProvider = /** @class */ (function () {
    function GeocoderProvider(http, alertCtrl, _GEOCODE) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this._GEOCODE = _GEOCODE;
        console.log('Hello GeocoderProvider Provider');
    }
    GeocoderProvider.prototype.reverseGeocode = function (lat, lng) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._GEOCODE.reverseGeocode(lat, lng)
                .then(function (result) {
                var str = result[0].locality + ", " + result[0].countryName + ",  " + result[0].postalCode;
                resolve(str);
            })
                .catch(function (error) {
                console.log(error);
                _this.XAlert('t', error);
                reject(error);
            });
        });
    };
    GeocoderProvider.prototype.forwardGeocode = function (keyword) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._GEOCODE.forwardGeocode(keyword)
                .then(function (coordinates) {
                var str = "The coordinates are latitude=" + coordinates.latitude + " and longitude=" + coordinates.longitude;
                resolve(str);
            })
                .catch(function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    GeocoderProvider.prototype.XAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [{
                    text: 'OK',
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    GeocoderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], GeocoderProvider);
    return GeocoderProvider;
}());

//# sourceMappingURL=geocoder.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectivityService = /** @class */ (function () {
    function ConnectivityService(platform, network) {
        this.platform = platform;
        this.network = network;
        this.onDevice = this.platform.is('cordova');
    }
    ConnectivityService.prototype.isOnline = function () {
        if (this.onDevice && this.network.onConnect()) {
            return this.network.onConnect() !== Connection.NONE;
        }
        else {
            return navigator.onLine;
        }
    };
    ConnectivityService.prototype.isOffline = function () {
        if (this.onDevice && this.network.onConnect()) {
            return this.network.onConnect() === Connection.NONE;
        }
        else {
            return !navigator.onLine;
        }
    };
    ConnectivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
    ], ConnectivityService);
    return ConnectivityService;
}());

//# sourceMappingURL=connectivity-service.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chooseservice_chooseservice__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
* Generated class for the TimelinePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var TimelinePage = /** @class */ (function () {
    function TimelinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.damageToTimelineRatio = [
            "2 weeks",
            "4 weeks",
            "10 weeks",
            "15 weeks",
            "25 weeks"
        ];
        this.totalDamage = navParams.get('totalDamage');
        console.log("At timeline:" + this.totalDamage);
        this.calculateTimeline();
    }
    TimelinePage.prototype.calculateTimeline = function () {
        this.totalDamageIndex = ((this.totalDamage / 20) < 5 ? Math.floor(this.totalDamage / 20) : 4);
        this.damageTimeline = this.damageToTimelineRatio[this.totalDamageIndex];
    };
    TimelinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimelinePage');
    };
    TimelinePage.prototype.submitNext = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chooseservice_chooseservice__["a" /* ChooseservicePage */]);
    };
    TimelinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-timeline',template:/*ion-inline-start:"D:\Project\Proj\instaclaim\src\pages\timeline\timeline.html"*/'<!--\n  Generated template for the TimelinePage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>timeline</ion-title>\n  </ion-navbar>\n</ion-header>\n \n\n<ion-content padding>\n  <h2>Damage to Repair Time Ratio</h2>\n  <h2>Total Damage</h2>\n  <h3>{{totalDamage}}%</h3>\n  <h2>Approximate Repair Time</h2>\n  <h3>{{damageTimeline}}</h3>\n  <button ion-button full (click)=submitNext()>Next</button>\n</ion-content>'/*ion-inline-end:"D:\Project\Proj\instaclaim\src\pages\timeline\timeline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TimelinePage);
    return TimelinePage;
}());

//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mobiscroll_angular__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic2_rating__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_list__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_claim_claim__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_policy_policy__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_claimdetails_claimdetails__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_chooseservice_chooseservice__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_upload_upload__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_result_result__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_timeline_timeline__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_claim_service_claim_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_connectivity_service_connectivity_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_geocoder_geocoder__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_network__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Import ionic2-rating module
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_claim_claim__["a" /* ClaimPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_policy_policy__["a" /* PolicyPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_claimdetails_claimdetails__["a" /* ClaimDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_chooseservice_chooseservice__["a" /* ChooseservicePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_timeline_timeline__["a" /* TimelinePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_upload_upload__["a" /* UploadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__mobiscroll_angular__["a" /* MbscModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/claim/claim.module#ClaimPageModule', name: 'ClaimPage', segment: 'claim', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/policy/policy.module#PolicyPageModule', name: 'PolicyPage', segment: 'policy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timeline/timeline.module#TimelinePageModule', name: 'TimelinePage', segment: 'timeline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload/upload.module#UploadPageModule', name: 'UploadPage', segment: 'upload', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_ionic2_rating__["a" /* Ionic2RatingModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_claim_claim__["a" /* ClaimPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_policy_policy__["a" /* PolicyPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_claimdetails_claimdetails__["a" /* ClaimDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_chooseservice_chooseservice__["a" /* ChooseservicePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_timeline_timeline__["a" /* TimelinePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_upload_upload__["a" /* UploadPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_claim_service_claim_service__["a" /* ClaimServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_24__providers_geocoder_geocoder__["a" /* GeocoderProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_connectivity_service_connectivity_service__["a" /* ConnectivityService */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_network__["a" /* Network */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_policy_policy__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_policy_policy__["a" /* PolicyPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            // { title: 'Home', component: HomePage },
            // { title: 'Claim', component: ClaimPage },
            // { title: 'List', component: ListPage },
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_policy_policy__["a" /* PolicyPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Project\Proj\instaclaim\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Project\Proj\instaclaim\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__claim_claim__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, camera) {
        this.navCtrl = navCtrl;
        this.camera = camera;
    }
    HomePage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            cameraDirection: this.camera.Direction.BACK,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            var cameraImageSelector = document.getElementById('camera-image');
            cameraImageSelector.setAttribute('src', _this.base64Image);
        }, function (err) {
            // Handle error
        });
    };
    HomePage.prototype.goToClaim = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__claim_claim__["a" /* ClaimPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Project\Proj\instaclaim\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <button ion-button full (click)="openCamera()">Open Camera</button>\n  <p align="center">\n    <img src="../../assets/imgs/logo.png" id="camera-image" width="20px"/>\n  </p>\n <button ion-button full  (click)="goToClaim()">Go To Claim</button>\n</ion-content>\n'/*ion-inline-end:"D:\Project\Proj\instaclaim\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\Project\Proj\instaclaim\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Project\Proj\instaclaim\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connectivity_service_connectivity_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClaimDetailsPage = /** @class */ (function () {
    function ClaimDetailsPage(nav, connectivityService, geolocation) {
        this.nav = nav;
        this.connectivityService = connectivityService;
        this.geolocation = geolocation;
        this.mapInitialised = false;
        this.apiKey = "AIzaSyDmqUdTeUMPpHZ9KS0f2mHLOoDS8Hj44lE";
        this.loadGoogleMaps();
    }
    ClaimDetailsPage.prototype.loadGoogleMaps = function () {
        var _this = this;
        this.addConnectivityListeners();
        if (typeof google == "undefined" || typeof google.maps == "undefined") {
            console.log("Google maps JavaScript needs to be loaded.");
            this.disableMap();
            if (this.connectivityService.isOnline()) {
                console.log("online, loading map");
                //Load the SDK
                window['mapInit'] = function () {
                    _this.initMap();
                    _this.enableMap();
                };
                var script = document.createElement("script");
                script.id = "googleMaps";
                if (this.apiKey) {
                    script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
                }
                else {
                    script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
                }
                document.body.appendChild(script);
            }
        }
        else {
            if (this.connectivityService.isOnline()) {
                console.log("showing map");
                this.initMap();
                this.enableMap();
            }
            else {
                console.log("disabling map");
                this.disableMap();
            }
        }
    };
    ClaimDetailsPage.prototype.initMap = function () {
        var _this = this;
        this.mapInitialised = true;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        });
    };
    ClaimDetailsPage.prototype.disableMap = function () {
        console.log("disable map");
    };
    ClaimDetailsPage.prototype.enableMap = function () {
        console.log("enable map");
    };
    ClaimDetailsPage.prototype.addConnectivityListeners = function () {
        var _this = this;
        var onOnline = function () {
            setTimeout(function () {
                if (typeof google == "undefined" || typeof google.maps == "undefined") {
                    _this.loadGoogleMaps();
                }
                else {
                    if (!_this.mapInitialised) {
                        _this.initMap();
                    }
                    _this.enableMap();
                }
            }, 2000);
        };
        var onOffline = function () {
            _this.disableMap();
        };
        document.addEventListener('online', onOnline, false);
        document.addEventListener('offline', onOffline, false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ClaimDetailsPage.prototype, "mapElement", void 0);
    ClaimDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'claimdetails-page',template:/*ion-inline-start:"D:\Project\Proj\instaclaim\src\pages\claimdetails\claimdetails.html"*/'<!--\n  Generated template for the ClaimdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <div #map id="map"></div> \n</ion-content>\n\n\n'/*ion-inline-end:"D:\Project\Proj\instaclaim\src\pages\claimdetails\claimdetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_connectivity_service_connectivity_service__["a" /* ConnectivityService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ClaimDetailsPage);
    return ClaimDetailsPage;
}());

//# sourceMappingURL=claimdetails.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ClaimServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClaimServiceProvider = /** @class */ (function () {
    function ClaimServiceProvider(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.apiUrl = "http://13.232.237.186:9090";
        this.demoUrl = "https://jsonplaceholder.typicode.com/todos/1";
        console.log('Hello ClaimServiceProvider Provider');
    }
    ClaimServiceProvider.prototype.getPolicyList = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "/policies").subscribe(function (data) {
                resolve(data);
            }, function (err) { console.log(err); });
        });
    };
    ClaimServiceProvider.prototype.getDetailsByPolicyId = function (policyid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "/policies/" + policyid).subscribe(function (data) {
                resolve(data);
            }, function (err) { console.log(err); });
        });
    };
    ClaimServiceProvider.prototype.postImage = function (imgdata) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = JSON.stringify({ data: imgdata });
            var httpOptions = { headers: { 'Content-Type': 'application/json' } };
            _this.http.post("https://mid16o70gc.execute-api.us-east-1.amazonaws.com/api/", params, httpOptions).subscribe(function (data) {
                resolve(data);
            }, function (err) { console.log(err); });
        });
    };
    ClaimServiceProvider.prototype.SAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [{
                    text: 'OK',
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    ClaimServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ClaimServiceProvider);
    return ClaimServiceProvider;
}());

//# sourceMappingURL=claim-service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimPage; });
/* unused harmony export Claim */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_claim_service_claim_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upload_upload__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mobiscroll_angular__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_geocoder_geocoder__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ClaimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
__WEBPACK_IMPORTED_MODULE_6__mobiscroll_angular__["b" /* mobiscroll */].settings = {
    theme: 'ios'
};
var now = new Date();
var ClaimPage = /** @class */ (function () {
    function ClaimPage(navCtrl, navParams, claimservice, formBuilder, camera, alertCtrl, _GEOCODE, _PLATFORM, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.claimservice = claimservice;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this._GEOCODE = _GEOCODE;
        this._PLATFORM = _PLATFORM;
        this.geolocation = geolocation;
        this.claim = new Claim();
        this.defaultimg = "../../assets/imgs/logo.png";
        this.time = now;
        this.h12 = now;
        this.h24 = now;
        this.hms = now;
        this.external = new Date();
        this.h12Settings = {
            timeFormat: 'hh:ii:ss A'
        };
        this.externalSettings = {
            showOnTap: false,
            showOnFocus: false
        };
        this.settings = {
            theme: 'ios'
        };
        this.vehicleOptions = [
            "2010 Suzuki Baleno",
            "Maruti Suzuki Dzire"
        ];
        this.causeOptions = [
            "Collision",
            "Third Party Liability",
            "Comprehensive"
        ];
        this.subCauseOptions = [
            "Hitting a car",
            "Hitting a pedestrian",
            "Hitting a lamp post",
            "Flying debris"
        ];
        // ,private fileChooser: FileChooser,private filePath: FilePath
        this.bindData();
        this.claim.vehicle = this.navParams.get('vehicleName');
        this.claim.lossdate = new Date().toLocaleString('en-US').split(', ')[0];
        this.claim.losstime = new Date().toLocaleString('en-US').split(', ')[1];
        this.claim.losslocation = "";
        this.claimForm = this.formBuilder.group({
            vehicle: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lossdate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            losstime: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            sublosscause: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            losslocation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
        this.initMap();
    }
    ;
    ClaimPage.prototype.performReverseGeocoding = function (latitude, longitude) {
        var _this = this;
        this._PLATFORM.ready()
            .then(function (data) {
            _this._GEOCODE.reverseGeocode(latitude, longitude)
                .then(function (data) {
                //this.XAlert('data',data);
                _this.claim.losslocation = data;
            })
                .catch(function (error) {
                _this.XAlert('performReverseGeocoding error', error);
            });
        });
    };
    ClaimPage.prototype.XAlert = function (title, subTitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [{
                    text: 'OK',
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    ClaimPage.prototype.submitNext = function () {
        this.claim.vehicle = this.claimForm.controls['vehicle'].value;
        this.claim.lossdate = this.claimForm.controls['lossdate'].value;
        this.claim.losstime = this.claimForm.controls['losstime'].value;
        this.claim.sublosscause = this.claimForm.controls['sublosscause'].value;
        this.claim.losslocation = this.claimForm.controls['losslocation'].value;
        var claimData = JSON.stringify(this.claim);
        console.log(claimData);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__upload_upload__["a" /* UploadPage */], claimData);
    };
    ClaimPage.prototype.bindData = function () {
        this.policyid = this.navParams.get('policyid');
        this.claimdata = { "imagepath": [this.defaultimg, this.defaultimg, this.defaultimg, this.defaultimg], "_id": "5b6f928d3d5c3b90ee479783", "policyid": "P001", "claimid": "C001", "model": "2010 Suzuki Baleno", "lossdate": "2018-08-12", "losstime": "", "losscause": "Collision", "sublosscause": "Hitting a car", "iscamera": true };
        // this.claimservice.getDetailsByPolicyId("5b6f8ee753a8e609fe43d558").then(data=>{
        //   console.log("getDetailsByPolicyId");
        //   console.log( data);
        // });
    };
    ClaimPage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 15000, enableHighAccuracy: true }).then(function (resp) {
            //this.XAlert('data',resp.coords.latitude + ' data ' + resp.coords.longitude);
            _this.performReverseGeocoding(resp.coords.latitude, resp.coords.longitude);
        }).catch(function (error) {
            console.log(error);
            _this.XAlert('getCurrentPosition error', error.message);
        });
        ;
    };
    ClaimPage.prototype.openTime = function () {
        this.inputtime.setFocus();
        this.inputtime.setFocus();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('inputtime'),
        __metadata("design:type", Object)
    ], ClaimPage.prototype, "inputtime", void 0);
    ClaimPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-claim',template:/*ion-inline-start:"D:\Project\Proj\instaclaim\src\pages\claim\claim.html"*/'<!--\n  Generated template for the ClaimPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-7>\n          <ion-title>Loss Details</ion-title>\n        </ion-col>\n        <ion-col col-5 class="navImageCol">\n          <img class="navImage" src="../../assets/icon/icon-nav.jpg" width="40">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]="claimForm">\n    <ion-item>\n      <ion-label floating>Involved vehicle</ion-label>\n      <ion-select interface="popover" [formControl]="claimForm.controls[\'vehicle\']" [(ngModel)]="claim.vehicle">\n        <ion-option *ngFor="let vehicle of vehicleOptions" value="{{vehicle}}">{{vehicle}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Loss date</ion-label>\n      <ion-input  [(ngModel)]="claim.lossdate" [formControl]="claimForm.controls[\'lossdate\']"   mbsc-calendar [mbsc-options]="externalSettings" #externalCal="mobiscroll"></ion-input>\n      <ion-img width="50" height="50" src="../../assets/imgs/calendar.png" style="cursor: pointer;width:50px;" item-right (click)="externalCal.instance.show()"></ion-img>\n      </ion-item>\n    <ion-item>\n        <ion-label floating>Loss time</ion-label>\n        <ion-input #inputtime [(ngModel)]="claim.losstime" [formControl]="claimForm.controls[\'losstime\']"  mbsc-time [mbsc-options]="h12Settings" ></ion-input>\n        <ion-img width="50" height="50" src="../../assets/imgs/clock.png" style="cursor: pointer;width:50px;" item-right (click)="openTime()"></ion-img>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Loss cause</ion-label>\n      <ion-select interface="popover" [formControl]="claimForm.controls[\'sublosscause\']">\n        <ion-option *ngFor="let subcause of subCauseOptions" value="{{subcause}}">{{subcause}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Loss location</ion-label>\n      <ion-input id="losslocation"  [(ngModel)]="claim.losslocation"  [formControl]="claimForm.controls[\'losslocation\']" readonly="true" ></ion-input>\n    </ion-item>\n    <button ion-button block  (click)=submitNext()>Next</button>\n    <!-- [disabled]="!claimForm.valid" -->\n  </form>\n</ion-content>'/*ion-inline-end:"D:\Project\Proj\instaclaim\src\pages\claim\claim.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_claim_service_claim_service__["a" /* ClaimServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_geocoder_geocoder__["a" /* GeocoderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ClaimPage);
    return ClaimPage;
}());

var Claim = /** @class */ (function () {
    function Claim() {
    }
    return Claim;
}());

//# sourceMappingURL=claim.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseservicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChooseservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseservicePage = /** @class */ (function () {
    function ChooseservicePage(navCtrl, geolocation, alertCtrl) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
    }
    ChooseservicePage.prototype.ionViewDidEnter = function () {
        this.getUserPosition();
    };
    ChooseservicePage.prototype.getUserPosition = function () {
        var _this = this;
        this.options = {
            enableHighAccuracy: false
        };
        this.geolocation.getCurrentPosition(this.options).then(function (pos) {
            _this.currentPos = pos;
            console.log(pos);
            _this.addMap(pos.coords.latitude, pos.coords.longitude);
        }, function (err) {
            console.log("error : " + err.message);
            ;
        });
    };
    ChooseservicePage.prototype.addMap = function (lat, long) {
        var _this = this;
        var latLng = new google.maps.LatLng(lat, long);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.getRestaurants(latLng).then(function (results) {
            _this.places = results;
            console.log(_this.places);
            for (var i = 0; i < results.length; i++) {
                _this.createMarker(results[i]);
            }
        }, function (status) { return console.log(status); });
        this.addMarker();
    };
    ChooseservicePage.prototype.presentAlert = function (item) {
        var alert = this.alertCtrl.create({
            title: item.shopname,
            subTitle: item.address,
            buttons: ['Ok']
        });
        alert.present();
    };
    ChooseservicePage.prototype.addMarker = function () {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<p>This is your current position !</p>";
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    ChooseservicePage.prototype.getRestaurants = function (latLng) {
        var service = new google.maps.places.PlacesService(this.map);
        var request = {
            location: latLng,
            radius: 8047,
            types: ["car_repair"]
        };
        return new Promise(function (resolve, reject) {
            service.nearbySearch(request, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    resolve(results);
                }
                else {
                    reject(status);
                }
            });
        });
    };
    ChooseservicePage.prototype.createMarker = function (place) {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: place.geometry.location
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ChooseservicePage.prototype, "mapElement", void 0);
    ChooseservicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chooseservice',template:/*ion-inline-start:"D:\Project\Proj\instaclaim\src\pages\chooseservice\chooseservice.html"*/'<!--\n  Generated template for the ChooseservicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-8>\n            <ion-title>Nearest Workshop</ion-title>\n        </ion-col>\n        <ion-col col-4 class="navImageCol">\n          <img class="navImage" src="../../assets/icon/icon-nav.jpg" width="40">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button full (click)="getUserPosition()"><ion-icon name="list"> &nbsp;&nbsp; </ion-icon>Locate Repair Shops</button>\n  <div #map id="map"></div>\n  <div style="width : 100% ;height: 60%">\n    <!-- <ion-card *ngFor="let place of places">\n      <ion-card-content>\n        <ion-card-title>\n          {{place.name}}\n        </ion-card-title>\n        <p *ngIf="place.vicinity">\n          Address: {{place.vicinity}}\n        </p>\n        <p *ngIf="place.rating">\n          Rating: {{place.rating}}\n          <rating [(ngModel)]="place.rating" readOnly="true"  max="5"  emptyStarIconName="star-outline" \n                halfStarIconName="star-half" starIconName="star" \n              nullable="false"></rating>\n        </p>\n        <div *ngIf="place.opening_hours">\n          <ion-badge item-end color="secondary" *ngIf="place.opening_hours.open_now">Open Now</ion-badge>\n          <ion-badge item-end color="danger" *ngIf="!place.opening_hours.open_now">Closed Now</ion-badge>\n        </div>\n      </ion-card-content>\n    </ion-card> -->\n    <ion-list>\n      <ion-item *ngFor="let place of places" (click)=presentAlert(place)>\n          <ion-avatar item-start>\n              <img [src]="place.icon">               \n            </ion-avatar>\n            <h2>{{place.name}}</h2>\n            <p *ngIf="place.opening_hours">Address: {{place.vicinity}}</p> \n                <ion-grid no-padding>\n                  <ion-row>\n                    <ion-col  col-2  *ngIf="place.opening_hours">\n                      <ion-badge item-end color="secondary" *ngIf="place.opening_hours.open_now">Open Now</ion-badge>\n                      <ion-badge item-end color="danger" *ngIf="!place.opening_hours.open_now">Closed Now</ion-badge>\n                    </ion-col>\n                      <ion-col col-8  no-padding *ngIf="place.rating">\n                          <rating [(ngModel)]="place.rating" readOnly="true"  max="5"  emptyStarIconName="star-outline" \n                          halfStarIconName="star-half" starIconName="star" \n                        nullable="false"></rating>\n                      </ion-col>\n                      <ion-col col-2 *ngIf="place.rating">\n                          &nbsp;({{place.rating}})\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>         \n      </ion-item>\n    </ion-list> \n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Project\Proj\instaclaim\src\pages\chooseservice\chooseservice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChooseservicePage);
    return ChooseservicePage;
}());

//# sourceMappingURL=chooseservice.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map