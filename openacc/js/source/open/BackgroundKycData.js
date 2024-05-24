var background = {
    result: 1,
    question: [
        {
            id:"q1",
            title: "年齡層",
            titleNoWrap: false,
            ismulti: false,
            must: false,
            data: {
                //radio: [
                //    { text: "70歲(含)以上", value: 1 }
                //],
                text: false,
                none: false,
                other: false
            }
        },
        {
            id: "q2",
            title: "在職狀態",
            titleNoWrap: false,
            ismulti: false,
            must: true,
            data: {
                radio: [
                    { text: "在職", value: 1 },
                    { text: "未在職", value: 2 }
                ],
                text: false,
                none: false,
                other: false
            }        
        },
        {
            id: "q3",
            title: "行業類別",
            titleNoWrap: false,
            ismulti: false,
            must: true,
            data: {
                select: [
                    { text: "建築營造、景觀設計", value: 1 },
                    { text: "科技業", value: 2 },
                    { text: "其他製造業", value: 4 },
                    { text: "食品業 ", value: 5 },
                    { text: "人力仲介業", value: 6 },
                    { text: "其他批發零售業", value: 32 },
                    { text: "大使館、領事館", value: 7 },
                    { text: "郵政電信業", value: 8 },
                    { text: "金融及保險相關產業", value: 9 },
                    { text: "軍人", value: 10 },
                    { text: "醫院診所", value: 11 },
                    { text: "博弈產業", value: 12 },
                    { text: "會計服務業、律師事務服務業", value: 13 },
                    { text: "住宿、餐飲、旅遊業", value: 14 },
                    { text: "教育業", value: 15 },
                    { text: "電子資訊業", value: 16 },
                    { text: "無實體店面零售業", value: 17 },
                    { text: "紡織業、農、畜產品加工業", value: 18 },
                    { text: "廢棄物清除或處理業", value: 19 },
                    { text: "政府機關及公營事業", value: 20 },
                    { text: "不動產經紀業", value: 21 },
                    { text: "軍火業、軍用精密設備製造業", value: 22 },
                    { text: "航空器、船舶買賣業", value: 23 },
                    { text: "社會福利慈善類財團法人、宗教團體及政治團體", value: 24 },
                    { text: "珠寶及貴金屬製品批發、零售業與藝術品/古董買賣業", value: 25 },
                    { text: "旅運、貨運倉儲業", value: 26 },
                    { text: "煙草供應銷售業", value: 27 },
                    { text: "船舶運送業、船舶租賃業及船用燃油產業", value: 38 },
                    { text: "報關代理", value: 39 },
                    { text: "商品供應商", value: 40 },
                    { text: "民間公證人、地政士事務服務業、管理顧問業、其他法律服務業", value: 28 },
                    { text: "當鋪業、貨幣兌換商及其他民間融資業", value: 29 },
                    { text: "線上遊戲事業、第三方支付服務業", value: 36 },
                    { text: "汽車買賣業（含二手車買賣）", value: 37 },
                    { text: "虛擬通貨平台及交易業務事業", value: 3 },
                    { text: "不動產開發業、租售業、管理業、估價業及其他不動產業", value: 30 },
                    { text: "特殊娛樂業(如：夜店、酒吧等)", value: 31 },
                    { text: "自由業（須說明）", value: 33 },
                    { text: "退休/家管", value: 34 },
                    { text: "學生/學齡前", value: 35 }
                ],
                text: false,
                none: true,
                other: true,
                txt2:''
            }
        },
        {
            id: "q4",
            title: "目前任職機構",
            titleNoWrap: false,
            ismulti: false,
            must: true,
            data: {
                text: true,
                none: true,
                other: false
            }
        },
        {
            id: "q5",
            title: "職業/職稱",
            titleNoWrap: false,
            ismulti: false,
            must: true,
            data: {
                select: [
                    { text: "公司負責人(含董監經理人)", value: 1 },
                    { text: "高階管理人員", value: 6 },
                    { text: "一般主管", value: 10 },
                    { text: "一般職員", value: 13 },
                    { text: "業務人員", value: 16 },
                    { text: "船長/大副/船員/引水人", value: 2 },
                    { text: "飛行駕駛", value: 7 },
                    { text: "空服員", value: 11 },
                    { text: "工程師", value: 14 },
                    { text: "執業律師", value: 17 },
                    { text: "保全/警衛/司機/管理及清潔員", value: 3 },
                    { text: "民間公證人", value: 8 },
                    { text: "執業地政士", value: 12 },
                    { text: "執業會計師", value: 15 },
                    { text: "臨時/約聘人員", value: 18 },
                    { text: "學生/學齡前", value: 4 },
                    { text: "退休/家管", value: 5 },   
                    { text: "記帳士", value: 9 }
                ],
                text: false,
                none: true,
                other: true
            }
        },
        {
            id: "q6",
            title: "教育程度",
            titleNoWrap: false,
            ismulti: false,
            must: true,
            data: {
                select: [
                    { text: "國中(含)以下)", value: 1 },
                    { text: "高中(高職)", value: 2 },
                    { text: "大學/專科", value: 3 },
                    { text: "碩士以上", value: 4 }
                ],
                text: false,
                none: false,
                other: false
            }
        },
        {
            id: "q7",
            title: "是否具有全民健保重大傷病證明／身心障礙證明資格者",
            titleNoWrap: true,
            ismulti: false,
            must: true,
            data: {
                radio: [
                    { text: "是", value: 1 },
                    { text: "否", value: 2 }
                ],
                text: false,
                none: false,
                other: false
            }
        },
        {
            id: "q8",
            title: "年收入",
            titleNoWrap: false,
            ismulti: false,
            must: true,
            data: {
                radio: [
                    { text: "個人", value: 1 },
                    { text: "家庭", value: 2 }
                ],
                select: [
                    { text: "50萬(含)以下", value: 1 },
                    { text: "50萬 -100萬(含)", value: 2 },
                    { text: "100萬-300萬(含)", value: 3 },
                    { text: "300萬-500萬(含)", value: 4 },
                    { text: "500萬以上", value: 5 }
                ],
                text: false,
                none: false,
                other: false
            }
        },
        {
            id: "q9",
            title: "淨資產",
            titleNoWrap: false,
            ismulti: false,
            must: true,
            data: {
                radio: [
                    { text: "個人", value: 1 },
                    { text: "家庭", value: 2 }
                ],
                select: [
                    { text: "250萬(含)以下", value: 1 },
                    { text: "250萬-500萬(含)", value: 2 },
                    { text: "500萬-1000萬(含)", value: 3 },
                    { text: "1000萬-3000萬(含)", value: 4 },
                    { text: "3000萬元以上", value: 5 }
                ],
                text: false,
                none: false,
                other: false
            }
        },
        {
            id: "q10",
            title: "預期交易金額",
            titleNoWrap: false,
            ismulti: false,
            must: true,
            data: {
                select: [
                    { text: "50萬(含)以下", value: 1 },
                    { text: "50萬-100萬(含)", value: 2 },
                    { text: "100萬-300萬(含)", value: 3 },
                    { text: "300萬-500萬(含)", value: 4 },
                    { text: "500萬-1000萬(含)", value: 5 },
                    { text: "1000萬-5000萬(含)", value: 6 },
                    { text: "5000萬-1億(含)", value: 7 },
                    { text: "1億以上", value: 8 }
                ],
                text: false,
                none: false,
                other: false
            }
        },
        {
            id: "q11",
            title: "預期投資基金",
            titleNoWrap: false,
            ismulti:true,
            must: true,
            data: {
                checkbox: [
                    { text: "股票型", value: 1 },
                    { text: "債券型", value: 2 },
                    { text: "貨幣市場型 ", value: 3 },
                    { text: "平衡型", value: 4 },
                    { text: "ETF基金", value: 5 },
                    { text: "不動產證券", value: 6 }
                ],
                text: false,
                none: false,
                other: false
            }
        },
        {
            id: "q12",
            title: "投資資金來源",
            titleNoWrap: false,
            ismulti: true,
            must: true,
            data: {
                checkbox: [
                    { text: "薪資收入", value: 1 },
                    { text: "經營事業收入", value: 2 },
                    { text: "租賃收入 ", value: 3 },
                    { text: "投資/儲蓄收益", value: 4 },
                    { text: "買賣不動產", value: 5 },
                    { text: "退休金", value: 6 },
                    { text: "其他", value: -1, other: true }
                ],
                text: false,
                none: false,
                other: true
            }
        },
        {
            id: "q13",
            title: "投資知識/資訊",
            titleNoWrap: false,
            ismulti: true,
            must: true,
            data: {
                checkbox: [
                    { text: "金融機構", value: 1 },
                    { text: "綜合報紙", value: 2 },
                    { text: "財經專業報紙 ", value: 3 },
                    { text: "一般雜誌", value: 4 },
                    { text: "財經雜誌", value: 5 },
                    { text: "網路", value: 6 },
                    { text: "廣播", value: 7 },
                    { text: "電視", value: 8 },
                    { text: "進修/證照檢定", value: 9 },
                    { text: "其他", value: -1, other:true }
                ],
                text: false,
                none: false,
                other: true
            }
        },
        {
            id: "q14",
            title: "開戶原因",
            titleNoWrap: false,
            ismulti: true,
            must: true,
            data: {
                checkbox: [
                    { text: "親友介紹", value: 1 },
                    { text: "資金調度", value: 2 },
                    { text: "理財規劃 ", value: 3 },
                    { text: "繼承", value: 4 },
                    { text: "其他", value: -1, other: true }
                ],
                text: false,
                none: false,
                other: true
            }
        }
    ]
};

