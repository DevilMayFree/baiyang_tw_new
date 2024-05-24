
var g_ly = ["里", "村"],
    g_road = ["路", "街", "大道", "-"];
var _VueConfig = {
    data: function () {
        return {
            //for debug=false 約銀行資料是否抓--
            isWSMode:true,
            Api: {     
                webdata_domain: webApiData,
                baseurlPath: apiRoot,
            },
            FCBATM_ServiceInstall: "https://eatm.firstbank.com.tw/lio1000s8",
            ageListBg: [
                {
                    id: 0,
                    text: "--",
                },
                {
                    id: 1,
                    text: "65 歲(含)以上",
                },
                {
                    id: 2,
                    text: "50 歲 ~ 64 歲",
                },
                {
                    id: 3,
                    text: "30 歲 ~ 49 歲",
                },
                {
                    id: 4,
                    text: "30 歲(不含)以下",
                }
            ],
            kycTypeData: [
                {
                    type: 1,
                    scoreMin: 0,
                    scoreMax: 10,
                    name: "保守型",
                    level: "RR1~RR2",
                    description: "風險承受度極低期望避免投資本金損失",
                },
                {
                    type: 2,
                    scoreMin: 11,
                    scoreMax: 16,
                    name: "穩健型",
                    level: "RR1~RR4",
                    description: "願承受少量之風險以追求合理投資報酬",
                },
                {
                    type: 3,
                    scoreMin: 17,
                    scoreMax: null,
                    name: "積極型",
                    level: "RR1~RR5",
                    description: "願承受相當程度之風險以追求較高投資報酬",
                }
            ],
            Router: {
                open: {
                    account: {
                        name: "指定帳戶資料",
                        path: "open_account.aspx"
                    },
                    apply: {
                        name: "申請開戶",
                        path: "open_apply.aspx"
                    },
                    authorize: {
                        name: "授權核印",
                        path: "open_authorize.aspx"
                    },
                    background: {
                        name: "背景資料",
                        path: "open_background.aspx"
                    },
                    basic: {
                        name: "基本資料",
                        path: "open_basic.aspx"
                    },
                    completion: {
                        name: "申請完成",
                        path: "open_completion.aspx"
                    },
                    confirm: {
                        name: "資料確認",
                        path: "open_confirm.aspx"
                    },
                    continue: {
                        name: "繼續開戶",
                        path: "open_continue.aspx"
                    },
                    idphoto: {
                        name: "證件印鑑上傳",
                        path: "open_idphoto.aspx"
                    },
                    introduction: {
                        name: "開戶介紹",
                        path: "open_introduction.aspx"
                    },
                    kyc: {
                        name: "投資風險屬性",
                        path: "open_kyc.aspx"
                    },
                    lawrepresentative: {
                        name: "法代資料",
                        path: "open_lawrepresentative.aspx"
                    },
                    schedule: {
                        name: "開戶進度查詢",
                        path: "open_schedule.aspx"
                    },
                    sendway: {
                        name: "選擇寄送方式",
                        path: "open_sendway.aspx"
                    },
                    sign: {
                        name: "文件簽署",
                        path: "open_sign.aspx"
                    },
                    terms: {
                        name: "閱讀條款",
                        path: "open_terms.aspx"
                    }
                }
            },//路由設定     
            emptyvalue_text: "--",//ex: string value undefined or empty
            timeoutdata_text: "無法取得資料",//ex:API Timeout
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
};