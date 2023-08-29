import ForgeUI, { SectionMessage, Tag, TagGroup, Text, Tooltip } from '@forge/ui';


const Labels = props => {
    const { labels } = props;

    return (
        <SectionMessage title="Labels" appearance="info">
            {labels.length > 0
                ?
                    <TagGroup>
                        {labels.map(label => <Tag text={label} />)}
                    </TagGroup>
                : 
                    <Tooltip text="Add a label using the field in the right sidebar">
                        <Text>No labels have been addedyet.</Text>
                    </Tooltip>
            }
        </SectionMessage>
    )
};

export default Labels;