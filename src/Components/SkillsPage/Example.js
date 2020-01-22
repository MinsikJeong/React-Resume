import React from 'react';
import { Popover, Button, OverlayTrigger, ButtonGroup } from "react-bootstrap";

const Example = () => {

  return (
  <>
  {['Javascript', 'CSS', 'HTML'].map(lan => (
  <OverlayTrigger
    trigger="click"
    key={lan}
    placement="top"
    overlay={
      <Popover id={`popover-positioned-${lan}`}>
        <Popover.Title as="h3">{lan}</Popover.Title>
        <Popover.Content>
          <strong>
            { lan === 'Javascript' ? 'es8 및 typescript을 공부할 계획입니다' : null }
            { lan === 'CSS' ? 'Flexbox, Grid system 을 공부 중입니다' : null }
            { lan === 'HTML' ? 'jsx를 더욱 정확히 쓰기 위한 공부 중입니다' : null }
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
