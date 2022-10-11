(this["webpackJsonpable-pro-react-hook-js"]=this["webpackJsonpable-pro-react-hook-js"]||[]).push([[1],{124:function(e,t,n){"use strict";t.a={BLANK_LINK:"#"}},131:function(e,t,n){"use strict";var a=n(1),i=n(127),u=n(63),p=n(134),s=n(141),y=n(2),r=[{inputs:[{internalType:"address",name:"_priceOracle",type:"address"},{internalType:"address",name:"_timeProvider",type:"address"},{internalType:"address",name:"_treasury",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"userID",type:"uint256"},{indexed:!0,internalType:"uint256",name:"approvingUserID",type:"uint256"}],name:"ChangeWalletRequestApproved",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"userID",type:"uint256"},{indexed:!1,internalType:"address",name:"newWallet",type:"address"}],name:"ChangeWalletRequestCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"userID",type:"uint256"}],name:"ChangeWalletRequestDeleted",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"user",type:"uint256"},{indexed:!1,internalType:"uint256",name:"upline",type:"uint256"},{indexed:!1,internalType:"uint256",name:"generation",type:"uint256"}],name:"ClassicRefBonus",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"userID",type:"uint256"},{indexed:!0,internalType:"uint256",name:"fromID",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"MatrixPayout",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"by",type:"address"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"NewActivation",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"userID",type:"uint256"},{indexed:!0,internalType:"uint256",name:"level",type:"uint256"}],name:"NewLevel",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"by",type:"address"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"NewUpgrade",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"},{indexed:!0,internalType:"uint256",name:"referrer",type:"uint256"}],name:"NewUser",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"userID",type:"uint256"},{indexed:!0,internalType:"uint256",name:"referralID",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"PremiumReferralPayout",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"userID",type:"uint256"},{indexed:!1,internalType:"address",name:"newWallet",type:"address"}],name:"WalletChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Withdrawal",type:"event"},{inputs:[],name:"ACTIVATION_FEE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"ADAY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"C250GoldPool",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"CLASSIC_REFERRAL_PERCENTS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"INITIAL_SUPPLY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_SUPPLY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"PERCENTS_DIVIDER",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"UPGRADE_FEE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"USER_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"WITHDRAWAL_FEE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"accountIsInPremium",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"activate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"activationFeeInToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"activeGlobalDownlines",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"referralID",type:"uint256"},{internalType:"uint256",name:"uplineID",type:"uint256"},{internalType:"address",name:"addr",type:"address"}],name:"addAccount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"referralID",type:"uint256"},{internalType:"uint256",name:"uplineID",type:"uint256"},{internalType:"address",name:"addr",type:"address"},{internalType:"uint256",name:"no",type:"uint256"}],name:"addAndActivateMultipleAccounts",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"addUserAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"dollarAmount",type:"uint256"}],name:"amountFromDollar",outputs:[{internalType:"uint256",name:"tokenAmount",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"approveChangeWalletRequest",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"},{internalType:"address",name:"newWallet",type:"address"}],name:"changeWallet",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"changeWalletRequests",outputs:[{internalType:"address",name:"newWallet",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"claimPresale",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"classicIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"},{internalType:"address",name:"newWallet",type:"address"}],name:"creatChangeWalletRequest",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"factory",type:"address"},{internalType:"address",name:"_usdc",type:"address"},{internalType:"uint24",name:"fee",type:"uint24"}],name:"createUsdcPool",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"deleteChangeWalletRequest",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"getAccounts",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getActivationFeeInToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"level",type:"uint256"}],name:"getClassicConfig",outputs:[{internalType:"uint256",name:"directReferral",type:"uint256"},{internalType:"uint256",name:"exDirectReferral",type:"uint256"},{internalType:"uint256",name:"globalRequirement",type:"uint256"},{internalType:"uint256",name:"dailyEarning",type:"uint256"},{internalType:"uint256",name:"earningDays",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getClassicLevel",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"}],name:"getDirectLegs",outputs:[{internalType:"uint256",name:"left",type:"uint256"},{internalType:"uint256",name:"leftLevel",type:"uint256"},{internalType:"uint256",name:"right",type:"uint256"},{internalType:"uint256",name:"rightLevel",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getImpClassicLevel",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"},{internalType:"uint256",name:"part",type:"uint256"}],name:"getMatrixUpline",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"},{internalType:"uint256",name:"callCount",type:"uint256"}],name:"getPremiumSponsor",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getReferrals",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"uint256",name:"index",type:"uint256"}],name:"getRoleMember",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleMemberCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getUpgradeFeeInToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUser",outputs:[{internalType:"address",name:"addr",type:"address"},{internalType:"uint256",name:"downlines",type:"uint256"},{internalType:"uint256",name:"userClassicIndex",type:"uint256"},{internalType:"uint256",name:"globalDownlines",type:"uint256"},{internalType:"uint256",name:"classicLevel",type:"uint256"},{internalType:"uint256",name:"classicCheckpoint",type:"uint256"},{internalType:"uint256",name:"referralID",type:"uint256"},{internalType:"uint256",name:"premiumLevel",type:"uint256"},{internalType:"bool",name:"imported",type:"bool"},{internalType:"uint256",name:"importedReferralCount",type:"uint256"},{internalType:"uint256",name:"importClassicLevel",type:"uint256"},{internalType:"uint256",name:"outstandingBalance",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"referralID",type:"uint256"},{internalType:"uint256",name:"classicLevel",type:"uint256"},{internalType:"uint256",name:"premiumLevel",type:"uint256"},{internalType:"uint256",name:"downlinecount",type:"uint256"},{internalType:"uint256",name:"bal",type:"uint256"}],name:"importClassicAccount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{components:[{internalType:"uint256",name:"userID",type:"uint256"},{internalType:"uint256",name:"part",type:"uint256"},{internalType:"uint256",name:"uplineID",type:"uint256"},{internalType:"uint256",name:"left",type:"uint256"},{internalType:"uint256",name:"right",type:"uint256"},{internalType:"uint256",name:"earningL1",type:"uint256"},{internalType:"uint256",name:"earningL2",type:"uint256"},{internalType:"uint256",name:"earningL3",type:"uint256"},{internalType:"uint256",name:"earningL4",type:"uint256"}],internalType:"struct C250Gold.ImportMatrixOptions",name:"options",type:"tuple"}],name:"importPart1LagacyMatrix",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isAdmin",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isUserAdmin",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"lastID",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"launch",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"live",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"premiumCounter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"presaleBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"priceOracle",outputs:[{internalType:"contract C250PriceOracle",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"processChangeWalletRequest",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"referralID",type:"uint256"},{internalType:"uint256",name:"uplineID",type:"uint256"},{internalType:"address",name:"addr",type:"address"}],name:"register",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"referralID",type:"uint256"},{internalType:"uint256",name:"uplineID",type:"uint256"},{internalType:"address",name:"addr",type:"address"}],name:"registerAndActivate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"removeUserAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"dept",type:"uint256"}],name:"setMaxtraversalDept",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"setPresaleTicket1",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"setPresaleTicket2",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"oracle",type:"address"}],name:"setPriceOracle",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"setTreasuryWallet",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalPayout",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferInternal",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"traversalDept",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"unusedPresaleBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"},{internalType:"uint256",name:"random",type:"uint256"}],name:"upgradeToPremium",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"userAccounts",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"userAddresses",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"users",outputs:[{internalType:"uint256",name:"classicIndex",type:"uint256"},{internalType:"uint256",name:"classicCheckpoint",type:"uint256"},{internalType:"uint256",name:"referralID",type:"uint256"},{internalType:"uint256",name:"uplineID",type:"uint256"},{internalType:"uint256",name:"premiumLevel",type:"uint256"},{internalType:"bool",name:"imported",type:"bool"},{internalType:"uint256",name:"importedReferralCount",type:"uint256"},{internalType:"uint256",name:"importClassicLevel",type:"uint256"},{internalType:"uint256",name:"outstandingBalance",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"withdawable",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],l=n(148);t.a=function(){var e=Object(y.useState)({}),t=Object(u.a)(e,2),n=t[0],o=t[1],d=Object(y.useState)(""),m=Object(u.a)(d,2),c=m[0],T=m[1],b=Object(y.useState)(),f=Object(u.a)(b,2),v=f[0],w=f[1],M=Object(y.useState)(),h=Object(u.a)(M,2),x=h[0],g=h[1];return Object(y.useEffect)((function(){var e="https://wild-wispy-lake.matic.quiknode.pro/d1b4079c17d824d77beaf104b78d534b1eefd322/";window.ethereum&&(e=window.ethereum);var t=function(){var t=Object(i.a)(Object(a.a)().mark((function t(){var n,i,u;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=new p.a.providers.Web3Provider(e),w(n),i=new s.b(l.a,r,n.getSigner()),o(i),e!==window.ethereum){t.next=9;break}return t.next=7,n.send("eth_requestAccounts",[]);case 7:u=t.sent,T(u[0]);case 9:o(i),g(!0);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[o,g,w]),[n,c,x,v,window.ethereum.networkVersion]}},132:function(e,t,n){"use strict";var a=n(63),i=n(2),u=n(40),p=n(43),s=n(135),y=n(124),r=n(7);t.a=function(e){var t=Object(i.useState)(),n=Object(a.a)(t,2),l=n[0],o=n[1],d=Object(i.useState)(),m=Object(a.a)(d,2),c=m[0],T=m[1];Object(i.useEffect)((function(){s.a.items.map((function(e,t){return e.type&&"group"===e.type&&v(e),!1}))}),[]);var b,f,v=function e(t){t.children&&t.children.filter((function(n){return n.type&&"collapse"===n.type?e(n):n.type&&"item"===n.type&&document.location.pathname===p.a.basename+n.url&&(T(n),o(t)),!1}))},w="",M="Welcome";return l&&"collapse"===l.type&&(b=Object(r.jsx)("li",{className:"breadcrumb-item",children:Object(r.jsx)("a",{href:y.a.BLANK_LINK,children:l.title})})),c&&"item"===c.type&&(M=c.title,f=Object(r.jsx)("li",{className:"breadcrumb-item",children:Object(r.jsx)("a",{href:y.a.BLANK_LINK,children:M})}),!1!==c.breadcrumbs&&(w=Object(r.jsx)("div",{className:"page-header",children:Object(r.jsx)("div",{className:"page-block",children:Object(r.jsx)("div",{className:"row align-items-center",children:Object(r.jsxs)("div",{className:"col-md-12",children:[Object(r.jsx)("div",{className:"page-header-title",children:Object(r.jsx)("h5",{className:"m-b-10",children:M})}),Object(r.jsxs)("ul",{className:"breadcrumb",children:[Object(r.jsx)("li",{className:"breadcrumb-item",children:Object(r.jsx)(u.b,{to:"/",children:Object(r.jsx)("i",{className:"feather icon-home"})})}),b,f]})]})})})}))),document.title=M+" | CLUB250CENT ",Object(r.jsx)(r.Fragment,{children:w})}},135:function(e,t,n){"use strict";t.a={items:[{id:"support",title:"",type:"group",icon:"icon-support",children:[{id:"dashbaord",title:"Dashbaord",type:"item",url:"/app/dashboard",classes:"nav-item",icon:"feather icon-home"},{id:"account",title:"Account",type:"collapse",classes:"nav-item",icon:"feather icon-user-check",children:[{id:"profile",title:"Profile",type:"item",url:"/app/profile"},{id:"linked-accounts",title:"Linked Accounts",type:"item",url:"/app/linked-accounts"},{id:"referrals",title:"Referrals",type:"item",url:"/app/referrals"},{id:"addMutltipleAccounts",title:"Add Multiple Accounts",type:"item",url:"/app/add-multiple-accounts"},{id:"matrix",title:"Matrix",type:"item",url:"/app/matrix"}]},{id:"wallet",title:"Wallet",type:"collapse",classes:"nav-item",icon:"feather icon-book",children:[{id:"transfer",title:"Transfer",type:"item",url:"/app/transfer"},{id:"withdraw",title:"Withdraw",type:"item",url:"/app/withdraw"},{id:"change-wallet",title:"Change Wallet",type:"item",url:"/app/change-wallet"}]},{id:"logout",title:"Logout",type:"item",url:"/auth/signin",classes:"nav-item",icon:"feather icon-signout"}]}]}},144:function(e,t,n){"use strict";t.a=n.p+"static/media/gold.7172befc.png"},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="0x3a9bd1a817c39f3ed1e5dd841aca2d76bfcd6a74"}}]);
//# sourceMappingURL=1.c8c88152.chunk.js.map