//loading transition
var __loading_transition_components = {
    props: ["value", "_prewrap", "_isloading", "_margincenter", "_color", "_contentsize", "_htmltype"],
    template: '<transition name="loading-slide-fade" mode="out-in" :duration="{ enter: 300, leave: 300 }" >\
               <div class="msg_loadingbar small" v-bind:class="[{nomargin:!_margincenter},{contentsize:_contentsize == true},_color]" key="loading1" v-if="_isloading == true"></div>\
               <span class="loadingvalue" v-bind:class="{prewrap:_prewrap}" v-else-if="(value == \'\' || value == undefined) && !_isloading"  key="loading2">--</span>\
               <span class="loadingvalue" v-bind:class="{prewrap:_prewrap}" v-else-if="(value != \'\' && value != undefined) && !_isloading && _htmltype == 1" v-html="value" key="loading3"></span>\
               <span class="loadingvalue" v-bind:class="{prewrap:_prewrap}" v-else key="loading4">${ value }</span>\
                                        </transition>',
    delimiters: ['${', '}'],
    data: function () {
        return {
        }
    },
    created: function () {
        // 網頁載入完成，先執行的 function 內容寫在這(像 jQ 的 .ready())
        var self = this;
    },
    mounted: function () {
        var self = this;

    },
    methods: {

    }
};

//申請開戶 submenu
var __submenu_components = {
    props: ["ignoreid"],
    template: '<div>\
                   <div class="subMenulist" data-aos="show" data-aos-anchor-placement="center-bottom">\
                       <div class="item" v-for="(item,index) in menuData2">\
                           <a :href="item.url"><span>${item.name}</span></a>\
                       </div>\
                   </div >\
                   <div class="subMenulist-select">\
                       <div class="selecttype_custom white input_textbox_pad">\
                           <select id="submebu" name="submebu" @change="onChange($event)">\
                               <option :selected="item.id == ignoreid" :value="item.url"  v-for="(item,index) in menuData1">${item.name}</option>\
                           </select>\
                           <span class="border"></span>\
                       </div>\
                   </div>\
               </div>',
    delimiters: ['${', '}'],
    data: function () {
        return {
            menulist: [
                {
                    id: 0,
                    name: "申請開戶"
                },
                {
                    id: 1,
                    name: "開戶介紹"
                },
                {
                    id: 2,
                    name: "開戶進度查詢"
                },
                {
                    id: 3,
                    name: "繼續開戶"
                }]
        }
    },
    computed: {
        menuData1: function () {
            var self = this;

            return self.menulist.map(function (obj) {
                var o = Object.assign({}, obj);
                switch (obj.id) {
                    case 0:
                        o.url = self.Router.open.apply.path;
                        break;
                    case 1:
                        o.url = self.Router.open.introduction.path;
                        break;
                    case 2:
                        o.url = self.Router.open.schedule.path;
                        break;
                    case 3:
                        o.url = self.Router.open.continue.path;
                        break;
                    default:
                }
                return o;
            })
        },//取得API URL DOMAIN
        menuData2: function () {
            var self = this;
            return self.menuData1.filter(function (item, index) { return item.id != self.ignoreid });
        },//取得API URL DOMAIN
    },
    mounted: function () {
        var self = this;

    },
    methods: {
        onChange: function (event) {
            var self = this;
            window.location.href = event.target.value;
        }
    }
};

