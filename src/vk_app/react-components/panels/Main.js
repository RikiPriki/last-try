import React from 'react';
import { CoreProvider } from '../../core/AppEngine';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28HomeOutline from '@vkontakte/icons/dist/28/school_outline';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import { Button, Div, Panel, PanelHeader, Tabbar, TabbarItem } from '@vkontakte/vkui';

/** 
 * @param {Object} props
 * @param {CallableFunction} props.openPanel
 */
export default function Main(props) {
  const app = React.useContext(CoreProvider);

  return (
    <Panel id={ props.id }>
      <PanelHeader>Multi-Test</PanelHeader>
      <Tabbar>
      <TabbarItem stretched size="xl" onClick={ () => app.Event.dispatchEvent("openpanel", ["test-menu"]) }><Icon28Newsfeed/>Пройти тест</TabbarItem>
     

      <TabbarItem textalign='center' stretched size="xl" onClick={ () => app.Event.dispatchEvent("openpanel", ["theory"]) }><Icon28HomeOutline/>Теоретические материалы</TabbarItem>


      <TabbarItem stretched size="xl" onClick={ () => app.Event.dispatchEvent("openpanel", ["schedule"]) }><Icon24Favorite/>Информация о пользователе</TabbarItem>
      </Tabbar>
    </Panel>
    
  );
}