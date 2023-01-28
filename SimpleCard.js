import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, Image} from 'react-native';

const Title= ({title}) =>{
    return(
        <View style={{ backgroundColor: '#FFC0CB', paddingBottom: 20}}>
            <Text style={{fontSize:16, fontWeight:"bold"}}>{title}</Text>
        </View>
    )
};

const Description = ({description}) =>{
    return(
        <View>
            <Text style={{fontSize:10}}>{description}</Text>
        </View>
    )
};

const SimpleCard = ({item}) =>{
    return(
        // <View style={{justifyContent:'space-around', borderWidth: 2, borderRadius: 5, flexDirection: 'row', padding: 20}}>
        //     {/* <View>
        //         <Image style={{width: 100, height:150}} source={{uri: 'https://i.pinimg.com/originals/ce/15/58/ce15584f4a9aaf701630a8902c6302c2.png'}}/>
        //     </View> */}
        //     <View style={{flexDirection:'column', flex: 'right'}}>
        //         <Title title={item.title}/>
        //         <Description description={item.description}/>
        //     </View>
        // </View>
        <View style={{flex: 1, margin: 30}}>
                 <View>
                 <View style={{flexDirection:'row',borderRadius:10, justifyContent:'space-around',borderWidth:1,padding:10, alignItems:'center',backgroundColor:'#FFC0CB'}}>
                        <View>
                            <Image source={{uri: item.imageUrl}} style={{borderRadius:5, width:100,height:100}} />
                        </View>  
                <View style={{marginLeft:10, width:'60%'}}>
                <Title title={item.title}/>
                    <Description description={item.description}/>
                </View>
                </View>
                </View>
                </View>
    )
};

export default SimpleCard;