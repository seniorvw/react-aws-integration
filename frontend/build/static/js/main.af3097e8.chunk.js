(this.webpackJsonpidcompare=this.webpackJsonpidcompare||[]).push([[0],{137:function(e,t,a){e.exports=a(598)},142:function(e,t,a){},594:function(e,t,a){},598:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),o=a.n(r),i=(a(142),a(134)),c=a(9),s=a(15),u=a(612),m=a(610),d=a(19),h=a(20),p=a(58),g=a(23),f=a(22),E=a(21),y=a(601),v=a(602),b=a(127),k=a(603),C=a(613),_=a(74),w=a.n(_),S=a(48),T=a.n(S),j=a(126),O=a.n(j),I="https://interverify.co",P="34d614b8c18543abd81f338aaeb7b0de",U={siteUrl:I,idme:{cliendId:P,clientSecret:"949e15f3b1dace8c2a3c685032d4e28d",redirectUrl:"https://interverify.co/idme_code",authEndPoint:"https://api.id.me/oauth/authorize?client_id="+P+"&redirect_uri=https://interverify.co/idme_code&response_type=token&scope=loa3"},aws:{accessKey:"AKIAVJKPVCLEKM2YG33J",secretKey:"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",region:"us-east-2",bucket:"idauth"},api:{verifyID:"/verifyID",getUser:"/api/getUser",registerUser:"/api/registerUser",sendMail:"/api/sendMail",sendResultMail:"/api/sendResultMail",updateUserInfo:"/api/updateUserInfo",adminLogin:"/api/admin/login",adminGetAllUsers:"/api/admin/getAllUsers",adminDeleteUser:"/api/admin/deleteUser",adminUpdate:"/api/admin/updateUser"}},x=a(611),L={width:1280,height:720,facingMode:"user"},N={width:1280,height:720,facingMode:{exact:"environment"}},B=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(e){var n;Object(d.a)(this,a),n=t.call(this);var r=new URLSearchParams(e.location.search).get("token");if(!r)return window.location.href="/",Object(p.a)(n);var o=parseInt(r.substr(-1))-8;r=r.substr(0,r.length-1),n.webcamRef=l.a.createRef(),n.state={userToken:r,authStep:o,verifyURL:U.siteUrl+U.api.verifyID+"?token="+r+"9",isPhotoTaken:!1,imageSrc:"",photo_source:"",photo_target:"",uploadedPhoto:"",uploadedId:"",blob:"",resultMsg:"",msgColor:"black",resultBtnStatus:0,uploadingProgress:0,showLoadingIcon:{display:"none"},apiTmr:0},n.photoCapture=n.photoCapture.bind(Object(g.a)(n)),n.photoTake=n.photoTake.bind(Object(g.a)(n)),n.comparePhoto=n.comparePhoto.bind(Object(g.a)(n)),n.navToVerify=n.navToVerify.bind(Object(g.a)(n));var i=n.getMobileOperatingSystem();return"Android"!=i&&"iOS"!=i||(L=N),n}return Object(h.a)(a,[{key:"getMobileOperatingSystem",value:function(){var e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(e)?"Windows Phone":/android/i.test(e)?"Android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS":/JavaFX/.test(e)?"JavaFx":"unknown"}},{key:"componentDidMount",value:function(){var e=this,t=this.state.userToken;fetch(U.api.getUser,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:t})}).then((function(e){return e.json()})).then((function(t){t.status&&(e.state.photo_source=t.data.id+"_face.jpg",e.state.photo_target=t.data.id+"_id.jpg"),e.setState({uploadedPhoto:t.data.verify_photo,uploadedId:t.data.verify_idcard})})).catch((function(e){window.location.href="/"})),clearInterval(this.state.apiTmr),t&&(this.state.apiTmr=setInterval((function(){e.state.uploadedId?clearInterval(e.state.apiTmr):fetch(U.api.getUser,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:t})}).then((function(e){return e.json()})).then((function(t){e.setState({uploadedPhoto:t.data.verify_photo,uploadedId:t.data.verify_idcard}),t.data.verify_idcard&&clearInterval(e.state.apiTmr)})).catch((function(e){window.location.href="/"}))}),3e3))}},{key:"photoTake",value:function(){var e=this.state.isPhotoTaken,t="";e||(t=this.webcamRef.current.getScreenshot())?(this.setState({isPhotoTaken:!e,imageSrc:t}),console.log("--------- imageSrc")):this.setState({msgColor:"red",resultMsg:"Camera is not connected!!",imageSrc:""})}},{key:"photoCapture",value:function(){var e=this,t=this.state,a=t.authStep,n=t.userToken,l=t.imageSrc,r=this.state,o=r.photo_source,i=r.photo_target;T.a.config.update({accessKeyId:U.aws.accessKey,secretAccessKey:U.aws.secretKey,region:U.aws.region});var c=new T.a.S3({params:{Bucket:U.aws.bucket}}),s=o;1===a&&(s=i),l=this.dataURItoBlob(l);var u=new File([l],s),m={Key:u.name,ContentType:"image/jpeg",Body:u};e.setState({msgColor:"black",resultMsg:"",uploadingProgress:.1}),c.putObject(m,(function(t,l){if(t)return alert(t.message),!1;var r={verify_photo:s};1===a&&(r={verify_idcard:s}),r.token=n,fetch(U.api.updateUserInfo,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(t){t.status&&(1===a?window.location.href="/idsuccess":(e.setState({msgColor:"black",resultMsg:"Uploading done."}),console.log("-------- uploaded: ",t),setTimeout((function(){e.setState({authStep:0,resultMsg:"",imageSrc:"",isPhotoTaken:!1,resultBtnStatus:0,uploadingProgress:0})}),1e3))),console.log("data",t.data)}))})).on("httpUploadProgress",(function(t){console.log("---- uploading progress: ",t),console.log("---- uploading progress: ",t.loaded/t.total*100);var a=parseInt(t.loaded/t.total*100);e.setState({uploadingProgress:a})}))}},{key:"navToVerify",value:function(){var e=this,t=this.state.userToken;this.setState({showLoadingIcon:{display:"inline-block"}}),fetch(U.api.getUser,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:t})}).then((function(e){return e.json()})).then((function(t){if(t.status){var a="";if(t.data.verify_idcard||(a="You didn't upload id card photo."),t.data.verify_photo||(a="You didn't upload face photo."),a)return void e.setState({msgColor:"red",resultMsg:a,showLoadingIcon:{display:"none"}});e.setState({photo_source:t.data.verify_photo,photo_target:t.data.verify_idcard}),e.comparePhoto()}else e.setState({msgColor:"red",resultMsg:"Server connection failed.",showLoadingIcon:{display:"none"}})}))}},{key:"dataURItoBlob",value:function(e){for(var t=atob(e.split(",")[1]),a=e.split(",")[0].split(":")[1].split(";")[0],n=[],l=0;l<t.length;l++)n.push(t.charCodeAt(l));return new Blob([new Uint8Array(n)],{type:a})}},{key:"comparePhoto",value:function(){var e=this,t=e.state,a=t.resultBtnStatus,n=t.userToken;if(a)e.setState({authStep:0,resultBtnStatus:0,showLoadingIcon:{display:"none"}});else{var l=U.aws.bucket,r=this.state,o=r.photo_source,i=r.photo_target;T.a.config.update({accessKeyId:U.aws.accessKey,secretAccessKey:U.aws.secretKey,region:U.aws.region});var c=new T.a.Rekognition,s={SourceImage:{S3Object:{Bucket:l,Name:o}},TargetImage:{S3Object:{Bucket:l,Name:i}},SimilarityThreshold:70};console.log("-- compare 0");try{c.compareFaces(s,(function(t,a){if(t)return console.log(t,t.stack),void e.setState({resultBtnStatus:1,msgColor:"red",resultMsg:"You didn't upload exact personal photo.",showLoadingIcon:{display:"none"}});a.FaceMatches.length?a.FaceMatches.forEach((function(t){t.Face.BoundingBox;var a=t.Similarity;fetch(U.api.updateUserInfo,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:n,verify_result:a})}).then((function(e){return e.json()})).then((function(t){t.status&&(console.log("-------- uploaded: ",t),fetch(U.api.sendResultMail,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:t.token,similarity:a})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.status?window.location.href=t.data:e.setState({resultBtnStatus:1,msgColor:"red",resultMsg:t.data,showLoadingIcon:{display:"none"}})}))),console.log("data",t.data)}))})):e.setState({resultBtnStatus:1,msgColor:"red",resultMsg:"User and ID is not matched!",showLoadingIcon:{display:"none"}})}))}catch(u){e.setState({resultBtnStatus:1,msgColor:"red",resultMsg:"You didn't upload exact personal photo."}),console.log(u)}}}},{key:"render",value:function(){var e=this.state.authStep;return l.a.createElement(y.a,{style:{textAlign:"center"}},0===e&&l.a.createElement("div",null,l.a.createElement(v.a,{style:{marginTop:50}},l.a.createElement(b.a,null,l.a.createElement("h1",null,"Step 2. Verify Your Information"))),l.a.createElement(x.a,null),l.a.createElement(v.a,{style:{marginTop:30}},l.a.createElement(b.a,null,l.a.createElement("h4",null,"Your Face Photo"),l.a.createElement("img",{src:this.state.imageSrc,style:{marginBottom:6,display:this.state.isPhotoTaken?"inline-block":"none"}}),l.a.createElement(w.a,{style:{display:this.state.isPhotoTaken?"none":"inline-block"},videoConstraints:L,screenshotFormat:"image/jpeg",ref:this.webcamRef}),l.a.createElement("p",null,l.a.createElement(k.a,{variant:"primary",onClick:this.photoTake},this.state.isPhotoTaken?"Retake Photo":"Take A Photo"),l.a.createElement(k.a,{style:{marginLeft:30,display:this.state.isPhotoTaken?"inline-block":"none"},variant:"primary",onClick:this.photoCapture},"Upload"))),0===e&&l.a.createElement(b.a,null,l.a.createElement("h4",null,"Your ID card"),l.a.createElement(O.a,{value:this.state.verifyURL,size:256,level:"Q",includeMargin:!0}),l.a.createElement("p",null,l.a.createElement("a",{href:this.state.verifyURL},this.state.verifyURL)),this.state.uploadedId?l.a.createElement("p",{style:{color:"red"}},"ID has been submitted."):l.a.createElement("p",null,"Please scan this link and upload id card on your phone."))),l.a.createElement(x.a,null),l.a.createElement(v.a,{style:{marginTop:30}},l.a.createElement(b.a,null,l.a.createElement(k.a,{variant:"primary",onClick:this.navToVerify},l.a.createElement("i",{style:this.state.showLoadingIcon,className:"fa fa-spinner fa-spin"}),"Verify Information"))),this.state.uploadingProgress>0&&l.a.createElement("div",null,l.a.createElement(v.a,{style:{marginTop:30}},l.a.createElement(b.a,null),l.a.createElement(b.a,null,l.a.createElement(C.a,{now:this.state.uploadingProgress,label:this.state.uploadingProgress+"%",animated:!0})),l.a.createElement(b.a,null)))),1===e&&l.a.createElement("div",null,l.a.createElement(v.a,{style:{marginTop:50}},l.a.createElement(b.a,null,l.a.createElement("h1",null,"Upload Your ID Card"))),l.a.createElement(x.a,null),l.a.createElement(v.a,{style:{marginTop:30}},l.a.createElement(b.a,null,l.a.createElement("img",{src:this.state.imageSrc,style:{marginBottom:6,display:this.state.isPhotoTaken?"inline-block":"none"}}),l.a.createElement(w.a,{style:{display:this.state.isPhotoTaken?"none":"inline-block"},videoConstraints:L,screenshotFormat:"image/jpeg",ref:this.webcamRef}))),l.a.createElement(x.a,null),l.a.createElement(v.a,{style:{marginTop:30}},l.a.createElement(b.a,null,l.a.createElement("p",null,l.a.createElement(k.a,{variant:"primary",onClick:this.photoTake},this.state.isPhotoTaken?"Retake Photo":"Take A Photo"),l.a.createElement(k.a,{style:{marginLeft:30,display:this.state.isPhotoTaken?"inline-block":"none"},variant:"primary",onClick:this.photoCapture},"Upload")))),this.state.uploadingProgress>0&&l.a.createElement("div",null,l.a.createElement(v.a,{style:{marginTop:30}},l.a.createElement(b.a,null),l.a.createElement(b.a,null,l.a.createElement(C.a,{now:this.state.uploadingProgress,label:this.state.uploadingProgress+"%",animated:!0})),l.a.createElement(b.a,null)))),2===e&&l.a.createElement("div",null,l.a.createElement(v.a,{style:{marginTop:50}},l.a.createElement(b.a,null,l.a.createElement("h1",null,"Step 2. Verify Your Identity"))),l.a.createElement(x.a,null),l.a.createElement(v.a,{style:{marginTop:30}},l.a.createElement(b.a,null,l.a.createElement(k.a,{variant:"primary",onClick:this.comparePhoto},this.state.resultBtnStatus?"Upload again":"Verify")))),l.a.createElement(v.a,{style:{marginTop:30,marginBottom:30,color:this.state.msgColor}},l.a.createElement(b.a,null,this.state.resultMsg)),""!==this.state.blob&&l.a.createElement("img",{src:this.state.blob,alt:"blob"}))}}]),a}(l.a.Component),A=Object(c.h)(B),M=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this)).state={},n}return Object(h.a)(a,[{key:"goBack",value:function(){window.location.href="/submit"}},{key:"render",value:function(){return l.a.createElement(s.a,null,l.a.createElement(y.a,{style:{textAlign:"center"}},l.a.createElement("div",null,l.a.createElement(v.a,{style:{marginTop:150}},l.a.createElement(b.a,null,l.a.createElement("h2",null,"That info has been received and email has been sent to candidate. You can invite another candidate."))),l.a.createElement(v.a,{style:{marginTop:15}},l.a.createElement(b.a,null,l.a.createElement(k.a,{variant:"primary",onClick:this.goBack},"Go Back"))))))}}]),a}(l.a.Component),D=Object(c.h)(M),G=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this)).state={},n}return Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement(s.a,null,l.a.createElement(y.a,{style:{textAlign:"center"}},l.a.createElement("div",null,l.a.createElement(v.a,{style:{marginTop:150}},l.a.createElement(b.a,null,l.a.createElement("h2",null,"You uploaded your ID photo successfully!"))))))}}]),a}(l.a.Component),V=Object(c.h)(G),F=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this)).state={},n}return Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement(s.a,null,l.a.createElement("img",{className:"landing-img",src:"/comingsoon.png"}))}}]),a}(l.a.Component),R=Object(c.h)(F),J=(a(594),a(595),a(609)),Y=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={userInfo:{candidate_name_first:"",candidate_name_last:"",candidate_email:"",date_of_interview:"",social_link:"",interviewer_name_first:"",interviewer_name_last:"",interviewer_email:""},isUploading:!1},e.registerUserData=e.registerUserData.bind(Object(g.a)(e)),e.handleChange=e.handleChange.bind(Object(g.a)(e)),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){console.log(U.api.getUsers)}},{key:"registerUserData",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.userInfo,l=a.isUploading;console.log("------ userInfo: ",n),l||(this.setState({isUploading:!0}),fetch(U.api.registerUser,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e.status?fetch(U.api.sendMail,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:e.token})}).then((function(){t.setState({isUploading:!1}),window.location.href="/success"})):t.setState({isUploading:!1}),console.log("data",e.data)})))}},{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value,n=this.state.userInfo;n[t]=a,this.state.userInfo=n}},{key:"render",value:function(){return l.a.createElement(y.a,{style:{textAlign:"center"}},l.a.createElement("div",null,l.a.createElement(v.a,{style:{marginTop:50}},l.a.createElement(b.a,null,l.a.createElement("h1",null,"Step 1. Register New User"))),l.a.createElement(x.a,null),l.a.createElement(J.a,{style:{textAlign:"left"}},l.a.createElement(v.a,{style:{marginTop:30}},l.a.createElement(J.a.Group,{as:b.a,onChange:this.handleChange},l.a.createElement(J.a.Label,null,"Candidate Name"),l.a.createElement(J.a.Control,{type:"text",placeholder:"",name:"candidate_name_first"}),l.a.createElement(J.a.Text,{className:"text-muted"},"First Name")),l.a.createElement(J.a.Group,{as:b.a,onChange:this.handleChange},l.a.createElement(J.a.Label,null,"\xa0"),l.a.createElement(J.a.Control,{type:"text",placeholder:"",name:"candidate_name_last"}),l.a.createElement(J.a.Text,{className:"text-muted"},"Last Name"))),l.a.createElement(v.a,null,l.a.createElement(J.a.Group,{as:b.a,onChange:this.handleChange},l.a.createElement(J.a.Label,null,"Candidate Email"),l.a.createElement(J.a.Control,{type:"email",placeholder:"",name:"candidate_email"}),l.a.createElement(J.a.Text,{className:"text-muted"},"example@example.com")),l.a.createElement(b.a,null)),l.a.createElement(v.a,null,l.a.createElement(J.a.Group,{as:b.a,onChange:this.handleChange},l.a.createElement(J.a.Label,null,"Date Of Interview"),l.a.createElement(J.a.Control,{type:"date",placeholder:"",dateformat:"YYYY-MM-DD",name:"date_of_interview"}),l.a.createElement(J.a.Text,{className:"text-muted"},"Date")),l.a.createElement(b.a,null)),l.a.createElement(v.a,null,l.a.createElement(J.a.Group,{as:b.a,onChange:this.handleChange},l.a.createElement(J.a.Label,null,"Zoom, Skype, Bluejeans, Hirevue link"),l.a.createElement(J.a.Control,{type:"text",placeholder:"",name:"social_link"}),l.a.createElement(J.a.Text,{className:"text-muted"},"http://www.zoom.us/1234567890")),l.a.createElement(b.a,null)),l.a.createElement(v.a,null,l.a.createElement(J.a.Group,{as:b.a,onChange:this.handleChange},l.a.createElement(J.a.Label,null,"Interviewer's Name"),l.a.createElement(J.a.Control,{type:"text",placeholder:"",name:"interviewer_name_first"}),l.a.createElement(J.a.Text,{className:"text-muted"},"First Name")),l.a.createElement(J.a.Group,{as:b.a,onChange:this.handleChange},l.a.createElement(J.a.Label,null,"\xa0"),l.a.createElement(J.a.Control,{type:"text",placeholder:"",name:"interviewer_name_last"}),l.a.createElement(J.a.Text,{className:"text-muted"},"Last Name"))),l.a.createElement(v.a,null,l.a.createElement(J.a.Group,{as:b.a,onChange:this.handleChange},l.a.createElement(J.a.Label,null,"Interviewer's Email"),l.a.createElement(J.a.Control,{type:"email",placeholder:"",name:"interviewer_email"}),l.a.createElement(J.a.Text,{className:"text-muted"},"example@example.com")),l.a.createElement(b.a,null)),l.a.createElement(x.a,null),l.a.createElement(v.a,{style:{marginTop:30,marginBottom:30,textAlign:"center"}},l.a.createElement(b.a,null,l.a.createElement(k.a,{variant:"primary",type:"submit",onClick:this.registerUserData},this.state.isUploading?"Uploading...":"Submit"))))))}}]),a}(l.a.Component),z=a(135),K=a(78),Z=a.n(K),W=a(132),H=a(12),$=a(608),q=a(604),Q=a(605),X=a(606),ee=a(607),te=Object(c.h)((function(){var e=Object(n.useState)([]),t=Object(H.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(),i=Object(H.a)(o,2),u=i[0],m=i[1],d=Object(n.useState)(),h=Object(H.a)(d,2),p=h[0],g=h[1],f=Object(n.useState)(),E=Object(H.a)(f,2),y=E[0],v=E[1],b=Object(n.useState)(),C=Object(H.a)(b,2),_=C[0],w=C[1],S=Object(n.useState)(),T=Object(H.a)(S,2),j=T[0],O=T[1],I=Object(n.useState)(),P=Object(H.a)(I,2),x=P[0],L=P[1],N=Object(c.g)(),B=Object(n.useState)(),A=Object(H.a)(B,2),M=A[0],D=A[1];Object(n.useEffect)((function(){G()}),[]);var G=function(){var e=Object(W.a)(Z.a.mark((function e(){var t,a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("authToken"))){e.next=17;break}return e.prev=2,m(!0),e.next=6,fetch(U.api.adminGetAllUsers,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+t},method:"GET"}).then((function(e){return e.json()}));case 6:a=e.sent,m(!1),a&&a.data&&a.data.length?r(a.data):g("Sorry!, No records found!"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),g("Sorry!, Got issue on loading the records"),m(!1);case 15:e.next=18;break;case 17:N.push("/login");case 18:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),V=function(){v(!1);var e=localStorage.getItem("authToken");e?(m(!0),fetch(U.api.adminDeleteUser,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+e},method:"POST",body:JSON.stringify({id:a[_].id,token:a[_].token})}).then((function(e){return e.json()})).then((function(e){if(m(!1),e.success){var t=a;t.splice(_,1),r(t),w(void 0),a&&a.length||g("Sorry!, No records found!")}else g(e.message?e.message:"Issue on deleting user")})).catch((function(e){m(!1),g("Issue on deleting! ",e)}))):N.push("/login")},F=function(e,t){var a=M;a[t]=e,D(a)},R=function(){if(console.log("currentEditingUser",M),function(e){if(!e)return!1;return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(M.candidate_email)){var e=localStorage.getItem("authToken");e?(m(!0),fetch(U.api.adminUpdate,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+e},method:"POST",body:JSON.stringify(Object(z.a)({},M))}).then((function(e){return e.json()})).then((function(e){(m(!1),e.status)?(delete e.status,delete e.data,a[x]=e,O(!1)):alert(e.message?e.message:"Issue on updating user")})).catch((function(e){m(!1),g("Issue on deleting! ",e)}))):N.push("/login")}else alert("Candidate Email should be valid")};return l.a.createElement(s.a,null,u?l.a.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",textAlign:"center",backgroundColor:"rgba(16, 16, 16, 0.5)",zIndex:999}},l.a.createElement(q.a,{style:{textAlign:"center",marginTop:"30%"},animation:"border"})):null,l.a.createElement(k.a,{style:{margin:10},onClick:function(){return localStorage.removeItem("authToken"),void N.push("/login")}},"Logout"),l.a.createElement(Q.a,{style:{tableLayout:"fixed"},striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Candidate First Name"),l.a.createElement("th",null,"Candidate Last Name"),l.a.createElement("th",null,"Candidate Email"),l.a.createElement("th",null,"Photo Verification"),l.a.createElement("th",null,"ID Verification"),l.a.createElement("th",null,"Result Verification"),l.a.createElement("th",null,"Interview Date"),l.a.createElement("th",null,"Social Link"),l.a.createElement("th",null,"Interviewer First Name"),l.a.createElement("th",null,"Interviewer Last Name"),l.a.createElement("th",null,"Interviewer Email"),l.a.createElement("th",null,"Similarity"),l.a.createElement("th",null,"Action"))),p?null:l.a.createElement("tbody",null,a.map((function(e,t){return l.a.createElement("tr",{key:t,style:{lineBreak:"anywhere"}},l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.candidate_name_first?e.candidate_name_first:"--"),l.a.createElement("td",null,e.candidate_name_last?e.candidate_name_last:"--"),l.a.createElement("td",null,e.candidate_email?e.candidate_email:"--"),l.a.createElement("td",null,e.verify_photo?e.verify_photo:"--"),l.a.createElement("td",null,e.verify_idcard?e.verify_idcard:"--"),l.a.createElement("td",null,e.verify_result?e.verify_result:"--"),l.a.createElement("td",null,e.date_of_interview?e.date_of_interview:"--"),l.a.createElement("td",null,e.social_link?e.social_link:"--"),l.a.createElement("td",null,e.interviewer_name_first?e.interviewer_name_first:"--"),l.a.createElement("td",null,e.interviewer_name_last?e.interviewer_name_last:"--"),l.a.createElement("td",null,e.interviewer_email?e.interviewer_email:"--"),l.a.createElement("td",null,e.similarity?e.similarity:"--"),l.a.createElement("td",null,l.a.createElement(X.a,{size:"sm"},l.a.createElement(k.a,{onClick:function(){return function(e){D(a[e]),L(e),O(!0)}(t)}},l.a.createElement("i",{className:"fa fa-pencil-square-o"})),l.a.createElement(k.a,{onClick:function(){return e=t,v(!0),void w(e);var e},variant:"danger"},l.a.createElement("i",{className:"fa fa-trash"})))))})))),p?l.a.createElement(ee.a,{style:{marginTop:20},variant:"danger"},p,"!"):null,function(){if(y)return l.a.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",textAlign:"center",backgroundColor:"rgba(16, 16, 16, 0.5)",zIndex:999}},l.a.createElement($.a.Dialog,null,l.a.createElement($.a.Header,null,l.a.createElement($.a.Title,null,"Delete user!")),l.a.createElement($.a.Body,null,l.a.createElement("p",null,"Are you sure to remove this user?")),l.a.createElement($.a.Footer,null,l.a.createElement(k.a,{onClick:function(){return v(!1)},variant:"secondary"},"No"),l.a.createElement(k.a,{onClick:function(){return V()},variant:"danger"},"yes, Delete"))))}(),function(){if(j)return l.a.createElement($.a.Dialog,null,l.a.createElement($.a.Header,null,l.a.createElement($.a.Title,null,"Update user!")),l.a.createElement($.a.Body,null,l.a.createElement(J.a,null,l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,null,"Candidate First Name"),l.a.createElement(J.a.Control,{defaultValue:M.candidate_name_first,onChange:function(e){return F(e.target.value,"candidate_name_first")}})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,null,"Candidate Last Name"),l.a.createElement(J.a.Control,{defaultValue:M.candidate_name_last,onChange:function(e){return F(e.target.value,"candidate_name_last")}})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,null,"Candidate Email"),l.a.createElement(J.a.Control,{defaultValue:M.candidate_email,onChange:function(e){return F(e.target.value,"candidate_email")}})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,null,"Interviewer First Name"),l.a.createElement(J.a.Control,{defaultValue:M.interviewer_name_first,onChange:function(e){return F(e.target.value,"interviewer_name_first")}})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,null,"Interviewer Last Name"),l.a.createElement(J.a.Control,{defaultValue:M.interviewer_name_last,onChange:function(e){return F(e.target.value,"interviewer_name_last")}})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,null,"Interviewer Email"),l.a.createElement(J.a.Control,{defaultValue:M.interviewer_email,onChange:function(e){return F(e.target.value,"interviewer_email")}})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,null,"Social Link"),l.a.createElement(J.a.Control,{defaultValue:M.social_link,onChange:function(e){return F(e.target.value,"social_link")}})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,null,"Similarity"),l.a.createElement(J.a.Control,{defaultValue:M.similarity,onChange:function(e){return F(e.target.value,"similarity")}})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,null,"Verify Result"),l.a.createElement(J.a.Control,{defaultValue:M.verify_result,onChange:function(e){return F(e.target.value,"verify_result")}})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,null,"Date Of Interview"),l.a.createElement(J.a.Control,{type:"datetime-local",defaultValue:M.date_of_interview,onChange:function(e){return F(e.target.value,"date_of_interview")}})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,null,"Verify Photo"),l.a.createElement(J.a.Control,{defaultValue:M.verify_photo,onChange:function(e){return F(e.target.value,"verify_photo")}})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,null,"Verify IDcard"),l.a.createElement(J.a.Control,{defaultValue:M.verify_idcard,onChange:function(e){return F(e.target.value,"verify_idcard")}})))),l.a.createElement($.a.Footer,null,l.a.createElement(k.a,{onClick:function(){return O(!1)},variant:"secondary"},"Cancel"),l.a.createElement(k.a,{onClick:function(){return R()},variant:"primary"},"Update")))}())})),ae=Object(c.h)((function(){var e=Object(n.useState)(),t=Object(H.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(),i=Object(H.a)(o,2),u=i[0],m=i[1],d=Object(n.useState)(),h=Object(H.a)(d,2),p=h[0],g=h[1],f=Object(n.useState)(),E=Object(H.a)(f,2),C=E[0],_=E[1],w=Object(c.g)(),S=function(){_(!0),fetch(U.api.adminLogin,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({userName:a,password:u})}).then((function(e){return e.json()})).then((function(e){_(!1),e.success&&e.token?(localStorage.setItem("authToken",e.token),w.push("/admin")):g(e.message?e.message:"Issue on login")})).catch((function(e){_(!1),g("Issue on login! ",e)}))};return l.a.createElement(s.a,null,l.a.createElement(y.a,{style:{textAlign:"center"}},l.a.createElement(v.a,{style:{marginTop:50}},l.a.createElement(b.a,null,l.a.createElement(J.a,{onSubmit:function(e){e.preventDefault(),!function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(a)?g("Invalid email"):!function(e){return!!e}(u)?g("Issue on password"):(g(null),S())}},l.a.createElement(J.a.Group,{controlId:"formBasicEmail"},l.a.createElement(J.a.Label,null,"Email address"),l.a.createElement(J.a.Control,{type:"email",onChange:function(e){return r(e.target.value)},placeholder:"Enter email"}),l.a.createElement(J.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(J.a.Group,{controlId:"formBasicPassword"},l.a.createElement(J.a.Label,null,"Password"),l.a.createElement(J.a.Control,{type:"password",onChange:function(e){return m(e.target.value)},placeholder:"Password"})),C?l.a.createElement(k.a,{variant:"primary",disabled:!0},l.a.createElement(q.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):l.a.createElement(k.a,{type:"submit",variant:"primary"},"Submit"),p?l.a.createElement(ee.a,{style:{marginTop:20},variant:"danger"},p,"!"):null)))))})),ne=function(e){var t=e.children,a=Object(i.a)(e,["children"]),n=localStorage.getItem("authToken");return l.a.createElement(c.b,Object.assign({},a,{render:function(e){var a=e.location;return n?t:l.a.createElement(c.a,{to:{pathname:"/login",state:{from:a}}})}}))};var le=function(){return l.a.createElement(s.a,null,l.a.createElement(u.a,{expand:"lg",variant:"light",bg:"light"},l.a.createElement(u.a.Brand,{href:"#"},"ID Authenticate"),l.a.createElement(m.a,{className:"mr-auto"})),l.a.createElement(c.d,null,l.a.createElement(c.b,{path:"/success",children:l.a.createElement(D,null)}),l.a.createElement(c.b,{path:"/idsuccess",children:l.a.createElement(V,null)}),l.a.createElement(c.b,{path:U.api.verifyID,children:l.a.createElement(A,null)}),l.a.createElement(c.b,{path:"/submit",children:l.a.createElement(Y,null)}),l.a.createElement(c.b,{path:"/login",children:l.a.createElement(ae,null)}),l.a.createElement(ne,{path:"/admin",children:l.a.createElement(te,null)}),l.a.createElement(c.b,{path:"/",children:l.a.createElement(R,null)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t){}},[[137,1,2]]]);
//# sourceMappingURL=main.af3097e8.chunk.js.map