/*
** App name   : Words counter
** Copyright  : osousli0@gmail.com / 2021
** Start at   : Thu Jan 07 2021 10:10:33
** End at     : Mon Jan 11 2021 14:56:14
** Version    : 2.5.1
** URL        : https://wordscounter.netlify.app
*/
:root {
  --brand-color:#323232;
  --brand-background:#FFF;
  --brand-floor:#f5f5f5;
  --brand-border:3px #FFF solid;
  --brand-box-shadow:0 0 10px #CCC;
  --brandHover-box-shadow:0 0 15px #AAA;
  --brandHover-background:#FFF;
  --brandC-border:2px #DDD solid;
  --brandS-background:#309aef;
  --brandHeader-box-shadow:3px 3px 7px #444;
  --brandFooter-box-shadow:0 -5px 7px #999;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  transition: all 0.25s linear;
  font-family:'Source Sans Pro','Segoe UI Light','dubai light';
}
body {
  background:var(--brand-floor);
  overflow-x: hidden;
  margin: 0;
  color:var(--brand-color);
}
.container {
  width: 90%;
  max-width:1250px;
  margin: 10px auto;
  overflow: visible
}
.main-line {
  display:flex;
  justify-content:center;
  align-items:center
}
.main-line:hover h4 {
  color:#309aef;
  cursor:pointer
}
.main-line hr {
  width:80%;
  border:none;
  border-top:1px #777 solid
}
.main-line h4 {
  padding:5px 10px;
  width:350px;
  text-align:center;
  border:1px #777 solid;
  background:var(--brand-background);
  color:var(--brand-color);
}
#advance-section {
  display:none
}
header {
  background:var(--brandS-background);
  width: 35%;
  transform: skewX(-45deg);
  box-shadow:var(--brandHeader-box-shadow)
}
header .container {
  border: none;
  margin-top: 0;
  margin-left: 0
}
header section {
  width: 90%;
  transform: skewX(45deg);
  padding-left: 10%;
  background:var(--brandS-background)
}
header h1 {
  display: inline-block;
  font-size: 32px;
  margin: 10px 0;
  color: #fff
}
header span {
  font-size: 18px;
  color:var(--brand-color);
  margin-left: 0.5px
}

