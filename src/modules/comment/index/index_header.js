const React =require('react');
const Fetch = require('./../../../fetch/fetch');
const Api = require('./../../../cmp/ApiFactory');
import { Modal,NoticeBar } from 'antd-mobile';
import {fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './index.css';
import {Link} from "react-router";
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

const styles = {
    fadeIn: {
      animation: 'x 3s infinite linear',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }
module.exports = React.createClass({
   
    getInitialState:function(){
        return {
            
        }
    },
    componentDidMount:function(){
        this.getPersonalRichAccountInfo()
    },
    modelShow:function () { 
        if (isAndroid) {
 			window.android.getIslandType(type);
 		} else if(isiOS) {
 			window.webkit.messageHandlers.taskType.postMessage(type);
 		}
    },
    onModalUp:function () {
        Modal.alert('123','3434',[{text:'ok',onPress:function(){console.log(1)}}]);
    },
    getPersonalRichAccountInfo:function(){
        let parmes={}
        Fetch({
            url:Api.rich.getPersonalRichAccountInfo,
            data:{},
            type:'GET'
        }).then(rps=>{
            
            parmes={
                diamondTotal:rps.diamondTotal,
                power:rps.power,
                diamondList:rps.diamondListdiamondList
                // diamondList:[{diamond:0.098,id:1,typeEnum:'ECOIN'},{diamond:0.098,id:2,typeEnum:'ECOIN'},{diamond:0.098,id:3,typeEnum:'ECOIN'},{diamond:0.098,id:4,typeEnum:'ECOIN'},{diamond:0.098,id:5,typeEnum:'ECOIN'}]
            }
            this.setState(parmes);
        })
    },
    receiveDiamonds:function (_id,_index) {
        let ev = 'diamond'+_index;
    
        Fetch({
            url:Api.rich.receiveDiamonds+"?recordId="+_id,
            data:{},
            type:'PUT'
        }).then(rps=>{
            if(rps){

                this.refs[ev].parentNode.removeChild(this.refs[ev]);
                this.state.diamondList.map((item,_idx)=>{
                    if(_id==item.id){
                        this.state.diamondTotal+=item.diamond
                        this.state.diamondList.splice(_idx,1)
                    }
                })
                if(this.state.diamondList){
                    this.setState({
                        diamondTotal:this.state.diamondTotal
                    })
                }else{
                    this.setState({
                        diamondList:this.state.diamondList,
                        diamondTotal:this.state.diamondTotal
                    })
                }
            }
            
        })
    },
    render:function () { 
       return(
          
           <div className="title_bg">
                <NoticeBar  marqueeProps={{loop: true,style:{padding:'0 1px'}}} icon={true}>
                    
                {this.props.notice}<span style={{opacity:0}}>确认过眼神,我遇上对的人。你不比转身确认过眼神</span>{this.props.notice}<span style={{opacity:0}}>你不比转身确认过眼神</span>
                </NoticeBar>
                <div className="flex-container">
                    <div className="flex-container-dynamic">
                    
                    
                        <div> <Link to="/masonry"><img src={require('./../../../images/e_diamonds_icon@2x.png')}/><span>E钻 {this.state.diamondTotal}</span></Link> </div>
                        <div> <Link to="/power"><img src={require('./../../../images/dynamic_value_icon@2x.png')}/><span>动力值 {this.state.power}</span></Link> </div>
                    </div>
                    <div className="flex-container-content">
                        {this.state.diamondList && this.state.diamondList.length>0 ? this.state.diamondList.map(function(item,idx){
                            
                            return(
                                <div ref={'diamond'+idx} onClick={this.receiveDiamonds.bind(this,item.id,idx)} className="diamond" style={{zIndex:10,'top':Math.floor(Math.random()*100),left:Math.floor(Math.random()*280)}}>
                                    <img src={require('./../../../images/big diamond@2x.png')} />
                                    {item.diamond}
                                </div>
                            )
                        }.bind(this)):<div className="nodiamond"><StyleRoot><img style={styles.fadeIn} src={require('./../../../images/big diamond@2x.png')}/></StyleRoot></div>}
                    </div>
                    <div className="flex-container-footer">
                        <Link to="/richuppower">
                            <div className="footer_power">
                                <img src={require('./../../../images/lifting_power_icon@2x.png')}/><p>提升动力</p>
                            </div>
                        </Link>
                        <Link to="/richIdentity">
                        <div className="footer_identity">
                            <img src={require('./../../../images/my_identity_icon@2x.png')}/><p>我的身份</p>
                        </div>
                        </Link>
                        <div className="footer_friends" onClick={this.modelShow}>
                            <img src={require('./../../../images/Inviting_friends_iocn@2x.png')}/><span>邀请E友</span>
                        </div>
                    </div>
                </div>
                
           </div>
        
       )
    }
})
