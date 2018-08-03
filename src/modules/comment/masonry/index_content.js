const React =require('react');


import './../masonry/index.css';

module.exports = React.createClass({
   
    getInitialState:function(){
        return {
            
        }
    },
    
    render:function () { 
       return(
          
           <div className="masonry_content">
              <div className="masonry_content_title">
              E钻简介
              </div>
              <div className="masonry_content_info">
                <p>E店依托于区块链加密存储技术为每一个用户提供高度安全的电子商务平台，E店用户在平台内所有的行为数据都可以产生价值并为己所用，实现数据价值最大化。</p>
                <p>E钻是岛民通过E店进行各项活动获得活跃度而产生的奖励，可以用于E店内多个项目的消费及兑换，随着瑞奇岛搭建逐渐完善，E钻将发挥愈发重要的作用。</p>
                <p>每日获得E钻的多少取决于动力值，动力值越多，每日获得的E钻就越多。动力值大于40的岛民将有机会获得被称为<span className="color">“紫钻”</span>的额外E钻奖励，紫钻是随机产生的</p>
                <p>每48小时未收取，E钻将停止生长</p>
                <p>适时推出合伙人机制，持有E钻的用户可定期参与E店平台盈利分红，和E店一起共同成长</p>
                <p className="check">注：E钻总量有限，随着时间的推移，获取难度越来越大，前期入住瑞奇岛将更有优势</p>
              </div>
           </div>
       )
    }
})