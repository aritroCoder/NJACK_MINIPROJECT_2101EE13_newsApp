import React from "react";
import { StyleSheet } from 'react-native';
import { Card, Button, Title, Paragraph } from 'react-native-paper';

const CreateCard = (props) => {

    // useEffect(() => {
    //     console.log(props.title);
    // }, [])
    function showNews(){
        props.navigator.navigate("News", {
            article: props.article
        })
    }

    return (

        <Card style={Styles.container}>
            <Card.Content>
                <Title>{props.title}</Title>
            </Card.Content>
            <Card.Cover source={{
                uri: `${props.imgURL}`
            }} />
            <Card.Content>
                <Paragraph>{props.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button onPress={()=>showNews()}>Read More</Button>
            </Card.Actions>
        </Card>

    )
}
export default CreateCard;

const Styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        margin: 30
    }
})
