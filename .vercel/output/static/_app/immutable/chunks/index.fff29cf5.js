function A(){}function tt(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function H(){return Object.create(null)}function $(t){t.forEach(J)}function K(t){return typeof t=="function"}function bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function et(t){return Object.keys(t).length===0}function nt(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function wt(t,e,n){t.$$.on_destroy.push(nt(e,n))}function $t(t,e,n,i){if(t){const r=W(t,e,n,i);return t[0](r)}}function W(t,e,n,i){return t[1]&&i?tt(n.ctx.slice(),t[1](i(e))):n.ctx}function vt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function Et(t,e,n,i,r,o){if(r){const c=W(e,n,i,o);t.p(c,r)}}function Nt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let M=!1;function it(){M=!0}function rt(){M=!1}function ct(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function st(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:ct(1,r,d=>e[n[d]].claim_order,l))-1;i[s]=n[f]+1;const _=f+1;n[_]=s,r=Math.max(_,r)}const o=[],c=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);u>=s;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);o.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<o.length&&c[s].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(c[s],f)}}function lt(t,e){if(M){for(st(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function St(t,e,n){M&&!n?lt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ut(t){t.parentNode&&t.parentNode.removeChild(t)}function ot(t){return document.createElement(t)}function at(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function q(t){return document.createTextNode(t)}function kt(){return q(" ")}function At(){return q("")}function Mt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ft(t){return Array.from(t.childNodes)}function dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Q(t,e,n,i,r=!1){dt(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function R(t,e,n,i){return Q(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||o.push(u.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Ct(t,e,n){return R(t,e,n,ot)}function Ot(t,e,n){return R(t,e,n,at)}function _t(t,e){return Q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>q(e),!0)}function Bt(t){return _t(t," ")}function Lt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Pt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Tt(t,e){return new t(e)}let E;function v(t){E=t}function U(){if(!E)throw new Error("Function called outside component initialization");return E}function qt(t){U().$$.on_mount.push(t)}function zt(t){U().$$.after_update.push(t)}const b=[],I=[];let w=[];const G=[],V=Promise.resolve();let P=!1;function X(){P||(P=!0,V.then(Y))}function Dt(){return X(),V}function T(t){w.push(t)}const L=new Set;let x=0;function Y(){if(x!==0)return;const t=E;do{try{for(;x<b.length;){const e=b[x];x++,v(e),ht(e.$$)}}catch(e){throw b.length=0,x=0,e}for(v(null),b.length=0,x=0;I.length;)I.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];L.has(n)||(L.add(n),n())}w.length=0}while(b.length);for(;G.length;)G.pop()();P=!1,L.clear(),v(t)}function ht(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}function mt(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}const k=new Set;let g;function Ft(){g={r:0,c:[],p:g}}function Ht(){g.r||$(g.c),g=g.p}function Z(t,e){t&&t.i&&(k.delete(t),t.i(e))}function pt(t,e,n,i){if(t&&t.o){if(k.has(t))return;k.add(t),g.c.push(()=>{k.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function It(t,e){pt(t,1,1,()=>{e.delete(t.key)})}function Gt(t,e,n,i,r,o,c,u,s,l,f,_){let d=t.length,m=o.length,h=d;const j={};for(;h--;)j[t[h].key]=h;const N=[],C=new Map,O=new Map,z=[];for(h=m;h--;){const a=_(r,o,h),p=n(a);let y=c.get(p);y?i&&z.push(()=>y.p(a,e)):(y=l(p,a),y.c()),C.set(p,N[h]=y),p in j&&O.set(p,Math.abs(h-j[p]))}const D=new Set,F=new Set;function B(a){Z(a,1),a.m(u,f),c.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=N[m-1],p=t[d-1],y=a.key,S=p.key;a===p?(f=a.first,d--,m--):C.has(S)?!c.has(y)||D.has(y)?B(a):F.has(S)?d--:O.get(y)>O.get(S)?(F.add(y),B(a)):(D.add(S),d--):(s(p,c),d--)}for(;d--;){const a=t[d];C.has(a.key)||s(a,c)}for(;m;)B(N[m-1]);return $(z),N}function Jt(t){t&&t.c()}function Kt(t,e){t&&t.l(e)}function yt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||T(()=>{const c=t.$$.on_mount.map(J).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...c):$(c),t.$$.on_mount=[]}),o.forEach(T)}function gt(t,e){const n=t.$$;n.fragment!==null&&(mt(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xt(t,e){t.$$.dirty[0]===-1&&(b.push(t),X(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,i,r,o,c,u=[-1]){const s=E;v(t);const l=t.$$={fragment:null,ctx:[],props:o,update:A,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:H(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&xt(t,_)),d}):[],l.update(),f=!0,$(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){it();const _=ft(e.target);l.fragment&&l.fragment.l(_),_.forEach(ut)}else l.fragment&&l.fragment.c();e.intro&&Z(t.$$.fragment),yt(t,e.target,e.anchor,e.customElement),rt(),Y()}v(s)}class Qt{$destroy(){gt(this,1),this.$destroy=A}$on(e,n){if(!K(n))return A;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{yt as A,gt as B,$t as C,Et as D,Nt as E,vt as F,lt as G,A as H,wt as I,at as J,Ot as K,Mt as L,K as M,$ as N,Gt as O,It as P,Qt as S,kt as a,St as b,Bt as c,pt as d,At as e,Ht as f,Z as g,ut as h,Wt as i,zt as j,ot as k,Ct as l,ft as m,jt as n,qt as o,Pt as p,q,_t as r,bt as s,Dt as t,Lt as u,Ft as v,I as w,Tt as x,Jt as y,Kt as z};
