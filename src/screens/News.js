import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image, Linking, Pressable } from 'react-native';

const News = ({ route, navigation }) => {
    const { article } = route.params
    const dt = new Date(Date.parse(article.publishedAt));
    function btnClickHandler(){
        Linking.openURL(article.url);
    }
    return (
        <ScrollView >
            <View style={styles.body}>
                <Text style={styles.heading}>{article.title ? article.title : ''}</Text>
                <Text style={styles.source}>{article.source?`Source - ${article.source.name}`: ''}</Text>
                <Text style={styles.source}>{article.publishedAt?`Publlished At - ${dt}`: ''}</Text>
                <Text>{article.author? `Authored by: ${article.author}`: ''}</Text>
                {article.urlToImage && <Image source={article.urlToImage ? {uri: `${article.urlToImage}`} : 'https://image.shutterstock.com/image-vector/no-image-vector-symbol-missing-260nw-1310632172.jpg'} style={styles.img} />}
                <Text style={styles.subheader}>Description</Text>
                <Text style={styles.text}>{article.description}</Text>
                <Text style={styles.subheader}>Content</Text>
                <Text style={styles.text}>{article.content}</Text>
                <Pressable android_ripple={{color: '#001E6C'}} onPress={()=>btnClickHandler()} style={styles.button}><Text style={styles.btntext}>Click to Read more</Text></Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 30,
        margin: 10,
        color:'#000'
    },
    img: {
        margin: 20,
        width: 325,
        height: 200,
        resizeMode: 'stretch',
    },
    text: {
        fontSize: 20,
        margin: 20,
    },
    source:{
        fontStyle: 'italic',
    },
    subheader:{
        fontSize: 20,
        color: '#000',
    },
    button:{
        backgroundColor: '#30AADD',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        
    },
    btntext:{
        color: '#ffffff',
        fontSize: 20,
    }
})

export default News