"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4288],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3581:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="Frequently Asked Questions",p={unversionedId:"FAQ",id:"FAQ",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"About lowcostpartial_config in tune.",source:"@site/docs/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/FLAML/docs/FAQ",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/FAQ.md",tags:[],version:"current",frontMatter:{}},c=[{value:"About <code>low_cost_partial_config</code> in <code>tune</code>.",id:"about-low_cost_partial_config-in-tune",children:[],level:3},{value:"How does FLAML handle imbalanced data (unequal distribution of target classes in classification task)?",id:"how-does-flaml-handle-imbalanced-data-unequal-distribution-of-target-classes-in-classification-task",children:[],level:3},{value:"How to interpret model performance? Is it possible for me to visualize feature importance, SHAP values, optimization history?",id:"how-to-interpret-model-performance-is-it-possible-for-me-to-visualize-feature-importance-shap-values-optimization-history",children:[],level:3}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("h3",{id:"about-low_cost_partial_config-in-tune"},"About ",(0,r.kt)("inlineCode",{parentName:"h3"},"low_cost_partial_config")," in ",(0,r.kt)("inlineCode",{parentName:"h3"},"tune"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Definition and purpose: The ",(0,r.kt)("inlineCode",{parentName:"p"},"low_cost_partial_config")," is a dictionary of subset of the hyperparameter coordinates whose value corresponds to a configuration with known low-cost (i.e., low computation cost for training the corresponding model).  The concept of low/high-cost is meaningful in the case where a subset of the hyperparameters to tune directly affects the computation cost for training the model. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"n_estimators")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max_leaves")," are known to affect the training cost of tree-based learners. We call this subset of hyperparameters, ",(0,r.kt)("em",{parentName:"p"},"cost-related hyperparameters"),". In such scenarios, if you are aware of low-cost configurations for the cost-related hyperparameters, you are recommended to set them as the ",(0,r.kt)("inlineCode",{parentName:"p"},"low_cost_partial_config"),". Using the tree-based method example again, since we know that small ",(0,r.kt)("inlineCode",{parentName:"p"},"n_estimators")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"max_leaves")," generally correspond to simpler models and thus lower cost, we set ",(0,r.kt)("inlineCode",{parentName:"p"},"{'n_estimators': 4, 'max_leaves': 4}")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"low_cost_partial_config")," by default (note that ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," is the lower bound of search space for these two hyperparameters), e.g., in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/blob/main/flaml/model.py#L215"},"LGBM"),".  Configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"low_cost_partial_config")," helps the search algorithms make more cost-efficient choices.",(0,r.kt)("br",{parentName:"p"}),"\n","In AutoML, the ",(0,r.kt)("inlineCode",{parentName:"p"},"low_cost_init_value")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"search_space()")," function for each estimator serves the same role.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Usage in practice: It is recommended to configure it if there are cost-related hyperparameters in your tuning task and you happen to know the low-cost values for them, but it is not required (It is fine to leave it the default value, i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"How does it work: ",(0,r.kt)("inlineCode",{parentName:"p"},"low_cost_partial_config")," if configured, will be used as an initial point of the search. It also affects the search trajectory. For more details about how does it play a role in the search algorithms, please refer to the papers about the search algorithms used: Section 2 of ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2005.01571.pdf"},"Frugal Optimization for Cost-related Hyperparameters (CFO)")," and Section 3 of ",(0,r.kt)("a",{parentName:"p",href:"https://openreview.net/pdf?id=VbLH04pRA3"},"Economical Hyperparameter Optimization with Blended Search Strategy (BlendSearch)"),"."))),(0,r.kt)("h3",{id:"how-does-flaml-handle-imbalanced-data-unequal-distribution-of-target-classes-in-classification-task"},"How does FLAML handle imbalanced data (unequal distribution of target classes in classification task)?"),(0,r.kt)("p",null,"Currently FLAML does several things for imbalanced data."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When a class contains fewer than 20 examples, we repeatedly add these examples to the training data until the count is at least 20."),(0,r.kt)("li",{parentName:"ol"},"We use stratified sampling when doing holdout and kf."),(0,r.kt)("li",{parentName:"ol"},"We make sure no class is empty in both training and holdout data."),(0,r.kt)("li",{parentName:"ol"},"We allow users to pass ",(0,r.kt)("inlineCode",{parentName:"li"},"sample_weight")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"AutoML.fit()"),"."),(0,r.kt)("li",{parentName:"ol"},"User can customize the weight of each class by setting the ",(0,r.kt)("inlineCode",{parentName:"li"},"custom_hp")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"fit_kwargs_by_estimator")," arguments. For example, the following code sets the weight for pos vs. neg as 2:1 for the RandomForest estimator:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from flaml import AutoML\nfrom sklearn.datasets import load_iris\n\nX_train, y_train = load_iris(return_X_y=True)\nautoml = AutoML()\nautoml_settings = {\n    "time_budget": 2,\n    "task": "classification",\n    "log_file_name": "test/iris.log",\n    "estimator_list": ["rf", "xgboost"],\n}\n\nautoml_settings["custom_hp"] = {\n    "xgboost": {\n        "scale_pos_weight": {\n            "domain": 0.5,\n            "init_value": 0.5,\n        }\n    },\n    "rf": {\n        "class_weight": {\n            "domain": "balanced",\n            "init_value": "balanced"\n        }\n    }\n}\nprint(automl.model)\n')),(0,r.kt)("h3",{id:"how-to-interpret-model-performance-is-it-possible-for-me-to-visualize-feature-importance-shap-values-optimization-history"},"How to interpret model performance? Is it possible for me to visualize feature importance, SHAP values, optimization history?"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"automl.model.estimator.feature_importances_")," to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"feature_importances_")," for the best model found by automl. See an ",(0,r.kt)("a",{parentName:"p",href:"Examples/AutoML-for-XGBoost#plot-feature-importance"},"example"),"."),(0,r.kt)("p",null,"Packages such as ",(0,r.kt)("inlineCode",{parentName:"p"},"azureml-interpret")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sklearn.inspection.permutation_importance")," can be used on ",(0,r.kt)("inlineCode",{parentName:"p"},"automl.model.estimator")," to explain the selected model.\nModel explanation is frequently asked and adding a native support may be a good feature. Suggestions/contributions are welcome."),(0,r.kt)("p",null,"Optimization history can be checked from the ",(0,r.kt)("a",{parentName:"p",href:"Use-Cases/Task-Oriented-AutoML#log-the-trials"},"log"),". You can also ",(0,r.kt)("a",{parentName:"p",href:"Use-Cases/Task-Oriented-AutoML#plot-learning-curve"},"retrieve the log and plot the learning curve"),"."))}m.isMDXComponent=!0}}]);