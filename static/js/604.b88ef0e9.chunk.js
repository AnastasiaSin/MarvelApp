"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[604],{549:(e,a,s)=>{s.d(a,{A:()=>r});const t=s.p+"static/media/error.42dec745e23407a484f8.gif";var c=s(579);const r=()=>(0,c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:t,alt:"error"})},869:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var t=s(43),c=s(549),r=s(579);class n extends t.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(){this.setState({error:!0})}render(){return this.state.error?(0,r.jsx)(c.A,{}):this.props.children}}const i=n,l=s.p+"static/media/mjolnir.61f31e1809f12183a524.png";var o=s(161),d=s(238);const h=e=>{let{char:a}=e;const{thumbnail:s,name:t,wiki:c,pageHome:n,description:i}=a;let l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s&&(l={objectFit:"contain"}),(0,r.jsxs)("div",{className:"randomchar__block",children:[(0,r.jsx)("img",{src:s,alt:"Random character",className:"randomchar__img",style:l}),(0,r.jsxs)("div",{className:"randomchar__info",children:[(0,r.jsx)("p",{className:"randomchar__name",children:t}),(0,r.jsx)("p",{title:i,className:"randomchar__descr",children:i}),(0,r.jsxs)("div",{className:"randomchar__btns",children:[(0,r.jsx)("a",{href:n,className:"button button__main",children:(0,r.jsx)("div",{className:"inner",children:"homepage"})}),(0,r.jsx)("a",{href:c,className:"button button__secondary",children:(0,r.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},m=()=>{const[e,a]=(0,t.useState)(null),{loading:s,error:n,clearError:i,getCharacter:m}=(0,o.A)(),u=e=>{a(e)},_=()=>{let e=Math.floor(400*Math.random()+1011e3);i(),m(e).then(u)};(0,t.useEffect)((()=>{_()}),[]);const j=s?(0,r.jsx)(d.A,{}):null,p=n?(0,r.jsx)(c.A,{}):null,x=s||n||!e?null:(0,r.jsx)(h,{char:e});return(0,r.jsxs)("div",{className:"randomchar",children:[j,p,x,(0,r.jsxs)("div",{className:"randomchar__static",children:[(0,r.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,r.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,r.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,r.jsx)("button",{onClick:_,className:"button button__main",children:(0,r.jsx)("div",{className:"inner",children:"try it"})}),(0,r.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})},u=e=>{const[a,s]=(0,t.useState)([]),[n,i]=(0,t.useState)(!1),[l,h]=(0,t.useState)(210),[m,u]=(0,t.useState)(!1),{loading:_,error:j,getAllCharacters:p}=(0,o.A)();(0,t.useEffect)((()=>{x(l,!0)}),[]);const x=(e,a)=>{i(!a),p(e).then(g)},g=e=>{let a=!1;e.length<9&&(a=!0),s((a=>[...a,...e])),i((e=>!1)),h((e=>e+9)),u((e=>a))};console.log("jhhjhhhh");const b=(0,t.useRef)([]),v=a.map(((a,s)=>{let t={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a.thumbnail&&(t={objectFit:"unset"}),(0,r.jsxs)("li",{ref:e=>b.current[s]=e,className:"char__item",onClick:()=>{var t;e.onCharSelected(a.id),t=s,b.current.forEach((e=>e.classList.remove("char__item_selected"))),b.current[t].classList.add("char__item_selected"),b.current[t].focus()},children:[(0,r.jsx)("img",{src:a.thumbnail,alt:a.name,style:t}),(0,r.jsx)("div",{className:"char__name",children:a.name})]},a.id)}));const N=_&&!n?(0,r.jsx)(d.A,{}):null,f=j?(0,r.jsx)(c.A,{}):null;return(0,r.jsxs)("div",{className:"char__list",children:[(0,r.jsxs)("ul",{className:"char__grid",children:[N,f,v]}),(0,r.jsx)("button",{onClick:()=>x(l),className:"button button__main button__long",disabled:n,style:{display:m?"none":"block"},children:(0,r.jsx)("div",{className:"inner",children:"load more"})})]})},_=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,r.jsxs)("div",{className:"skeleton",children:[(0,r.jsxs)("div",{className:"pulse skeleton__header",children:[(0,r.jsx)("div",{className:"pulse skeleton__circle"}),(0,r.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,r.jsx)("div",{className:"pulse skeleton__block"}),(0,r.jsx)("div",{className:"pulse skeleton__block"}),(0,r.jsx)("div",{className:"pulse skeleton__block"})]})]});var j=s(475);const p=e=>{let{char:a}=e;const{name:s,description:t,thumbnail:c,homepage:n,wiki:i,comics:l}=a;console.log(l);let o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(o={objectFit:"contain"}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"char__basics",children:[(0,r.jsx)("img",{src:c,alt:s,style:o}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"char__info-name",children:s}),(0,r.jsxs)("div",{className:"char__btns",children:[(0,r.jsx)("a",{href:n,className:"button button__main",children:(0,r.jsx)("div",{className:"inner",children:"homepage"})}),(0,r.jsx)("a",{href:i,className:"button button__secondary",children:(0,r.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,r.jsx)("div",{className:"char__descr",children:t}),(0,r.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,r.jsxs)("ul",{className:"char__comics-list",children:[l.length>0?null:"There is no comics with this character",l.map(((e,a)=>{if(console.log(e.resourceURI.split("/").reverse()[0]),!(a>9))return(0,r.jsx)("li",{className:"char__comics-item",children:(0,r.jsx)(j.N_,{to:"comics/".concat(e.resourceURI.split("/").reverse()[0]),children:e.name})},a)}))]})]})},x=e=>{const[a,s]=(0,t.useState)(null),{loading:n,error:i,getCharacter:l,clearError:h}=(0,o.A)();(0,t.useEffect)((()=>{m()}),[e.charId]);const m=()=>{const{charId:a}=e;a&&(h(),l(a).then(u))},u=e=>{s(e)},j=a||n||i?null:(0,r.jsx)(_,{}),x=i?(0,r.jsx)(c.A,{}):null,g=n?(0,r.jsx)(d.A,{}):null,b=n||i||!a?null:(0,r.jsx)(p,{char:a});return(0,r.jsxs)("div",{className:"char__info",children:[j,x,g,b]})},g=s.p+"static/media/vision.067d4ae1936d64a577ce.png",b=()=>{const[e,a]=(0,t.useState)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{children:(0,r.jsx)(m,{})}),(0,r.jsxs)("div",{className:"char__content",children:[(0,r.jsx)(i,{children:(0,r.jsx)(u,{onCharSelected:e=>{a(e)}})}),(0,r.jsx)(i,{children:(0,r.jsx)(x,{charId:e})})]}),(0,r.jsx)("img",{className:"bg-decoration",src:g,alt:"vision"})]})}},161:(e,a,s)=>{s.d(a,{A:()=>c});var t=s(43);const c=()=>{const e="https://gateway.marvel.com:443/v1/public/",a="6a8520ae408f3ecb169ed9497374ed90",{loading:s,error:c,request:r,clearError:n}=(()=>{const[e,a]=(0,t.useState)(!1),[s,c]=(0,t.useState)(null);return{loading:e,error:s,request:(0,t.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};a(!0);try{let c=await fetch(e,{method:s,body:t,headers:r});if(!c.ok)throw new Error("error");const n=c.json();return a(!1),n}catch(n){throw a(!1),c(n.message),n}}),[]),clearError:(0,t.useCallback)((()=>c(null)),[])}})(),i=e=>{var a;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(a=e.textObjects[0])||void 0===a?void 0:a.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}},l=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,230)+"..."):"no desc",_description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,wiki:e.urls[1].url,homepage:e.urls[0].url,comics:e.comics.items});return{loading:s,error:c,getAllCharacters:async function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await r("".concat(e,"characters?limit=9&offset=").concat(s,"&apikey=").concat(a))).data.results.map(l)},getCharacter:async s=>{const t=await r("".concat(e,"characters/").concat(s,"?apikey=").concat(a));return l(t.data.results[0])},clearError:n,getAllComics:async function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await r("".concat(e,"comics?orderBy=issueNumber&limit=8&offset=").concat(s,"&apikey=").concat(a))).data.results.map(i)},getComic:async s=>{const t=await r("".concat(e,"comics/").concat(s,"?apikey=").concat(a));return i(t.data.results[0])}}}}}]);
//# sourceMappingURL=604.b88ef0e9.chunk.js.map