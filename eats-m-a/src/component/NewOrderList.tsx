import React, { useState } from 'react';
import Order from './Order';
import { Card, Col, Row,Button } from 'antd';
import '../scss/NewOrderList.scss';

interface Props {

    table:any
    toggleCheck:(t:number)=>void

}
const NewOrderList = ({table,toggleCheck}:Props) => {

  const [select,setSelect] = useState<any>();

    const onClick = (menu:any) => {
        setSelect(menu);
    }

  let c = 0;
  
  return (

    <div>
        <Row gutter={16}>
      {table.map((m:any)=>{
          
        if(!m.check){
          return(
              <Col span={8}>
                  <Card className="orderCard" onClick={()=>onClick(m.orders)} title={`${m.myTable}번 테이블`}>
                    <Card className="orderMeta">
                        <Order orders={m.orders}/>
                    </Card>
                    <Button className="orderFinishedButton" onClick={()=>toggleCheck(m.myTable)}>주문완료</Button>
                  </Card>
              </Col>
          )
        }
            

      })}
        </Row>

      <div>상세주문</div>
      <Order orders={select}/>

    </div>
  );
}

export default NewOrderList;