//申請開戶 步驟
var __step_components = {
    props: ["mainstep", "substep", "steped", 'substeplistorigin','isshutdown'],
    template: '<div class="wrapContent">\
                   <div class= "step-wrapper">\
                       <div class="" v-bind:class="[{ \'mainStepFlexbox_Outer\': mainstep == 0 },{ \'mainStepFlexbox_Outer-step2\': mainstep == 1 },{ \'mainStepFlexbox_Outer-step3\': mainstep == 2 }]" data-aos="fade-up" data-aos-easing="ease-out-new1" data-aos-anchor-placement="center-bottom">\
                           <div class="step_line"></div>\
                           <div class="step_flexbox">\
                               <div class="step_each" v-bind:class="[{ \'hoverstyle\': mainstep > item.id },{ \'passed\': mainstep > item.id },{ \'current\': mainstep == item.id }]" v-for="(item,index) in mainStepListOrigin">\
                                   <div class="ball" v-bind:class="{default:isshutdown}" v-on:click="item.maxSubStep > substep ? null : mainGo(item.minSubStep,item.maxSubStep)"><span class="number">${item.name}</span></div>\
                               </div>\
                           </div>\
                       </div>\
                       <div class="subStepFlexbox_Outer" data-aos="fade-up" data-aos-easing="ease-out-new1" data-aos-delay="400" data-aos-anchor-placement="center-bottom">\
                           <div class="step_flexbox">\
                               <div class="step_each"  v-if="substeplistorigin.filter(function (i) { return i.id == item.id })[0].permission == true" v-bind:class="[{ \'hoverstyle\': substep >= item.id },{ \'passed\': substep > item.id },{ \'current\': substep == item.id },{ \'disabled\': substeplistorigin.filter(function (i) { return i.id == item.id })[0].permission == false }]" v-for="(item,index) in subStepList">\
                                   <div class="ball" v-bind:class="{default:isshutdown}" v-on:click="item.id > substep || substeplistorigin.filter(function (i) { return i.id == item.id })[0].permission == false ? null : subGo(item.id)"><span class="text">${item.name}</span></div>\
                               </div>\
                           </div>\
                           <div class="step_selectbox">\
                               <div class="arrowbox">\
                                   <a class="btn-arrowleft" v-on:click="back(parseInt(substep))"></a>\
                               </div>\
                               <div class="selectbox">\
                                   <div class="selecttype_custom input_textbox_pad orange">\
                                       <select id="substep_select" name="substep_select" @change="goChange">\
                                           <option v-if="substeplistorigin.filter(function (i) { return i.id == item.id })[0].permission == true" :disabled="item.id > substep" :selected="substep == item.id" :value="substep >= item.id ? item.id : null" v-for="(item,index) in subStepListOrigin">${item.name}</option>\
                                       </select>\
                                       <span class="border"></span>\
                                   </div>\
                               </div>\
                               <div class="arrowbox">\
                               </div>\
                           </div>\
                       </div>\
                    </div>\
                </div>',
    delimiters: ['${', '}'],
    data: function () {
        return {
            age: 0,
        }
    },
    computed: {
        subStepList: function () {
            var self = this;

            return self.substeplistorigin.filter(function (item, index) { return item.mainid == self.mainstep });
        }
    },
    mounted: function () {
        var self = this;
    },
    methods: {
        mainGo: function (minid,maxid) {
            var self = this;
            if (self.isshutdown)
                return;

            var data = self.$root.subStepListOrigin.filter(function (i) { return i.id >= minid && i.id <= maxid && i.permission == true});
            window.location.href = self.StepUrl(data[0].id);
        },
        subGo: function (id) {
            var self = this;
            if (self.isshutdown)
                return;

            window.location.href = self.StepUrl(id);
        },
        goChange: function (event) {
            var self = this;
            if (self.isshutdown)
                return;

            var value = event.target.value;
            if (value != false) {
                window.location.href = self.StepUrl(value);
            }
        },
        back: function (_step) {
            var self = this;
            if (self.isshutdown)
                return;

            var permid = self.substeplistorigin.filter(function (i) { return i.permission == true && i.id < _step });
            window.location.href = self.StepUrl(permid[permid.length - 1].id);
        }
    },
    watch: {
    },
};

