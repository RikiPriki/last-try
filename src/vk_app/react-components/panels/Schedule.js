import React from 'react';
import { CoreProvider } from '../../core/AppEngine';
import Icon24Repost from '@vkontakte/icons/dist/24/repost';
import { Panel, PanelHeader, Group, Cell, Header, List, PanelHeaderBack, CellButton } from '@vkontakte/vkui';
export default function Schedule(props) {
  const app = React.useContext(CoreProvider);

  return (
    <Panel id={ props.id }>
      <PanelHeader left={ <PanelHeaderBack onClick={ () => app.Event.dispatchEvent("closepanel") } /> }>Информация о пользователе</PanelHeader>
      <CellButton before={<Icon24Repost />} onClick={ () => connect.send("VKWebAppShare", {"link": "https://vk.com/app7849117"})}> Рассказать друзьям</CellButton>
    </Panel>
  );
}