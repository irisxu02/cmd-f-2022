import React from 'react';
import TopNav from './TopNav'
import { useCallback, useState } from "react";
import { ThemeProvider } from '@ui5/webcomponents-react';
import { List, StandardListItem, ListMode, Text, Toolbar, Title, TitleLevel, ToolbarSpacer, Select, Option } from '@ui5/webcomponents-react';


export function Events() {
    const sampleData = [
        {
            "EventName": "Lisa's Math 100 Study Session",
            "Category": "Study",
            "When": "Monday March 7, 2022",
            "Where": "Koerner Library",
            "EventPicUrl": "images/math.png",
        },
        {
            "EventName": "Block Party",
            "Category": "Social",
            "When": "Tuesday March 8, 2022",
            "Where": "AMS Nest",
            "EventPicUrl": "images/math.png",
        },
        {
            "EventName": "Jazz Night",
            "Category": "Clubs and Societies",
            "When": "Wednesday March 9, 2022",
            "Where": "AMS Nest",
            "EventPicUrl": "images/math.png",
        },
        {
            "EventName": "Science Student Research Conference",
            "Category": "Special Events",
            "When": "Wednesday March 10, 2022",
            "Where": "West Mall Swing",
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
                        <StandardListItem description={product.When + " @ " + product.Where} image={product.EventPicUrl}
                                          style={{ textAlign: 'left' }}>
                            <Text>{product.EventName}</Text>
                        </StandardListItem>
                    ))}
                </List>
            </div>
        </ThemeProvider>
        </main>
    );
}

export const Event = true;