.counter-model {
  margin: 62.5px 0 10px;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
}
.text-area {
  height: 380px;
  width: 55%;
  background:var(--brand-background);
  padding: 15px 20px 10px;
  border-radius: 10px;
  box-shadow:var(--brand-box-shadow);
  position:relative
}
.copy {
  position: absolute;
  top:15px;
  right:25px
}
.text-area > h4 {
  text-align: center;
  margin: 0 auto 5px;
  display: flex;
  justify-content: space-around;
  width: 40%
}
.text-area img {
  width: 32px;
  height: 32px
}
.text-area img:hover {
  cursor: pointer
}
.text-transform {
  overflow: hidden;
  width: 60%;
  height: 30px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: var(--brandC-border);
  border-radius: 5px;
  color:var(--brand-color)
}
.text-transform h4 {
  width: 100%;
  margin: 5px 0;
  line-height:15px;
  text-align:center
}
.text-transform h4:hover {
  cursor: pointer;
  color: #309aef
}
.text-transform p span {
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px #309aef solid
}
.text-transform p span:hover {
  background-color: #309aef;
  cursor: pointer
}
.active {
  background: #309aef
}
.text-area hr {
  border-color: rgba(240, 240, 240, 0.5);
  margin: 10px 0
}
.text-area textarea {
  background:var(--brand-background);
  width: 95%;
  height: 225px;
  margin: 0 2.5%;
  padding: 10px 15px;
  resize: none;
  border:var(--brandC-border);
  border-radius: 5px;
  font-size: 14px;
  color:var(--brand-color);
  overflow-x: hidden;
  font-weight:bold;
}
.text-area h5 {
  text-align: center;
  font-size: 18px;
  font-weight: 500
}
.text-area h5 span {
  margin: 0;
  color: #309aef;
  font-weight: 600
}
.main-results {
  width: 40%;
  perspective: 600px
}
.options {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  overflow: visible;
  box-shadow:var(--brand-box-shadow);
  background:var(--brand-background);
  width: 100%;
  height: 80px;
  margin:0 0 10px;
  padding: 15px 15px 10px;
  border-radius: 10px;
  border-bottom:var(--brand-border)
}
.options:hover {
  border-bottom-color: #309aef;
  border-radius: 10px 10px 0 0;
  box-shadow:var(--brandHover-box-shadow);
  transform: translateZ(10px)
}
.open-drop {
  border-bottom-color: #309aef;
  border-radius: 10px 10px 0 0;
  box-shadow:var(--brand-box-shadow);
  transform: translateZ(10px)
}
.options h4 {
  color: rgba(48, 154, 239, 0.6);
  text-align: center;
  margin: 0 0 5px 0;
  line-height:15px
}
.select {
  height: 30px;
  background:var(--brand-background);
  padding: 1px 0 0 0;
  border: 1px #309aef dashed;
  border-bottom-style: solid;
  border-radius: 5px 5px 0 0;
  font-size: 18px;
  overflow: hidden
}
.select:hover {
  border-style: solid;
  overflow: visible
}
.select:hover h4 {
  opacity: 1
}
.select:hover h4 span {
  transform: rotateZ(45deg);
  margin-top: 2px
}
.select h4 {
  color: #fff;
  background: #309aef;
  margin: 0;
  padding: 5px;
  font-size: 16px;
  opacity: 0;
  transform: translateZ(2px);
  cursor: pointer
}
.select h4:hover {
  background:var(--brandHover-background);
  color: #309aef
}
.select h4:first-of-type {
  background: none;
  color: #309aef;
  border-radius: 6px 6px 0 0;
  padding: 5px;
  border: none;
  opacity:1;
  transform:none;
}
.select h4:first-of-type {
  color:#309aef
}
.select h4 span {
  display: block;
  width: 10px;
  height: 10px;
  border: 2px #309aef solid;
  border-width: 0 2px 2px 0;
  float: right;
  margin: 7px 3px 0 0;
  transform: rotateZ(225deg)
}
h4 strong {
  margin-right: 10px
}
.droped {
  border-style: solid;
  overflow: visible
}
.droped h4 {
  opacity: 1
}
.droped h4 span {
  transform: rotateZ(45deg);
  margin-top: 2px
}
.results {
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap
}
.result-box {
  width: 48%;
  height: 80px;
  background:var(--brand-background);
  padding: 15px 15px 5px;
  border-radius: 10px;
  box-shadow:var(--brand-box-shadow);
  border-bottom:var(--brand-border);
  margin:10px 0
}
.result-box:hover {
  border-bottom-color: #309aef;
  border-radius: 10px 10px 0 0;
  box-shadow:var(--brandHover-box-shadow);
  transform: translate3d(0, 0, 10px);
  -moz-transform: translate3d(0, 0, 10px)
}
.result-box h5 {
  margin-bottom: 5px;
  text-align: center;
  color: #309aef;
  font-size: 20px
}
.result-box h4 {
  text-align: center;
  color: #ddd;
  font-size: 18px;
  display: none
}
.result-box figure {
  width: 40px;
  height: 30px;
  margin: 0 auto 10px;
  display: flex;
  justify-content: space-around;
  align-items: center
}
.result-box figure div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: hsl(207, 86%, 56%);
  display: inline-block;
  animation: textload 2s ease-in-out infinite
}
.result-box figure div:nth-of-type(2) {
  animation-delay: 0.2s
}
.result-box figure div:nth-of-type(3) {
  animation-delay: 0.4s
}
.advance-section {
  padding:40px 10px 10px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  perspective:600px;
  width:100%;
  position:relative
}
.advance-section > img {
  width:32px;
  top:0;
  right:10px;
  cursor:pointer
}
.advance-section .results {
  perspective:600px
}
.main-boxes {
  width: 100%
}
.main-boxes .result-box {
  width: 48%
}
.results-boxes {
  width:48%
}
.results-boxes .result-box:first-of-type {
  width:100%
}
.base-line {
  margin:15px 0;
  display:flex;
  align-items:center;
  justify-content:center
}
.base-line hr {
  width:50px;
  border:none;
  border-top:1px #777 solid
}
.base-line span {
  padding:5px;
  border:1px #777 solid;
  background:var(--brand-background);
  text-align:center
}
.advance-section .results-boxes:nth-child(5) {
  width:100%
}
.advance-section .results-boxes:nth-child(5) .result-box:nth-child(n + 2) {
  width:32%
}
footer {
  background:var(--brandS-background);
  padding: 5px 0;
  margin-top:20px;
  box-shadow:var(--brandFooter-box-shadow);
  color: #EEE
}
footer div.container {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap
}
footer img {
  width: 25px;
  height: 25px;
  margin: 0 2px;
  color: #fff;
}
footer address {
  color: #309aef;
  width: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items:center
}
footer p span {
  font-size:125%
}
aside {
  position: fixed;
  width: 195px;
  background: #555;
  padding: 7px 5px 7px 0;
  opacity: 0.9;
  top: 75px;
  left: -180px;
  border-radius:0 7px 7px 0
}
aside:hover {
  left: 0;
  background: #333
}
aside section:first-of-type {
  display: flex;
  flex-direction:row-reverse;
  align-items: center;
  justify-content:space-between;
  margin-left:7px
}
aside div {
  padding-right: 1px;
  padding-left: 30px
}
aside:hover div {
  margin-right:5px
}
aside h4 {
  height: 30px;
  width: 5px;
  border-radius: 2.5px;
  background: #fff
}
aside h5 {
  margin-right: 20px;
  font-weight:500
}
aside a {
  text-decoration: none;
  color: #fff
}
aside a:hover {
  cursor: pointer;
  text-decoration: underline
}
aside:hover section:last-of-type {
  display:block
}
aside img {
  cursor: pointer;
  width: 25px
}
aside section:last-of-type {
  color:#FFF;
  display:none
}
aside section:last-of-type h5{
  padding-left:10px;
  margin:10px 0
}
aside hr {
  margin:0 10px
}
.sticky {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
  visibility: visible;
  display: flex;
  justify-content: center;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0
}
.background {
  width: 100%;
  height: 100%;
  opacity: 0.85;
  background: #000;
  position: sticky;
  z-index: 2;
  transition: none
}
.loading {
  z-index: 3;
  position: absolute;
  transition: none
}
.loading div {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  transition: none
}
.loading section {
  margin: 0 auto;
  animation: loading 5s ease-out infinite;
  transition: none
}
.loading .fst-circle {
  margin: 0;
  width: 120px;
  height: 120px
}
.blue {
  background: #309aef
}
.sec-circle {
  width: 80px;
  height: 80px
}
.medium-blue {
  background: #309aef;
  opacity: 0.75
}
.thr-circle {
  width: 40px;
  height: 40px
}
.light-blue {
  background: #309aef;
  opacity: 0.5
}
.message {
  width:180px;
  height:40px;
  border-radius:20px;
  color:#EEE;
  background:rgba(20, 20, 20, 0.8);
  display:flex;
  align-items:center;
  justify-content:center;
  position:fixed;
  bottom:20px;
  left:calc(50% - 90px);
  transition:all .5s linear;
  opacity:0;
  cursor:default
}
@keyframes reset {
  from {
    transform: rotateZ(0deg)
  }
  to {
    transform: rotateZ(-360deg);
  }
}
@keyframes clean {
  from {
    transform: rotateZ(0deg)
  }
  to {
    transform: rotateZ(-360deg)
  }
}
@keyframes click {
  from,to {
    transform: scale(1)
  }

  50% {
    transform: scale(0.85, 0.85);
  }
}
@keyframes tick {
  from,to {
    transform: scale(1)
  }
  50% {
    transform: scale(0.85, 0.85)
  }
}
@keyframes textload {
  from,to,
  50% {
    margin-bottom: 0
  }
  25% {
    margin-bottom: 25px
  }
}
@keyframes loading {
  0% {
    transform: rotateZ(0deg)
  }
  33% {
    transform: rotateZ(120deg)
  }
  66% {
    transform: rotateZ(240deg)
  }
  100% {
    transform: rotateZ(360deg)
  }
}

/* Mon Jan 18 2021 10:34:16 : سبحان الله، سبحانك اللهم وبحمدك أشهد أن لا إله إلا أنت أستغفرك و أتوب إاليك */