//銀行選擇 popup
var __bank_popupbox_components = {
    props: ["apibanklist", 'getbankdone', 'open'],
    template: '<div id="bank_popupbox" class="Popup-box Popup-default3">\
        <div class="pop-container">\
            <a class="Popup-close"></a>\
            <div class="popup-contentbox">\
                <div class="searchflex">\
                    <div class="inputbox">\
                        <div class="input-style input_textbox_pad">\
                            <input type="text" class="greenborder" v-model="searchvalue" />\
                            <span class="border"></span>\
                        </div>\
                    </div>\
                    <div class="btnbox">\
                        <a class="btn-style2-type1" v-on:click="setFilter1">搜尋銀行</a>\
                </div>\
            </div>\
            <div class="athnc-flexbox" v-if="showFilter">\
                <div class="titlebox">可核印方式(可複選)</div>\
                <div class="valuebox">\
                    <div class="item">\
                        <label class="checkboxtype_custom samll1" for="way1">\
                            <input type="checkbox" id="way1" name="way" value="1" v-model="currentFilter2">\
                                <span class="checkmark"></span>\
                                <span class="label">網路銀行</span>\
                                    </label>\
                                </div>\
                        <div class="item">\
                            <label class="checkboxtype_custom samll1" for="way2">\
                                <input type="checkbox" id="way2" name="way" value="2" v-model="currentFilter2">\
                                    <span class="checkmark"></span>\
                                    <span class="label">晶片金融卡</span>\
                                    </label>\
                                </div>\
                            <div class="item">\
                                <label class="checkboxtype_custom samll1" for="way3">\
                                    <input type="checkbox" id="way3" name="way" value="3" v-model="currentFilter2">\
                                        <span class="checkmark"></span>\
                                        <span class="label">書面核印</span>\
                                    </label>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="bankOptionsOuter" v-if="apibanklist != null">\
                            <div class="bankOptionsInner">\
                                <transition-group class="bOFlexbox" name="projects" tag="div">\
                                    <div class="item" v-if="((currentFilter2.indexOf(\'1\') > -1 && item.Netbank_Sign == \'Y\') || \
                                                             (currentFilter2.indexOf(\'2\') > -1 && item.Online_Sign == \'Y\') || \
                                                             (currentFilter2.indexOf(\'3\') > -1 && item.Paper_Sign == \'Y\') || \
                                                              currentFilter2.length === 0) \
                                                             && ((item.BankID + \' \' + item.BankName).indexOf(currentFilter1) > -1 || (currentFilter1 === \'\'))" \
                                                             v-bind:key="item.BankID" v-for="(item,index) in apibanklist">\
                                        <div class="inner"><a v-on:click="chooseBank(item.BankID)" v-bind:class="{active:item.BankID == tempBankID}"><span class="code">${ item.BankID  }</span><span class="name">${ item.BankName }</span></a></div>\
                            </div>\
                            </transition-group>\
                    </div>\
                </div>\
                <div class="buttonContainer-center">\
                    <a class="btn-style2-green-type2" v-on:click="$emit(\'selectbank\',tempBankID)"><span>確定</span></a>\
            </div>\
                    </div>\
                </div>\
            </div>',
    delimiters: ['${', '}'],
    data: function () {
        return {
            tempBankID: "",
            searchvalue: "",
            currentFilter1: "",
            currentFilter2: [],
            showFilter:true
        }
    },
    mounted: function () {
        var self = this;

        $bank_popupbox = $("#bank_popupbox");
        _bank_popup = $bank_popupbox.BlockUI({ PopupCover_Zindex: 9004 });
    },
    methods: {
        setFilter1: function () {
            var self = this;
            self.currentFilter1 = self.searchvalue;
        },
        chooseBank: function (bankid) {
            var self = this;
            self.tempBankID = bankid;

        }
    },
    watch: {
        searchvalue: function (new_val, old_val) {
            var self = this;
            self.currentFilter1 = new_val;
        },
        getbankdone: function (new_val, old_val) {
            var self = this;
        },
        open: function (new_val, old_val) {
            var self = this;
            self.tempBankID = self.$root.tempBank_ID;
            self.showFilter = self.$root.tempshowFilter;
            if (new_val)
                _bank_popup.Show();
        },
    }
};

