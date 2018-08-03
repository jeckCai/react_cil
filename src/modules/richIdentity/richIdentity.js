import React from "react";
import "./richIdentity.css";
import {Link} from "react-router";
const Device = require( './../../device/device');
const Fetch = require( './../../fetch/fetch');
const Api = require('./../../cmp/ApiFactory');
const ServerRoot = require('./../../cmp/ServerRoot');


module.exports = React.createClass({
	 getInitialState:function(){
        return {
            
        }
    },
	componentDidMount:function () {
        this.getIdentityInfo()
        
     },
     getIdentityInfo:function(){
        Fetch({
            url:Api.rich.getIdentityInfo,
            data:{},
            type:'GET'
        }).then(rps=>{
        	console.log(rps)
        	this.setState({
                nickName:rps.nickName,
                headImg:ServerRoot.request_url_image+rps.headImg,
                account:rps.account
            })

        })
    }, 
	render(){
		return(
			<div className="richIdent">
				<div className="richIdentTop">
					<div className="rich_person">
						<div className="rich_img"><img src={this.state.headImg} width="100%"  /></div>
						<div className="rich_word_info">
							<div className="rich_person_name">{this.state.nickName}</div>
							<div className="rich_person_tel">
								<div className="dl">{this.state.account}</div>
							</div>
							<Link to="/masonry">
							<div className="rich_myE">
							 
								<span>我的E钻</span>
								<span className="icon1"><img src={require("../../images/back copy 3@2x.png")} width="50%" /></span>
							
							</div>
							</Link>
						</div>
					</div>
				</div>
				<Link to="/richInfo">
				<div className="richIdentCon">
				
					<div className="richIdentConTop">
						<li>瑞奇岛</li>
						<li className="icon2"></li>
					</div>
				
					<div className="richIdentConImg">
						<img src={require("../../images/tribal_ruijima_bg3@2x.png")} width="100%" />
					</div>
				</div>
				</Link>
			</div>
		)
	
	}
})
