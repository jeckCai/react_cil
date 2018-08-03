import React from 'react';
import './richUpPower.css';
import { Modal, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import {Link} from "react-router";
const Device = require( './../../device/device');
const Fetch = require( './../../fetch/fetch');
const Api = require('./../../cmp/ApiFactory');

var History = require('react-router');
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
module.exports = React.createClass({
	
    
     getInitialState:function(){
        return {
        	taskTypeArr:[]
        }
     },
	componentDidMount:function () {
        this.getPowerTasks();
      	
    },
    AndroidrefreshPage:function(){ //安卓返回刷新
    	window.location.reload();
    },
    LoginclickToast:function(){
    	
     	Modal.alert('',<div className="contentOne">每日登录E店APP，自动获取动力值。</div>,[{text:'我知道了',onPress:function(){
     		
     	}}]);
     	
		
    },
    taskTypeExport:function(){
    	console.log(this.state.type);
    	
    },
    InviteclickToast:function(n,t,type){
    	var nums = n;  
	    var times = t;  
		this.setState({
		   	taskTypeArr:type
		});
		Modal.alert(
		  '',
		  <div className="contentTwo"><img src={require("./../../images/Invite_e_friends_bg2@2x.png")} width="100%" /><p>成功邀请E友，即可获取动力值。</p><dl>剩余邀请次数<span>{nums}</span>次，活动时间:<span>{times}</span></dl></div>,
		  [
		  {text:'E友权益',onPress:function(){ 
		  	window.open('../member/H5/aboutEuser.html',"_self");
		  }},
		  {text:'立即邀请',onPress:function(){ 
			  	//调用app方法
	     		if (isAndroid) {
	     			window.android.getIslandType(type);
	     		} else if(isiOS) {
	     			window.webkit.messageHandlers.taskType.postMessage(type);
	     		}
		  
		  }}
		  
		  ]
		 );
		 
		  
    },
    GameclickToast:function(type){
     	Modal.alert('',<div className="contentOne">每日通过互娱圈完成10局有效游戏，即可获取动力值。</div>,[{text:'立即游戏',onPress:function(){
     		//调用app方法
     		if (isAndroid) {
     			window.android.getIslandType(type);
     		} else if(isiOS) {
     			window.webkit.messageHandlers.taskType.postMessage(type);
     		}
     		
     	}}])
		
    },
    AdclickToast:function(type){
     	Modal.alert('',<div className="contentOne">每日查看5条有效广告，即可获取动力值。</div>,[{text:'立即查看',onPress:function(){
     		
     		//调用app方法
     		if (isAndroid) {
     			window.android.getIslandType(type);
     		} else if(isiOS) {
     			window.webkit.messageHandlers.taskType.postMessage(type);
     		}
     		
     	}}])
		
    },
    ShoppingclickToast:function(type){
     	Modal.alert('',<div className="contentOne">每日通过趣乐购购物，订单满20元，即可获取动力值。</div>,[{text:'立即购物',onPress:function(){
     		
     		//调用app方法
     		if (isAndroid) {
     			window.android.getIslandType(type);
     		} else if(isiOS) {
     			window.webkit.messageHandlers.taskType.postMessage(type);
     		}
     		
     	}}])
		
    },
    AlipayclickToast:function(type){
     	Modal.alert('',<div className="contentOne">成功绑定支付宝账户，即可获取动力值。</div>,[{text:'立即绑定',onPress:function(){
     		
     		//调用app方法
     		if (isAndroid) {
     			window.android.bindingAlipayH5();
     		} else if(isiOS) {
     			
     			window.webkit.messageHandlers.tokenOut.postMessage(type);
     		}
     		

     	}}])
		
    },
    
    
     
    getPowerTasks:function(){
        Fetch({
            url:Api.rich.getPowerTasks,
            data:{},
            type:'GET'
        }).then(rps=>{
           let dingTime =[];
           let normalTime=[];
           let dingTimes =["LOGIN","INVITE","GAME","AD","SHOPPING"];
           let dingTimetask=[];
           var beginTime,endTime,time,startTime,stopTime;
			rps.list.map((item,_idx)=>{
                    if(item.type =="ALIPAY_BIND"){
                        normalTime.push(item);
                    }else if(item.type =="LOGIN"){
                    	dingTime.push(item);
                    }else if(item.type =="INVITE"){
                    	dingTime.push(item);
                    	
                    }else if(item.type =="GAME"){
                    	dingTime.push(item);
                    }else if(item.type =="AD"){
                    	dingTime.push(item);
                    }else if(item.type =="SHOPPING"){
                    	dingTime.push(item);
                    }
                    
                    if(item.beginTime != undefined){
                    	beginTime =item.beginTime;
                    	let startDay= beginTime.substring(8,10);
                    	let startMonth =parseInt(beginTime.substring(5,7));
                    	startTime=startMonth+"."+startDay;
                    	
                    }
                    if(item.endTime != undefined){
                    	endTime =item.endTime;
                    	let stopDay= endTime.substring(8,10);
                    	let stopMonth =parseInt(endTime.substring(5,7));
                    	stopTime=stopMonth+"."+stopDay;
                    }
                    time=startTime+"-"+stopTime;
                    
            })
			for(var a=0;a<dingTimes.length;a++){
				for(var i=0;i<dingTime.length;i++){
					if(dingTime[i].type == dingTimes[a]){
						dingTimetask.push(dingTime[i])
						
					}
				}
			}
			
			
			this.setState({
                dingTimetask:dingTimetask,
                normalTime:normalTime,
                time:time
            })
			console.log(dingTimetask)
			//console.log("dingTimes:"+JSON.stringify(dingTimes))
			//console.log("list:"+JSON.stringify(rps.list))
            
        })
        
    }, 
	render(){
		console.log(this.state.dingTime);
            console.log(this.state.normalTime)
		return(
			
			<div className="richUpPower">
				<div className="richUpPowerTop">
					<div className="TipTop">赶紧提升动力，加速E钻</div>
				</div>
				<div className="richUpPowerCon">
					<div className="richtesk">
						<div className="richteskTop">定时任务</div>
						<div className="richteskCon">
						
							{			
                              this.state.dingTimetask &&  this.state.dingTimetask.map(function(item,idx){
                                    return(
                                        <div className="richteskConLi">
                                        
										{item.type=="LOGIN" ?
	                                       <div>
	                                       		{item.status=="ENABLED" ? 
		                                          	<div className="richteskConLii" onClick={this.LoginclickToast} >
														
														<div className="ENABLED">
															<img src={require("../../images/lifting_power_login_icon@2x.png")} />
															<dt>每日登陆</dt>
															<p>登录获取动力</p>
														</div>
														
														{item.isFinish ?
														<div className="success">
															<img src={require("../../images/lifting_power_complete_icon@2x.png")} /> <span>已完成</span>
														</div>
														:<div className="status_nomal">+{item.powerCount}动力</div>
													}
													</div>
												:
													<div className="richteskConLii">
														
														<div className="ABLED">
															<img src={require("../../images/lifting_power_login_icon2@2x.png")} />
															<dt>每日登陆</dt>
															<p>登录获取动力</p>
														</div>
														
														
														{item.isFinish ?
													<div className="success">
														<img src={require("../../images/lifting_power_complete_icon@2x.png")} /> <span>已完成</span>
													</div>
													:<div className="status_nomal_abled">+{item.powerCount}动力</div>
													}
													</div>
												}
											</div>	
											
										:item.type =="INVITE" ?
											<div>
												{item.status=="ENABLED" ?
													<div className="richteskConLii" onClick={this.InviteclickToast.bind(this,item.taskCount,this.state.time,item.type)} >
														
														<div className="ENABLED">
															<img src={require("../../images/lifting_power_Invitation_icon@2x.png")} />
															<dt>邀请{item.taskCount}名E友</dt>
															<p>活动时间{this.state.time}</p>
														</div>
														
														{item.isFinish ?
														<div className="success">
															<img src={require("../../images/lifting_power_complete_icon@2x.png")} /> <span>已完成</span>
														</div>
														:<div className="status_nomal">+{item.powerCount}动力</div>
														}
													</div>
												:
													<div className="richteskConLii">
														
														
														<div className="ABLED">
															<img src={require("../../images/lifting_power_Invitation_icon2@2x.png")} />
															<dt>邀请{item.taskCount}名E友</dt>
															<p>活动时间{this.state.time}</p>
														</div>
														
														
														{item.isFinish ?
														<div className="success">
															<img src={require("../../images/lifting_power_complete_icon@2x.png")} /> <span>已完成</span>
														</div>
														:<div className="status_nomal_abled">+{item.powerCount}动力</div>
														}
													</div>
												}
											</div>
											
										:item.type =="GAME" ?
											<div>
												{item.status=="ENABLED" ? 
													<div className="richteskConLii" onClick={this.GameclickToast.bind(this,item.type)} >
														
														<div className="ENABLED">
															<img src={require("../../images/lifting_power_entertainment_icon@2x.png")} />
															<dt>每日娱乐</dt>
															<p>玩{item.taskCount}局游戏</p>
														</div>
														{item.isFinish ?
														<div className="success">
															<img src={require("../../images/lifting_power_complete_icon@2x.png")} /> <span>已完成</span>
														</div>
														:<div className="status_nomal">+{item.powerCount}动力</div>
														}
													</div>
												:
													<div className="richteskConLii" >
														
														<div className="ABLED">
															<img src={require("../../images/lifting_power_entertainment_icon2@2x.png")} />
															<dt>每日娱乐</dt>
															<p>玩{item.taskCount}局游戏</p>
														</div>
														{item.isFinish ?
														<div className="success">
															<img src={require("../../images/lifting_power_complete_icon@2x.png")} /> <span>已完成</span>
														</div>
														:<div className="status_nomal_abled">+{item.powerCount}动力</div>
														}
													</div>
												}
											</div>	
											
										
                                        
                                        :item.type =="AD" ?
                                        	<div>
                                        		{item.status=="ENABLED" ? 
													<div className="richteskConLii" onClick={this.AdclickToast.bind(this,item.type)} >
														
														<div className="ENABLED">
															<img src={require("../../images/lifting_power_advertisement_icon@2x.png")} />
															<dt>每日看广告</dt>
															<p>每日看{item.taskCount}广告</p>
														</div>
														
														{item.isFinish ?
														<div className="success">
															<img src={require("../../images/lifting_power_complete_icon@2x.png")} /> <span>已完成</span>
														</div>
														:<div className="status_nomal">+{item.powerCount}动力</div>
														}
													</div>	
												:
													<div className="richteskConLii" >
														<div className="ABLED">
															<img src={require("../../images/lifting_power_advertisement_icon2@2x.png")} />
															<dt>每日看广告</dt>
															<p>每日看{item.taskCount}广告</p>
														</div>
														{item.isFinish ?
														<div className="success">
															<img src={require("../../images/lifting_power_complete_icon@2x.png")} /> <span>已完成</span>
														</div>
														:<div className="status_nomal_abled">+{item.powerCount}动力</div>
														}
													</div>	
												}
											</div>	
											
										
                                       :item.type =="SHOPPING" ?
                                       		<div>
	                                       		{item.status=="ENABLED" ? 
													<div className="richteskConLii" onClick={this.ShoppingclickToast.bind(this,item.type)} >
														
														<div className="ENABLED">
															<img src={require("../../images/lifting_power_shopping_icon@2x.png")} />
															<dt>每日购物</dt>
															<p>每日购物满{item.taskCount}元</p>
														</div>
														
														{item.isFinish ?
														<div className="success">
															<img src={require("../../images/lifting_power_complete_icon@2x.png")} /> <span>已完成</span>
														</div>
														:<div className="status_nomal">+{item.powerCount}动力</div>
														}
														
													</div>
												:
													<div className="richteskConLii" >
														
														<div  className="ABLED">
															<img src={require("../../images/lifting_power_shopping_icon2@2x.png")} />
															<dt>每日购物</dt>
															<p>每日购物满{item.taskCount}元</p>
														</div>
														{item.isFinish ?
														<div className="success">
															<img src={require("../../images/lifting_power_complete_icon@2x.png")} /> <span>已完成</span>
														</div>
														:<div className="status_nomal_abled">+{item.powerCount}动力</div>
														}
														
													</div>
													
													
												}
											</div>	
												
											
										:<div className="hidden"></div>}
                                        
                                        </div>
                                    )
                                }.bind(this))
                        	}
					



					
							
						</div>
					</div>
					
					<div className="richtesk">
						<div className="richteskTop">特定任务</div>
						<div className="richteskCon">
							{
                              this.state.normalTime &&  this.state.normalTime.map(function(item,idx){
                                    return(
                                        <div className="richteskConLi">
                                        
										{item.type=="ALIPAY_BIND" ?
	                                       		<div>
	                                       			{item.status=="ENABLED" ? 
			                                          	<div className="richteskConLii" onClick={this.AlipayclickToast.bind(this,item.type)} >
															
															<div className="ENABLED">
																<img src={require("../../images/lifting_power_alipay_icon@2x.png")} />
																<dt>绑定支付宝</dt>
																<p>登录获取动力</p>
															</div>
															
														{item.isFinish ?
														<div className="success">
															<img src={require("../../images/lifting_power_complete_icon@2x.png")} /> <span>已完成</span>
														</div>
														:<div className="status_nomal">+{item.powerCount}动力</div>
														}
														</div>
													:
														<div className="richteskConLii">
															<div className="ABLED">
																<img src={require("../../images/lifting_power_alipay_icon2@2x.png")} />
															 	<dt>绑定支付宝</dt>
															 	<p>登录获取动力</p>
															</div>
															{item.isFinish ?
															<div className="success">
																<img src={require("../../images/lifting_power_complete_icon@2x.png")} /> <span>已完成</span>
															</div>
															:<div className="status_nomal_abled">+{item.powerCount}动力</div>
															}
														</div>
													}
												</div>
								 		:""}
									  </div>
                                    )
                                }.bind(this))
                        	}
							
						</div>
					</div>
					
				</div>
			</div>
		)
	}
})
