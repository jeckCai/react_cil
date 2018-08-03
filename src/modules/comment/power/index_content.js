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
              挖矿动力简介
              </div>
              <div className="masonry_content_info">
                <p>动力值是岛民对瑞奇岛建设贡献的直接体现，也是收获E钻的影响因素。全体岛民共同大力建设瑞奇岛生态的同时，也获得共享生态价值的权利。</p>
                <p>岛民通过E店进行各项活动完成任务获得动力值。动力值越高，每日获得的E钻就越多。</p>
                <p>动力值与E钻的具体算法为：假设每日瑞奇岛发放的E钻总数为C则：<span className="active">岛民每日能够获得的E钻=C*该岛民当前动力值/瑞奇岛所有岛民动力值之和。</span></p>
              </div>
           </div>
       )
    }
})