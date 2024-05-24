var app_Vue, app_Vue_id = "app_Vue";
/* 關閉vue-devtools */
Vue.config.devtools = true;
/* 關閉錯誤警告 */
Vue.config.debug = true;

/* Global Settings */
Vue.mixin({
    mixins: [_VueConfig],
    components: {
        //'loading-cover': __loading_components,
        //'choosingtest-popupbox': __choosingtest_popupbox_components,
        'loading-transition': __loading_transition_components,
        'password-input': __passwordinput_components,
        'submenu-veiw': __submenu_components,
        'step-veiw': __step_components,
        'bank-popupbox': __bank_popupbox_components,
        'remindw-popupbox': __remindw_popupbox_components,
        'remindn-popupbox': __remindn_popupbox_components,
        'remindusingmobile-popupbox': __remindusingmobile_popupbox_components
    },
    data: function () {
        return {
            // ======================================  以下請勿自行修改 ====================================== //           
            screenWidth: 0,
            pageWithMember: null,//(頁面)是否需要Member登入 boolean
            applySteped: 1,//已經完成的步驟
            csrf: "",
            openID: openid,
            addressChName: {
                ly: g_ly,
                adjacent: "鄰",
                road: g_road,
                segment: "段",
                lane: "巷",
                do: "弄",
                number: "號",
                floor: "樓",
            },
            apiplaceList: null,
            apiBankList: null,
            apiSubBankList: null,
            reject: '',
            userData: {
                bank_id: "",
                bank_name: "",
                birth: "",
                chk1: "",
                chk2: "",
                chk3: "",
                id: "",
                tax_status: "",
            },
            basicData: {
                id: "",
                name: "",
                birth: "",
                mobile: "",
                phone: [],
                country: countryData[0],
                city: "",
                email: "",
                h_addrs: {
                    city: "",
                    zip: "",
                    zip_code: "",
                    add1: "",
                    add2: "",
                    add3: "",
                    add4: "",
                    add5: "",
                    add6: "",
                    add7: "",
                    add8: "",
                    add9: "",
                    add10: g_ly[0],
                    add11: g_road[0]
                },
                c_type: "",
                c_addrs: {
                    city: "",
                    zip: "",
                    zip_code: "",
                    add1: "",
                    add2: "",
                    add3: "",
                    add4: "",
                    add5: "",
                    add6: "",
                    add7: "",
                    add8: "",
                    add9: "",
                    add10: g_ly[0],
                    add11: g_road[0]
                },
                r_type: "",
                r_addrs: {
                    city: "",
                    zip: "",
                    zip_code: "",
                    add1: "",
                    add2: "",
                    add3: "",
                    add4: "",
                    add5: "",
                    add6: "",
                    add7: "",
                    add8: "",
                    add9: "",
                    add10: g_ly[0],
                    add11: g_road[0]
                },
                csr: "",
            },
            phoneTypeList: [
                {
                    type: 1,
                    name: "家用"
                },
                {
                    type: 2,
                    name: "公司"
                },
                {
                    type: 3,
                    name: "傳真"
                },
                {
                    type: 4,
                    name: "刪除"
                }
            ],
            legalData: {
                id: "",
                name1: "",
                id1: "",
                birth1: "",//2000-11-11
                name2: "",
                id2: "",
                birth2: "",
                is_only_1: "0",//1是,0否  (因特殊原因，僅具一位法定代理人)
                is_auth: "0",//1是,0否  (是否需申請法定代理人授權)
                legal_no: "1",//代理1or2
                agree_no: "",//代理1or2
                agree_mobile: "",
                c_type: "2",
                c_addrs: {
                    city: "",
                    zip: "",
                    zip_code: "",
                    add1: "",
                    add2: "",
                    add3: "",
                    add4: "",
                    add5: "",
                    add6: "",
                    add7: "",
                    add8: "",
                    add9: "",
                    add10: g_ly[0],
                    add11: g_road[0]
                }
            },
            backgroundQ: background.question,
            backgroundA: {
                age: 0,
                id: "",
                q1: {
                    data: {
                        radio: "1",
                        text: "",
                        none: false,
                        other: false,
                        other_txt: "",
                        label: "",
                        rchoose: ""
                    }
                },
                q2: {
                    data: {
                        radio: "",
                        text: "",
                        none: false,
                        other: false,
                        other_txt: "",
                        label: "",
                        rchoose: ""
                    }
                },
                q3: {
                    data: {
                        select: "",
                        text: "",
                        none: false,
                        other: false,
                        other_txt: "",
                        label: "",
                        rchoose: ""
                    }
                },
                q4: {
                    data: {
                        text: "",
                        none: false,
                        other: false,
                        other_txt: "",
                        label: "",
                        rchoose: ""
                    }
                },
                q5: {
                    data: {
                        select: "",
                        text: "",
                        none: false,
                        other: false,
                        other_txt: "",
                        label: "",
                        rchoose: ""
                    }
                },
                q6: {
                    data: {
                        select: "",
                        text: "",
                        none: false,
                        other: false,
                        other_txt: "",
                        label: "",
                        rchoose: ""
                    }
                },
                q7: {
                    data: {
                        radio: "",
                        text: "",
                        none: false,
                        other: false,
                        other_txt: "",
                        label: "",
                        rchoose: ""
                    }
                },
                q8: {
                    data: {
                        radio: "",
                        select: "",
                        text: "",
                        none: false,
                        other: false,
                        other_txt: "",
                        label: "",
                        rchoose: ""
                    }
                },
                q9: {
                    data: {
                        radio: "",
                        select: "",
                        text: "",
                        none: false,
                        other: false,
                        other_txt: "",
                        label: "",
                        rchoose: ""
                    }
                },
                q10: {
                    data: {
                        select: "",
                        text: "",
                        none: false,
                        other: false,
                        other_txt: "",
                        label: "",
                        rchoose: ""
                    }
                },
                q11: {
                    data: {
                        checkbox: [],
                        text: "",
                        none: false,
                        other: false,
                        other_txt: "",
                        label: "",
                        rchoose: ""
                    }
                },
                q12: {
                    data: {
                        checkbox: [],
                        text: "",
                        none: false,
                        other: false,
                        other_txt: "",
                        label: "",
                        rchoose: ""
                    }
                },
                q13: {
                    data: {
                        checkbox: [],
                        text: "",
                        none: false,
                        other: false,
                        other_txt: "",
                        label: "",
                        rchoose: ""
                    }
                },
                q14: {
                    data: {
                        checkbox: [],
                        text: "",
                        none: false,
                        other: false,
                        other_txt: "",
                        label: "",
                        rchoose: ""
                    }
                }
            },
            backgroundB: {},
            kycQ: kyc.question,
            kycB: {},
            bankData: {
                id: '',
                type: '',
                bank: {
                    bank_id: '',
                    bank_name: '',
                    bank_branch_id: '',
                    bank_branch_name: '',
                    bank_acc: ''
                },
                chk1: 0,//有晶片卡和讀卡機
                chk2: 0,//有網銀和密碼
                chk3: 0,//不符合  
                is_same: '0',
                type1: '',
                bank1: {
                    bank_id: '',
                    bank_name: '',
                    bank_branch_id: '',
                    bank_branch_name: '',
                    bank_acc: ''
                },
                type2: '',
                bank2: {
                    bank_id: '',
                    bank_name: '',
                    bank_branch_id: '',
                    bank_branch_name: '',
                    bank_acc: ''
                },
                type3: '',
                bank3: {
                    bank_id: '',
                    bank_name: '',
                    bank_branch_id: '',
                    bank_branch_name: '',
                    bank_acc: ''
                },
                type4: '',
                bank4: {
                    bank_id: '',
                    bank_name: '',
                    bank_branch_id: '',
                    bank_branch_name: '',
                    bank_acc: ''
                },
                eng_name: '',//first name
                eng_name2: ''//last name
            },
            picData: {
                id: '',
                pic1: '',//(base64資料) 
                pic2: '',
                pic3: '',
                pic4: '',
                pic5: '',
                ext1: '',//(副檔名) 
                ext2: '',
                ext3: '',
                ext4: '',
                ext5: '',
                sale_no: ''
            },
            docData: {
                id: '',
                type: '',
                mail_to: '1',
            },
            currencyTypeList: [
                {
                    value: "1",
                    name: "台幣"
                },
                {
                    value: "2",
                    name: "外幣"
                },
                {
                    value: "3",
                    name: "綜合"
                }
            ],
            ScoreResult: null,
            getScoreDone1: false,
            getScoreDone2: false,
            getScoreDone3: false,
            getUserDataDone: false,
            getBasicDataDone: false,
            PicDone: false,
            DocDone: false,
            getBankDone: false,
            getSubBankDone: false,
            getQrCodeDone: false,
            age: null,
            QRcodeUrl: null,
            predictProcess: null,// { "type": 5, "day": 14 }
            isPermission: null,
            isFinished: null,
            tempBank_ID: null,
            tempshowFilter: true,
            FsitcApiPostFn: {
                checkCode: checkCode,
                fn: {
                    WS_OpenProcessNew: {//開戶進度查詢
                        method: 'WS_OpenProcessNew',
                        postdata: {
                            CID: '',
                            yyyymmdd: '',
                            PhoneNo: ''
                        }
                    },
                    WS_CheckCIDNew: {//開戶檢核身分
                        method: 'WS_CheckCIDNew',
                        postdata: {
                            CID: '',
                        }
                    },
                    WS_GetBankNew: {//銀行列表
                        method: 'WS_GetBankNew',
                        postdata: {
                            BankID: '',
                        }
                    },
                    WS_GetSubBank: {//銀行分行列表
                        method: 'WS_GetSubBank',
                        postdata: {
                            BankID: '',
                        }
                    },
                    WS_ZIP: {//郵遞區號
                        method: 'WS_ZIP',
                        postdata: {
                            ADDR: '',//完整地址(數字部分需為全形字型)
                        }
                    },
                    WS_GetKYCNo: {//KYC版號
                        method: 'WS_GetKYCNo',
                        postdata: {
                        }
                    },
                    WS_SetAccVerification: {//儲存核印結果
                        method: 'WS_SetAccVerification',
                        postdata: {
                            CID: '',
                            Result: ''
                        }
                    }
                }
            },
            mainStepListOrigin: [
                {
                    id: 0,
                    minSubStep: 1,
                    maxSubStep: 6,
                    name: "1"
                },
                {
                    id: 1,
                    minSubStep: 7,
                    maxSubStep: 9,
                    name: "2"
                },
                {
                    id: 2,
                    minSubStep: 10,
                    maxSubStep: 11,
                    name: "3"
                }],
            subStepListOrigin: [
                {
                    id: 1,
                    mainid: 0,
                    name: "基本資料",
                    permission: false,
                },
                {
                    id: 2,
                    mainid: 0,
                    name: "法代資料",
                    permission: false,
                },
                {
                    id: 3,
                    mainid: 0,
                    name: "背景資料",
                    permission: false,
                },
                {
                    id: 4,
                    mainid: 0,
                    name: "投資風險屬性",
                    permission: false,
                },
                {
                    id: 5,
                    mainid: 0,
                    name: "指定帳戶資料",
                    permission: false,
                },
                {
                    id: 6,
                    mainid: 0,
                    name: "資料確認",
                    permission: false,
                },
                {
                    id: 7,
                    mainid: 1,
                    name: "授權核印",
                    permission: false,
                },
                {
                    id: 8,
                    mainid: 1,
                    name: "證件印鑑上傳",
                    permission: false,
                },
                {
                    id: 9,
                    mainid: 1,
                    name: "選擇寄送方式",
                    permission: false,
                },
                {
                    id: 10,
                    mainid: 2,
                    name: "文件簽署",
                    permission: false,
                },
                {
                    id: 11,
                    mainid: 2,
                    name: "申請完成",
                    permission: false,
                }
            ],
            noPermissionText: '您選擇的開戶方式無需填寫此步驟。',
            noFinishedText: '您尚未完成前面步驟。'
        }
    },
    beforeCreate: function () {
        // 實體初始化。
        var self = this;

    },
    created: function () {
        // 網頁載入完成，先執行的 function 內容寫在這(像 jQ 的 .ready())
        var self = this;

    },
    beforeMount: function () {
        var self = this;
    },
    mounted: function () {
        var self = this;

    },
    updated: function () {
        //console.log("update!");
    },
    watch: {
        IsLoadFinished: function (new_val, old_val) {
            var self = this;
        },
    },
    computed: {
        Api_Domain: function () {
            var self = this;
           
            return self.Api.domain;
            
        },//取得API URL DOMAIN
        WebData_Domain: function () {
            var self = this;
            return self.Api.webdata_domain;          
        },//取得API WebData URL DOMAIN
        YearData: function () {
            var currentYear = new Date().getFullYear(), data = [];
            var startYear = 1920;
            while (startYear <= currentYear) {
                data.push(startYear++);
            }
            return data.sort(function (a, b) { return b - a });
        },
        MonthData: function () {
            var self = this;
            var startMonth = 1, data = [];
            while (startMonth <= 12) {
                data.push(self.formattedNumber(startMonth++, 2));
            }
            return data;
        },
        DateData: function () {
            var self = this;
            var startDate = 1, data = [];
            while (startDate <= 31) {
                data.push(self.formattedNumber(startDate++, 2));
            }
            return data;
        },
        isMobile: function () {
            var self = this;
            return isMobile();
        },
    },
    methods: {
        //各種要用的 function 寫在這
        setUrl: function (newPath) {
            var self = this;
            var url = self.Api.baseurlPath + newPath;

            return url;
        },//設定3rd part api post url
        setWebDataUrl: function (_method, _postdata) {
            var self = this;
            var url = self.WebData_Domain;
            var self = this;
            var dataObj = self.FsitcApiPostFn.fn[_method];
            var checkCode = 'checkCode=' + self.FsitcApiPostFn.checkCode,
                method = dataObj.method;

            url += checkCode;
            url += '&method=' + method;

            if (_postdata) {
                for (var key in dataObj.postdata) {
                    url += '&' + key + '=' + _postdata[key];
                }
            }

            return url;
        },//設定3rd part api post url
        getUrlDomain: function () {
            return window.location.protocol + "//" + window.location.host + "/";
        },
        CallAjax3rdAPI: function (url, pdata, hasHeaders, success_fun, error_fun) {
            var self = this;

            var _headers = {};
            if (hasHeaders) 
            {
                _headers = {
                    csrf: self.csrf
                }
            }
            
            $.ajax({
                url: url,
                type: "POST",
                dataType: "json",
                data: JSON.stringify(pdata),
                contentType: "application/json",
                jsonp: false,                
                crossDomain: true, // tell browser to allow cross domain                
                headers: _headers,
                success: function (Jdata) {

                    console.log("Api Name : " + url.split('/')[url.split('/').length - 1], Jdata);
                    success_fun(Jdata, pdata);
                },
                error: function (xhr, status, error) {
                    error_fun(xhr, status, error);
                    //alert("系統忙碌中請稍後再試！！");
                }
            });

        },//ajax error callback event
        ajaxError: function (xhr, status, error) {
            var self = this;
            if (ProccessMsg)
                ProccessMsg.Hide();

            if (xhr.responseJSON) {
                //for line login error
                if (xhr.responseJSON.error == "invalid_grant")
                    window.location.href = self.Router.open.apply.path;
            }

            var options = {
                Center: true,
                Fixed: true,
                showLoadingbar: false,
                clicktoRemove: true,
                showCoverbg: true,
                showRemoveBtn: false,
                autoHide: false,
                CoverBgOpacity: 0.7,
                CoverBgColor: "rgb(0, 0, 0)",
                customclass: ["alert", "top"],
                html: "<div class='textContainer'>" + "系統發生錯誤!" + "</div>",
            };

            ProccessMsg = showProccessMsg(options, false, false, []);

            console.log("ajaxError!", xhr, error);
        },//ajax error callback event
        ajaxError_WS: function (xhr, status, error) {
            var self = this;
            if (ProccessMsg)
                ProccessMsg.Hide();

            var options = {
                Center: true,
                Fixed: true,
                showLoadingbar: false,
                clicktoRemove: true,
                showCoverbg: true,
                showRemoveBtn: false,
                autoHide: false,
                CoverBgOpacity: 0.7,
                CoverBgColor: "rgb(0, 0, 0)",
                customclass: ["alert", "top"],
                html: "<div class='textContainer'>" + "WS:系統發生錯誤!" + "</div>",
            };

            ProccessMsg = showProccessMsg(options, false, false, []);

            console.log("WS:ajaxError!", xhr, error);
        },//ajax error callback event
        successPostCallback: function (result, hideErrorMsg) {//POST成功回傳
            var self = this;

            //回傳成功
            if (result.result == "1") {
                return true;
            } else {
                //show error msg

                if (ProccessMsg)
                    ProccessMsg.Hide();

                if (result.msg == "請先登入") {

                    var LogoutTimeout = 5000;

                    var buttons = [
                        {
                            text: "繼續開戶",
                            class: ["btn_default", "msg_btnconfirm", "confirm"],
                            parameter_fn: {},
                            callback_fn: function (e, parameter) {
                                window.location.href = self.Router.open.continue.path;
                            },
                        }
                    ];
                    result.msg = "連線逾時，您停留在此畫面已逾20分鐘，" + "<span class='countdown' data-countdowntime='" + LogoutTimeout / 1000 + "'></span>" + "秒鐘後畫面將自動引導您繼續完成開戶";

                    var options = {
                        Center: true,
                        Fixed: true,
                        showLoadingbar: false,
                        clicktoRemove: false,
                        showCoverbg: true,
                        showRemoveBtn: false,
                        autoHide: false,
                        CoverBgOpacity: 0.7,
                        CoverBgColor: "rgb(0, 0, 0)",
                        customclass: ["alert", "top"],
                        html: "<div class='textContainer'>" + result.msg + "</div>",
                    };

                    ProccessMsg = showProccessMsg(options, false, false, buttons);
                    setTimeout(function () { window.location.href = self.Router.open.apply.path; }, LogoutTimeout);

                } else {
                    var buttons = [];
                    if (result.msg.indexOf("請重新整理網頁後再輸入") > -1) {
                        buttons = [
                            {
                                text: "重新整理",
                                class: ["btn_default", "msg_btnconfirm", "confirm"],
                                parameter_fn: {},
                                callback_fn: function (e, parameter) {
                                    location.reload();
                                },
                            }
                        ];
                    }
                    var options = {
                        Center: true,
                        showLoadingbar: false,
                        clicktoRemove: true,
                        showCoverbg: true,
                        showRemoveBtn: false,
                        autoHide: false,
                        CoverBgOpacity: 0.7,
                        CoverBgColor: "rgb(0, 0, 0)",
                        customclass: ["alert", "top"],
                        html: "<div class='textContainer'>" + result.msg + "</div>",
                    };
                    ProccessMsg = showProccessMsg(options, false, null, buttons);
                }

                console.log("API Error", result.msg, result);
                return false;
            }
        },//api success callback event
        successPostCallback_WS: function (result, hideErrorMsg) {//POST成功回傳
            var self = this;

            //回傳成功
            if (result.Result != "999") {
                return true;
            } else {
               

                if (result.Message.indexOf("請重新整理網頁後再輸入") > -1) {
                    if (ProccessMsg)
                        ProccessMsg.Hide();
                    var buttons = [
                        {
                            text: "重新整理",
                            class: ["btn_default", "msg_btnconfirm", "confirm"],
                            parameter_fn: {},
                            callback_fn: function (e, parameter) {
                                location.reload();
                            },
                        }
                    ];

                    var options = {
                        Center: true,
                        showLoadingbar: false,
                        clicktoRemove: true,
                        showCoverbg: true,
                        showRemoveBtn: false,
                        autoHide: false,
                        CoverBgOpacity: 0.7,
                        CoverBgColor: "rgb(0, 0, 0)",
                        customclass: ["alert", "top"],
                        html: "<div class='textContainer'>" + "WS:" + result.Message + "</div>",
                    };
                    ProccessMsg = showProccessMsg(options, false, null, buttons);
                } else {
                    if (hideErrorMsg)
                        return false;

                    if (ProccessMsg)
                        ProccessMsg.Hide();

                    var options = {
                        Center: true,
                        showLoadingbar: false,
                        clicktoRemove: true,
                        showCoverbg: true,
                        showRemoveBtn: false,
                        autoHide: false,
                        CoverBgOpacity: 0.7,
                        CoverBgColor: "rgb(0, 0, 0)",
                        customclass: ["alert", "top"],
                        html: "<div class='textContainer'>" + "WS:" + result.Message + "</div>",
                    };
                    ProccessMsg = showProccessMsg(options, false, null, []);
                }

                //show error msg
                console.log("WS:API Error", result.Message, result);
                return false;
            }
        },//api success callback event
        CreateComponent: function () {
            var self = this;

            //create custom div
            var createDiv = function (id, type) {
                var div = document.createElement('div'), _app_Vue = document.getElementById(app_Vue_id);
                div.id = id;
                switch (type) {
                    case "append":
                        _app_Vue.appendChild(div);
                        break;
                    case "prepend":
                        _app_Vue.insertBefore(div, _app_Vue.firstChild);
                        break;
                    default:
                }
            }

            //replace custom div to component
            var elementMount = function (components, id, template) {
                var Element = Vue.extend(template);
                new Element(components).$mount("#" + id);
            }

            return {
                //Header: function () {//產生 Header
                //    var id = 'header-view';
                //    var components = {
                //        data: {
                //            url: self.homelinkurl,
                //            ecurl: self.getECUrl(),
                //            isec: self.isEcMember,
                //            iskycp: self.iskycpage,
                //            ismemberp: self.ismemberpage,
                //            trialmaintitle: self.trial_maintitle,
                //            _isGuidePage: self.isGuidePage,
                //            _ConListCommissionCount: self.ConListCommissionCount
                //        },
                //        watch: {
                //            _ConListCommissionCount: function (new_val, old_val) {
                //                var self = this;
                //                alert(new_val);
                //            },
                //        },
                //    };
                //    //create custom div
                //    createDiv(id, "prepend");

                //    //replace custom div to component
                //    elementMount(components, id, __header_components);
                //},
                Footer: function () {//產生 Footer
                    var id = 'footer-view';
                    var components = {
                        propsData: {
                        }
                    };
                    //create custom div
                    createDiv(id, "append");

                    //replace custom div to component
                    elementMount(components, id, __footer_components);
                },
                LoadingCover: function () {//產生 LoadingCover
                    var id = 'loading-cover';
                    var components = {
                        propsData: {
                        }
                    };
                    //create custom div
                    createDiv(id, "append");

                    //replace custom div to component
                    elementMount(components, id, __loading_components);
                },
                //Nav_mobilebuttons: function () {//產生 Nav mobile buttons
                //    var id = 'nav_mobilebuttons';
                //    var components = {
                //        propsData: {
                //            url: self.homelinkurl,
                //            _isEcMember: self.isEcMember,
                //        }
                //    };
                //    //create custom div
                //    createDiv(id, "append");

                //    //replace custom div to component
                //    elementMount(components, id, __nav_mobilebuttons_components);
                //},
                //Nav_mobilebmenulist: function () {//產生 Nav mobile menulist
                //    var id = 'nav_mobilemenulist';
                //    var components = {
                //        propsData: {
                //            _isEcMember: self.isEcMember,
                //        }
                //    };
                //    //create custom div
                //    createDiv(id, "append");

                //    //replace custom div to component
                //    elementMount(components, id, __nav_mobilemenulist_components);
                //},
                GetOne_Popup: function (query) {//產生getOne popup
                    var id = 'getOne_Popup' + query;
                    var components = {
                        propsData: {
                            query: query,
                            _closeotherpopup: false,
                            _closecover: true,
                        },
                    };
                    //create custom div
                    createDiv(id, "append");

                    //replace custom div to component
                    elementMount(components, id, __getone_popupbox_components);

                    //init popup
                    $authagree_popupbox = $("#authagree_popupbox");
                    _authagree_popup = $authagree_popupbox.BlockUI();

                },
                Choosingtest_Popup: function () {//產生 新測驗 or 前一次測驗 popup
                    var id = 'choosingtest_Popup';
                    var components = {
                        propsData: {
                        },
                    };
                    //create custom div
                    createDiv(id, "append");

                    //replace custom div to component
                    elementMount(components, id, __choosingtest_popupbox_components);

                    //init popup
                    $choosingtest_popupbox = $("#choosingtest_popupbox");
                    _choosingtest_popup = $choosingtest_popupbox.BlockUI();

                },
            }
        },//component dynamically into the Dom
        isNumeric: function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        toNumber: function (v) {
            return parseFloat(v.toString().replace("$", '').replace(/,/g, ''));
        },
        decodeEntities: function (value) {
            var element = document.createElement('textarea');

            var decodeHTMLEntities = function (str) {
                if (str && typeof str === 'string') {
                    str = str.replace(/</g, "&lt;");
                    str = str.replace(/>/g, "&gt;");
                    element.innerHTML = str;
                    str = element.textContent;
                    element.textContent = '';
                }
                return str;
            }

            return decodeHTMLEntities(value);
        },
        XssReplace: function (value) {
            if (value.toUpperCase().indexOf("SCRIPT") > -1)
                return "內含非法字元";
            else
                return value;
        },//prevent Xss
        displayValue: function (value) {
            var self = this;
            return !value ? self.emptyvalue_text : value;
        },
        displayDateFormat: function (value) {
            var self = this;
            return !value ? self.emptyvalue_text : value.split("T")[0].replace(/-/g, '/');
        },
        displayValueWithThousand: function (value) {
            var self = this;
            return !value && value != 0 ? self.emptyvalue_text : Intl.NumberFormat().format(value) + ' 元';
        },
        displayValueWithRate: function (value) {
            var self = this;
            return !value && value != 0 ? self.emptyvalue_text : value + '%';
        },
        displayValueWithThousand2: function (value) {
            var self = this;
            return !value && value != 0 ? self.emptyvalue_text : Intl.NumberFormat().format(value);
        },
        displayRB_rate: function (value) {
            var self = this;
            return value == 0.05 ? "同意" : value == 0 ? "不同意" : "--";
        },
        fnum: function (x) {
            var self = this;
            if (isNaN(x)) return x;

            if (x < 9999) {
                return self.displayValueWithThousand2(x);
            }

            if (x < 1000000) {
                return self.displayValueWithThousand2(Math.round(x / 1000)) + "K";
            }
            if (x < 10000000) {
                return self.displayValueWithThousand2((x / 1000000).toFixed(2)) + "M";
            }

            if (x < 1000000000) {
                return self.displayValueWithThousand2(Math.round((x / 1000000))) + "M";
            }

            if (x < 1000000000000) {
                return self.displayValueWithThousand2(Math.round((x / 1000000000))) + "B";
            }

            return "1T+";
        },//金錢單位轉換
        formattedNumber: function (value, number) {
            var zero = "0", str = "";
            for (var i = 0; i < number; i++) {
                str += zero;
            }
            return (str + value).slice(number * -1);
        },
        emptydata_text: function (targettext) {
            if (!targettext || targettext == "")
                targettext = "資料";

            return "目前暫無任何" + targettext;
        },
        getParameterByName: function (name, url) {//get query string
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        },//get querystring
        onbeforeunload: function (event) {
            //var dialogText = 'Dialog text here';
            //event.returnValue = dialogText;
            //return dialogText;
            if (ProccessMsg)
                ProccessMsg.Hide();
            return "";

        },//ask before page leave event
        RemoveOnbeforeunload: function () {
            window.onbeforeunload = function () {
                // blank function do nothing
            }
        },//remove 'ask before page leave event'
        StepUrl: function (step) {
            var self = this;
            var url = "";

            switch (parseInt(step)) {
                case 1://基本資料
                    url = self.Router.open.basic.path;
                    break;
                case 2://法代資料
                    url = self.Router.open.lawrepresentative.path;
                    break;
                case 3://背景資料
                    url = self.Router.open.background.path;
                    break;
                case 4://投資風險屬性
                    url = self.Router.open.kyc.path;
                    break;
                case 5://指定帳戶資料
                    url = self.Router.open.account.path;
                    break;
                case 6://資料確認
                    url = self.Router.open.confirm.path;
                    break;
                case 7://授權核印
                    url = self.Router.open.authorize.path;
                    break;
                case 8://證件印鑑上傳
                    url = self.Router.open.idphoto.path;
                    break;
                case 9://選擇寄送方式
                    url = self.Router.open.sendway.path;
                    break;
                case 10://文件簽署
                    url = self.Router.open.sign.path;
                    break;
                case 11://申請完成
                    url = self.Router.open.completion.path;
                    break;
                default:
            }
            return url;
        },
        address_duplicate: function (addrs, hasZipCode) {
            var self = this;
            var zip_code = '';
            if (addrs.zip_code != "" && hasZipCode)
                zip_code = addrs.zip_code + " ";

            var result = zip_code.halfToFull() + addrs.city + " " + addrs.zip;

            if (addrs.add1 != "")
                result += " " + addrs.add1 + addrs.add10;

            if (addrs.add2 != "")
                result += " " + addrs.add2.halfToFull() + self.addressChName.adjacent;

            if (addrs.add3 != "")
                result += " " + addrs.add3 + addrs.add11;

            if (addrs.add4 != "")
                result += " " + addrs.add4.halfToFull() + self.addressChName.segment;

            if (addrs.add5 != "")
                result += " " + addrs.add5.halfToFull() + self.addressChName.lane;

            if (addrs.add6 != "")
                result += " " + addrs.add6.halfToFull() + self.addressChName.do;

            if (addrs.add7 != "")
                result += " " + addrs.add7.halfToFull() + self.addressChName.number;

            if (addrs.add8 != "")
                result += " " + addrs.add8.halfToFull() + self.addressChName.floor;

            if (addrs.add9 != "")
                result += "-" + addrs.add9;
            return result;
        },
        scoreAnimate: function (score, isReset) {
            var self = this;
            if (score <= 0)
                return;

            self.ScoreResult = self.getKycTypeData(score);
            self.$nextTick(function () {
                drawScoreClock();

                if (isReset) {
                    $('html,body').stop().animate({ scrollTop: $(".kycResultContainer").offset().top - 100 }, 400, 'easeOutQuart', function () {
                        setTimeout(function () { self.getScoreDone2 = true; }, 500);
                        setTimeout(function () { self.getScoreDone1 = true; }, 1000);
                        setTimeout(function () { self.getScoreDone3 = true; }, 1200);
                    });
                } else {
                    self.getScoreDone1 = self.getScoreDone2 = self.getScoreDone3 = true;
                }


            });
        },
        getUserData: function (callback) {
            var self = this;

            if (self.openID && self.openID != '') {
                var getUser_success = function (data) {
                    if (self.successPostCallback(data)) {

                        //處理頁面權限...
                        self.subStepListOrigin = data.subStepListOrigin;

                        var unfinishedCount = self.subStepListOrigin.filter(function (i) { return i.permission == true && i.finished == 0 }).length;
                        if (unfinishedCount <= 0 && self.pageID != 11)
                            window.location.href = self.StepUrl(11);

                        self.userData = deepmerge(self.userData, JSON.parse(JSON.stringify(data.data)));
                        self.reject = data.reject;
                        self.predictProcess = data.predictDate;
                        self.age = calculate_age(new Date(self.userData.birth));

                        var finishedData = self.subStepListOrigin.filter(function (i) { return i.permission == true && i.finished == 1 });
                        self.applySteped = finishedData.lengrh > 0 ? finishedData[finishedData.lengrh - 1].id : 1;
                        self.getUserDataDone = true;

                        if (typeof callback == 'function')
                            callback();


                    }
                }

                var body = {
                    id: self.openID,
                    step: self.pageID || ''
                };

                //呼叫 API
                self.CallAjax3rdAPI(self.setUrl('getUser.ashx'), body, true, getUser_success, self.ajaxError);
            }
        },
        checHaskReject: function () {//進入頁面進行檢查此步驟是否需要補件(show msg)
            var self = this;
            if (self.reject != '') {

                if (ProccessMsg)
                    ProccessMsg.Hide();

                var options = {
                    Center: true,
                    Fixed: true,
                    directionAnimation: "bottom",
                    showLoadingbar: false,
                    clicktoRemove: true,
                    showCoverbg: true,
                    showRemoveBtn: false,
                    autoHide: false,
                    CoverBgOpacity: 0.7,
                    //CoverBgColor: "rgb(0, 0, 0)",
                    customclass: ["alert", "top"],
                    html: "<div class='textContainer'>" + self.reject + "</div>",
                };
                ProccessMsg = showProccessMsg(options, false, null, []);
                return true;
            }
            return false;
        },
        checkHasPrevStep: function (data) {//各步驟儲存動作(成功後)，檢查前面是否還有需要補件的步驟
            var self = this;
            var _prevStep = data.prevStep;
            if (_prevStep && _prevStep > 0) {//前往補件步驟

                var buttons = [
                    {
                        text: "立即前往",
                        class: ["btn_default", "msg_btnconfirm", "confirm"],
                        parameter_fn: { _pS: _prevStep },
                        callback_fn: function (e, parameter) {
                            window.location.href = self.StepUrl(parameter._pS);
                        },
                    }
                ];

                var options = {
                    Center: true,
                    Fixed: true,
                    directionAnimation: "bottom",
                    showLoadingbar: false,
                    clicktoRemove: false,
                    showCoverbg: true,
                    showRemoveBtn: false,
                    autoHide: false,
                    CoverBgOpacity: 0.7,
                    //CoverBgColor: "rgb(0, 0, 0)",
                    customclass: ["alert", "top"],
                    html: "<div class='textContainer'>" + '前面步驟尚須進行補件' + "</div>",
                };
                ProccessMsg = showProccessMsg(options, false, null, buttons);

                return true;
            } else {
                return false;
            }
        },
        getBasicData: function () {
            var self = this;

            if (self.openID && self.openID != '') {
                var getBasicData_success = function (data) {
                    if (self.successPostCallback(data)) {

                        self.basicData = deepmerge(self.basicData, JSON.parse(JSON.stringify(data.data)));
                        self.basicData.csr = !self.basicData.csr || self.basicData.csr == "" ? 'Y' : self.basicData.csr;
                        self.getBasicDataDone = true;
                    }
                }

                var body = {
                    id: self.openID
                };

                //呼叫 API
                self.CallAjax3rdAPI(self.setUrl('getData.ashx'), body, true, getBasicData_success, self.ajaxError);
            }
        },
        getKycTypeData: function (score) {
            var self = this;

            var data = self.kycTypeData.filter(function (item, index) { return (score >= item.scoreMin && score <= item.scoreMax) || (score >= item.scoreMin && item.scoreMax == null) })[0] || null;

            return data;
        },
        getBankList: function (callback) {
            var self = this;

            if (self.isWSMode) {
                var WS_GetBankNew_success = function (data) {
                    if (self.successPostCallback_WS(data, true)) {
                        self.apiBankList = data.sort(function (a, b) { return parseInt(a.BankID) - parseInt(b.BankID) });
                        self.getBankDone = true;

                        if (typeof callback == 'function')
                            callback();
                    }
                }
                var query = {
                    BankID: 'ALL'
                };

                //呼叫 API
                self.CallAjax3rdAPI(self.setWebDataUrl('WS_GetBankNew', query), null, false, WS_GetBankNew_success, self.ajaxError_WS);
            }

            if (!self.isWSMode) {
                self.apiBankList = BankList2.sort(function (a, b) { return parseInt(a.BankID) - parseInt(b.BankID) });
                if (typeof callback == 'function')
                    callback();
            }
        },
        getSubBankList: function (_bankid, callback) {
            var self = this;

            if (self.isWSMode) {
                var WS_GetSubBank_success = function (data) {
                    if (self.successPostCallback_WS(data, true)) {
                        self.apiSubBankList = data;
                        self.getSubBankDone = true;

                        if (typeof callback == 'function')
                            callback(data);
                    }
                }
                var query = {
                    BankID: _bankid
                };

                //呼叫 API
                self.CallAjax3rdAPI(self.setWebDataUrl('WS_GetSubBank', query), null, false, WS_GetSubBank_success, self.ajaxError_WS);
            }

            if (!self.isWSMode) {
                self.apiSubBankList = subBankList2;

                if (typeof callback == 'function')
                    callback(subBankList2);
            }

        },
        getPredictDate: function (device, tax_status) {
            var self = this;
            if ((!device || device == ''))
                device = '3';

            if ((self.age == null || (self.age === '')) || (!tax_status || tax_status == ''))
                return { type: -1, day: -1 };
            else {
                if (tax_status == "1" && self.age >= 20) {
                    if (device == '1') {
                        return { type: 1, day: 1 }//數位開戶(晶片金融卡)
                    }
                    else if (device == '2') {
                        return { type: 2, day: 1 }//數位開戶(網銀)
                    }
                    else if (device == '3') {
                        return { type: 5, day: 14 }//線上填表
                    }
                }
                else if (tax_status == "1" && self.age < 20) {

                    if (device == '1') {
                        return { type: 3, day: 7 }//線上填表(晶片金融卡)
                    } else if (device == '2') {
                        return { type: 4, day: 7 }//線上填表(網銀)
                    } else if (device == '3') {
                        return { type: 6, day: 14 }//線上填表
                    }
                }
            }
        },
        getCuryData: function (type) {
            var self = this;
            var obj = {
                value: "-1",
                name: "--"
            }
            return self.currencyTypeList.filter(function (item, index) { return item.value == type })[0] || obj;
        },
        GoNext: function () {
            var self = this;
            var permid = self.subStepListOrigin.filter(function (i) { return i.permission == true && i.id > self.pageID })[0].id;
            window.location.href = self.StepUrl(permid);
        },
        GoBack: function () {
            var self = this;
            var permid = self.subStepListOrigin.filter(function (i) { return i.permission == true && i.id < self.pageID });
            window.location.href = self.StepUrl(permid[permid.length - 1].id);
        },
        downloadfile: function (type) {
            var self = this;
            var retMsg = "親愛的客戶您好！<br>系統正在為您產生開戶申請書，本過程需要1- 2分鐘請您耐心等待，過程中請不要離開或關閉本網頁以免影響您的開戶申請時間。若不慎關閉，請您返回本公司官網/申請開戶/繼續開戶，取得簡訊驗證碼後，重新進行 < 選擇寄送方式 > 流程。";
            var options = {
                Center: true,
                Fixed: true,
                directionAnimation: "bottom",
                showLoadingbar: true,
                clicktoRemove: false,
                showCoverbg: true,
                showRemoveBtn: false,
                autoHide: false,
                CoverBgOpacity: 0.7,
                //CoverBgColor: "rgb(0, 0, 0)",
                customclass: ["alert", "top"],
                html: "<div class='textContainer'>" + retMsg + "</div>",
            };
            ProccessMsg = showProccessMsg(options, false, null, []);


            var apiName = '', downLoadUrl = '';

            switch (type) {
                case 'download':
                    apiName = 'getDownload.ashx';
                    downLoadUrl = 'open_download.aspx';
                    break;
                case 'download_signed':
                    apiName = 'getDownloadSigned.ashx';
                    downLoadUrl = 'open_download_signed.aspx';
                    break;
                default:
            }

            var getDownload_success = function (data) {
                if (self.successPostCallback(data)) {
                    if (ProccessMsg)
                        ProccessMsg.Hide();

                    var a = document.createElement('a');
                    //a.target = '_blank';
                    a.href = downLoadUrl;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }
            }

            var body = {
                id: self.openID
            };

            //呼叫 API
            self.CallAjax3rdAPI(self.setUrl(apiName), body, true, getDownload_success, self.ajaxError);

            //var xhr = new XMLHttpRequest();
            //xhr.open("GET", url, true);
            //xhr.responseType = "blob";
            //xhr.onload = function () {
            //    if (this.status == 200) {
            //        var blob = this.response;
            //        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            //            window.navigator.msSaveOrOpenBlob(blob, self.openID + ".pdf");
            //            if (ProccessMsg)
            //                ProccessMsg.Hide();
            //        } else {

            //            var reader = new FileReader();
            //            reader.readAsDataURL(blob);
            //            reader.onload = function (e) {
            //                var a = document.createElement('a');
            //                a.download = self.openID + ".pdf";
            //                a.href = e.target.result;
            //                document.body.appendChild(a);
            //                a.click();
            //                document.body.removeChild(a);
            //                if (ProccessMsg)
            //                    ProccessMsg.Hide();
            //            }
            //        }
            //    }
            //};
            //xhr.send();
        },
        getInfo1: function () {
            var retMsg = "依法令規定，金融機構於辦理未成年人事務時，應由父母加蓋雙方印鑑，或父母雙方同意由一方代表蓋印留存者，亦得僅留存一方印鑑。";
            var options = {
                Center: true,
                Fixed: true,
                directionAnimation: "bottom",
                showLoadingbar: false,
                clicktoRemove: true,
                showCoverbg: true,
                showRemoveBtn: false,
                autoHide: false,
                CoverBgOpacity: 0.7,
                //CoverBgColor: "rgb(0, 0, 0)",
                customclass: ["alert", "top"],
                html: "<div class='textContainer'>" + retMsg + "</div>",
            };
            ProccessMsg = showProccessMsg(options, false, null, []);
        },
        getDaysOfMonth: function (yyyy, mm) {

            var self = this;
            var startDate = 1, data = [];
            while (startDate <= (new Date(yyyy, mm, 0)).getDate()) {
                data.push(self.formattedNumber(startDate++, 2));
            }
            return data;

        }
    },
    filters: {
        formatDate: function (str) {
            //Filter only numbers from the input
            var cleaned = ('' + str).replace(/\D/g, '');

            //Check if the input is of correct length
            var match = cleaned.match(/^(\d{4})(\d{2})(\d{2})$/);

            if (match) {
                return match[1] + '/' + match[2] + '/' + match[3]
            };

            return null
        },
        formatTime: function (str) {
            //Filter only numbers from the input
            var cleaned = ('' + str).replace(/\D/g, '');

            //Check if the input is of correct length
            var match = cleaned.match(/^(\d{2})(\d{2})(\d{2})$/);

            if (match) {
                return match[1] + ':' + match[2] + ':' + match[3]
            };

            return null
        },
        formatMobileNumber: function (str) {
            //Filter only numbers from the input
            var cleaned = ('' + str).replace(/\D/g, '');

            //Check if the input is of correct length
            var match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/);

            if (match) {
                return match[1] + '-' + match[2] + '-' + match[3]
            };

            return null
        },
        removeEnSmallLetter: function (str) {
            //Filter only numbers from the input
            var cleaned = ('' + str).replace(/\d/g, '');

            return cleaned
        },
    }
});

