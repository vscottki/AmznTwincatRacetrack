"use strict";var TcHmi;!function(TcHmi){!function(Controls){!function(Helpers){class CallbackManagerBase{__callbacks=new Set;add(callback){return this.__callbacks.add(callback),()=>this.remove(callback)}remove(callback){this.__callbacks.delete(callback)}getManipulators(){return Object.freeze({add:this.add.bind(this),remove:this.remove.bind(this)})}}Helpers.CallbackManager=class extends CallbackManagerBase{trigger(...args){const result=[];for(const callback of this.__callbacks)try{result.push({status:"fulfilled",value:callback(...args)})}catch(error){result.push({status:"rejected",reason:error})}return result}};Helpers.AsyncCallbackManager=class extends CallbackManagerBase{trigger(...args){let promises=[];for(const callback of this.__callbacks)try{promises.push(callback(...args))}catch(error){promises.push(Promise.reject(error instanceof Error?error:new Error("string"==typeof error?error:void 0)))}return Promise.allSettled(promises)}}}(Controls.Helpers||(Controls.Helpers={}))}(TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={}));