var kyc = {
    result: 1,
    question: [
        {
            id: "q1",
            title: "投資目的",
            titleNoWrap: false,
            ismulti: true,
            must: true,
            data: {
                checkbox: [
                    { text: "退休養老金", value: 1 },
                    { text: "資產保值", value: 2 },
                    { text: "結婚/置產/教育基金 ", value: 3 },
                    { text: "追求資產增值", value: 4 }
                ],
                text: false,
                none: false,
                other: false

            }
        },
        {
            id: "q2",
            title: "主要投資工具",
            titleNoWrap: false,
            ismulti: true,
            must: true,
            data: {
                checkbox: [
                    { text: "存款、儲蓄險、貨幣型基金等保守型商品", value: 1, whole:true},
                    { text: "債券、債券型基金等穩健型商品", value: 2, whole: true},
                    { text: "股票、高成長型基金等積極型商品", value: 3, whole: true},
                    { text: "期貨、選擇權等衍生性商品", value: 4, whole: true}
                ],
                text: false,
                none: false,
                other: false
            }
        },
        {
            id: "q3",
            title: "投資經驗",
            titleNoWrap: false,
            ismulti: false,
            must: true,
            data: {
                select: [
                    { text: "1年以下", value: 1 },
                    { text: "1年以上未滿3年", value: 2 },
                    { text: "3年以上未滿5年", value: 3 },
                    { text: "5年以上", value: 4 }
                ],
                text: false,
                none: false,
                other: false
            }
        },
        {
            id: "q4",
            title: "可接受的波動度",
            titleNoWrap: false,
            ismulti: false,
            must: true,
            data: {
                select: [
                    { text: "正負5%以下", value: 1 },
                    { text: "正負6%至10%", value: 2 },
                    { text: "正負10%至20%", value: 3 },
                    { text: "正負20%以上", value: 4 }
                ],
                text: false,
                none: false,
                other: false
            }
        },
        {
            id: "q5",
            title: "投資盈虧對基本生活影響",
            titleNoWrap: false,
            ismulti: false,
            must: true,
            data: {
                select: [
                    { text: "高", value: 1 },
                    { text: "中高", value: 2 },
                    { text: "中低", value: 3 },
                    { text: "低", value: 4 }
                ],
                text: false,
                none: false,
                other: false
            }
        },
        {
            id: "q6",
            title: "預計的基金投資期間",
            titleNoWrap: false,
            ismulti: false,
            must: true,
            data: {
                select: [
                    { text: "1年以下", value: 1 },
                    { text: "1年以上未滿2年", value: 2 },
                    { text: "2年以上未滿3年", value: 3 },
                    { text: "3年以上", value: 4 }
                ],
                text: false,
                none: false,
                other: false
            }
        },
        {
            id: "q7",
            title: "投資資歷",
            titleNoWrap: false,
            ismulti: false,
            must: true,
            data: {
                select: [
                    { text: "沒有經驗：本人對任何投資皆沒有經驗或知識。", value: 1 },
                    { text: "經驗有限：本人對金融商品知識僅有些微的認識，且極少投資。", value: 2 },
                    { text: "有經驗：本人對金融商品知識有一般的認識與了解，且偶爾投資。", value: 3 },
                    { text: "經驗豐富：本人對金融商品知識有廣泛的認識與了解，且經常投資。", value: 4 }
                ],
                text: false,
                none: false,
                other: false
            }
        },
        {
            id: "q8",
            title: "其他評估",
            titleNoWrap: false,
            ismulti: false,
            must: true,
            text: "本項僅適用年齡65 歲(含)以上、教育程度國中畢業(含)以下、以及具有全民健保重大傷病證明／身心障礙證明資格者填寫；未具前項身分而誤勾者，視為無效",
            text2: "茲因您具上列身分，本公司建議您投資相對低風險承受度之基金類型。並請勾選確認﹕",
            data: {
                radio: [
                    { text: "確認本人之投資風險屬性應為 <strong>保守型</strong>（RR1~RR2）。", value: 1 },
                    { text: "請依投資風險屬性分析之結果，決定本人之投資風險屬性。", value: 2 }
                ],
                text: false,
                none: false,
                other: false
            }
        }
    ]
}

