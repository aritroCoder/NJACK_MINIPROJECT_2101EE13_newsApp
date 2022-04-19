import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
import CardComponent from '../utils/Cards';

const API_KEY = 'f25770949cca44a19bcb4c08ce3bdf19';

const Entertainment = ({ navigation }) => {
    const [news, setNews] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=${API_KEY}`);
            if (response.status === 200) {
                const json = await response.json();
                // console.log("Total results: "+json.totalResults);
                setNews(json.articles);
                // console.log(json.articles[0].title);
            } else console.log("API error encountered.");
        }
        fetchData();
    }, [])

    const onRefresh = async () => {
        setRefreshing(true);
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=${API_KEY}`);
        if (response.status === 200) {
            const json = await response.json();
            // console.log("Total results: "+json.totalResults);
            setNews(json.articles);
            // console.log(json.articles[0].title);
        } else console.log("API error encountered.");
        setRefreshing(false);
    }

    return (
        <ScrollView style={styles.body} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={()=>onRefresh()}/>} >
            {/* <Text style={styles.title}>Home</Text> */}
            {news.length > 0 && news.map((art, index) => (
                <CardComponent article={art} key={index} title={art.title ? art.title : ''} imgURL={art.urlToImage ? art.urlToImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC4CAMAAADzLiguAAAANlBMVEXp7vG6vsHs8fS2ur3c4eTU2dzm6u3P1Ne4vL/u8/a4vL67v8G0ubzDx8rY3eDEyMvh5unKz9Izr04MAAADb0lEQVR4nO2c63KrIBRGFY1CY4x5/5c93nKiICZGGOvuWj86adowYc0HWxgxSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC3oiJwdJ/2oJr6Epy6Sc4qxeTXKtNPfoYfP9NXDj//f0xfv97oX2X6cU4l5pGl6TWNgdbF0b37AnPXUWwMVEd37wvqLKKQNnzm6A5uxcRMSEuWH93DrTRV/8XbaVBnQdFj9u4nm13Vpc+ILk3wy5FCn3LYqHL43hG+9ti0PqmRCNGO2HRMVJlGNqIx8mpakpEQyzRBRlSSd+u0vT0RY8Tkt6rq1mnXcl9fpBjp130DOt2Vk8HI9exG1G16VV81u5qWkBF7Ibxn6SrDSF5ZC7UdqxIRRoyzcZR9P25EGCnsiLRLwK87JMGIqt3NkjdL15VdQxFGSkfIm+v7Irt7jUmovm0f3B3o1Q7pVHuViMjIZeOo6aYdffP8hwQjSePuQq+U33Ee9ikRYcQ4tSar/Z996vMoEWHkue31wTSiJpV6WYkII4myjFS5rz/FdIAtKpFhxJpJqod3Xp3POEtKJFTf7vdGv2KSeYU4F7cLSoRkJFHJvRqcZDr3CnFrkntdIsVIW3CK8tam/ZEbb1+ckrSUEjlG2jeNUsbvw10PjimZf0KSkfVPLAyZxYHzV4woT0LcgSOk1rylWLu7YpaSv5KR9ftvpin5G0ZWhoyjRKIRU1tvF9XbO5JeSgQaMXU1nyrfJmSmRJ6RVkia3iZ/+CAhaVdcRiXijPRCpoPAex3iSYm06qvq+Q7ZZ0NmVDIxIiYjTyGdkv5vG4SINGIm9/32Kfl4yAg1YuppIlolWxIi0Yip7R2ybTdGizNiC9mMFlZr1O6zA8Iysjsh0oy0ZXf36SNRRsxlU1WRb8RcQpw/EmSkuw4JcGJPkJE6wJBJJVXfxXuMdho5d0YwkmDEBSM2GLGJboRaYxs5d0YSjNgZeVRBjoNXYowkTR6GsWkBRgI3jRG7aYzYTWPEbvqkRqI97sCc1MiwaaYfSRGa/JzPH3k+oyYNciEyZ2j4dE8Ac49vhmXHYdCjyOM+68p3QusXY8owm6uL6LPNqz0RlWTXozv3Haq5R5hXW66XMyakxwRb400p/IcNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4FD+AZS0NBe99dfKAAAAAElFTkSuQmCC'} description={art.description ? art.description : ''} navigator={navigation} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FAF5E4',
    },
    title: {
        // backgroundColor: '#FF6363',
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        marginBottom: 0,
        paddingBottom: 0,
        color: '#000'
    }
})

export default Entertainment;