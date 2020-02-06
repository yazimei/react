import React from 'react';
import { Tabs, Icon, Button } from 'antd';
import './index.less'

const { TabPane } = Tabs;

class Qualification extends React.Component {
    // 数据
    constructor(props) {
        super(props);
        const panes = [
            { number: 21, key: '0' },
            { number: 30, key: '1' },
            { number: 21, key: '2' },
            { number: 30, key: '3' },
            { number: 30, key: '4' },
            { number: 21, key: '5' },
            { number: 30, key: '6' },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }

    /**
     * 生命周期
     */


    /**
     * 相关函数
     */
    onChange = activeKey => {
        this.setState({ activeKey })
    }

    /**
     * 组件构成
     */

    render() {
        const { panes, activeKey } = this.state
        return (
            <div className="quli-body" >
                <span className="tab-title">
                    <Icon type="unordered-list" />
                    <span>资质列表</span>
                </span>
                <Tabs defaultActiveKey="0" onChange={this.onChange} activeKey={activeKey} type="card" tabBarExtraContent={<div className='two-button'><Button className="button-first">新建资质</Button><Button className="button-sec">批量删除</Button></div>}>
                    <TabPane tab={`资质认定 (${panes[0].number})`} key={`${panes[0].key}`}>
                        1
                    </TabPane>

                    <TabPane tab={`知识产权 (${panes[1].number})`} key={`${panes[1].key}`}>
                        2
                    </TabPane>

                    <TabPane tab={`社会组织 (${panes[2].number})`} key={`${panes[2].key}`}>
                        3
                    </TabPane>

                    <TabPane tab={`人才能力 (${panes[3].number})`} key={`${panes[3].key}`}>
                        4
                    </TabPane>

                    <TabPane tab={`产品资质 (${panes[4].number})`} key={`${panes[4].key}`}>
                        5
                    </TabPane>

                    <TabPane tab={`科技项目 (${panes[5].number})`} key={`${panes[5].key}`}>
                        6
                    </TabPane>

                    <TabPane tab={`校企合作 (${panes[6].number})`} key={`${panes[6].key}`}>
                        7
                    </TabPane>

                </Tabs>
            </div>
        )
    }
}

export default Qualification