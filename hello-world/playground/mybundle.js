var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("e2e/src/app.po", ["protractor"], function (exports_1, context_1) {
    "use strict";
    var protractor_1, AppPage;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (protractor_1_1) {
                protractor_1 = protractor_1_1;
            }
        ],
        execute: function () {
            AppPage = /** @class */ (function () {
                function AppPage() {
                }
                AppPage.prototype.navigateTo = function () {
                    return protractor_1.browser.get('/');
                };
                AppPage.prototype.getParagraphText = function () {
                    return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
                };
                return AppPage;
            }());
            exports_1("AppPage", AppPage);
        }
    };
});
System.register("e2e/src/app.e2e-spec", ["e2e/src/app.po"], function (exports_2, context_2) {
    "use strict";
    var app_po_1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (app_po_1_1) {
                app_po_1 = app_po_1_1;
            }
        ],
        execute: function () {
            describe('workspace-project App', function () {
                var page;
                beforeEach(function () {
                    page = new app_po_1.AppPage();
                });
                it('should display welcome message', function () {
                    page.navigateTo();
                    expect(page.getParagraphText()).toEqual('Welcome to hello-world!');
                });
            });
        }
    };
});
System.register("playground/like.component", [], function (exports_3, context_3) {
    "use strict";
    var LikeComponent;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            LikeComponent = /** @class */ (function () {
                function LikeComponent(likesCount, isSelected) {
                    this.likesCount = likesCount;
                    this.isSelected = isSelected;
                }
                LikeComponent.prototype.onClick = function () {
                    this.likesCount += (this.isSelected) ? -1 : 1;
                    this.isSelected = !this.isSelected;
                };
                return LikeComponent;
            }());
            exports_3("LikeComponent", LikeComponent);
        }
    };
});
System.register("playground/point", [], function (exports_4, context_4) {
    "use strict";
    var Point;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            //defining an interface - Interface are only for declaration, the cannot be used for an implementation.
            // Cohesion - Things that are related should be part on one unit.
            // first letter should be capital in interface
            Point = /** @class */ (function () {
                // multiple constructor are not supported in typescript.
                function Point(x, y) {
                    this.x = x;
                    this.y = y;
                } //prefix will generate and initialize this field
                Point.prototype.draw = function () {
                    //...
                    console.log('X: ' + this.x + ', Y: ' + this.y);
                };
                Point.prototype.getDistance = function (another) {
                    //...
                };
                Point.prototype.getX = function () {
                    return this.x;
                };
                Point.prototype.setX = function (value) {
                    if (value < 0) {
                        throw new Error("Value cannot be less than 0");
                    }
                    this.x = value;
                };
                Object.defineProperty(Point.prototype, "X", {
                    // how setters and getters work in typescript
                    get: function () {
                        return this.x;
                    },
                    set: function (value) {
                        if (value < 0) {
                            throw new Error("Value cannot be less than 0");
                        }
                        this.x = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Point;
            }());
            exports_4("Point", Point);
        }
    };
});
System.register("playground/main", ["playground/point", "playground/like.component"], function (exports_5, context_5) {
    "use strict";
    var point_1, like_component_1, arrow, point, x, component;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (point_1_1) {
                point_1 = point_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }
        ],
        execute: function () {
            arrow = function (message) {
                console.log(message);
            };
            point = new point_1.Point(1, 2);
            x = point.getX();
            console.log(x);
            point.setX(10);
            x = point.getX();
            console.log(x);
            x = point.X;
            console.log(x);
            point.X = 10;
            x = point.X;
            console.log(x);
            component = new like_component_1.LikeComponent(10, true);
            component.onClick();
            console.log("likeCount: " + component.likesCount + ", isSelected: " + component.isSelected);
        }
    };
});
System.register("src/app/app.component", ["@angular/core"], function (exports_6, context_6) {
    "use strict";
    var core_1, AppComponent;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Angular App';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-root',
                        templateUrl: './app.component.html',
                        styleUrls: ['./app.component.css']
                    })
                ], AppComponent);
                return AppComponent;
            }());
            exports_6("AppComponent", AppComponent);
        }
    };
});
System.register("src/app/app.module", ["@angular/platform-browser", "@angular/core", "src/app/app.component"], function (exports_7, context_7) {
    "use strict";
    var platform_browser_1, core_2, app_component_1, AppModule;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }
        ],
        execute: function () {
            AppModule = /** @class */ (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_2.NgModule({
                        declarations: [
                            app_component_1.AppComponent
                        ],
                        imports: [
                            platform_browser_1.BrowserModule
                        ],
                        providers: [],
                        bootstrap: [app_component_1.AppComponent]
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_7("AppModule", AppModule);
        }
    };
});
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
System.register("src/environments/environment", [], function (exports_8, context_8) {
    "use strict";
    var environment;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {// This file can be replaced during build by using the `fileReplacements` array.
            // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            exports_8("environment", environment = {
                production: false
            });
            /*
             * In development mode, for easier debugging, you can ignore zone related error
             * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
             * below file. Don't forget to comment it out in production mode
             * because it will have a performance impact when errors are thrown
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
        }
    };
});
System.register("src/main", ["@angular/core", "@angular/platform-browser-dynamic", "src/app/app.module", "src/environments/environment"], function (exports_9, context_9) {
    "use strict";
    var core_3, platform_browser_dynamic_1, app_module_1, environment_1;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            }
        ],
        execute: function () {
            if (environment_1.environment.production) {
                core_3.enableProdMode();
            }
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
                .catch(function (err) { return console.log(err); });
        }
    };
});
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
System.register("src/polyfills", ["core-js/es7/reflect", "zone.js/dist/zone"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (_1) {
            },
            function (_2) {
            }
        ],
        execute: function () {/**
             * This file includes polyfills needed by Angular and is loaded before the app.
             * You can add your own extra polyfills to this file.
             *
             * This file is divided into 2 sections:
             *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
             *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
             *      file.
             *
             * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
             * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
             * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
             *
             * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
             */
            /***************************************************************************************************
             * APPLICATION IMPORTS
             */
        }
    };
});
// This file is required by karma.conf.js and loads recursively all the .spec and framework files
System.register("src/test", ["zone.js/dist/zone-testing", "@angular/core/testing", "@angular/platform-browser-dynamic/testing"], function (exports_11, context_11) {
    "use strict";
    var testing_1, testing_2, context;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [
            function (_3) {
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            }
        ],
        execute: function () {// This file is required by karma.conf.js and loads recursively all the .spec and framework files
            // First, initialize the Angular testing environment.
            testing_1.getTestBed().initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
            // Then we find all the tests.
            context = require.context('./', true, /\.spec\.ts$/);
            // And load the modules.
            context.keys().map(context);
        }
    };
});
System.register("src/app/app.component.spec", ["@angular/core/testing", "src/app/app.component"], function (exports_12, context_12) {
    "use strict";
    var testing_3, app_component_2;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (testing_3_1) {
                testing_3 = testing_3_1;
            },
            function (app_component_2_1) {
                app_component_2 = app_component_2_1;
            }
        ],
        execute: function () {
            describe('AppComponent', function () {
                beforeEach(testing_3.async(function () {
                    testing_3.TestBed.configureTestingModule({
                        declarations: [
                            app_component_2.AppComponent
                        ],
                    }).compileComponents();
                }));
                it('should create the app', testing_3.async(function () {
                    var fixture = testing_3.TestBed.createComponent(app_component_2.AppComponent);
                    var app = fixture.debugElement.componentInstance;
                    expect(app).toBeTruthy();
                }));
                it("should have as title 'hello-world'", testing_3.async(function () {
                    var fixture = testing_3.TestBed.createComponent(app_component_2.AppComponent);
                    var app = fixture.debugElement.componentInstance;
                    expect(app.title).toEqual('hello-world');
                }));
                it('should render title in a h1 tag', testing_3.async(function () {
                    var fixture = testing_3.TestBed.createComponent(app_component_2.AppComponent);
                    fixture.detectChanges();
                    var compiled = fixture.debugElement.nativeElement;
                    expect(compiled.querySelector('h1').textContent).toContain('Welcome to hello-world!');
                }));
            });
        }
    };
});
System.register("src/environments/environment.prod", [], function (exports_13, context_13) {
    "use strict";
    var environment;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [],
        execute: function () {
            exports_13("environment", environment = {
                production: true
            });
        }
    };
});
//# sourceMappingURL=mybundle.js.map