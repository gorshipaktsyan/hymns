import React from 'react';
import {StyleSheet} from 'react-native';
import HTMLView from 'react-native-htmlview';

function renderNode(node, index, siblings, parent, defaultRenderer) {
    if (node.name == 'mytag') {
        const specialSyle = node.attribs.style
        return (
            <Text key={index} style={specialSyle}>
                {defaultRenderer(node.children, parent)}
            </Text>
        )
    }
}

const htmlContent = `
  <div>
    <mytag>
      <div>some content processed normally by the engine</div>
    </mytag>
  </div>
`;

class App extends React.Component {
    render() {
        return (
            <HTMLView value={htmlContent} renderNode={renderNode} />
        );
    }
}
