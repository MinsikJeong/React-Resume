import React from 'react';
import { Popover, Button, OverlayTrigger, ButtonToolbar } from "react-bootstrap";

const Example2 = () => {

  return (
  <>
  {['React', 'React-Native', 'Redux', 'mobx', 'styled-components', 'bootstrap'].map(lan => (
  <OverlayTrigger
    trigger="click"
    key={lan}
    placement={lan}
    overlay={
      <Popover id={`popover-positioned-${lan}`}>
        <Popover.Title as="h3">{lan}</Popover.Title>
        <Popover.Content>
          <strong>
            { lan === 'React' ? '최근에는 hooks, context api을 공부 중입니다.' : null }
            { lan === 'React-Native' ? 'react를 모바일 환경에서 적용할 수 있도록 공부 중입니다.' : null }
            { lan === 'Redux' ? 'generator 함수와 redux-saga effect 메서드 공부 중입니다.' : null }
            { lan === 'mobx' ? 'Redux와 비교해가며 공부 중입니다.' : null }
            { lan === 'styled-components' ? '정교한 css를 적용시키기 위해 공부 중입니다.' : null }
            { lan === 'bootstrap' ? '예전에는 자주 썼으나 최근에는 잘 쓰지 않습니다.' : null }
          </strong>
        </Popover.Content>
      </Popover>
    }
  >
    <Button variant="primary" size="sm">
      {lan}
    </Button>
  </OverlayTrigger>
  ))}
  </>
)
}

export default Example2;
