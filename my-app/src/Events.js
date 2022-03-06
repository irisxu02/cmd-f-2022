import React from 'react';
import TopNav from './TopNav'
import { useCallback, useState } from "react";
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import { List, StandardListItem, ListMode, Text, Toolbar, Title, TitleLevel, ToolbarSpacer, Select, Option } from '@ui5/webcomponents-react';


function Community() {
    const sampleData = [
        {
            "EventName": "Lisa's Math 100 Study Session",
            "When": "Monday March 7, 2022",
            "Where": "Koerner Library",
            "EventPicUrl": "images/math.png",
        },
        {
            "EventName": "HT-1001",
            "When": "Notebook Basic 17",
            "EventPicUrl": "images/math.png",
        },
        {
            "EventName": "HT-1002",
            "When": "Notebook Basic 18",
            "EventPicUrl": "images/math.png",
        },
        {
            "EventName": "HT-1003",
            "Category": "Laptops",
            "When": "Notebook Basic 19",
            "EventPicUrl": "images/math.png",
        }
    ]
    const [selectedMode, setSelectedMode] = useState(ListMode.None);
    const onChangeMode = useCallback((event)=>{
        setSelectedMode(event.detail.selectedOption.dataset.id);
    },[]);

    return (
        <main>
            <TopNav />
        <ThemeProvider>
            <div className="EventsTable">
                <List title={"Events"} mode={selectedMode}
                      header={
                          <Toolbar>
                              <Title level={TitleLevel.H2}>Community Events</Title>
                              <ToolbarSpacer/>
                              <Select onChange={onChangeMode}>
                                  <Option key={ListMode.None} data-id={ListMode.None}>No Selection</Option>
                                  <Option key={ListMode.SingleSelect} data-id={ListMode.SingleSelect}>Single Select</Option>
                                  <Option key={ListMode.SingleSelectBegin} data-id={ListMode.SingleSelectBegin}>Single Select Left</Option>
                                  <Option key={ListMode.SingleSelectEnd} data-id={ListMode.SingleSelectEnd}>Single Select (Master)</Option>
                                  <Option key={ListMode.MultiSelect} data-id={ListMode.MultiSelect}>Multi Selection</Option>
                              </Select>
                          </Toolbar>
                      }>
                    {sampleData.map((product)=>(
                        <StandardListItem description={product.EventName} image={product.EventPicUrl}
                                          style={{ textAlign: 'left' }}>
                            <Text>{product.Name}</Text>
                        </StandardListItem>
                    ))}
                </List>
            </div>
        </ThemeProvider>
        </main>
    );
}

export default Community;