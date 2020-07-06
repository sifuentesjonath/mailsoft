import React from 'react';
import {  Label, Table, Checkbox,  Dropdown } from "semantic-ui-react";
import emails from '../emails.json';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
//Sample info of the json
// "id": "1",
// "subject": "Hello",
// "sender": "bob.smith@gmail.com",
// "body": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>",
// "tags": ["work"],
// "date": "2017-03-05T03:25:43.511Z"
class MailsList extends React.Component {
    render(){
        return(          
            <Table >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell>Sender</Table.HeaderCell>
                <Table.HeaderCell>Subject</Table.HeaderCell>
                <Table.HeaderCell>Tags</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
              {/* JS to map trough the json to find the information that is necessary to fill the table */}
              {emails.map(el => {
                return (
                  <Table.Row key={el.id}>
                    <Table.Cell collapsing>
                        <Checkbox />
                    </Table.Cell>  
                    <Table.Cell>
                      <Label>
                      {el.sender} 
                      </Label>
                    </Table.Cell>
                    <Link className="text-reset text-decoration-none" to={`/mails/${el.id}`}>
                    <Table.Cell>{el.subject}</Table.Cell>
                    </Link>
                    <Table.Cell>{el.tags}</Table.Cell>
                    <Table.Cell>
                        <Dropdown text='More'>
                            <Dropdown.Menu>
                            <Dropdown.Item text='Answer' />
                            <Dropdown.Item text='Open...' description='ctrl + o' />
                            <Dropdown.Item text='Save as...' description='ctrl + s' />
                            <Dropdown.Item text='Rename' description='ctrl + r' />
                            <Dropdown.Item text='Make a copy' />
                            <Dropdown.Item icon='folder' text='Move to folder' />
                            <Dropdown.Item icon='trash' text='Move to trash' />
                            <Dropdown.Divider />
                            <Dropdown.Item text='Download As...' />
                            <Dropdown.Item text='Publish To Web' />
                            <Dropdown.Item text='E-mail Collaborators' />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
               
        )};
}

export default MailsList;