import React , { useState } from 'react';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import { Cricketer, ODICareer, Batting, Bowling, TestCareer } from './Criketer';
import { UserOutlined } from '@ant-design/icons';
import './App.css';
import Title from 'antd/lib/typography/Title'
import SubMenu from 'antd/lib/menu/SubMenu';
import CareerDetails from './CareerDetails';

//import { Tree } from 'antd'; (digunakan ketika belum pake react.component)
// const { TreeNode } = Tree;
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [visible, setVisible] = useState(false);
  const onSelect = name => {
    setSelectedPlayer(name);
    setVisible(true);
  }
  const ViewProfileButton = ({name}) => {
    return <Button type='dashed' style={{float:'right'}} onClick={()=>onSelect(name)}> View Full Profile >> </Button>
  }


  const onClose = () => setVisible(false);
  return (
    <div className="App">
      <Layout>
        <Header style={{padding:10}}>
          <Avatar src='./DP.svg' style={{float:'right'}} icon={<UserOutlined />} />
          <Title style={{color:'white'}} level={3}>Cricket : Bowler & Batsmen</Title>
        </Header>
        <Layout>
          <Sider>
            <Menu
              theme="dark" 
              mode="horizontal"
              defaultSelectedKeys={['Dashboard']}
              mode='inline'
            >
              <Menu.Item key='Dashboard'>
                Dashboard
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
                    <span>Navigation One</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUs' title='About Us'>
                  <Menu.Item key='location1'>What is Spirited Away</Menu.Item>
                  <Menu.Item key='location2'>Gallery</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }} >
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 580 }}> 
              {/* Inheritance of Batsmen & Bowler */}
                
                <Cricketer name='Virat Kohli' team='IND' avatarSrc='./vk.jpg'>
                  <ODICareer matches='239' >
                    <Batting runs='11,520' score='183' />
                    <br></br>
                    <Bowling wickets='4' bowlingAvg='166.25' />
                  </ODICareer>
                  <TestCareer matches=' 79' >
                    <Batting runs='6,749' score='243' />
                  </TestCareer>
                  <ViewProfileButton name='Virat Kohli'/>
                </Cricketer>
                
                <Cricketer name='Jasprit Bumrah' team='IND' avatarSrc='./jb.jpg'>
                  <TestCareer matches='12' >
                    <Bowling wickets='62' bowlingAvg='20.63' />
                  </TestCareer>
                  <ViewProfileButton name='Jasprit Bumrah'/>
                </Cricketer>


                {/* <Batsmen name='Mentari Enggar Rizki' team='IDN' runs='1852'/>
                <Bowler name='Joji' team='AUS' wickets='555'/> */}


                {/* <Tree key='0' showLine defaultExpandedKeys={['0-0-0']}>
                  <TreeNode title={bestBatsmen.getName()} key='0-0-0'>
                    <TreeNode title={'Team - '+bestBatsmen.getTeamName()} key='0-0-0-1' isLeaf></TreeNode>
                    <TreeNode title={'Runs - '+bestBatsmen.getRuns()} key='0-0-0-2' isLeaf></TreeNode>
                  </TreeNode>
                  <TreeNode title={bestBowler.getName()} key='0-0-2'>
                    <TreeNode title={'Team - '+bestBowler.getTeamName()} key='0-0-1-1' isLeaf></TreeNode>
                    <TreeNode title={'Wickets - '+bestBowler.getWickets()} key='0-0-1-2' isLeaf></TreeNode>
                  </TreeNode>
                </Tree> */}

              </div>
            </Content>
            <CareerDetails player={selectedPlayer} visible={visible} onClose={onClose} />
            <Footer style={{ textAlign: 'center' }}>Web Design ©2020 Created by Mentari</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
