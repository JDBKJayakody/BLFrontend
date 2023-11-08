import { Button, Card, Col, Row, message } from "antd";

import { useEffect, useState } from "react";

import { useChangeOrderStatusMutation, useLazyGetOrdersQuery } from "../../store/api/orderApi";
import { useLazyGetUsersQuery } from "../../store/api/userApi";
import YearsSince2015 from "./year";

const Revew = () => {

  const [msg, msgContext] = message.useMessage();

  const [fetchOrders, { data: orders }] = useLazyGetOrdersQuery();
  const [fetchUsers, { data: users }] = useLazyGetUsersQuery();
  



  useEffect(() => {
    fetchOrders({});
    fetchUsers({});
  

  }, []);


  return (
    <section className="m-5 bg-gray-300 p-10 rounded-lg">
      {msgContext}
      <Row justify={"space-between"}>
        <Col>
          <div className="text-xl font-bold" style={{fontFamily: 'Courier New',fontSize: '25px'}}>Review</div>
        </Col>
        <Col>
         
        </Col>
      </Row>
      <div className="h-0.5 my-2 w-full bg-black mb-2" />
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Number of Orders we have covered.." bordered={false} style={{fontFamily: 'Courier New'}}>
          <div style={{fontSize: '25px'}}>{orders?.length} </div>  Total Orders
          </Card>
        </Col>
        <Col span={8}>
          <Card title="The number of registered users.." bordered={false} style={{fontFamily: 'Courier New'}}>
          <div style={{fontSize: '25px'}}> {users?.length}</div> Total Users
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Years.." bordered={false} style={{fontFamily: 'Courier New'}}>
            <YearsSince2015 />
          </Card>
        </Col>
      </Row>
      
    </section>
  );
};

export default Revew;
