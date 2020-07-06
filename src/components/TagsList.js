import React from 'react';
import emails from '../emails.json';
import {Link} from 'react-router-dom';
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


// Component to render Number of tasks of each category. 

class TagsList extends React.Component { 
    // local Variables to start the filter in the JSON
   resultsofTag
   numberOfTravel = 3
   numberOfWork = 3

//    Use of component lifecycle to pre define the variables that will be necessary
    componentWillMount(){
        let that = this
// Function that structure the data of the JSON, with traversing the file and extract the tags of each object         
  function makeArrayOfTags(emails) {
        let tags = []
        let filteredTags
        let numberOfWork=0
        let numberOfTravel=0
            emails.map( el => {
                tags.push(el.tags)
                return tags
            })
             tags = tags.flat()
        // for loop to find the matches and save them in counters to be rendered 
             for (let i = 0 ; i<tags.length; i++){
                 if (tags[i]=== "work"){
                     numberOfWork += 1
                 }else if(tags[i] === "travel"){
                     numberOfTravel += 1
                 } 
             }
             that.numberOfTravel = numberOfTravel
             that.numberOfWork = numberOfWork

           filteredTags= new Set(tags)
            filteredTags = Array.from(filteredTags)
            that.resultsofTag = filteredTags
            return that.resultsofTag 
        };

        makeArrayOfTags(emails)
   }
    render(){
        // Table of the tags with the results given by the function makeArrayOfTags
        return(
            <Table >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Tags</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            { 
                this.resultsofTag.map(el => {                  
                    if(el === "work"){
                        return (
                            <Table.Row>
                                <Link className="text-reset text-decoration-none">
                                <Table.Cell>
                                    {el} ({this.numberOfWork})
                                </Table.Cell>
                                </Link>
                            </Table.Row>
                        )}else{
                            return (
                                <Table.Row>
                                    <Link className="text-reset text-decoration-none">
                                    <Table.Cell>
                                        {el}  ({this.numberOfTravel})
                                    </Table.Cell>
                                    </Link>
                                </Table.Row>
                            )
                        }
                    })
                    }
                

            </Table.Body>
             </Table>

        )};
}

export default TagsList