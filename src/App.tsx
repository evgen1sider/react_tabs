import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const preparedTabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  tabs: Tab[];
  selectedTabId: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    tabs: preparedTabs,
    selectedTabId: preparedTabs[0].id,
  };

  getCurrentTab = () => {
    const currentTab: Tab = this.state.tabs.find((tab) => (
      tab.id === this.state.selectedTabId
    )) || this.state.tabs[0];

    return currentTab;
  };

  onTabSelected = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (this.state.selectedTabId === event.currentTarget.id) {
      return;
    }

    this.setState(({
      selectedTabId: event.currentTarget.id,
    }));
  };

  render() {
    const { tabs, selectedTabId } = this.state;

    return (
      <div className="App container">
        <div className="h1">
          Selected tab is&nbsp;
          {this.getCurrentTab().title}
        </div>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={this.onTabSelected}
        />

        <p>
          {this.getCurrentTab().content}
        </p>
      </div>
    );
  }
}

export default App;