var __remindw_popupbox_components = {
    props: [],
    template: ' <div id="remindW_popupbox" class="Popup-box Popup-default2">\
        <div class="pop-container">\
            <a class="Popup-close"></a>\
            <div class="popup-contentbox">\
                <div class="popup-title">提醒</div>\
                <div class="popup-description">依您所填資料，您已於本公司申請開戶，歡迎來電0800-005-908由專人確認交易功能啟用狀態。</div>\
                <div class="buttonContainer-center">\
                    <a class="btn-style2-orange" v-on:click="$emit(\'gotit\')"><span>我知道了</span></a>\
            </div>\
                    </div>\
                </div>\
            </div>',
    delimiters: ['${', '}'],
    data: function () {
        return {
            tempBankID: "",
            searchvalue: "",
            currentFilter1: "",
            currentFilter2: [],
        }
    },
    mounted: function () {
        var self = this;

        $remindW_popupbox = $("#remindW_popupbox");
        _remindW_popup = $remindW_popupbox.BlockUI();
    },
    methods: {
    },
    watch: {
    }
};

var __remindn_popupbox_components = {
    props: [],
    template: '<div id="remindN_popupbox" class="Popup-box Popup-default2">\
        <div class="pop-container">\
            <a class="Popup-close"></a>\
            <div class="popup-contentbox">\
                <div class="popup-title">提醒</div>\
                <div class="popup-description">依您所填資料，您已於本公司申請開戶，歡迎查詢開戶進度、交易功能啟用狀態。</div>\
                <div class="buttonContainer-center">\
                    <a class="btn-style2-orange" :href="Router.open.schedule.path"><span>查詢開戶進度</span></a>\
            </div>\
                    </div>\
                </div>\
            </div>',
    delimiters: ['${', '}'],
    data: function () {
        return {
            tempBankID: "",
            searchvalue: "",
            currentFilter1: "",
            currentFilter2: [],
        }
    },
    mounted: function () {
        var self = this;
        $remindN_popupbox = $("#remindN_popupbox");
        _remindN_popup = $remindN_popupbox.BlockUI();
    },
    methods: {
    },
    watch: {
    }
};

var __remindusingmobile_popupbox_components = {
    props: [],
    template: '<div id="remindUsingMobile_popupbox" class="Popup-box Popup-default2">\
        <div class="pop-container">\
            <a class="Popup-close"></a>\
            <div class="popup-contentbox">\
                <div class="popup-title">提醒</div>\
                <div class="popup-description">您目前使用為行動裝置（手機／平板），若要使用晶片金融卡核印，請您使用電腦來進行申請開戶。</div>\
                <div class="buttonContainer-center">\
                    <a class="btn-style2-orange"  v-on:click="$emit(\'checkmobile\')"><span>我知道了</span></a>\
            </div>\
                    </div>\
                </div>\
            </div>',
    delimiters: ['${', '}'],
    data: function () {
        return {
            tempBankID: "",
            searchvalue: "",
            currentFilter1: "",
            currentFilter2: [],
        }
    },
    mounted: function () {
        var self = this;
        $remindUsingMobile_popupbox = $("#remindUsingMobile_popupbox");
        _remindUsingMobile_popup = $remindUsingMobile_popupbox.BlockUI();
    },
    methods: {
    },
    watch: {
    }
};

//密碼輸入框
var __passwordinput_components = {
    props: ["value", "placeholder", "_class"],
    template: '<div class="eyePassword_outer">\
                   <span class="btn-eye" v-bind:class="{active:state_pwd}" v-on:click="showPWD"></span>\
                   <input ref="member_password" :type="state_pwd ? \'text\' : \'password\'" id="member_pwd" :class="_class" maxlength="10" :placeholder="placeholder" v-on:input="update" :value="value" />\
               </div>',
    delimiters: ['${', '}'],
    data: function () {
        return {
            state_pwd: false
        }
    },
    mounted: function () {
    },
    watch: {
    },
    methods: {
        update: function (e) {
            var self = this;

            self.$emit('input', e.target.value);
        },
        showPWD: function (e) {
            var self = this;

            self.state_pwd = !self.state_pwd;

        },
    }
};






