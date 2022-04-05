(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{222:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"affiliateList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newAffiliate","type":"address"},{"internalType":"bool","name":"allow","type":"bool"}],"name":"allowAffiliate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"commission","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"freeze","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"freezeURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"recipients","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"gift","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"affiliate","type":"address"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyAffiliate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"reduceMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseTokenURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCommission","type":"uint256"}],"name":"setCommission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMaxMintAmount","type":"uint256"}],"name":"setMaxMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmintPrice","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_affiliate","type":"bool"}],"name":"setOnlyAffiliate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newLimit","type":"uint256"}],"name":"setPresaleLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmintPrice","type":"uint256"}],"name":"setPresalePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_presale","type":"bool"}],"name":"setPresaleStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"setSaleStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"status","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},248:function(e,t){},257:function(e,t){},275:function(e,t){},277:function(e,t){},296:function(e,t){},297:function(e,t){},367:function(e,t){},369:function(e,t){},402:function(e,t){},404:function(e,t){},405:function(e,t){},410:function(e,t){},412:function(e,t){},418:function(e,t){},420:function(e,t){},433:function(e,t){},445:function(e,t){},448:function(e,t){},453:function(e,t){},461:function(e,t){},470:function(e,t){},472:function(e,t){},542:function(e,t,n){},543:function(e,t,n){},544:function(e,t,n){"use strict";n.r(t);var a,i,r,o,s,p,u,c,l,d,y,b,f,m,x,h=n(1),j=n.n(h),g=n(83),w=n.n(g),O=n(85),T=n(14),v=n(57),M=n(19),C=n.n(M),A=n(67),k=n(66),S=n.n(k),E=n(84),_=n.n(E),I=n(222),N=n(68),F=n(223),D=n(18),U={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(D.a)(Object(D.a)({},U),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(D.a)(Object(D.a)({},U),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(D.a)(Object(D.a)({},e),{},{account:t.payload.account});default:return e}},R={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(D.a)(Object(D.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(D.a)(Object(D.a)({},R),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},B=Object(N.b)({blockchain:P,data:z}),L=[F.a],Q=Object(N.c)(N.a.apply(void 0,L)),H=Object(N.d)(B,Q),K=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},q=function(e){return function(){var e=Object(A.a)(C.a.mark((function e(t){var n,a,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,H.getState().blockchain.smartContract.methods.name().call();case 4:return n=e.sent,e.next=7,H.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=e.sent,e.next=10,H.getState().blockchain.smartContract.methods.cost().call();case 10:i=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(K("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},Z=function(e){return{type:"CONNECTION_FAILED",payload:e}},J=function(e){return function(){var t=Object(A.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(q());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},W=n(15),Y=W.a.div(a||(a=Object(T.a)(["\n  background-color: var(--white);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),G=W.a.div(i||(i=Object(T.a)(["\n  height: 8px;\n  width: 8px;\n"]))),V=W.a.div(r||(r=Object(T.a)(["\n  height: 16px;\n  width: 16px;\n"]))),X=W.a.div(o||(o=Object(T.a)(["\n  height: 24px;\n  width: 24px;\n"]))),$=W.a.div(s||(s=Object(T.a)(["\n  height: 32px;\n  width: 32px;\n"]))),ee=W.a.div(p||(p=Object(T.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),te=W.a.p(u||(u=Object(T.a)(["\n  color: var(--black);\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ne=(W.a.p(c||(c=Object(T.a)(["\n  color: var(--black);\n  font-size: 14px;\n  line-height: 1.6;\n"]))),W.a.p(l||(l=Object(T.a)(["\n  color: var(--black);\n  font-size: 12px;\n  line-height: 1.6;\n"])))),ae=(W.a.div(d||(d=Object(T.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n.p+"static/media/2.fef3f104.png"),ie=n.p+"static/media/logo.34202a49.png",re=n(3),oe=W.a.button(y||(y=Object(T.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #000000;\n  padding: 10px;\n  font-weight: bold;\n  color: #ffffff;\n  width: 90px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),se=W.a.button(b||(b=Object(T.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),pe=W.a.div(f||(f=Object(T.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 660px) {\n    flex-direction: row;\n  }\n"]))),ue=W.a.img(m||(m=Object(T.a)(["\n  width: 336px;\n  height: 462px;\n  @media (min-width: 660px) {\n    width: 480px;\n    height: 660px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ce=W.a.img(x||(x=Object(T.a)(["\n  width: 300px;\n  height: 213px;\n  @media (min-width: 213px) {\n    width: 300px;\n    height: 213px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"])));var le=function(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.blockchain})),n=Object(v.c)((function(e){return e.data})),a=Object(h.useState)("Ready to mint."),i=Object(O.a)(a,2),r=i[0],o=i[1],s=Object(h.useState)(!1),p=Object(O.a)(s,2),u=p[0],c=p[1],l=Object(h.useState)(1),d=Object(O.a)(l,2),y=d[0],b=d[1],f=function(){var n=9e16;T>g&&(n=1e17);var a=String(n*y),i=String(3e4*y+8e4),r=function(e){var t,n,a=window.location.search.substring(1).split("&");for(n=0;n<a.length;n++)if((t=a[n].split("="))[0]===e)return void 0===t[1]||decodeURIComponent(t[1]);return!1}("a");!1===_.a.utils.isAddress(r)?r="0xb3f0dfb6816bee8b82cd06d1f7de0f6889f58c72":i=String(3e4*y+8e4+15e3),o("Minting your CryptoMofayas..."),c(!0),t.smartContract.methods.mint(y,r).send({gasLimit:String(i),to:"0xE507A115267bE0bd5816Ff0BE1B4B6AA760A0594",from:t.account,value:a}).once("error",(function(e){console.log(e),o("Sorry, something went wrong please try again later."),c(!1)})).then((function(n){o("WOW, you now own a CryptoMofayas. Go visit Opensea.io to view it."),c(!1),e(q(t.account))}))},m=j.a.useRef(),x=function(){""!==t.account&&null!==t.smartContract&&e(q(t.account))};m.current=x;var g=new Date(Date.parse("Mar 10 2022 09:00:00 -0800")),w=new Date(Date.parse("Mar 09 2022 09:00:00 -0800")),T=new Date;return Object(h.useEffect)((function(){return m.current()}),[t.account]),Object(re.jsx)(Y,{style:{backgroundColor:"var(--white)"},children:Object(re.jsxs)(ee,{flex:1,ai:"center",style:{padding:24},children:[Object(re.jsxs)(pe,{flex:1,style:{padding:24},children:[Object(re.jsx)(ee,{flex:1,jc:"center",ai:"center",children:Object(re.jsx)(ue,{alt:"example",src:ae})}),Object(re.jsxs)(ee,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"--black",padding:24},children:[Object(re.jsxs)(te,{style:{textAlign:"center",fontSize:1,fontWeight:"bold"},children:[Object(re.jsx)("a",{target:"_self",href:"https://www.cryptomofayas.com/",rel:"noreferrer",children:Object(re.jsx)(ce,{alt:"example",src:ie})}),Object(re.jsx)($,{})]}),1999===Number(n.totalSupply)?Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(te,{style:{textAlign:"center"},children:"The sale has ended."}),Object(re.jsx)(V,{}),Object(re.jsxs)(ne,{style:{textAlign:"center"},children:["You can still find CryptoMofayas for sale on "," ",Object(re.jsx)("a",{target:"_blank",href:"https://www.opensea.io/",rel:"noreferrer",children:"Opensea.io"})]})]}):Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(te,{style:{textAlign:"left",fontSize:45},children:"Mint CryptoMofayas NFTs"}),Object(re.jsx)(G,{}),Object(re.jsx)(ne,{style:{textAlign:"left",fontSize:20},children:T<g?Object(re.jsx)(re.Fragment,{children:"0.09 Eth Presale March 9th 9AM PST until March 10th 9AM"}):Object(re.jsx)(re.Fragment,{children:"0.1 Eth Main Sale"})}),Object(re.jsx)(G,{}),Object(re.jsx)(ne,{style:{textAlign:"left",fontSize:12},children:"Limit 20 per wallet"}),Object(re.jsx)(V,{}),Object(re.jsx)(ne,{style:{textAlign:"center"},children:r}),Object(re.jsx)(X,{}),""===t.account||null===t.smartContract?Object(re.jsxs)(ee,{ai:"center",jc:"center",children:[Object(re.jsx)(ne,{style:{textAlign:"center"},children:"Connect to the Ethereum network"}),Object(re.jsx)(V,{}),Object(re.jsx)(oe,{onClick:function(t){t.preventDefault(),e(function(){var e=Object(A.a)(C.a.mark((function e(t){var n,a,i,r,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t({type:"CONNECTION_REQUEST"}),n=window,!(a=n.ethereum)||!a.isMetaMask){e.next=21;break}return S.a.setProvider(a),i=new _.a(a),e.prev=6,e.next=9,a.request({method:"eth_requestAccounts"});case 9:return r=e.sent,e.next=12,a.request({method:"net_version"});case 12:1==e.sent?(o=new S.a(I,"0xE507A115267bE0bd5816Ff0BE1B4B6AA760A0594"),t({type:"CONNECTION_SUCCESS",payload:{account:r[0],smartContract:o,web3:i}}),a.on("accountsChanged",(function(e){t(J(e[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):t(Z("Change network to Ethereum.")),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),t(Z("Something went wrong."));case 19:e.next=22;break;case 21:t(Z("Install Metamask."));case 22:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}()),x()},children:"CONNECT"}),""!==t.errorMsg?Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(V,{}),Object(re.jsx)(ne,{style:{textAlign:"center"},children:t.errorMsg})]}):null]}):Object(re.jsxs)(ee,{ai:"center",jc:"center",fd:"row",children:[T>w?Object(re.jsx)(re.Fragment,{children:Object(re.jsx)(oe,{disabled:u?1:0,onClick:function(e){e.preventDefault(),f(),x()},children:u?"BUSY":"BUY "})}):null,Object(re.jsx)(V,{}),Object(re.jsx)(se,{style:{lineHeight:.4},disabled:u?1:0,onClick:function(e){e.preventDefault(),function(){var e=y-1;e<1&&(e=1),b(e)}()},children:"-"}),Object(re.jsx)(X,{}),Object(re.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:y}),Object(re.jsx)(X,{}),Object(re.jsx)(se,{disabled:u?1:0,onClick:function(e){e.preventDefault(),function(){var e=y+1;e>20&&(e=20),b(e)}()},children:"+"})]})]}),Object(re.jsx)($,{}),Object(re.jsx)($,{}),Object(re.jsx)($,{}),Object(re.jsx)($,{})]})]}),Object(re.jsx)(ee,{jc:"center",ai:"center",style:{width:"70%"},children:Object(re.jsxs)(ne,{style:{textAlign:"center",fontSize:18},children:["If you have any questions the please ask in our support channel of our "," ",Object(re.jsx)("a",{target:"_blank",href:"https://discord.gg/wCqZwjdpPx",rel:"noreferrer",children:"Discord"})," ","The contract address is "," ",Object(re.jsx)("a",{target:"_blank",href:"https://etherscan.io/address/0xe507a115267be0bd5816ff0be1b4b6aa760a0594#code",rel:"noreferrer",children:"0xE507A115267bE0bd5816Ff0BE1B4B6AA760A0594"})]})})]})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,548)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))};n(542),n(543);w.a.render(Object(re.jsx)(v.a,{store:H,children:Object(re.jsx)(le,{})}),document.getElementById("root")),de()}},[[544,1,2]]]);
//# sourceMappingURL=main.5f423600.chunk.js.map