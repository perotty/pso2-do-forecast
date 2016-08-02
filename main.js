(function () {
    'use strict';

    var ORDER_DATA = [
        ['森林探索(おすすめ)', '2016-02-29', [15]],
        ['火山洞窟探索(おすすめ)', '2016-03-01', [15]],
        ['砂漠探索(おすすめ)', '2016-05-01', [15]],
        ['凍土探索(おすすめ)', '2016-02-17', [15]],
        ['地下坑道探索(おすすめ)', '2016-05-03', [15]],
        ['浮遊大陸探索(おすすめ)', '2016-02-19', [15]],
        ['遺跡探索(おすすめ)', '2016-04-20', [15]],
        ['龍祭壇探索(おすすめ)', '2016-02-21', [15]],
        ['海岸探索(おすすめ)', '2016-05-07', [15]],
        ['採掘場跡探索(おすすめ)', '2016-02-23', [15]],
        ['海底探索(おすすめ)', '2016-02-24', [15]],
        ['白ノ領域探索(おすすめ)', '2016-02-25', [15]],
        ['浮上施設探索(おすすめ)', '2016-05-11', [15]],
        ['黒ノ領域探索(おすすめ)', '2016-04-27', [15]],
        ['東京探索(おすすめ)', '2016-04-28', [15]],
        ['ナヴ・ラッピー捕獲任務(おすすめ)', '2016-04-21', [21]],
        ['ウォルガーダ殲滅(おすすめ)', '2016-04-21', [21]],
        ['狂暴化龍族鎮圧:浮遊大陸(おすすめ)', '2016-04-22', [21]],
        ['黒の民鎮圧任務:白ノ領域(おすすめ)', '2016-04-22', [21]],
        ['キャタドランサ討伐(おすすめ)', '2016-04-23', [21]],
        ['浮上施設地域生態調査(おすすめ)', '2016-04-23', [21]],
        ['アークス捜索任務:凍土(おすすめ)', '2016-04-24', [21]],
        ['ソル・ディランダール討伐(おすすめ)', '2016-04-24', [21]],
        ['遺跡侵食度調査(おすすめ)', '2016-04-25', [21]],
        ['ウォパル救助隊(おすすめ)', '2016-04-25', [21]],,
        ['ゴロンゾラン鎮圧(おすすめ)', '2016-04-26', [21]],
        ['幻創種撃退任務:東京(おすすめ)', '2016-04-26', [21]],
        ['機甲種性能調査:地下坑道(おすすめ)', '2016-04-27', [21]],
        ['アンジャドゥリリ討伐(おすすめ)', '2016-04-27', [21]],
        ['救難信号調査(おすすめ)', '2016-04-28', [21]],
        ['オルグブラン討伐(おすすめ)', '2016-04-28', [21]],
        ['稀少鉱石発掘任務(おすすめ)', '2016-04-29', [21]],
        ['移動要塞型機甲種撃破(おすすめ)', '2016-04-29', [21]],
        ['デコル・マリューダ討伐(おすすめ)', '2016-04-30', [21]],
        ['黒の民鎮圧任務:黒ノ領域(おすすめ)', '2016-04-30', [21]],
        ['凍土地域状況調査(おすすめ)', '2016-05-01', [21]],
        ['レオマドゥラード討伐(おすすめ)', '2016-05-01', [21]],
        ['貴重物資運搬計画:砂漠(おすすめ)', '2016-05-02', [21]],
        ['コドッタ・イーデッタ討伐(おすすめ)', '2016-05-02', [21]],
        ['ダガン殲滅任務:森林(おすすめ)', '2016-05-03', [21]],
        ['トレイン・ギドラン討伐(おすすめ)', '2016-05-03', [21]],
        ['カルターゴ殲滅(おすすめ)', '2016-05-04', [21]],
        ['機甲種性能調査:砂漠(おすすめ)', '2016-05-04', [21]],
        ['ザウーダン討伐(おすすめ)', '2016-05-05', [21]],
        ['龍祭壇平定任務(おすすめ)', '2016-05-05', [21]],
        ['キャタドラン討伐(おすすめ)', '2016-05-06', [21]],
        ['リリーパ族集落防衛(おすすめ)', '2016-05-06', [21]],
        ['指定標本回収:浮遊大陸(おすすめ)', '2016-05-07', [21]],
        ['環境保全任務:海岸(おすすめ)', '2016-05-07', [21]],
        ['フォンガルフ討伐(おすすめ)', '2016-05-08', [21]],
        ['デ・マルモス鎮圧(おすすめ)', '2016-05-08', [21]],
        ['龍族生態調査(おすすめ)', '2016-05-09', [21]],
        ['機甲種性能調査:採掘場跡(おすすめ)', '2016-05-09', [21]],
        ['環境汚染装置破壊(おすすめ)', '2016-05-10', [21]],
        ['海岸地域生態調査(おすすめ)', '2016-05-10', [21]],
        ['巨大変形機甲種撃破(おすすめ)', '2016-05-11', [21]],
        ['海底地域生態調査(おすすめ)', '2016-05-11', [21]],
        ['デ・マルモス(VH)', '2016-04-07', [93]],
        ['ゼッシュレイダ(VH)', '2016-03-18', [93]],
        ['ゴロンゾラン(VH)', '2016-02-05', [30, 42, 21]],
        ['ドラゴン・エクス(VH)', '2016-02-04', [33, 18, 18, 24]],
        ['火山洞窟探索(VH)', '2016-02-06', [5, 46, 17, 25]],
        //['アークス捜索任務:凍土(VH)', '2016-02-09', [5, 49, 14, 19, 6]],
        ['浮遊大陸探索(VH)', '2016-02-12', [5, 49, 14, 25]],
        ['環境汚染装置破壊(VH)', '2016-02-15', [5, 49, 14, 25]],
        ['遺跡探索(VH)', '2016-02-21', [2, 49, 18, 24]],
        //['龍祭壇平定任務(VH)', '2016-02-05', [39, 4, 8, 42]],
        ['龍祭壇探索(VH)', '2016-02-08', [39, 6, 1, 47]],
        ['オルグブラン(VH)', '2016-02-17', [48, 23, 22]],
        ['バル・ロドス(VH)', '2016-01-30', [3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]],
        //['ヴァーダーソーマ(VH)', '2016-02-22', [18, 75]],
        ['デコル・マリューダ(VH)', '2016-02-13', [63, 13, 17]],
        ['15式戦車(VH)', '2016-02-10', [18, 18, 18, 18, 21]],
        //['海岸地域生態調査(VH)', '2016-02-24', [2, 49, 14, 28]],
        ['海岸探索(VH)', '2016-01-30', [28, 2, 42, 7, 14]],
        ['機甲種性能調査:採掘場跡(VH)', '2016-03-03', [1, 35, 13, 44]],
        ['採掘場跡探索(VH)', '2016-03-06', [1, 29, 19, 44]],
        //['海底地域生態調査(VH)', '2016-03-09', [4, 20, 25, 44]],
        ['海底探索(VH)', '2016-01-31', [41, 4, 14, 34]],
        ['ロックベア(SH)', '2016-02-05', [54, 39]],
        ['ヴォル・ドラゴン(SH)', '2016-04-03', [26, 67]],
        ['グワナーダ(SH)', '2016-02-14', [54, 39]],
        ['スノウバンサー(SH)', '2016-02-18', [54, 39]],
        ['ビッグヴァーダー(SH)', '2016-02-23', [54, 39]],
        ['クォーツ・ドラゴン(SH)', '2016-02-27', [54, 39]],
        ['ゼッシュレイダ(SH)', '2016-03-03', [54, 39]],
        ['ドラゴン・エクス(SH)', '2016-01-28', [39, 54]],
        ['バル・ロドス(SH)', '2016-02-02', [39, 54]],
        ['ブリュー・リンガーダ(SH)', '2016-02-06', [39, 54]],
        ['ビオル・メデューナ(SH)', '2016-03-04', [17, 76]],
        ['トレイン・ギドラン(SH)', '2016-02-15', [23, 16, 29, 25]],
        ['森林探索(SH)', '2014-09-27', [6, 3, 24, 27, 33]],
        ['火山洞窟探索(SH)', '2014-08-28', [48, 33, 3, 3, 6]],
        ['砂漠探索(SH)', '2014-09-03', [3, 3, 15, 15, 57]],
        ['凍土探索(SH)', '2014-08-31', [12, 6, 30, 15, 6, 24]],
        ['地下坑道探索(SH)', '2014-09-21', [21, 9, 6, 18, 39]],
        ['浮遊大陸探索(SH)', '2014-09-15', [15, 24, 12, 6, 36]],
        ['遺跡探索(SH)', '2016-01-31', [15, 15, 24, 18, 21]],
        ['龍祭壇探索(SH)', '2016-03-04', [15, 9, 3, 21, 45]],
        ['海岸探索(SH)', '2016-01-28', [12, 3, 6, 9, 18, 45]],
        ['採掘場跡探索(SH)', '2016-02-21', [15, 33, 6, 3, 36]],
        ['デコル・マリューダ討伐(SH)', '2016-02-24', [15, 24, 21, 3, 30]],
        ['海底探索(SH)', '2016-02-03', [3, 36, 9, 15, 30]]
    ];

    var CycleIter = (function () {
        var klass = function (seq) {
            this._seq = [].concat(seq);
            this._idx = 0;
            return this;
        };

        klass.prototype = {
            next: function () {
                var seq = this._seq,
                    idx = this._idx,
                    ret = seq[idx];
                this._idx = ++idx < seq.length ? idx : 0;
                return ret;
            }
        };

        return klass;
    }());

    var DateUtil = (function () {
        var _copy = function (date) {
            return new Date(date.valueOf());
        };

        var _trimTime = function (date) {
            date = _copy(date);
            date.setHours(0, 0, 0, 0);
            return date;
        };

        var _addDays = function (date, days) {
            date = _copy(date);
            date.setDate(date.getDate() + days);
            return date;
        };

        return {
            copy: _copy,
            trimTime: _trimTime,
            addDays: _addDays
        };
    }());

    var DateCalculator = (function () {
        var klass = function (start, freqs) {
            this._date = DateUtil.trimTime(start);
            this._freqs = new CycleIter(freqs);
            return this;
        };

        var _i2s = function (num, leng) {
            var num = num.toString(),
                digits = [num];
            for (var i = num.length; i < leng; ++i) {
                digits.unshift('0');
            }
            return digits.join('');
        };

        klass.prototype = {
            date: function () {return DateUtil.copy(this._date)},
            toDateString: function () {
                var date = this._date;
                return [_i2s(date.getFullYear(), 4),
                        _i2s(date.getMonth() + 1, 2),
                        _i2s(date.getDate(), 2)
                       ].join('-');
            },
            next: function () {
                this._date = DateUtil.addDays(this._date, this._freqs.next());
                return this;
            }
        };

        return klass;
    }());

    var OrderResults = (function () {
        var klass = function (begin, end) {
            var result = {};
            if (begin && end) {
                var dc = new DateCalculator(begin, [1]);
                for (; dc.date() < end; dc.next()) {
                    result[dc.toDateString()] = [];
                }
            }
            this._result = result;
            return this;
        };

        klass.prototype = {
            push: function (date, order) {
                var result = this._result,
                    orders = result[date];
                if (!orders) {
                    orders = [];
                    result[date] = orders;
                }
                orders.push(order);
                return this;
            },
            forEach: function (callback) {
                var result = this._result;
                Object.keys(result).sort().forEach(function (date) {
                    callback(date, result[date]);
                });
                return this;
            }
        };

        return klass;
    }());

    var TextConsole = (function () {
        var klass = function ($this) {
            this._$ = $this;
            return this;
        };

        klass.prototype = {
            clear: function () {this._$.text('')},
            print: function (s) {this._$.text(this._$.text() + s)},
            println: function (s) {this.print(s + '\n')}
        };

        return klass;
    }());

    var Forecast = (function () {
        var _FORECAST_DAYS = 10;

        var klass = function ($this) {
            var self = this;
            $this.find('.forward').click(function () {self.onForward()});
            $this.find('.backward').click(function () {self.onBackward()});
            this._out = new TextConsole($this.find('.output'));
            this._base = DateUtil.trimTime(new Date());
            this._offset = 0;
            this.update();
            return this;
        };

        klass.prototype = {
            onForward: function () {this.next(_FORECAST_DAYS)},
            onBackward: function () {this.next(-_FORECAST_DAYS)},
            next: function (days) {
                this._offset += days;
                this.update();
            },
            update: function () {
                var begin = DateUtil.addDays(this._base, this._offset),
                    end = DateUtil.addDays(begin, _FORECAST_DAYS),
                    results = new OrderResults(begin, end);
                ORDER_DATA.forEach(function (data) {
                    var order = data[0],
                        dc = new DateCalculator(data[1], data[2]);
                    for (; dc.date() < begin; dc.next()) {
                    }
                    for (; dc.date() < end; dc.next()) {
                        results.push(dc.toDateString(), order);
                    }
                });
                var out = this._out;
                out.clear();
                results.forEach(function (date, orders) {
                    out.println(date + ':');
                    orders.forEach(function (order) {
                        out.println('  ' + order);
                    });
                });
            }
        };

        return klass;
    })();

    new Forecast($('#forecast'));
})();
