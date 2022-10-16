import React , {useState} from 'react';
import {
    Text,
    View,
    SafeAreaView
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Card, { CardItem } from '../Card';

const Slider = ({cards, onIndexChange, layout='default'} : {cards : Array<CardItem>, onIndexChange : (index: number) =>  void, layout: string}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Carousel
                layoutCardOffset={8}
                layout={layout}
                //   layout={'tinder'} 
                //   layout={'stack'} 
                // ref={ref => this.carousel = ref}
                data={cards}
                sliderWidth={420}
                itemWidth={345}
                renderItem={({item, index}) => <Card card={item} index={index} />}
                onSnapToItem={index => {setActiveIndex(index); onIndexChange(index)}} />
        </View>
    );
}

export default Slider