

var library = (function() {
    return {
        TimeStamp: (function(){
            return {
                UnixTimestamp: function(){
                    var date = new Date();
                    var time = date.getTime().toString()/1000|0;
                    return (time.toString())
                },
                UnixMillisecond: function () {
                    var date = new Date();
                    var time = Date.now().toString();
                    return (time.toString());
                }
            }
        })(),
        Local: (function(){
            return {
                Time: (function() {
                    return {
                        WithSeconds: function(){
                             var date = new Date();
                             return date.toLocaleTimeString('en-us');
                        },
                        WithOutSeconds: function() {
                            var hour = library.Hour.TwelveHour();
                            var minutes = library.Minute.DblDigit();
                            var amPM = library.Hour.AMPM.UpperCase();
                            return hour + ":" + minutes + " " + amPM;
                        }
                    }
                })(),
                MDY: (function(){
                    return {
                        Numeral: function(){
                             var date = new Date();
                             return date.toLocaleDateString('en-us');
                        },
                        Name: function(){
                            var date = new Date();
                            var month = library.Month.CurrentMonth();
                            var date = library.Month.DateOfMonth.Numeral();
                            var year = library.Year.YearFull();
                            return month + " " + date + ", " + year;
                        }
                    }
                })(),
            }
        })(),
        Second: (function(){
            return{
                Second: function(){
                    var date = new Date();
                    function s() {
                        var seconds = (date.getSeconds().toString())
                        if (seconds < 10) {
                            return ("0" + (date.getSeconds().toString()))
                        } else {
                            return seconds
                    }};
                        return s();
                    },
                DblDigit: function(){
                     var date = new Date();
                     function s() {
                         var seconds = (date.getSeconds().toString())
                         if (seconds < 10) {
                           return ("0" + (date.getSeconds().toString()))  
                     } else {
                         return seconds
                     }};
                     return s();
                     }    
            }
            }
        )(),
        Minute: (function(){
            return {
                Minute: function () {
                    var date = new Date();
                    function m() {
                        var minutes = (date.getMinutes().toString())
                        if (minutes < 10) {
                            return ("0" + (date.getMinutes().toString()))
                        } else {
                            return (date.getMinutes().toString())
                        }
                    };
                    return m();
                },
                DblDigit: function () {
                    var date = new Date();
                    function m() {
                        var minutes = (date.getMinutes().toString())
                        if (minutes < 10) {
                            return ("0" + (date.getMinutes().toString()))
                        } else {
                            return (date.getMinutes().toString())
                    }};
                        return m();
                }
            }
        })(),
        Hour: (function(){
            return {
                TwentyFourHour: function() {
                     var date = new Date();
                     var hours = date.getHours();
                return (hours.toString());
            },
                TwelveHour: function() {
                     var date = new Date();
                     var t4hour = date.getHours();
                    if (t4hour > 12){
                      t4hour =t4hour - 12
                    } else if (t4hour == 0) {
                        t4hour = 12
                    }
                return t4hour.toString();
                },
                AMPM: (function() {
                    return {
                        UpperCase: function () {
                                var date = new Date();
                                var hours = date.getHours();
                                if (hours > 11){
                                return "PM"
                                }else {return "AM"};
                        },
                        LowerCase: function () {
                            var date = new Date();
                         var hours = date.getHours();
                                if (hours > 11){
                                return "pm"
                                }else {return "am"};
                    }
                    }
                })()
            }
        })(),
        Week: (function(){
            return {
                DayOfWeek: function(){
                     var date = new Date();
                     var day = (date.getDay().toString());
                     var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                     return weekday[day];
                },
                AbrDayOfWeek: function(){
                     var date = new Date();
                     var day = (date.getDay().toString());
                     var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                     return weekday[day];
                },
                FirstTwoOfWeek: function(){
                    var date = new Date();
                    var date = new Date();
                    var day = (date.getDay().toString());
                    var weekday = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                    return weekday[day];
                },
                WeekOfYear: function () {
                    Date.prototype.getWeek = function () {
                    var onejan = new Date(this.getFullYear(), 0, 1);
                    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);}
                    var today = new Date();
                    var weekNumber = today.getWeek();
                    return weekNumber.toString();
                }
            }
        })(),
        Month: (function(){
            return {
                DateOfMonth: (function(){
                    return {
                        Numeral: function(){
                        var date = new Date();
                        var day =  (date.getDate().toString());
                          return (day.toString());
                        },
                        Ordinal: function(){
                        var date = new Date();
                        var day =  (date.getDate().toString()+ "th");
                        return (day.toString());
                        },
                        DateDblDigit: function(){
                         var date = new Date();
                         var day =  (date.getDate().toString());
                          return ("0" + (day.toString()));
                        }
                    }
                })(),
                MonthNumber: function () {
                    var date = new Date();
                    var month = (date.getMonth() + 1).toString();
                        return (month.toString());
                    },
                MonthNumberDblDigit: function(){
                    var date = new Date();
                    var DblDigit = (date.getMonth() + 1).toString()
                    if (DblDigit < 10) {
                        return ('0' + (date.getMonth() + 1).toString());
                    }
                },
                AbrOfCurrentMonth: function(){
                    var date = new Date();
                    var abrMonth = (date.getMonth().toString())
                    var Mnth =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                return ((Mnth[abrMonth]));
            },
                CurrentMonth: function(){
                    var date = new Date();
                    var currentMonth = (date.getMonth().toString())
                    var Month =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dec"]
                return ((Month[currentMonth]));
                }
            }

        })(),
        Year: (function(){
            return {
                DayOfYear: (function(){
                    return {
                        Numeral: function(){
                        var now = new Date();
                        var start = new Date(now.getFullYear(), 0, 0);
                        var diff = now - start;
                        var oneDay = 1000 * 60 * 60 * 24;
                        var day = Math.floor(diff / oneDay);
                        return day.toString();
                        },
                        Ordinal: function(){
                        var now = new Date();
                        var start = new Date(now.getFullYear(), 0, 0);
                        var diff = now - start;
                        var oneDay = 1000 * 60 * 60 * 24;
                        var day = Math.floor(diff / oneDay);
                        return (day.toString() + "th");
                        }
                    }
                })(),
                YearFull: function(){
                   var date = new Date();
                   var year = (date.getFullYear().toString());
                   return year.toString();
                },
                YearAbr: function(){
                    var date = new Date();
                    var year = (date.getFullYear().toString().substr(-2));
                    return year.toString();
                }
            }
        })(),
        Defaults: function(){
            var date = new Date();
            var YYYY = (date.getFullYear().toString());
            function MM(){
                var month = (date.getMonth() + 1).toString()
                if (month < 10){
                    return ("0" + (date.getMonth() + 1).toString())
                }else false;
            };
            function d(){ 
               var day = (date.getDate().toString());
               if (day < 10) {
                return ("0" + (date.getDate().toString()));}
             else false;
                };
            var h = (date.getHours().toString());
            function m() {
                var minutes = (date.getMinutes().toString())
                if (minutes < 10) {
                    return ("0" + (date.getMinutes().toString()))
                } else {
                    return (date.getMinutes().toString())
                }

            };
            function s() {
               var seconds = (date.getSeconds().toString())
               if (seconds < 10) {
                   return ("0" + (date.getSeconds().toString()))
                } else {
                    return seconds
                } 
                
                
            ;}
            var def = (YYYY + "-" + MM() + "-" + d() + "T" + h + ":" + m() + ":" + s());
            return (def.toString());
        }
    }
})();
