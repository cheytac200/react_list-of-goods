(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(6),o=n.n(s),c=n(1),l=n(2),i=n(4),u=n(3),m=(n(13),n(7)),h=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isReversed:!1,sortBy:""},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortByName=function(){e.setState({sortBy:"name"})},e.sortByLength=function(){e.setState({sortBy:"length"})},e.reset=function(){e.setState({isReversed:!1,sortBy:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isReversed,n=e.sortBy,r=Object(m.a)(this.props.goods);return r.sort((function(e,t){switch(n){case"name":return e.localeCompare(t);case"length":return e.length-t.length;default:return 0}})),t&&r.reverse(),a.a.createElement("div",null,a.a.createElement("button",{className:"btn",type:"button",onClick:this.reverse},"reverse"),a.a.createElement("button",{className:"btn",type:"button",onClick:this.sortByName},"sort"),a.a.createElement("button",{className:"btn",type:"button",onClick:this.sortByLength},"sort for length"),a.a.createElement("button",{className:"btn",type:"button",onClick:this.reset},"reset"),a.a.createElement("ul",null,r.map((function(e){return a.a.createElement("li",{key:e},e)}))))}}]),n}(a.a.Component),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={renderForm:!1},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},this.state.renderForm?a.a.createElement(h,{goods:p}):a.a.createElement("button",{type:"button",onClick:function(){e.setState({renderForm:!0})}},"Start"))}}]),n}(a.a.Component);o.a.render(a.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.baaaeb42.chunk.js.map