var Main_Mixin = {
    data: function () {
        return {
        }
    },
    beforeCreate: function () {
        // 實體初始化。
        var self = this;
    },
    created: function () {
        // 網頁載入完成，先執行的 function 內容寫在這(像 jQ 的 .ready())
        var self = this;
        self.screenWidth = GetWindowWidth();
        self.csrf = csrf;
    },
    beforeMount: function () {
        var self = this;

    },
    mounted: function () {
        var self = this;
        window.addEventListener('resize', function () {
            self.screenWidth = GetWindowWidth();
        });

    },
    updated: function () {
    },
    watch: {
        screenWidth: function (new_val, old_val) {
            var self = this;

        },
        csrf: function (new_val, old_val) {
            var self = this;
            if (new_val != "") {
                if (self.pageID && self.pageID != '') {
                    self.getUserData();
                }

            }
        },
    },
    methods: {

    },
    computed: {
        //計算屬性

    },
}


var Auth_index_Mixin = {}, Auth_memberlogin_Mixin = {}, Auth_otplogin_Mixin = {}, Auth_unmemberlogin_Mixin = {}, Quiz_Mixin = {}, Trial_Mixin = {}, Trial_Overview_Mixin = {}, Member_Mixin = {}, Member_Apply_Mixin = {}, Member_Periodic_Mixin = {}, Member_Content_Inquiry_Mixin = {}, Member_Commission_Inquiry_Mixin = {}, Member_Rebalance_Mixin = {}, Member_Cancele_Mixin = {}, Contract1_Mixin = {}, Contract2_Mixin = {}, Trial_Allocation_Mixin = {}, Trial_Performance_Mixin = {};

