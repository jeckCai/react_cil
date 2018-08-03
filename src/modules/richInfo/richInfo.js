import React from 'react';
import "./richInfo.css";




module.exports = React.createClass({
  render(){
    return(
    			<div className="richInfoBox">
    				<div className="richInfoTop">
    					<div className="richInfo_title"><img src={require("../../images/ruijima@3x.png")} width="100%"/></div>
	    				<div className="richInfoTopTip">
	    					全球首家区块链电商平台
	    				</div>
    				</div>
    				
    				<div className="richplaypower_ul">
                <li>瑞奇岛是以“重视个人数字信息”为核心目标的区块链计划，依托于区块链加密存储技术为帮助您管理数字信息，让您的数据真正为自己所有。确保用户对自己隐私数据的支配。重构电商信任机制，为每一个用户提供高度安全的电子商务平台。</li>
                <li>同时，瑞奇岛也是基于E店这一线上购物平台而衍生的从供应链终端至需求链终端的区块链式闭环生态系统。</li>
                <li>我们每个人每时每刻所产生地有用行为，诸如信用数据、注意焦点、网上踪迹等通过瑞奇岛映射到了包括社交、娱乐、购物等各方面的具体形式中，通过E店平台将这些相对独立的信息整合为相互关联的数据集合，利用区块链分布式数据库的特点，实现每一位岛民的数字信息借助瑞奇岛转化为实际资源的表现形式，并最终达到每一位岛民的数据资产在资源循环中产生裂变，实现数据价值最大化的目的。
</li>
                <li style={tip.tip}>瑞奇岛宗旨：让个人数据实现价值裂变。</li>
            </div>
						<div className="personal">
							<div className="personalTop"><img src={require("../../images/a_title_img1@3x.png")} width="100%"/></div>
							<div className="personalCon"><img src={require("../../images/numerical_model_icon@2x.png")} width="100%"/></div>
						</div>
						
    				<div className="richPlan">
							<div className="personalTop"><img src={require("../../images/a_title_img2@2x.png")} width="100%"/></div>
							<div className="richPlanCon">
								<li>
										<div className="num_title1"><div className="title_btn">搭建瑞奇岛</div></div>
										<div className="plantxt">初步搭建瑞奇岛，注入大量资金完善瑞奇岛基础建设，协助E店用户入住。</div>
								</li>
								
								<li>
										<div className="num_title2"><div className="title_btn">支持优质企业入驻</div></div>
										<div className="plantxt">大力吸引更多优质企业入驻E店，共同打造全方位“数据+电商”的E店平台体系的产业闭环，为瑞奇岛民提供优质多元化的服务。</div>
								</li>
								
								<li>
										<div className="num_title3"><div className="title_btn">建立E钻钱包，让数据产生交换价值</div></div>
										<div className="plantxt">探索价值创新融合，增值数字资产，将搭建E钻钱包功能，使个人数据具有实际交换价值。</div>
								</li>
								
								<li>
										<div className="num_title4"><div className="title_btn">建立合伙人机制</div></div>
										<div className="plantxt">推出合伙人机制，持有E钻的用户可定期参与E店平台盈利分红，和E店一起共同成长。</div>
								</li>
								
								<li>
										<div className="num_title5"><div className="title_btn">实现个人数据价值的裂变</div></div>
										<div className="plantxt">全面提升瑞奇岛价值，让每一位价值参与者的个人数据实现价值裂变。</div>
								</li>
							</div>
						</div>
    				
    				
    			</div>
    	   )
  }


})


var tip={
	tip:{
		color:"#5AB9FF"
	}
}
