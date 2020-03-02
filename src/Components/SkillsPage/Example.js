import React from 'react';
import { Popover, Button, OverlayTrigger, ButtonGroup } from "react-bootstrap";

const Example = () => {

  return (
  <>
  {['Javascript', 'Typescript'].map(lan => (
  <OverlayTrigger
    trigger="click"
    key={lan}
    placement="top"
    overlay={
      <Popover id={`popover-positioned-${lan}`}>
        <Popover.Title as="h3">{lan}</Popover.Title>
        <Popover.Content>
          <strong>
            { lan === 'Javascript' ? '꾸준히 공부 중입니다.' : null }
            { lan === 'Typescript' ? '아직 완벽하진 않지만 RN개발에 적용하는 중입니다.' : null }
          </strong>
        </Popover.Content>
      </Popover>
    }
  >
      <Button variant="primary" size="sm">{lan}</Button>
  </OverlayTrigger>
  ))}
  </>
)
}

export default Example;
