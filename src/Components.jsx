import ForgeUI, {
    Button,
    Cell,
    Head,
    Row,
    SectionMessage,
    Table,
    Text,
    Tooltip
} from '@forge/ui';

import { deleteComponent } from './utils/requests';


const Components = props => {
    const { components } = props;


    return (
        <SectionMessage title="Components" appearance="info">
            {components.length > 0
                ?
                    <Table>
                        <Head>
                            <Cell>
                                <Text>Component Name</Text>
                            </Cell>
                            <Cell>
                                <Text>Component Description</Text>
                            </Cell>
                            <Cell>
                                <Text>Delete Component</Text>
                            </Cell>
                        </Head>
                        {components.map(component => (
                            <Row>
                                <Cell>
                                    <Text>{component.name}</Text>
                                </Cell>
                                <Cell>
                                    <Text>{component.description}</Text>
                                </Cell>
                                <Cell>
                                    <Button
                                        text={`Delete ${component.name}`}
                                        appearance="danger"
                                        onClick={async () => await deleteComponent(component.id)}
                                    />
                                </Cell>
                            </Row>
                        ))}
                    </Table>
                : 
                    <Tooltip text="Add a Component using the Components tab in the left sidebar">
                        <Text>No Components have been added to this project yet.</Text>
                    </Tooltip>
            }
        </SectionMessage>
    );
};

export default Components;