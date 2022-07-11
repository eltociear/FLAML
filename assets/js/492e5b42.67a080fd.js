"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6011],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,f=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7613:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_label:"training_args",title:"nlp.huggingface.training_args"},s=void 0,c={unversionedId:"reference/nlp/huggingface/training_args",id:"reference/nlp/huggingface/training_args",isDocsHomePage:!1,title:"nlp.huggingface.training_args",description:"TrainingArgumentsForAuto Objects",source:"@site/docs/reference/nlp/huggingface/training_args.md",sourceDirName:"reference/nlp/huggingface",slug:"/reference/nlp/huggingface/training_args",permalink:"/FLAML/docs/reference/nlp/huggingface/training_args",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/nlp/huggingface/training_args.md",tags:[],version:"current",frontMatter:{sidebar_label:"training_args",title:"nlp.huggingface.training_args"},sidebar:"referenceSideBar",previous:{title:"trainer",permalink:"/FLAML/docs/reference/nlp/huggingface/trainer"},next:{title:"utils",permalink:"/FLAML/docs/reference/nlp/utils"}},p=[{value:"TrainingArgumentsForAuto Objects",id:"trainingargumentsforauto-objects",children:[],level:2}],u={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"trainingargumentsforauto-objects"},"TrainingArgumentsForAuto Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@dataclass\nclass TrainingArgumentsForAuto(TrainingArguments)\n")),(0,i.kt)("p",null,"FLAML custom TrainingArguments."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"task")," ",(0,i.kt)("em",{parentName:"li"},"str")," - the task name for NLP tasks, e.g., seq-classification, token-classification"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"output_dir")," ",(0,i.kt)("em",{parentName:"li"},"str")," - data root directory for outputing the log, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"model_path")," ",(0,i.kt)("em",{parentName:"li"},'str, optional, defaults to "facebook/muppet-roberta-base"')," - A string,\nthe path of the language model file, either a path from huggingface\nmodel card huggingface.co/models, or a local path for the model."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fp16")," ",(0,i.kt)("em",{parentName:"li"},'bool, optional, defaults to "False"')," - A bool, whether to use FP16."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_seq_length")," ",(0,i.kt)("em",{parentName:"li"},"int, optional, defaults to 128"),' - An integer, the max length of the sequence.\nFor token classification task, this argument will be ineffective.\npad_to_max_length (bool, optional, defaults to "False"):\nwhether to pad all samples to model maximum sentence length.\nIf False, will pad the samples dynamically when batching to the maximum length in the batch.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ckpt_per_epoch")," ",(0,i.kt)("em",{parentName:"li"},"int, optional, defaults to 1")," - An integer, the number of checkpoints per epoch."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"per_device_eval_batch_size")," ",(0,i.kt)("em",{parentName:"li"},"int, optional, defaults to 1")," - An integer, the per gpu evaluation batch size."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"label_list")," ",(0,i.kt)("em",{parentName:"li"},"List","[str]",", optional, defaults to None")," - A list of string, the string list of the label names.\nWhen the task is sequence labeling/token classification, there are two formats of the labels:\n(1) The token labels, i.e., ","[B-PER, I-PER, B-LOC]","; (2) Id labels. For (2), need to pass the label_list (e.g., ","[B-PER, I-PER, B-LOC]",")\nto convert the Id to token labels when computing the metric with metric_loss_score.\nSee the example in ",(0,i.kt)("a",{parentName:"li",href:"../../../Examples/AutoML-NLP#a-simple-token-classification-example"},"a simple token classification example"),".")))}g.isMDXComponent=!0}}]);